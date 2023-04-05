import Image from 'next/image'
import React from 'react'

const aboutus = () => {
    return (
        <div>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="lg:w-10/12 w-full">
                    <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">About</p>
                    <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are here to make great design accessible and delightfull for everyone</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
                </div>

                <div className="lg:mt-14 sm:mt-10 mt-12">
                    <Image width={100} height={100} className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Group of people Chilling" />
                    <Image width={100} height={100} className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
                    <Image width={100} height={100} className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
                </div>

                <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                    <div className="w-full xl:w-5/12 lg:w-6/12">
                        <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-4">Hello, my name is Nitish Kumar and I am a highly motivated and adaptable individual with a passion for technology. I discovered my love for coding during my graduation&apos;s 1st part, where I started learning to code and discovered an inherent talent for programming.

                            Recognizing my natural inclination and passion for technology, I conducted extensive research into various areas of interest and found my calling in the field of web development. I began learning web development skills, starting with front-end development and then continued to develop my knowledge by learning back-end technologies, ultimately becoming a proficient full-stack developer with expertise in DevOps.

                        </p>
                        <p className="font-normal text-base leading-6 text-gray-600 mt-6">As my interest in technology continued to grow, I began to explore other areas of interest, including Blockchain technology. I acquired a solid understanding of the underlying technology and principles of Blockchain, including distributed ledgers, consensus algorithms, and smart contracts. I am proficient in various Blockchain platforms, including Ethereum, Hyperledger Fabric, and Corda, and am skilled in developing decentralized applications (dApps) and smart contracts using programming languages such as Solidity and JavaScript.

                            My passion for coding and programming from an early stage, coupled with my extensive knowledge and expertise in Blockchain, make me an invaluable asset to any organization looking to leverage emerging technologies to gain a competitive edge. My strong analytical and problem-solving skills, coupled with my dedication and passion for technology, make me an ideal candidate for any challenging technology project</p>
                    </div>
                    <div className="lg:flex items-center w-full lg:w-1/2 ">
                        <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                        <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                        <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default aboutus