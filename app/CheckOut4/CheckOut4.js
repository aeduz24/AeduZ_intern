import React from 'react'
import Link from 'next/link'

const CheckOut4 = () => {
  return (
    <div className='pt-28'>
      <div className='flex justify-around'>
        <div>
          <div className='size-12 rounded-full bg-blue-900'>  </div>
            <div className='pt-2'>
              <h4>Step 1</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-900'> </div>
            <div className='pt-2'>
              <h4>Step 2</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-900'> </div>
            <div className='pt-2'>
              <h4>Step 3</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-500'> </div>
            <div className='pt-2'>
              <h4 className='font-semibold text-xl'>Step 4</h4>
            </div>
        </div>
      </div>

        {/* TOP SECTION ENDED */}
        
        <h1 className='py-8 text-center md:text-3xl text-2xl font-semibold'>
          Complete all 4 steps to Book your 1:1 Call
        </h1>

        {/* FORM SECTION */}

        <div className='md:h-[60vh] w-[80vw] mx-auto border-[2px] rounded-2xl'>

            <div>
                <h1 className='py-6 text-center md:text-4xl text-2xl font-semibold'>Step 4: Schedule Your Call</h1>
            </div>
              <div className='w-[60vw] mx-auto'>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Booking Date:</h3>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Booking Date:" />
                    <label
                      for="exampleFormControlInput3"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                      >Booking Date:
                    </label>
                </div>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Booking Time:</h3>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Booking Time:" />
                    <label
                      for="exampleFormControlInput3"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                      >Booking Time:
                    </label>
                </div>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Alternate Booking Time:</h3>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Alternate Booking Time:" />
                    <label
                      for="exampleFormControlInput3"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                      >Alternate Booking Time:
                    </label>
                </div>
              </div>

              <div className='flex justify-between'>
                <div className="md:py-2 py-6 flex justify-start px-2 md:px-40">
                      <Link
                        href="CheckOut3"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                         {"<-"} Previous
                      </Link>
                </div>
                {/* <div className="md:py-2 py-6 flex justify-end px-2 md:px-40">
                      <Link
                        href="CheckOut3"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Next {"->"}
                      </Link>
                </div> */}
              </div>

        </div>
        <div className='invisible '>
            hi
        </div>

    </div>
  )
}

export default CheckOut4