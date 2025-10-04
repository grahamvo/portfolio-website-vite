import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import Header from 'components/header/Header';
import Menu from 'components/menu/Menu';
import Cover from 'components/cover/Cover';

import { appBase } from "styles/app.module.scss";

const useToggleMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return { showMenu, toggleMenu };
}

const useHandleClick = (location, showMenu, toggleMenu) => {
  let navigate = useNavigate();
  const [current, setCurrent] = useState(location.pathname);
  const [next, setNext] = useState(null);

  function handleClick(next) {
    setNext(next)
    if (showMenu) {
      toggleMenu(false);
    }

    setTimeout(() => {
      navigate(next);
      setCurrent(next);
      setNext(null);
    }, 500);
    
  }

  return { handleClick, current, next }
}

function App() {
  const location = useLocation();

  const { showMenu, toggleMenu } = useToggleMenu();
  const { handleClick, current, next } = useHandleClick(location, showMenu, toggleMenu);

  return (
    <div className={appBase}>
      <Header location={location} next={next} showMenu={showMenu} toggleMenu={toggleMenu} handleClick={handleClick} />
      <Menu showMenu={showMenu} location={location} handleClick={handleClick} />
      <Cover current={current} next={next} />
      <Outlet context={{handleClick, next}} />
    </div>
  )
}

export default App
