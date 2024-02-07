import {
  BannerContainer,
  BannerContent,
  BannerImageBackrund,
  BannerSubtitle,
  BannerTitle,
  BannerTitleContent,
  ButtonBanner,
} from "./style";

export const Banner = () => {
  return (
    <BannerImageBackrund>
      <BannerContainer>
        <BannerContent>
          <BannerTitleContent>
            <BannerTitle>Venha conhecer nossa promoções</BannerTitle>
            <BannerSubtitle>50% off nos produtos</BannerSubtitle>
            <ButtonBanner>Ver produto</ButtonBanner>
          </BannerTitleContent>
        </BannerContent>
      </BannerContainer>
    </BannerImageBackrund>
  );
};
