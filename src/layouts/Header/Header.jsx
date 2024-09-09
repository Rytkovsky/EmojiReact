import { Container } from '../Container/Container'
import s from './Header.module.scss'

export const Header = ({findEmoji}) => {return <>

<header className={s.header}>
<Container>
<h1 className={s.header__title}>Emoji Finder!!!!!!</h1>
          <p className={s.header__text}>Find emoji by keywords</p>
          <input onChange={findEmoji}      
            className={s.header__input}
            type="text"
            placeholder="Type here..."
          />



</Container>


</header>




</>}