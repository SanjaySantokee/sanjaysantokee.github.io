import styles from '../styles';

const Certification = ({ number, text, institute }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] hidden md:flex rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      <span className="font-extrabold text-white">{text}</span>
      <br />
      {institute}
    </p>
  </div>
);

export default Certification;
