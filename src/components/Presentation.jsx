import '../styles/Presentation.css'
import { Link } from 'react-router-dom';
import { FaCopy } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

export const Presentation = () => {
    const { t } = useTranslation();

    const textToCopy = 'npm install react-ui-components-dpr';
    return (
        <div className='container-presentation'>
            <h1>React-ui-components</h1>
            <p className='sub-title'>{t('sub-title')}</p>

            <div className='btn-container'>
                <Link className='btn-get-started' to="/get-started">{t('btn-components')}</Link>
                <p className='npm-code'>npm install react-ui-components-dpr </p><span onClick={() => { navigator.clipboard.writeText(textToCopy); }} className='copy-icon'><FaCopy size={20} /></span>
            </div>

        </div>
    )
}