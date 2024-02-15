import React, { useEffect } from 'react';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const hoverBar = document.querySelector('.hover-bar');

    const handleClick = () => {
      hoverBar.style.display = "block"

    };

    if (menuToggle) {
      menuToggle.addEventListener('click', handleClick);
    }

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', handleClick);

      }
    };
  }, []);
   
  return (
    <div className="header-wrapper">
           <div className="header-wrapper">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <Link><li>Home</li></Link>
                    <Link><li>Contact</li></Link>
                    <Link><li>About</li></Link>
                    <Link><li>Careers</li></Link>
                    <Link><li>Blog</li></Link>
                </ul>
            </div>
            <div className="req-btn">
                <button>
                    More info
                </button>
            </div>
            <div class="menu-toggle">
                <MenuIcon />
                <ul className='hover-bar'>
                    <Link><li>Home</li></Link>
                    <Link><li>Contact</li></Link>
                    <Link><li>About</li></Link>
                    <Link><li>Careers</li></Link>
                    <Link><li>Blog</li></Link>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Header;
