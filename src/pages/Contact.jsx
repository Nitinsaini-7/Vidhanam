import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../components/Title";

const Contact = () => {
  const contactMethods = [
    {
      icon: faEnvelope,
      contact: "Support@example.com",
    },
    {
      icon: faPhone,
      contact: "+1 (555) 000-000",
    },
    {
      icon: faLocationDot,
      contact: "Mountain View, California, United State.",
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center">

      <Title text1={"Contact Us"}/>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 mt-10">
        <div className="max-w-lg mx-auto gap-20 justify-center lg:flex lg:max-w-none">
          <div className="flex items-center justify-center">

          <div className="max-w-lg space-y-3">
            {/* <h3 className="text-indigo-600 font-semibold">Contact</h3> */}
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none text-indigo-600">
                      <FontAwesomeIcon icon={item.icon}/>
                    </div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 hover:shadow-xl duration-200 shadow-[rgba(17,_17,_26,_0.1)_0px_4px_12px] p-5 rounded-md">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  className="w-full px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  placeholder="Message"
                  className="w-full h-32 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
