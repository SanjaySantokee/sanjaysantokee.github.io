'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Maxim" textStyles="text-center" />
      <TitleText
        title={(
          <>Design. Code. Maintain.
          </>
                )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/bigdata.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-1/4 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="cloud-protection.gif" alt="people" className="w-full h-full icons-data shadow-filter-3" />
        </div>

        <div className="absolute top-1/4 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="flow-chart.gif" alt="people" className="w-full h-full icons-data shadow-filter-1" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="code.gif" alt="people" className="w-full h-full icons-data shadow-filter-2" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
