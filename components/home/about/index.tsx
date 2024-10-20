'use client'
import React from "react";
import Image from "next/image";
import AboutImg from "../../../app/assets/aboutUs.png";
import { motion } from "framer-motion"; 
import { Check } from "lucide-react";

const About = () => {
  return (
      <div className="container py-12  w-full items-center my-10" id='about'>
        <motion.div
         initial={{ opacity: 0, scale:0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.9, delay: 0.25 }}
        className=" bg-black bg-opacity-50 w-full backdrop-blur-lg flex flex-col md:flex-row justify-between items-center rounded-3xl px-14 py-12 border-[1px] border-primary box_shadow">
           
        <div className="flex flex-col gap-3 md:w-[50%] ">
          <p className="text-primary">Empowering Your Business</p>
          <h2 className="heading-2 font-semibold text-white">
            About <span className="text-primary italic">X</span>oftics
          </h2>
          <ul className="space-y-4 mb-8 text-para para-large">
            <li className="flex items-start">
              <Check className="text-primary mr-2" />
              Comprehensive digital solutions to elevate your business.
            </li>
            <li className="flex items-start">
              <Check className="text-primary mr-2" />
              Innovative strategies for website development and design.
            </li>
            <li className="flex items-start">
              <Check className="text-primary mr-2" />
              Expert consultation to maximize growth potential.
            </li>
            <li className="flex items-start">
              <Check className="text-primary mr-2" />
              Customized solutions tailored to your unique needs.
            </li>
          </ul>
          <button className="btn_primary">
            Get Started
          </button>
        </div>
        
        <div className="md:w-[50%]  flex justify-center items-center">
          <Image
            src={AboutImg}
            alt="About Zoftics"
            className="w-full h-auto rounded-lg max-w-[500px]"
            priority={true}
          />
        </div>
        </motion.div>
       
      </div>
  );
};

export default About;
