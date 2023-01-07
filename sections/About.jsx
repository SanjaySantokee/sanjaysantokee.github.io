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
        I'm a
        <span className="font-extrabold text-white"> creative developer </span>
        with a few years of experience in building products and appealing web experiences. I've collaborated with individuals and teams to build experiences for Governments and large enterprises. <br /><br />
        {' '}  Each project is an opportunity to learn new concepts across multiple
        <span className="font-extrabold text-white"> domains </span>{' '}
        including arts, maths and physics.{' '} <br /><br /> I specialize in
        <span className="font-extrabold text-white"> backend development </span> and <span className="font-extrabold text-white"> artificial intelligence </span>
        with a strong focus on <span className="font-extrabold text-white"> machine learning</span>.
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
