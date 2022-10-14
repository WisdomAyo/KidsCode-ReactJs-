import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        What will you child learn / <br className="sm:block hidden" /> How will it be conducted ?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Coding, or programming, is simply the learning of computer language. In order to control computers (or robots or drones), we need to give instructions  around us works.
        The Coding  sessions are both physical and virtual ( online private or group classes will be conducted through zoom) while for the physical class – you can book for a private  instructor to come to your location to train your kids

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
