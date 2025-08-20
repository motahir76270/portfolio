import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { use } from "react";

gsap.registerPlugin(useGSAP);

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  
  useGSAP( () => {
     if (!form.current) return;

    gsap.from(form.current , {
     scale:0,
     delay:2,
     yoyo:true,
     x:-500,
     duration:1,
    ease:"power2.out",
     scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        start:"top 50%",
        end:"top 10%",
        scrub:2,
       
     }
    })
  },{ scope:form });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7s8pf3d",  // Replace with your EmailJS Service ID
        "template_v758hn5",  // Replace with your EmailJS Template ID
        form.current,
        "fs26vGbqPjxcVrzo7"  // Replace with your EmailJS Public Key
      )
      toast.success("message Send successfully")
      form.current=""
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[10vw]"
    > 
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div ref={form} className="mt-8 w-full max-w-md bg-white-400 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form  onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
