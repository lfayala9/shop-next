import Link from "next/link";
import style from "@styles/Menu.module.scss"
const Menu = () => {
    return (
        <div  className={style["Menu"]}>
          <ul className="p-0">
            <li>
            <Link href="/sign-in">
              <button className={style['primary-button']}>Sign In</button>
            </Link>
            </li>
            <hr className="text-white"/>
            <li className="px-3">
              <Link className="text-decoration-none text-white" href="/">Log In</Link>
            </li>
          </ul>
        </div>
    );
  };

  export default Menu;