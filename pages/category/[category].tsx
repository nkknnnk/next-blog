import Tabs from '@/components/Tabs'
import { fetchArticles, fetchCategories } from '@/http'
import { IArticle, ICategory, ICollectionResponse, IPagination, IQueryOptions } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import qs from 'qs'
import ArticleList from '@/components/ArticleList'
import Pagination from '@/components/Pagination'
import { useRouter } from 'next/router'
import { debounce } from '@/utils'
import Strapi from 'strapi-sdk-javascript';

interface IPropType {
  categories: {
    items: ICategory[];
    pagination: IPagination;
  }
  articles: {
    items: IArticle[];
    pagination: IPagination;
  }
  slug: string
}

const Category = ({ categories, articles, slug }: IPropType) => {
  const { page, pageCount } = articles.pagination;
  const router = useRouter()
  const { category: categorySlug } = router.query;
  const formattedCategory = () => {
    return slug
  }
  const handleSearch = (query: string) => {
    router.push(`/category/${categorySlug}/?search=${query}`)
  }
  return (
    <>
      <Head>
        <title>Nitish&apos;s blog {formattedCategory()}</title>
      </Head>
      <Tabs items={categories.items} handleOnSearch={debounce(handleSearch, 500)} />
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const options: Partial<IQueryOptions> = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters: {
      articles: {
        Slug: query.category,
      },
    },
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 1,
    }
  }
  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search
      }
    }
  }

  const queryString = qs.stringify(options)
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString)

  //Category
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories()

  return {
    props: {
      categories: {
        items: categories.data,
        pagination: categories.meta.pagination,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination
      },
      slug: query.category
    }
  }
}

export default Category