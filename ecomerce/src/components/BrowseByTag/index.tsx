import {
  BrowseByTagContainer,
  Circle,
  ContentCarousel,
  NavigateMarks,
} from "./style";
// import Swiper core and required modules

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const BrowseByTag = () => {
  const swiperParams = {
    navigation: true,
    breakpoints: {
      // Quando a largura da tela é 768px ou mais
      768: {
        slidesPerView: 5,
      },
      // Quando a largura da tela é menor que 768px
      0: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <BrowseByTagContainer>
      <NavigateMarks>Navegue por marcas</NavigateMarks>
      <ContentCarousel>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <Circle>
              <img src="./marks.png" />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src="./marks.png" />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src="./marks.png" />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src="./marks.png" />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src="./marks.png" />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src="./marks.png" />
            </Circle>
          </SwiperSlide>
          <SwiperSlide>
            <Circle>
              <img src="./marks.png" />
            </Circle>
          </SwiperSlide>
        </Swiper>
      </ContentCarousel>
    </BrowseByTagContainer>
  );
};
