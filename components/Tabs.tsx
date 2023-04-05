import { ICategory } from '@/types'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
interface IPropType {
  items: ICategory[];
  handleOnSearch: (query: string) => void;
}

const Tabs = ({ items, handleOnSearch  }: IPropType) => {
  const router = useRouter();

  const isActiveLink = (items: ICategory) => {
    return items.attributes.Slug === router.query.category
  }

  // const handleOnSearch = (query: string) => {
  //   console.log(query)
  // }
  return (
    <div className='my-8 flex items-center justify-between border-b-2 border-gray-200 md-divice'>
      <ul className='flex items-center'>
        <li className={`mr-6 pb-6 border-b-4 rounded-sm ${router.pathname === '/' ? 'border-primary text-primary' : 'border-white text-gray-400'}`}><Link href={"/"}>Recent</Link></li>
        {items.map((category => {
          return <li className={`mr-6 pb-6 border-b-4 rounded-sm isMidiumDivice ${isActiveLink(category) ? 'border-primary text-primary' : 'border-white text-gray-400'}`} key={category.id}><Link href={`/category/${category.attributes.Slug}`}> {category.attributes.Title}</Link></li>
        }))}
      </ul>

      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
          <input onChange={(e) => handleOnSearch(e.target.value)} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        </div>
        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  )
}

export default Tabs