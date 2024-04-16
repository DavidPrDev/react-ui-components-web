import '../styles/GetStarted.css'
import { useTranslation } from 'react-i18next';
import { CodeContainer } from '../components/CodeContainer';

import { TutorialPill } from '../components/TutorialPill';

import { HashLink } from 'react-router-hash-link';


export const GetStarted = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1 className='title'>{t('btn-started')}</h1>

            <TutorialPill
                title={t('requisites')}
                text={t('txt-requisites')}
                component={<CodeContainer code='npm create vite@latest my-app' />}
                link={"https://vitejs.dev/guide/"}
                textLink={t('txt-vite-tutorial')}
            />

            <TutorialPill
                title={t('title-instalation')}
                text={t('txt-instalation')}
                component={<CodeContainer code='npm install react-ui-components-dpr' />}
            />


            <CodeContainer
                text={t('txt-import')}
                code={`import { Tooltip } from 'react-ui-components-dpr';`}
            />

            <TutorialPill
                title={t('btn-components')}
                text={t('components-txt')}
            />

            <ul className='ul-components'>
                <li><HashLink className='a-pill' to="/components#modal">Modal</HashLink></li>
                <li><HashLink className='a-pill' to="/components#tooltip">Tooltip</HashLink></li>
                <li><HashLink className='a-pill' to="/components#daragAnDdrop">Drag and drop</HashLink></li>
            </ul>

            <p>{t('dev-route')}</p>
            <ul >
                <li>{t('form')}</li>
                <li>{t('nav')}</li>
                <li>{t('btn')}</li>
                <li>etc..</li>
            </ul>
        </div >
    )
}