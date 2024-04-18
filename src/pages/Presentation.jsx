import '../styles/Presentation.css'
import { Link } from 'react-router-dom';
import { FaCopy } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import { CodeContainer } from '../components/CodeContainer';

export const Presentation = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='container-presentation'>
                <h1>React-ui-components</h1>
                <p className='sub-title'>{t('sub-title')}</p>

                <div className='btn-container'>

                    <Link className='btn-get-started' to="/get-started">{t('btn-started')}</Link>

                    <div className='container-pages'>
                        <CodeContainer
                            code={`npm install react-ui-components-dpr`}
                        />
                    </div>
                </div>

            </div>

        </>
    )
}