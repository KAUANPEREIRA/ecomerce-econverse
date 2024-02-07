import { ButtonCheckOut, PartnerDescription } from "../Partners/style";
import {
  ProductContainer,
  ProductContainerLinear,
  ProductImageBackground,
  ProductTitle,
} from "./style";

export const Products = () => {
  return (
    <ProductContainer>
      <ProductImageBackground>
        <ProductContainerLinear>
          <ProductTitle>Produtos</ProductTitle>
          <PartnerDescription>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </PartnerDescription>
          <ButtonCheckOut>Confira</ButtonCheckOut>
        </ProductContainerLinear>
      </ProductImageBackground>

      <ProductImageBackground>
        <ProductContainerLinear>
          <ProductTitle>Produtos</ProductTitle>
          <PartnerDescription>
            Lorem ipsum dolor sit amet, consectetur{" "}
          </PartnerDescription>
          <ButtonCheckOut>Confira</ButtonCheckOut>
        </ProductContainerLinear>
      </ProductImageBackground>
    </ProductContainer>
  );
};
