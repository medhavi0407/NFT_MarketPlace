import React from 'react';
import styled from "styled-components";
import choose from '../assets/choose.png';
import Button from "./Button";

export default function Choose() {
  return (
    <Section>
      <div className="image">
        <img src={choose} alt="choose"/>
      </div>
      <div className="content">
        <h2>
            Why should you Choose Our Website?
        </h2>
        <p>this is a paragraph that describes why should you choose our website to buy, sell and create your own NFTs.
            This is the future of our world. Web 3 is what we all need to know about,thus our website is very useful and important.
        </p>
        <Button text="Read More" blue/>
      </div>
    </Section>
  )
}
const Section=styled.section`
display:flex;
justify-content:center;
align-items:center;
gap:3rem;
margin:0 9rem;
margin-bottom:5rem;
.content{
    display:flex;
    justify-content:center;
    flex-direction:column;
    gap:3rem;
    h2{
        font-size:4rem;
    }
    p{
        color:#7b7e86;
        line-height:2rem;
    }
}
`;