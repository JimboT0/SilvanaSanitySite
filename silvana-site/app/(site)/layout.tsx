import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Site',
  description: 'Generated by create next + sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  //getting all pages

  const pages = await getPages();


  return (
    <html lang="en">
      <body>

        <header>
          <div>
            <div className="w-[1440px] h-[38px] bg-indigo-800 flex justify-center items-center text-center">
              <div className="w-[161.10px] text-stone-300 text-base font-semibold leading-7">Get In Touch</div>
              <div className="w-[161.10px] text-center text-stone-300 text-base font-semibold leading-7">+27 71 638 3023</div>
              <div className="w-[161.10px] text-right text-stone-300 text-base font-semibold leading-7">email@email.com</div>
            </div>
            <div className="w-[1440px] h-[92px] bg-purple-50 border-b border-indigo-300 flex justify-center items-center text-center">
              <img className="w-[182px] h-[73px] float-left" src="https://via.placeholder.com/182x73" />
              <div className="flex items-center gap-10 p-5 ">

                {pages.map((page) => (

                  <Link
                    href={`/${page.slug}`}
                    key={page._id}
                    className='hover:underline'
                  >

                    {page.title} 

                  </Link>

                ))}

              </div>
            </div>


          </div>


        </header>

        

        <main className='max-w-3xl mx-auto py-10'>{children}</main>

      </body>

    </html>
  )
}