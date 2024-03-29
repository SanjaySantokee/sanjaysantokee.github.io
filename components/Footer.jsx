'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[24px] text-[14px] text-white">
          Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#33B8FF] rounded-[32px] gap-[12px]">
          <img
            src="/connection.png"
            alt="connect"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Start a project
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            SS
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            ©2023 Sanjay Santokee, <Link href="/legal"><u>All rights reserved.</u></Link>
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
