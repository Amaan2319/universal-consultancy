import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About <span className="text-blue-600">Universal Consultants</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At <span className="font-semibold text-gray-800">Universal Consultants</span>,
            we specialize in simplifying government document services for
            individuals and businesses. From PAN and Passport applications to
            License renewals, Gazette notifications, and Aadhar updates — we
            handle it all with accuracy and transparency.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            With{" "}
            <span className="font-semibold text-blue-600">
              10+ years of experience
            </span>{" "}
            in the documentation field, we’ve earned the trust of thousands of
            clients by providing quick, reliable, and affordable services. Our
            team ensures that every process — from form filling to submission —
            is handled professionally so you can save time and avoid hassle.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            Visit our office at{" "}
            <span className="font-semibold">
              1st Foor, Green Plaza, Juhapura, Ahmedabad 
            </span>
             {" "}to consult with our experts or apply for your document needs in
            person.
          </p>

          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Contact Us
          </a>
        </div>

        {/* Map Section */}
        <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md border">
          <iframe
            title="Universal Consultants Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3906338576224!2d72.53044147445622!3d22.997013379191337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85f81a8a5c0b%3A0xfab97951ef7a02c9!2sGreen%20Plaza%2C%20Juhapura%2C%20Ahmedabad%2C%20Gujarat%20380055!5e0!3m2!1sen!2sin!4v1739918708450!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
