import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <li>
          Hypertext Transfer Protocol Secure is a combination of the Hypertext
          Transfer Protocol with the Secure Socket Layer. Transport Layer
          Security
        </li>
        <S.H2>Stateless is...?</S.H2>
        <li>
          A stateless application or process are isolated resources. Each of
          them is made from scratch. As stateless provides a short-term network
          or service and applications use short-term content delivery, the web
          or delivery servers for short-term order processing.
        </li>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <li>
          The subject of a sentence is a person or thing that perfoms the action
          of verb.
        </li>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <li>Modals of lost opportunities.</li>
        <S.H2>What Should means?</S.H2>
        <li>
          Should is a modal verb. It is used with the base form of a verb.
        </li>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <li>Let's talk great things about you</li>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <li>He going to the Bahia next month</li>
          <li>3 - Ela estará ai amanhã</li>
          <li>she will be there tomorrow </li>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <li>
          The subject of a sentence is the person, place, or thing that is
          performing the action of the sentence
        </li>
        <S.P>They gime me all the power</S.P>
        <li></li>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <li>
          <p>
            Affirmative: I was, He was, She was, It was, we were, you were, they
            were.
          </p>
          <p>
            Negative: I wasn't, He wasn't, She wasn't, It wasn't, we weren't,
            you weren't, they weren't.
          </p>
        </li>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
          <p>This is us</p>
          <p>That is our code</p>
        </S.H3>
      </S.Box>
    </S.Container>
  );
}
