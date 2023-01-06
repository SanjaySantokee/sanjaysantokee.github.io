'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Sanjay" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[18px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Forward-thinking</span> Software Engineer
        with a background in working effectively in dynamic environments.
        {' '}
        <span className="font-extrabold text-white">
          Critical thinker
        </span>{' '}
        with strong problem-solving skills and an interest
        in expanding knowledge to adapt to scenarios in the workplace.{' '}
        <span className="font-extrabold text-white"><br /><br />Extroverted</span> team player focused on achieving project objectives
        with speed and accuracy. Fluent in React, Python, and JavaScript.
        Experience in AWS, Adobe Creative Cloud, Figma, Blender, and Unity.
        <br /><br />Let's{' '}
        <span className="font-extrabold text-white">explore</span> some of my work by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
