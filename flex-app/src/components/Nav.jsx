import React from 'react';
import Logo from '../../public/img/logo.svg';
import '../pages/Home.css';

const Nav = () => {
    return (
        <div className='flex flex-center'>
            <div className='flex flex-center flex-between container_menu'>
                <img src={Logo} alt="logo"/>
                <div className='menu'>
                    <ul>
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="">Sobre nosotros</a>
                        </li>
                        <li>
                            <a href="">Servicios</a>
                        </li>
                        <li>
                            <a href="">Nuestros clientes</a>
                        </li>
                        <li>
                            <a href="">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className='menu__contact'>
                    <ul className='flex-nowrap flex flex-center' >
                        <li>
                            <a className='btn btn-primary' href="">WhatsApp</a>
                        </li>
                        <li>
                            <a className='btn btn-secondary' href="">Llamanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )       
}   

export default Nav