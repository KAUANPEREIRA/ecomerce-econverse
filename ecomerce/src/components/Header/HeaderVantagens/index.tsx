import { PiShieldCheck } from "react-icons/pi";
import { HeaderMenuOne, HeaderSpan } from "../style";

export const HeaderVantagens = () => {
  return (
    <HeaderMenuOne>
      <HeaderSpan>
        <PiShieldCheck size={20} />
        Compra <span style={{ color: "#F71963" }}>100% seguro </span>
      </HeaderSpan>
      <HeaderSpan>
        <PiShieldCheck size={20} />
        <span style={{ color: "#F71963" }}>Frete Grátis </span>
        acima de R$200
      </HeaderSpan>
      <HeaderSpan>
        <PiShieldCheck size={20} />
        <span style={{ color: "#F71963" }}>Parcele </span>
        suas compras
      </HeaderSpan>
    </HeaderMenuOne>
  );
};
