import { Card } from "../../components/Card/Card";
import { Container } from "../Container/Container";
import s from "./Cards.module.scss";

export const Cards = ({ emojiArray}) => {
  return (
    <>
      <section className={s.cards}>
        <Container>
          <div className={s.cards__wrapper}>
            {emojiArray.map((el, i) => (
              <Card
                key={i}
                title={el.title}
                symbol={el.symbol}
                keywords={el.keywords}
              ></Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
