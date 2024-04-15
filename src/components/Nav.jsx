import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

export const Nav = () => {
    return (
        <header>
            <div className='container-logo'>
                <Link className='major-logo' to="/"><FaReact size={40} /></Link></div>
            <nav>
                <ul className='ul-content'>
                    <li>
                        <Link className='a-decoration' to="/get-started">Get started</Link>
                    </li>
                    <li><Link className='a-decoration' to="/components">Components</Link></li>
                </ul>
                <ul className='ul-links'>
                    <li ><a className='a-decoration' href="https://github.com/DavidPrDev/react-ui-components"><AiFillGithub size={25} /></a></li>
                    <li ><a className='a-decoration' href="https://www.linkedin.com/in/david-p%C3%A9rez-romero-b8a57a292/"><CiLinkedin size={26} /></a></li>
                </ul>
            </nav>
        </header>
    )
}