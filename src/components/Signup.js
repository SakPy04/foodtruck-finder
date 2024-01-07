import React, { useState } from 'react';
import cover from '../assets/pic.jpg';



const Signup = () => {


    const [first, setFirst] = useState('')
    const [last, setLast] = useState(' ')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    async function submit(e) {
        e.preventDefault()
        console.log(first, last, email, password)
        fetch("http://localhost:5000/signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          first,
          last,
          email,
          password
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      })
    }
  return (
    <div name='Login' className='w-full min-h-screen flex items-start'>
      <div className='w-full lg:w-1/2 h-full flex flex-col relative'>
        <img src={cover} className='w-full h-screen object-cover opacity-50' alt='foodtruck'></img>
        <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 flex flex-col text-center'>
          <h1 className='text-4xl text-gray-700 font-extrabold'>Register!</h1>
        </div>
      </div>

      <div className='w-1/2 min-h-screen bg-gray-200 flex flex-col p-20 justify-center'>

        <div className='w-full flex flex-col mb-4'>
          <h3 className='text-3xl font-semibold mb-2'>Sign up</h3>
          <p className='text-sm mb-2 py-4'>Please enter your details</p>
          <div className='flex flex-row w-full mb-4'>
          <input
              type='name'
              onChange={(e) => { setFirst(e.target.value) }}
              placeholder='First Name'
              className='w-1/2 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            />
            <input
              type='name'
              onChange={(e) => { setLast(e.target.value) }}
              placeholder='Last Name'
              className='w-1/2 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            />
          </div>
          <div className='w-full flex flex-col mb-4'>
            <input
              type='email'
              onChange={(e) => { setEmail(e.target.value) }}
              placeholder='Email'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            />
            <input
              type='password'
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder='Password'
              className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            />

            <div className='w-full flex flex-col my-4'>
              <button onClick = {submit} className='w-full text-white my-2 font-semibold bg-black rounded-md p-4 text-center flex items-center justify-center hover:bg-gray-700'>
                Sign up
              </button>
            </div>
            
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Signup;
