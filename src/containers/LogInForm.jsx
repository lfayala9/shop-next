import style from '@styles/LogIn.module.scss';
import Link from 'next/link';

const LogInForm = () => {
  return (
    <div className={style['log_cont']}>
      <div class={style['log_form_cont']}>
        <div className="title_cont">
          <h3 className="text-center py-2">
            <strong className={style['color_text']}>Welcome</strong> Back!
          </h3>
        </div>
        <hr className="mb-0" />
        <div className="log_inputs d-flex justify-content-center">
          <form action="" className={style['form_cont']}>
            <label className="mx-2" for="email">
              E-mail:
            </label>
            <br />
            <input className={style['log_input']} type="email" id="email" name="email" placeholder="user@example.com" />
            <br />
            <label className="mx-2" for="pwd">
              Password:
            </label>
            <input className={style['log_input']} placeholder="******" type="password" id="pwd" name="pwd" />
            <button className={style['primary-button']}>Log In</button>
            <Link className='text-decoration-none' href={'/'}><p className={style["forgot"]}>Forgot your Password?</p></Link>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
