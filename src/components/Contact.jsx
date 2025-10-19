
import React from "react";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="flex items-center min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-2xl shadow-lg">
          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h1>
            <p className="text-gray-500">
              Have a question? Get in touch using the form below.
            </p>
          </div>

          {/* Inquiry Numbers */}
          <div className="text-center mb-6">
            <p className="text-gray-600 mb-2">
              For direct inquiries, call or message us:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-blue-600 font-medium">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 82003 44559</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 82003 44559</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            {/* Hidden Web3Forms Inputs */}
            <input
              type="hidden"
              name="access_key"
              value="1c5e764e-aa51-4ce3-bd57-277a1eed9aac" // 🔑 Replace with your Web3Forms key
            />
            <input
              type="hidden"
              name="subject"
              value="New Inquiry from Universal Consultants"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />
            <input type="checkbox" name="botcheck" className="hidden" />

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+91 82003 44559"
                required
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-gray-600"
              >
                Your Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message here..."
                required
                className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Send Message
            </button>

            <p className="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
