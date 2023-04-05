import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return <>

    <NextNProgress color='#ff0000' />
    <Navbar />
    <div className="container mx-auto font-sans">
      <main className='mt-32 md:pb-14 lg:pb-32'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  </>
}
