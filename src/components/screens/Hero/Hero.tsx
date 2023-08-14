import {Pagination, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroCard from "./HeroCard/HeroCard.tsx";

import {dataHero} from "../../../data/heroData.ts";
import {dataHeroInt} from "../../../utils/interface/dataHero.interfece.ts";


const Hero = () => {
  return (
    <section>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{clickable: true}}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {dataHero.map((card: dataHeroInt, index) => (
          <SwiperSlide key={index}>
            <HeroCard card={card}/>
          </SwiperSlide>
        ))
        }

      </Swiper>
    </section>
  );
};

export default Hero;
