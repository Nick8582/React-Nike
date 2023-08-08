import React, {useState} from 'react'
import style from './Header.module.scss'
import logo from '../../assets/img/svg/logo.svg'
import {Link} from 'react-router-dom'
import search from '../../assets/img/svg/search.svg'
import like from '../../assets/img/svg/like.svg'
import bag from '../../assets/img/svg/bag.svg'

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const clickBurger = () => {
    setBurgerOpen(!burgerOpen)
  }
  const clickCloseMenu = (e) => {
    if (e.target === menuPosition.current) {
      return
    } else {
      setBurgerOpen(false)
    }
  }
  const menuPosition = React.createRef()

  return (
    <header className={style.header}>
      <div className={`container ${style.header__container}`}>
        <Link to='/' className={style.header__logo}>
          <img src={logo} alt="Logo company"/>
        </Link>
        <nav className={`${style.header__nav} ${burgerOpen ? style.open : ''}`} onClick={clickCloseMenu}>
          <ul className={`${style.nav__list} ${burgerOpen ? style.open : ''}`} ref={menuPosition}>
            <li className={style.nav__item}>
              <a className={style.nav__link} href="#">New arrivals</a>
            </li>
            <li className={style.nav__item}>
              <a className={style.nav__link} href="#">Men</a>
            </li>
            <li className={style.nav__item}>
              <a className={style.nav__link} href="#">Women</a>
            </li>
            <li className={style.nav__item}>
              <a className={style.nav__link} href="#">Kids</a>
            </li>
            <li className={style.nav__item}>
              <a className={style.nav__link} href="#">Collection</a>
            </li>
          </ul>
        </nav>
        <ul className={style.header__listBtns}>
          <li className={style.header__itemBtn}>
            <img src={search} alt=""/>
          </li>
          <li className={`${style.header__itemBtn} ${style.itemBtn__like}`}>
            <img src={like} alt=""/>
          </li>
          <li className={style.header__itemBtn}>
            <img src={bag} alt=""/>
          </li>
          <li className={`${style.header__itemBtn} ${style.itemBtn__burger}`}>
            <button className={style.burger} onClick={clickBurger}>
              <span className={`${style.burger__item} ${burgerOpen ? style.burger__open : ''}`}></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
