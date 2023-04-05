import { IArticle } from '@/types'
import React from 'react'
import Blogcard from './Blogcard';
import BlogCardWithImage from './BlogCardWithImage';

interface IPropType {
  articles: IArticle[];
}

const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className='grid lg:grid-cols-2 grid-gap gap-16 mt-16'>
      {
        articles.map((articles, index) => {
          return <div key={index}>
            {
              index === 1 ? <BlogCardWithImage article={articles} /> : <Blogcard article={articles} />
            }
          </div>
        })
      }
    </div>
  )
}

export default ArticleList