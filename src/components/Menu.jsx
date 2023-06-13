import Link from 'next/link';
import style from '@styles/Menu.module.scss';
import { useEffect, useState } from 'react';
const Menu = () => {
  const [menu, setMenu] = useState();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setMenu(
        <>
          <li>
            <Link className="text-decoration-none text-white" href="/settings">
              Settings
            </Link>
          </li>
          <hr className="text-white" />
          <li>
            <Link onClick={handleLogout} className="text-decoration-none text-white" href="/">
              Log Out
            </Link>
          </li>
        </>
      );
    } else {
      setMenu(
        <>
          <li>
            <Link href="/sign-up">
              <button className={style['primary-button']}>Sign Up</button>
            </Link>
          </li>
          <hr className="text-white" />
          <li className="px-3">
            <Link className="text-decoration-none text-white" href="/login">
              Log In
            </Link>
          </li>
        </>
      );
    }
  }, []);
  return (
    <div className={style['Menu']}>
      <ul className="p-0">{menu}</ul>
    </div>
  );
};

export default Menu;
