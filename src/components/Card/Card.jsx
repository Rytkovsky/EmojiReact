import s from "./Card.module.scss";

export const Card = ({ title, symbol, keywords }) => {
  const newKeywords = keywords.split(" ");
  const uniqWordsArray = [...new Set(newKeywords)];
  const uniqWords = uniqWordsArray.join(" ")

  return (
    <>
      <article className={s.card}>
        <p className={s.card__symbol}>{symbol}</p>
        <h3 className={s.card__title}>{title}</h3>
        <p className={s.card__keywords}>{uniqWords}</p>
      </article>
    </>
  );
};
