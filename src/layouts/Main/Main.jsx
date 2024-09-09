import { Card } from "../../components/Card/Card";
import { Cards } from "../Cards/Cards";
import { Container } from "../Container/Container";
import s from "./Main.module.scss";

export const Main = ({ emojiArray}) => {
  return (
    <>
      <main>
        <Cards emojiArray={emojiArray}
        
        ></Cards>
      </main>
    </>
  );
};
