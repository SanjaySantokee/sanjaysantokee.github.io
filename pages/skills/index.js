import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { Footer, Navbar, SingularSkill, TitleText, TypingText } from '../../components';
import { certifications, skills } from '../../constants';
import Certification from '../../components/Certification';

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
          <TypingText title="| Skills" />
          <TitleText title={<>Skills I've Acquired</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {skills.map((feature) => (
              <SingularSkill key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>

    </section>
    <div className="gradient-04 z-0" />
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        {/* <motion.div */}
        {/*  variants={planetVariants('left')} */}
        {/*  className={`flex-1 ${styles.flexCenter}`} */}
        {/* > */}
        {/*  <img */}
        {/*    src="/get-started.png" */}
        {/*    alt="get-started" */}
        {/*    className="w-[90%] h-[90%] object-contain" */}
        {/*  /> */}
        {/* </motion.div> */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col sm:text-[32px] text-[20px]"
        >
          <TypingText title="| Certifications" />
          <TitleText title={<>Some Shiny Badges</>} />
          <div className="mt-[31px] flex flex-col gap-[24px] sm:text-[12px] text-[20px]">
            {certifications.map((cert, index) => (
              <Certification
                key={cert}
                number={`${index < 9 ? '0' : ''} ${index + 1}`}
                text={cert.title}
                institute={cert.institute}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
    <div className="gradient-02 z-0" />
    <Footer />
  </div>
);

export default page;
