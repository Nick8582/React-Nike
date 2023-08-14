

import styles from './HeroCard.module.scss'
import {dataHeroInt} from "../../../../utils/interface/dataHero.interfece.ts";
import {FC} from "react";

interface Props {
  card: dataHeroInt
}

const HeroCard: FC<Props> = (props) => {
  const card = props.card
  return (
    <>
      <div className={styles.card}>
        <div className={`container ${styles.hero__container}`} style={{backgroundColor:card.colorBg}}>
          <div className={styles.card__container}>
            <div className={styles.card__left}>
              <h2 className={styles.card__title}>{card.title}</h2>
              <span className={styles.card__jackpot}>{card.jackpot}</span>
              <p className={styles.card__description}>{card.description}</p>
              <a className={styles.card__btnShop} href="#">SHOP NOW!</a>
            </div>
            <div className={styles.card__right}>
              <img src='img/limit-ed.png' className={styles.card__limitEd} alt=''/>
              <img src={card.image} className={styles.card__image} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
