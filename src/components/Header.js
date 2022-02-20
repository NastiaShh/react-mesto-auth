import logo from '../images/logo.svg'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта. Mesto. Russia" />
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in">
            <Link to="/sign-up" className="header__link">Регистрация</Link>
          </Route>
          <Route path="/sign-up">
            <Link to="/sign-in" className="header__link">Войти</Link>
          </Route>
          <Route exact path="/">
            <p className="header__email">{props.email}</p>
            <button className="header__button" onClick={props.onSignOut}>Выйти</button>
          </Route>
        </Switch>
      </BrowserRouter>
    </header>
  )
}

export default Header