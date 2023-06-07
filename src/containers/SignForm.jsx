import style from '@styles/SignForm.module.scss';
import twitter from '@assets/icons/twitter.svg';
import Image from 'next/image';
import Link from 'next/link';

const SignForm = () => {
  return (
    <div className={style['sign_cont']}>
      <div className={style['sign_form_cont']}>
        <div className="title_cont">
          <h3 className="text-center py-2">
            <strong className={style['color_text']}>Create</strong> Your Account
          </h3>
        </div>
        <hr className="mb-0" />
        <div className={style['sign_inputs']}>
          <form className={style['form_cont']}>
            <div className={style['name_field']}>
              <div className={style['name']}>
                <label className={style['user_label']} for="fname">
                  First Name:
                </label>
                <br />
                <input className={style['input_cont1']} placeholder="John" type="text" id="fname" name="fname" />
                <br />
              </div>
              <div className={style['name']}>
                <label className={style['user_label']} for="last-name">
                  Last Name:
                </label>
                <br />
                <input className={style['input_cont1']} placeholder="Doe" type="text" id="last-name" name="last-name" />
                <br />
              </div>
            </div>
            {/* s */}
            <hr />
            <label for="email">E-mail:</label>
            <br />
            <input className={style['input_cont2']} type="email" id="email" name="email" placeholder="user@example.com" />
            <br />
            <label for="pwd">Password:</label>
            <br />
            <input className={style['input_cont2']} placeholder="******" type="password" id="pwd" name="pwd" />
            {/* <label for="pwd">Repeat your Password:</label>
            <br />
            <input className={style['input_cont2']} placeholder="******" type="password" id="pwd" name="pwd" /> */}
            <button type="submit" className={style['primary-button']}>
              Sign Up
            </button>
            <hr />
            <p>
              <strong>Or Sign Up Using: </strong>
            </p>
            <div className="icons_sign">
              <Link href={'/'}>
                <i className="bi-twitter" style={{ color: 'cornflowerblue', fontSize: '1.8rem' }}></i>
              </Link>
              <Link href={'/'}>
                <i class="bi bi-google" style={{ color: '#EA4335', fontSize: '1.8rem', marginLeft: '4rem' }}></i>
              </Link>
              <Link href={'/'}>
                <i class="bi bi-facebook" style={{ color: '#4267B3', fontSize: '1.8rem', marginLeft: '4rem' }}></i>
              </Link>
              <p className={style['terms']}>
                By signing up for Fake Store, you agree to Fake Store{' '}
                <Link className={style['link']} href={'/'}>
                  Terms of Service & Privacy Policy.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignForm;
