// import { useState } from "react";
import { useEffect, useState } from "react";
import "../app/styles/global.css";
import { Container } from "../layouts/Container/Container";
import { Footer } from "../layouts/Footer/Footer";
import { Header } from "../layouts/Header/Header";
import { Main } from "../layouts/Main/Main";
import { emojiArray } from "./emoji";

function App() {
  const [emojiFind, setEmojiFind] = useState(emojiArray);
  const [emojiFilter, setEmojiFilter] = useState([]);

  function findEmoji(evt) {
    const inputResult = evt.target.value.toLowerCase().trim();
    setEmojiFilter(
      emojiFind.filter(
        (el) =>
          el.title.toLowerCase().trim().includes(inputResult) ||
          el.keywords.toLowerCase().trim().includes(inputResult)
      )
    );
  }

  useEffect(() => {
    setEmojiFilter(emojiArray);
  }, []);
  console.log(emojiFind);
  console.log(emojiFilter);

  return (
    <>
      <div className="page__wrapper">
        <Header findEmoji={findEmoji}>
          <Container></Container>
        </Header>
        <Main emojiArray={emojiFilter}></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
