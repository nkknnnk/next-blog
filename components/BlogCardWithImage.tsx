import { IArticle } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface IPropType {
    article: IArticle;
  }
const BlogCardWithImage = ({article}:IPropType) => {
    return (
        <div className='mr-5 ml-5 md-image bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center justify-between h-64'>
            <Link href={`/article/${article.attributes.Slug}`}>
                <span className="text-2xl w-2" />
                <span className="text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:ml-6">
                    {article.attributes.Title}
                </span>
                <div className="text-gray-700 isMidiumDivice p-6">{article.attributes.shortDescription}</div>
            </Link>
            <Image className='mr-12 rounded-md' src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} width={140} height={140} alt=''/>
        </div>
    )
}

export default BlogCardWithImage