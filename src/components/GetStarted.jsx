import '../styles/GerStarted.css'
import { useTranslation } from 'react-i18next';

export const GetStarted = () => {
    const { t } = useTranslation();

    return (
        <div className="container-text">
            <h1>{t('title-instalation')}</h1>
        </div>
    )
}