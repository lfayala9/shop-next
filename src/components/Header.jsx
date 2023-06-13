import Image from 'next/image';
import style from '@styles/Header.module.scss';
import logo from '@assets/icons/basket-fill.svg';
import menu from '@assets/icons/list.svg';
import userIcon from '@assets/icons/person-circle.svg';
import person from '@assets/icons/person-fill-check.svg';
import cart from '@assets/icons/cart-fill.svg';
import Menu from './Menu';
import AppContext from '@context/AppContext';
import Orders from '@containers/Orders';
import { useState, useEffect, useRef, useContext } from 'react';

const Header = () => {
  const [toggleOrders, setToggleOrders] = useState(false);
  const [userPic, setUserPic] = useState(userIcon)
  const { state } = useContext(AppContext);

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      setUserPic(person)
    }
  },[])

  //? Function that hides navbar at scroll down and shows at scroll up

  const [navVisible, setNavVisible] = useState(true);
  let scrollTop = useRef(0);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > scrollTop.current) {
      setNavVisible(false);
    } else if (pageYOffset < scrollTop.current) {
      setNavVisible(true);
    }
    scrollTop.current = pageYOffset;
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return window.addEventListener('scroll', handleScroll);
  });

  //? Function that hides log in menu when user clicks outside

  const [toggle, setToggle] = useState(false);
  let ref = useRef();

  useEffect(() => {
    let handleClose = (e) => {
      if (!ref.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClose);

    return () => {
      document.removeEventListener('mousedown', handleClose);
    };
  });
  return (
    <>
      <header className={navVisible ? `${style['header_visible']}` : `${style['header_cont']}`}>
        <div className="nav_container mx-2 mx-md-5">
          <div className="d-flex align-items-center justify-content-between">
            {/* <Image src={menu} alt="menu" className="mini-menu d-md-none" /> */}
            <div className="logo-container d-flex mx-md-0 mx-3">
              <Image src={logo} alt="logo" className={style['nav-logo']} />
              <h5 className={style['title']}>
                Fake <br /> Store
              </h5>
            </div>
            <ul className="d-none d-lg-flex mx-5 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className={style['nav-text']}>
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className={style['nav-text']}>
                  Products
                </a>
              </li>
              <li>
                <a href="#" className={style['nav-text']}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className={style['nav-text']}>
                  Contact
                </a>
              </li>
            </ul>
            <div className={style['icons_cont']}>
              <div className={style['user-icon']}>
                <Image
                  className="mx-1"
                  onClick={() => setToggle(!toggle)}
                  // type="button" data-bs-toggle="dropdown" aria-expanded="false"
                  src={userPic}
                  alt="user"
                  // dropdown-toggle
                />
                {/* <Menu /> */}
              </div>{' '}
              <span className={style['shopping-cart']}>
                <Image className="mx-1 mx-md-1" src={cart} alt="cart" onClick={() => setToggleOrders(!toggleOrders)} />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className={navVisible ? `${style['orders_display']}` : `${style['orders_move']}`}>{toggleOrders && <Orders toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}</div>
      <div ref={ref} className={navVisible ? `${style['menu_display']}` : `${style['menu_move']}`}>
        {toggle && <Menu />}
      </div>
      <hr className="text-white m-2 p-1" />
    </>
  );
};

export default Header;
