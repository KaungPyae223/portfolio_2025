import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen py-16 px-4 ">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-600 dark:text-yellow-300 mb-6">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Get in touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Feel free to reach out for collaboration or any inquiries.
            </p>
            <div className="space-y-3">
              <div>
                <span className="block font-medium text-gray-700 dark:text-gray-300">
                  Email:
                </span>
                <a
                  href="mailto:kaungpyaeaung8123@gmail.com"
                  className="text-yellow-600 dark:text-yellow-400"
                >
                  kaungpyaeaung8123@gmail.com
                </a>
              </div>
              <div>
                <span className="block font-medium text-gray-700 dark:text-gray-300">
                  Phone:
                </span>
                <span className="text-gray-800 dark:text-gray-100">
                  +959 9831 67263
                </span>
              </div>
              <div>
                <span className="block font-medium text-gray-700 dark:text-gray-300">
                  Location:
                </span>
                <span className="text-gray-800 dark:text-gray-100">
                  No 28 NateBan Street, Kyee Myint Daing, Yangon
                </span>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-gray-100"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
