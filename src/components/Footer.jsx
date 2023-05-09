import logo from '@assets/icons/basket-fill.svg';
import twitter from '@assets/icons/twitter.svg';
import instagram from '@assets/icons/instagram.svg';
import github from '@assets/icons/github.svg';
import Link from 'next/link';

import Image from 'next/image';
const Footer = () =>{
    return(
        <div id='contact' className="footer_cont bg-dark py-3 px-3 border-top d-flex justify-content-between column">
            <div className="icon_cont d-flex mx-4 align-items-center">
                <p className='text-secondary my-0 mx-3'><span className='h5'>©</span>2023 Fake Store, Inc</p>
            </div>
            <i className='bi bi-basket-fill' style={{fontSize: '4rem', color: '#666666'}}></i>
            <div className="iconsFoot_cont d-flex align-items-center">
                <Link href='https://twitter.com/XenoAfro' passHref={true} target='_blank'><i style={{fontSize: '1.9rem', color: 'grey'}} className='bi bi-twitter mx-3' src={twitter} alt='twitter' /></Link>
                <Link href='https://instagram.com/luisayala50/' passHref={true} target='_blank'><i style={{fontSize: '1.9rem', color: 'grey'}} className='bi bi-instagram mx-3' src={instagram} alt='instagram' /></Link>
                <Link href='https://github.com/lfayala9/' passHref={true} target='_blank'><i style={{fontSize: '1.9rem', color: 'grey'}} className='bi bi-github mx-3' src={github} alt='github' /></Link>
            </div>
        </div>
    )
}

export default Footer;