import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/redtopurple.jpg'

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  *{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }

`;



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #e6eaea
  }

  .score{
    color: #87ff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
     background-image: linear-gradient(180deg, #eaea, #87ff);
     background-size: 100%;
     background-clip: text;
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     -moz-background-clip: text;
     -moz-text-fill-color: transparent;
     filter: drop-shadow(2px 2px #0085a3);
     font-size: 70px;
     font-weight: 700;
     text-align: center;
  }

  .start, .next {
    color: #e6eaea
    cursor: pointer;
    background: linear-gradient(90deg, #e7040f, #ed4a75);
    border: 3px solid #ffe0e0;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  
  .start {
    max-width: 200px;
    align-self: center;
    color: #e6eaea
    
  }

  .div1 {
    display: flex;
    flex-direction: column;
  }


  .div2 {
    display: flex;
    flex-direction: row;
    color: #e6eaea
  }

  div > select {
    margin: 0 10px ;
    cursor: pointer;
    background: linear-gradient(90deg, #e7040f, #ed4a75); 
    color: #e6eaea
    border: 3px solid #ffe0e0;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  select > option {
    color: #e6eaea
    background-image: linear-gradient(180deg, #eaea, #87ff);

  }

  @media (max-width: 800px) {
    h1 {
      font-size: 30px;
    }

    .start, .next {
      margin: 5px;
    }
  }
`;
