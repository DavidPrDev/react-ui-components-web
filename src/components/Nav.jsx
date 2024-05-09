import { useTranslation } from 'react-i18next';
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Tooltip } from 'react-ui-components-dpr';
import '../styles/Nav.css';

export const Nav = () => {
    const { t, i18n } = useTranslation();
    const [activeEs, setActiveEs] = useState(false);
    const [activeEn, setActiveEn] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const changeLanguage = (languageCode) => {
        languageCode === 'es' ? setActiveEs(true) : setActiveEs(false);
        languageCode === 'en' ? setActiveEn(true) : setActiveEn(false);
        i18n.changeLanguage(languageCode);
    };

    const handleResize = () => {
        if (window.innerWidth <= 675) {
            setCollapsed(true);
            setSidebarOpen(false);
        } else {
            setCollapsed(false);
            setSidebarOpen(false);
        }
    };

    window.addEventListener('resize', handleResize);

    const openSidebar = () => {

        setSidebarOpen(true);
        setCollapsed(false);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        setCollapsed(false);
    };

    return (
        <header>
            <div className='container-logo'>
                <Link className='major-logo' to="/"><FaReact size={40} /></Link>
            </div>
            <nav>
                <ul className={`ul-content ${sidebarOpen ? 'show' : 'hidden'} ${collapsed ? 'none' : ''}`}>
                    <li className='li-collapse'>
                        <Link className='a-decoration' to="/get-started">{t('btn-started')}</Link>
                    </li>
                    <li className='li-collapse'><Link className='a-decoration' to="/components">{t('btn-components')}</Link></li>
                    <li className='li-collapse'><a className='a-decoration' href='https://react-ui-components.david-pr.com/doc/?path=/docs/'>Storybook documentation</a></li>
                </ul>
                <div className='collapse-btn' onClick={sidebarOpen ? closeSidebar : openSidebar}>
                    {sidebarOpen ? <button className='btn-menu close'><IoCloseCircleOutline size={40} /></button> : <button className='btn-menu open'><IoMdMenu size={40} /></button>}
                </div>
                <ul className='ul-links'>
                    <li className='container-lang li-nav'>
                        <Tooltip text={t('change-lang')} direction='bottom'>
                            <button className={`btn-language ${activeEs && 'active'}`} onClick={() => changeLanguage("es")}>ES</button>
                            <button className={`btn-language ${activeEn && 'active'}`} onClick={() => changeLanguage("en")} >EN</button>
                        </Tooltip>
                    </li>

                    <li className='li-nav'>
                        <a className='a-decoration' href="https://github.com/DavidPrDev/react-ui-components"><AiFillGithub size={25} /></a>
                        <a className='a-decoration' href="https://www.linkedin.com/in/david-p%C3%A9rez-romero-b8a57a292/"><CiLinkedin size={26} /></a>
                    </li>

                </ul>
            </nav>
        </header>
    );
};

