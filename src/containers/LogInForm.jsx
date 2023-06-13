import style from '@styles/LogIn.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuthService from '@hooks/useAuthService';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const API = `${apiUrl}/api/v1/auth/login`;

const LogInForm = () => {
  const { authService } = useAuthService();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authService(API, {
      email,
      password,
    });
    if ('token' in response) {
      Swal.fire({
        title: 'Logged in',
        text: response.message,
        timer: 2000,
        icon: 'success',
        showConfirmButton: false,
      }).then((value) => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = '/';
      });
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
    <div className={style['log_cont']}>
      <div className={style['log_form_cont']}>
        <div className="title_cont">
          <h3 className="text-center py-2">
            <strong className={style['color_text']}>Welcome</strong> Back!
          </h3>
        </div>
        <hr className="mb-0" />
        <div className="log_inputs d-flex justify-content-center">
          <form noValidate onSubmit={handleSubmit} className={style['form_cont']}>
            <label className="mx-2" htmlFor="email">
              E-mail:
            </label>
            <br />
            <input onChange={(e) => setEmail(e.target.value)} className={style['log_input']} type="email" id="email" name="email" placeholder="user@example.com" />
            <br />
            <label className="mx-2" htmlFor="pwd">
              Password:
            </label>
            <input className={style['log_input']} placeholder="******" type="password" id="pwd" name="pwd" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className={style['primary-button']}>
              Log In
            </button>
            <Link className="text-decoration-none" href={'/'}>
              <p className={style['forgot']}>Forgot your Password?</p>
            </Link>
            <Link className="text-decoration-none" href={'/sign-up'}>
              <p className={style['forgot2']}>Sign up Here!</p>
            </Link>
            <p>
              <strong className="mx-2">Or Login Using: </strong>
            </p>
            <div className="icons_log mb-4 mx-2">
              <Link href={'/'}>
                <i className="bi-twitter" style={{ color: 'cornflowerblue', fontSize: '1.8rem' }}></i>
              </Link>
              <Link href={'/'}>
                <i className="bi bi-google" style={{ color: '#EA4335', fontSize: '1.8rem', marginLeft: '4rem' }}></i>
              </Link>
              <Link href={'/'}>
                <i className="bi bi-facebook" style={{ color: '#4267B3', fontSize: '1.8rem', marginLeft: '4rem' }}></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
