import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import githubLogo from "../assets/github.png"
import LinkedInLogo from "../assets/LinkedIn_logo.png"
import leetcodeLogo from "../assets/leetcode_logo.png"
import codingninjas from "../assets/codingninjas.png"
import resume_logo from "../assets/resume_logo.png"

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className= {`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex flex-wrap gap-7`}
      >
        <motion.div className="px-10 mr-60" variants={textVariant()}>
          <p className={styles.sectionSubText}>Links</p>
          <h6 className={`${styles.sectionHeadText}`}>Profiles</h6>
          
        </motion.div>
        <motion.div variants={textVariant()}>
          <h6 className={styles.sectionHeadText}>Resume</h6>
          <a href="https://drive.google.com/file/d/1rl335_K92UQaGJEgoLUzxKBkrvRGjkUc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={resume_logo} alt="resume" style={{ width: '70px', marginRight: '10px' }}/>
        </a>
        </motion.div>
      </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      <a href="https://github.com/Somesh-Karpate" target="_blank" rel="noopener noreferrer">
      <img src={githubLogo} alt="GitHub" style={{ width: '30px', marginRight: '10px' }}/>GitHub
        
         
      </a>
      <br />
      <a href="https://www.linkedin.com/in/somesh-karpate-417a5623a/" target="_blank" rel="noopener noreferrer">
      <img src={LinkedInLogo} alt="LinkedIn" style={{ width: '30px', marginRight: '10px' }}/>LinkedIn
      </a>
      <br />
      <a href="https://leetcode.com/u/SoM_k/" target="_blank" rel="noopener noreferrer">
      <img src={leetcodeLogo} alt="leetcode" style={{ width: '30px', marginRight: '10px' }}/>LeetCode
      </a>
      <br />
      <a href="https://www.naukri.com/code360/profile/ab0265dc-fa1c-4de1-a8e9-630a1d1b3c4d" target="_blank" rel="noopener noreferrer">
      <img src={codingninjas} alt="codingninjas" style={{ width: '30px', marginRight: '10px' }}/>Coding Ninjas
      </a>
      

    </div>

      </div>
      
      
  );
};

export default SectionWrapper(Feedbacks, "");
