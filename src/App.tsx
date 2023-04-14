import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import burhan from "./assets/altintop.png";
import data from "./data/sorular";

function App() {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();
    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    let score = 0;
    checkboxes.forEach((checkbox) => {
      // @ts-ignore
      score += Number(+checkbox.value);
    });
    setScore(score);

    if (score <= 100) {
      setResult(`${score} puan ile "Z3NC1"sin.`);
    } else if (score <= 300 && score >= 200) {
      setResult(`${score} puan ile "Orta Gelir"sin.`);
    } else if (score <= 1000 && score >= 300) {
      setResult(`${score} puan ile "Ucundan Elit"sin.`);
    } else if (score <= 2000 && score >= 1000) {
      setResult(`${score} puan ile "Entelektuel"sin.`);
    } else if (score <= 3000 && score >= 2000) {
      setResult(`${score} puan ile "Beyaz Turk"sun.`);
    } else if (score > 3000) {
      setResult(`${score} puan ile "Bembeyaz Turk"sun.`);
    }

    setScore(0);

    // reset form
    const form = document.querySelector("form");
    form?.reset();
  };

  return (
    <Root className="App">
      <Header>
        <Altintop image={burhan} />
        <div>
          <p>Ne kadar "Beyaz Turk"sun?</p>
          <p>Sorulari cevapla, ogren.</p>
        </div>
      </Header>
      <Form>
        <Checkboxes>
          {data.map((item, index) => {
            return (
              <QuestionWrapper key={index}>
                <input type="checkbox" id={item.soru} name={item.soru} value={item.puan} />
                <label htmlFor={item.soru}>{item.soru}</label>
              </QuestionWrapper>
            );
          })}
        </Checkboxes>
        <ButtonWrapper>
          <button type="submit" onClick={(e) => handleClick(e)}>
            Hesapla
          </button>
        </ButtonWrapper>

        <Result>{result}</Result>
      </Form>
      <br />
      <hr />

      <footer>
        orjinal gorsel:{" "}
        <a href="/bc6a4cnf.jpg" target="_blank">
          nekadarbeyazyakalisin.jpg
        </a>
        <br />
        siteyi yapan:{" "}
        <a href="https://emre.ca" target="_blank">
          emre
        </a>
        <br />
        eksisosluk linki:{" "}
        <a href="https://eksisozluk2023.com/ne-kadar-beyaz-turksun-testi--7637464" target="_blank">
          baslikk
        </a>
      </footer>
    </Root>
  );
}

export default App;

const Root = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;
`;

const Header = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 0;
  align-items: center;
  margin-bottom: 10px;
  background-color: lightgray;
  padding: 1rem;
  border-radius: 10px;
  h1 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
    p {
      margin: 0;
    }
  }
`;

interface AltintopProps {
  image: string;
}

const Altintop = styled.div<AltintopProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const QuestionWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  text-align: left;

  label {
    display: inline-block;
    cursor: pointer;
    text-align: left;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 1rem;
    border: 3px solid lightgreen;
    transition: all 0.5s ease;

    &:hover {
      border: 3px solid lightblue;
    }
  }
`;

const Checkboxes = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
`;

const ButtonWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Result = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 3px solid orangered;
`;
