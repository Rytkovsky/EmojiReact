import { Container } from "../Container/Container";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <Container>
          <p className={s.footer__text}>2022 © Made with love by me</p>
        </Container>
      </footer>
    </>
  );
};
