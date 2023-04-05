import { fetchArticleBySlug } from '@/http'
import { IArticle, ICollectionResponse } from '@/types'
import { AxiosResponse } from 'axios'
import React from 'react'
import qs from 'qs'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { formatDate, serializedMarkdown } from '@/utils'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

interface IPropeType {
    article: IArticle
    notFound: boolean
}
const Slug = ({ article, notFound = false }: IPropeType) => {
    return (
        <>
            <Head>
                <title>{article.attributes.Title}</title>
            </Head>
            <div className="my-12 lg:grid lg:grid-cols-3 gap-12 md-divice">
                <div className="col-span-2">
                    <h1 className="text-2xl font-bold py-2">{article.attributes.Title}</h1>
                    <div className="flex items-center my-4">
                        <div className='rounded-lg overflow-hidden flex items-center justify-center mr-2'>

                            <Image src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} height={40} width={40} alt='' />
                        </div>
                        <span className="text-sm font-bold text-gray-600">
                            {article.attributes.author.data.attributes.firstname} {' '} {article.attributes.author.data.attributes.lastname} on &nbsp;
                            <span className="text-gray-400">{formatDate(article.attributes.createdAt)}</span>
                        </span>
                    </div>
                    <div className="text-lg text-gray-600 leading-8 single-article">
                        <Image src={`http://localhost:1337${article.attributes.Image.data.attributes.url}`} alt={article.attributes.Title} height={100} width={800} className="x-full my-12 mb-6" />
                        <MDXRemote {...article.attributes.body as MDXRemoteSerializeResult} />

                    </div>
                </div>
                <div className="container my-24 px-2 mx-auto col-span-1 ">
                    <section className="mb-32 mt-14 text-gray-800 background-radial-gradient rounded-md">
                        <div className="px-2 py-2 md:px-4 text-center lg:text-left">
                            <div className="container mx-auto">
                                <div className="flex flex-col items-center">
                                    <div className="mt-12 lg:mt-0">
                                        <h1
                                            className="text-2xl md:text-2xl xl:text-2xl font-bold tracking-tight mb-12"
                                            style={{ color: "hsl(218, 81%, 95%)" }}
                                        >
                                            Do not miss <br /><span style={{ color: "hsl(218, 81%, 75%)" }}>any updates</span>
                                        </h1>
                                        <p className="mb-4 opacity-70 lead" style={{ color: "hsl(218, 81%, 85%)" }}>
                                            We will write rarely and only high-quality content.
                                        </p>
                                    </div>
                                    <div className="mb-12 lg:mb-0">
                                        <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                                            <h2 className="text-3xl font-bold mb-12">Subscribe to the newsletter</h2>
                                            <form>
                                                <div className="form-group mb-6">
                                                    <input
                                                        type="text"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleInput90"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                <div className="form-group mb-6">
                                                    <input
                                                        type="email"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleInput91"
                                                        placeholder="Email address"
                                                    />
                                                </div>
                                                
                                                <button
                                                    type="submit"
                                                    className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    Subscribe
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const queryString = qs.stringify({
        populate: ['Image', 'author.avatar'],
        filters: {
            Slug: {
                $eq: query.slug
            }
        }
    })
    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticleBySlug(queryString)

    if (articles.data.length === 0) {
        return {
            notFound: true,
        }
    } else {
        return {
            props: {
                article: await serializedMarkdown(articles.data[0])
            }
        }
    }
}
export default Slug