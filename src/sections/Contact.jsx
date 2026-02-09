import React from "react";
import SectionTitle from "../components/SectionTitle";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp, BsGithub } from "react-icons/bs";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeUp } from "../components/motionjs/motion";

const Contact = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <SectionTitle heading="Let’s Collaborate"></SectionTitle>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto"></p>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I’m currently open to internship and junior developer opportunities.
            Feel free to reach out to discuss projects, collaboration, or job
            opportunities.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="bg-black/30 border border-white/10 rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              Contact Information
            </h3>

            <p className="text-gray-300 mb-6">
              You can reach me directly through the following platforms.
            </p>

            <ul className="space-y-4 text-gray-300">
              {/* Email */}
              <li className="flex items-center gap-3">
                <MdEmail className="text-cyan-400 text-xl" />
                <span>mustakimbillahh2001@gmail.com</span>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-3">
                <BsWhatsapp className="text-green-400 text-xl" />
                <a
                  href="https://wa.me/8801747542460"
                  target="_blank"
                  className="hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </li>

              {/* GitHub */}
              <li className="flex items-center gap-3">
                <BsGithub className="text-gray-400 text-xl" />
                <a
                  href="https://github.com/mustakim6"
                  target="_blank"
                  className="hover:underline"
                >
                  github.com/mustakim6
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-black/30 border border-white/10 rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
