'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeInHero, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          <div className="flex items-center justify-center font-bold text-white">
            <div className=" text-center space-y-12">
              <div className="text-center font-bold">
                <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                  <span className="animate-word col-span-full row-span-full">Reimagining</span>
                  <span className="animate-word-delay-1 col-span-full row-span-full">Redefining</span>
                  <span className="animate-word-delay-2 col-span-full row-span-full">Remodeling</span>
                  <span className="animate-word-delay-3 col-span-full row-span-full">Reshaping</span>
                  <span className="animate-word-delay-4 col-span-full row-span-full">Reinventing</span>
                </div>
              </div>
            </div>
          </div>
        </motion.h1>
        <motion.div
          variants={textVariant(1.5)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Won</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>er</h1>
        </motion.div>
      </div>

      <motion.div
        // variants={slideIn('right', 'tween', 0.2, 1)}
        variants={fadeInHero('down', 'tween', 0.2, 1)}
        className="relative w-full"
        // className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        {/* <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" /> */}

        {/* <img */}
        {/*  src="/cover.jpg" */}
        {/*  alt="hero_cover" */}
        {/*  className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative" */}
        {/* /> */}

        <img
          src="/cover_edited.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover z-10 relative"
        />

        {/* <a href="#explore"> */}
        {/*  <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10"> */}
        {/*    <img */}
        {/*      src="/stamp.png" */}
        {/*      alt="stamp" */}
        {/*      className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" */}
        {/*    /> */}
        {/*  </div> */}
        {/* </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
