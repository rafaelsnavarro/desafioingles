import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <p>Present, pass and future.</p>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
        <p>implies the meaning of possession</p>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
          <p>I feel happiness when I do what I like</p>
          <p>I feel sad when they treat me badly</p>
        </S.H2>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
          <p>
            Will is used when referring to the future with certainty and for
            recent, rapid decisions. Going to is used to refer to events that
            have been previously planned.
          </p>
        </S.H2>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <p> who, whom, whose, what, and which</p>
        <S.H2>How many types of adverbs are there in English?</S.H2>
        <p>
          adverbs of manner, adverbs of time, adverbs of place, adverbs of
          frequency, adverbs of degree and conjunctive adverbs.
        </p>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <p>I will finish my challenges until next week</p>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <p>“Please Excuse My Dear Aunt Sally” (PEMDAS)</p>
      </S.Box>
    </S.Container>
  );
}
