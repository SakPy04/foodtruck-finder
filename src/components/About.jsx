import React from 'react'
import picture from '../assets/headshot.png'
const About = () => {
  return (    
<div name = "About" class="w-full py-64 h-screen text-center bg-white border border-gray-200 rounded-3xl shadow sm:p-8 bg-gradient-to-t from-slate-700 to-gray-900 dark:border-slate-900">
    <h5 class="mb-2 text-3xl py-8  font-bold text-gray-900 dark:text-white">About the Developer</h5>
   

<div className='flex flex-row justify-center'>
  <div class="max-w-sm bg-white border-8 border-gray-400 rounded-xl shadow dark:bg-gray-800">
    <a href="https://dainty-sfogliatella-e63b50.netlify.app/" target='_blank'>
        <img class="rounded-t-lg justify-between" src={picture} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Saksham Purbey</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">Undergraduate Computer Science student at Georgia Tech</p>
        <a href="https://dainty-sfogliatella-e63b50.netlify.app/" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>

</div>

  )
}

export default About