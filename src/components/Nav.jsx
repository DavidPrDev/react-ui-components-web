import { useTranslation } from 'react-i18next';
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/Nav.css'
import { useState } from 'react';
import { Tooltip } from 'react-ui-components-dpr';

export const Nav = () => {
    const { t, i18n } = useTranslation();
    const [activeEs, setActiveEs] = useState(false)
    const [activeEn, setActiveEn] = useState(true)

    const changeLanguage = (languageCode) => {

        languageCode == 'es' ? setActiveEs(true) : setActiveEs(false);
        languageCode == 'en' ? setActiveEn(true) : setActiveEn(false);
        i18n.changeLanguage(languageCode);

    };

    return (
        <header>
            <div className='container-logo'>
                <Link className='major-logo' to="/"><FaReact size={40} /></Link></div>
            <nav>
                <ul className='ul-content'>
                    <li className='li-nav'>
                        <Link className='a-decoration' to="/get-started">{t('btn-started')}</Link>
                    </li>
                    <li className='li-nav'><Link className='a-decoration' to="/components">{t('btn-components')}</Link></li>
                </ul>
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
    )
}