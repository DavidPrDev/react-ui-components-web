import '../styles/Components.css'
import { useTranslation } from 'react-i18next';
import { TutorialPill } from '../components/TutorialPill';
import { CodeContainer } from '../components/CodeContainer';

export const Components = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <h1 className='title'>{t('btn-components')}</h1>

            <div id="modal">

                <TutorialPill
                    title="Modal"
                    text={t('txt-requisites')}
                    component={<CodeContainer code={``} />}
                    link={"https://vitejs.dev/guide/"}
                    textLink={t('txt-vite-tutorial')}
                />

            </div>

            <div id="tooltip">
                <TutorialPill
                    title={t('requisites')}
                    text={t('txt-requisites')}
                    component={<CodeContainer code='npm create vite@latest my-app' />}
                    link={"https://vitejs.dev/guide/"}
                    textLink={t('txt-vite-tutorial')}
                />
            </div>

            <div id="daragAnDdrop">
                <TutorialPill
                    title={t('requisites')}
                    text={t('txt-requisites')}
                    component={<CodeContainer code='npm create vite@latest my-app' />}
                    link={"https://vitejs.dev/guide/"}
                    textLink={t('txt-vite-tutorial')}
                />
            </div>
        </div>

    )
}