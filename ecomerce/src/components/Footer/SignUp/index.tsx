import {
  Button,
  InputEmail,
  ParagraphSignUp,
  SearchContent,
  SignUpContainer,
  SpanSignUp,
  SpanSignUpBold,
} from "./style";

export const SignUp = () => {
  return (
    <SignUpContainer>
      <SpanSignUp>CADASTRE-SE E RECEBA NOSSAS</SpanSignUp>
      <SpanSignUpBold>Novidades e Promoções</SpanSignUpBold>
      <ParagraphSignUp>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </ParagraphSignUp>

      <SearchContent>
        <InputEmail type="email" placeholder="Seu E-mail" />
        <Button>OK</Button>
      </SearchContent>
    </SignUpContainer>
  );
};
