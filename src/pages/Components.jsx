import '../styles/Components.css'
import { useTranslation } from 'react-i18next';
import { TutorialPill } from '../components/TutorialPill';
import { CodeContainer } from '../components/CodeContainer';
import { modalFunction, modalBtn, modalComponentOutConfirm } from '../constants/constants';

export const Components = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <h1 className='title'>{t('btn-components')}</h1>

            <div id="modal">

                <TutorialPill
                    title="Modal"
                    text={t('txt-modal')}
                    component={<CodeContainer code={`import { Modal } from 'react-ui-components-dpr';`} />}
                    textLink={t('txt-vite-tutorial')}
                />

                <CodeContainer
                    text={t('txt-modal-btn')}
                    code={modalBtn}
                />

                <CodeContainer
                    text={t('simple-props-modal')}
                    code={modalComponentOutConfirm}
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