
import '../assets/styles/Footer.css'
import logo from "../assets/images/logo.svg"
import { Link } from 'react-router-dom'
import { Container, Typography, Button } from '@mui/material'

const Footer = () => {
    const logo = "easybank"

    return (

        <div className="footer-wrapper">
            <div className="logo">
                <Typography variant='h4' color={"white"} >{logo}</Typography>
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
        </div>
    )

}

export default Footer

