import React from 'react';

const Contact = () => {
  const handlesunbmit = () => {
    alert("successfully send your message")
  }
  return (
    <div className="max-w-lg mx-auto p-4  border border-gray-300 rounded-lg shadow-md bg-gray-300 mt-[-28px]">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <form className="space-y-4" onSubmit={handlesunbmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"

            className="form-input w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"

            className="form-input w-full p-3 border border-gray-300 rounded-lg"
            placeholder="enter valid email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"

            rows="4"
            className="form-textarea w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"

        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default Contact;
