import styled from "styled-components";
export const FooterContainer = styled.footer`
  margin-top: 50px;
  max-width: 1440px;
  width: 100%;
  height: 420px;
  background-color: rgba(42, 42, 42, 1);

  @media (max-width: 768px) {
    height: 1000px;
    display: flex;
    flex-direction: column;
  }
`;

export const AboutUsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutUs = styled.div`
  width: 149px;
  height: 224px;
  margin-top: 50px;
  margin-left: 50px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AbouUsTitle = styled.h3`
  font-weight: 700;
  color: #fff;
  font-size: 13px;
  margin-bottom: 20px;
`;

export const AboutUsSpan = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 200;
  color: rgba(255, 255, 255, 1);
  opacity: 0.6;
  line-height: 32px;
`;

export const AboutUsSociais = styled.div`
  display: flex;
`;

export const TypePayments = styled.div`
  width: 195px;
  margin-top: 50px;
  margin-left: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;
