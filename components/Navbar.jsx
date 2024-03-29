'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import MenuDropdown from './MenuDropdown';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <Link href="/">
        <div>
          <h2 className="font-extrabold text-[20px] leading-[30.24px] text-white">
            SANJAY SANTOKEE
          </h2>
        </div>
      </Link>

      <MenuDropdown />
    </div>
  </motion.nav>
);

export default Navbar;
