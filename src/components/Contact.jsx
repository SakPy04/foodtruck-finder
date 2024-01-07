import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full py-8 h-screen bg-gray-100 text-gray-700 bg-opacity-70"
    >
      <div className="flex flex-col py-8 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/db500bf4-e1b1-4cf2-983e-bb096857262d"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent font-bold border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent font-bold border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 font-bold rounded-md text-black focus:outline-none"
            ></textarea>

            <button className="text-white bg-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Contact me    
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;