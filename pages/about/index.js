import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Footer, Navbar, SingularSkill, TitleText, TypingText } from '../../components';
// import { certifications, skills } from '../../constants';
// import Certification from '../../components/Certification';
import Movies from '../../components/Movies';
import Games from '../../components/Games';

const page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />

    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Films" />
          <TitleText title={<>Some of the best</>} />

        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <Movies />

        </motion.div>
      </motion.div>
    </section>

    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Video Games" />
          <TitleText title={<>A couple of my favorites</>} />

        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <Games />

        </motion.div>
      </motion.div>
    </section>

    {/* <section className={`${styles.paddings} relative z-10`}> */}
    {/*  <motion.div */}
    {/*    variants={staggerContainer} */}
    {/*    initial="hidden" */}
    {/*    whileInView="show" */}
    {/*    viewport={{ once: false, amount: 0.25 }} */}
    {/*    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`} */}
    {/*  > */}
    {/*    <motion.div */}
    {/*      variants={fadeIn('right', 'tween', 0.2, 1)} */}
    {/*      className="flex-[0.95] flex justify-center flex-col" */}
    {/*    > */}
    {/*      <TypingText title="| Skills" /> */}
    {/*      <TitleText title={<>Skills I've Acquired</>} /> */}
    {/*      <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]"> */}
    {/*        {skills.map((feature) => ( */}
    {/*          <SingularSkill key={feature.title} {...feature} /> */}
    {/*        ))} */}
    {/*      </div> */}
    {/*    </motion.div> */}
    {/*  </motion.div> */}

    {/* </section> */}

    <div className="gradient-04 z-0" />
    <div className="gradient-02 z-0" />
    <Footer />
  </div>
);

export default page;
