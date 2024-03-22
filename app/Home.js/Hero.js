"use client"
import Link from 'next/link'
import {motion} from 'framer-motion'

function Hero() {

  return (
    <div className="bg-white h-screen w-full">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
          <motion.div animate={{y:0,opacity:1}} initial={{y:-150, opacity:0}} transition={{duration:1.5}} className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#37517e] sm:text-6xl">
                <span className='text-2xl md:text-3xl'>Through</span> AeduZ
            </h1>
            <p className="mt-6 mb-12 text-2xl md:text-4xl  leading-8 text-gray-600">
                Guiding Dreams, Unlocking Potential
            </p>
              <Link href="CheckOut" className="rounded-md bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Book 1:1 calls
              </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero