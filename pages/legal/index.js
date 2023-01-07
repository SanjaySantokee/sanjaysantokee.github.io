import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const page = () => (
  <div className="bg-primary-black overflow-hidden">
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <motion.p
          variants={fadeIn('down', 'tween', 0.2, 1)}
          className="mt-[18px] font-normal sm:text-[22px] text-[20px] text-left text-secondary-white "
        >
          <span className="font-extrabold text-white">Website Terms and Conditions of Use</span><br /><br />
          1. Terms<br />
          By accessing this Website, accessible from sanjaysantokee.github.io, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.<br />
          <br />
          2. Use License<br />
          Permission is granted to temporarily download one copy of the materials on Sanjay's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:<br />
          <br />
          modify or copy the materials;<br />
          use the materials for any commercial purpose or for any public display;<br />
          attempt to reverse engineer any software contained on Sanjay's Website;<br />
          remove any copyright or other proprietary notations from the materials; or<br />
          transferring the materials to another person or "mirror" the materials on any other server.<br />
          This will let Sanjay to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.<br />
          <br />
          3. Disclaimer<br />
          All the materials on Sanjay’s Website are provided "as is". Sanjay makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Sanjay does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.<br />
          <br />
          4. Limitations<br />
          Sanjay will not be hold accountable for any damages that will arise with the use or inability to use the materials on Sanjay’s Website, even if Sanjay or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.<br />
          <br />
          5. Revisions and Errata<br />
          The materials appearing on Sanjay’s Website may include technical, typographical, or photographic errors. Sanjay may change the materials contained on its Website at any time without notice.<br />
          <br />
          6. Links<br />
          The presence of any link does not imply endorsement by Sanjay of the site. The use of any linked website is at the user’s own risk.<br />
          <br />
          7. Site Terms of Use Modifications<br />
          Sanjay may revise these Terms of Use for the Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.<br />
          <br />
          8. Your Privacy<br />
          Please read our Privacy Policy.<br />
          <br />
          9. Governing Law<br />
          Any claim related to Sanjay's Website shall be governed by the laws of Trinidad and Tobago without regards to its conflict of law provisions.<br />
        </motion.p>
      </motion.div>
    </section>
  </div>
);

export default page;
