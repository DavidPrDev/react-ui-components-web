import '../styles/GetStarted.css'
import { useTranslation } from 'react-i18next';
import { CodeContainer } from './CodeContainer';
import { function1 } from '../constants/constants';
import { CopyContainer } from './CopyContainer';
export const GetStarted = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1 className='title'>{t('btn-started')}</h1>
            <div>
                <h2 className='subtitle'>{t('title-instalation')}</h2>
                <p>{t('txt-instalation')}</p>
                <CopyContainer />
                <CodeContainer string={function1} />
            </div>
            <CopyContainer />


        </div >
    )
}