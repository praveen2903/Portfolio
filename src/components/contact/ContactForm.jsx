import React, { useRef, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import emailjs from "@emailjs/browser";
import {toast} from 'react-toastify';
import {motion} from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const ContactCard = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const[message,setMessage]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();  
    emailjs.sendForm('service_00ghww6', 'template_x41m5ck', form.current, 'TP4OxTSn6LGe4HIEB')
    .then((result) => {
      console.log(result.text);
    },(error) => {
      console.log(error.text);
    });
    setName("");
    setMail("");
    setPhone("");
    setMessage("");
    toast.success("email sent successfully.")
  };
  return (
    <section className="flex-1 rounded-lg" id="#contact">   
      <div className="w-full md:w-3/4 my-8 mx-auto rounded-md">
        <form
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
          onSubmit={handleSubmit}
          ref={form}
        >
			<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Contact Form
			</p>
			<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-1"
			>
				Name
			</label>
          <motion.div
            initial={{y:100}}
            whileInView={{y:0}}
            transition={{duration:0.7}}>
          <div className="text-black">
            <div className="flex gap-2 items-center p-4 my-2 border-2 border-black rounded-md">
              <CgProfile size={20} color="black" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
				className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
				/>
            </div>
			<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-1"
			>
				Email
			</label>
            <div className="flex gap-2 items-center p-4 my-2 border-2 border-black rounded-md">
              <FiMail size={20} color="black" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                value={mail}
                onChange={(e) => setMail(e.target.value)}
				className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
				/>
            </div>
			<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-1"
			>
				phone number
			</label>
            <div className="flex gap-2 items-center p-4 my-2 border-2 border-black rounded-md">
              <HiOutlinePhone size={20} color="black" />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
				className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
				/>
            </div>
          </div>
          </motion.div>
		  <label
			className="block text-lg text-primary-dark dark:text-primary-light mb-2"
		>
			Message
		</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
			className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
			></textarea>
          <div>
            <button
              type="submit"
			  className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"            
			>
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactCard;