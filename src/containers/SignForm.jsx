import style from '@styles/SignForm.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuthService from '@hooks/useAuthService';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const API = `${apiUrl}/api/v1/customer`;

const SignForm = () => {
  const { authService } = useAuthService();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authService(API, {
      user: {
        email,
        password,
      },
      name,
      lastName,
    });

    if ('createdAt' in response) {
      Swal.fire({
        title: 'Account Created!',
        timer: 2000,
        icon: 'success',
        showConfirmButton: false,
      })
    } else {
      Swal.fire({
        title: 'Failure',
        text: response.message,
        timer: 3000,
        icon: 'error',
        showConfirmButton: false,
      });
    }
  };
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
          <form noValidate onSubmit={handleSubmit} className={style['form_cont']}>
            <div className={style['name_field']}>
              <div className={style['name']}>
                <label className={style['user_label']} htmlFor="fname">
                  First Name:
                </label>
                <br />
                <input onChange={(e) => setName(e.target.value)} className={style['input_cont1']} placeholder="John" type="text" id="fname" name="fname" />
                <br />
              </div>
              <div className={style['name']}>
                <label className={style['user_label']} htmlFor="last-name">
                  Last Name:
                </label>
                <br />
                <input onChange={(e) => setLastName(e.target.value)} className={style['input_cont1']} placeholder="Doe" type="text" id="last-name" name="last-name" />
                <br />
              </div>
            </div>
            {/* s */}
            <hr />
            <label htmlFor="email">E-mail:</label>
            <br />
            <input onChange={(e) => setEmail(e.target.value)} className={style['input_cont2']} type="email" id="email" name="email" placeholder="user@example.com" />
            <br />
            <label htmlFor="pwd">Password:</label>
            <br />
            <input onChange={(e) => setPassword(e.target.value)} className={style['input_cont2']} placeholder="******" type="password" id="pwd" name="pwd" />
            {/* <label for="pwd">Repeat your Password:</label>
            <br />
            <input className={style['input_cont2']} placeholder="******" type="password" id="pwd" name="pwd" /> */}
            <button type="submit" className={style['primary-button']}>
              Sign Up
            </button>
            <Link className="text-decoration-none" href={'/login'}>
              <p className={style['forgot2']}>Already have an account? Log in here!</p>
            </Link>
            <hr />
            <p>
              <strong>Or Sign Up Using: </strong>
            </p>
            <div className="icons_sign">
              <Link href={'/'}>
                <i className="bi-twitter" style={{ color: 'cornflowerblue', fontSize: '1.8rem' }}></i>
              </Link>
              <Link href={'/'}>
                <i className="bi bi-google" style={{ color: '#EA4335', fontSize: '1.8rem', marginLeft: '4rem' }}></i>
              </Link>
              <Link href={'/'}>
                <i className="bi bi-facebook" style={{ color: '#4267B3', fontSize: '1.8rem', marginLeft: '4rem' }}></i>
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
