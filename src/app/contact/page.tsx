import React from 'react'
import First from './First'
import Contact from './contact'
import Ready from './Ready'
import Last from './Last'

const page = () => {
  return (
    <div className='bg-[#411B66]'>
        <First/>
        <div className='bg-[#10041F] py-4'>

        <Contact/>
        <Ready/>
        <Last/>
        </div>
    </div>
  )
}

export default page