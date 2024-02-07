import {
  ButtonCheckOut,
  PartnerContainer,
  PartnerContainerLinear,
  PartnerDescription,
  PartnerImageBackground,
  PartnerTitle,
} from "./style";

export const Partners = () => {
  return (
    <PartnerContainer>
      <PartnerImageBackground>
        <PartnerContainerLinear>
          <PartnerTitle>Parceiros</PartnerTitle>
          <PartnerDescription>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </PartnerDescription>
          <ButtonCheckOut>Confira</ButtonCheckOut>
        </PartnerContainerLinear>
      </PartnerImageBackground>

      <PartnerImageBackground>
        <PartnerContainerLinear>
          <PartnerTitle>Parceiros</PartnerTitle>
          <PartnerDescription>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </PartnerDescription>
          <ButtonCheckOut>Confira</ButtonCheckOut>
        </PartnerContainerLinear>
      </PartnerImageBackground>
    </PartnerContainer>
  );
};
