import React from 'react'

function Login() {
  return (
    <div className="mx-auto min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 flex flex-col items-center p-4 sm:p-8">
      <div className="bg-emerald-50 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact us Today</h2>
        <p className="text-center text-gray-500 mt-2">send message via below form...</p>

        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name (required)</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email (required)</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                required 
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
            />
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
            <select 
              id="department" 
              name="department" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option>Business Department</option>
              <option>Technical Support</option>
              <option>Customer Service</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login