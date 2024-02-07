import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 380px;
  height: 260px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SpanSignUp = styled.span`
  margin-top: 20px;
  text-align: center;
  display: block;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: rgba(63, 63, 64, 1);
  font-size: 18px;
`;

export const SpanSignUpBold = styled.span`
  text-align: center;
  display: block;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: rgba(63, 63, 64, 1);
  font-size: 21px;
`;

export const ParagraphSignUp = styled.p`
  margin: auto;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  color: rgba(63, 63, 64, 1);
  text-align: center;

  width: 310px;
  height: 38px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchContent = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

export const InputEmail = styled.input`
  outline: 0;
  margin-right: 20px;
  width: 230px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid rgba(42, 42, 42, 1);
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 14px;
  width: 62px;
  height: 45px;
  background-color: rgba(247, 25, 99, 1);
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
