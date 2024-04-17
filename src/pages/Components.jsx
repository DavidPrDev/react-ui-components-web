import '../styles/Components.css'
import { useTranslation } from 'react-i18next';
import { TutorialPill } from '../components/TutorialPill';
import { CodeContainer } from '../components/CodeContainer';
import { modalFunction, modalBtn, modalComponentOutConfirm, modalConfirm } from '../constants/constants';
import { Modal } from 'react-ui-components-dpr';
import { useState } from 'react';

export const Components = () => {

    const { t } = useTranslation();

    const [modalOpen, setModalOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const [direction, setDirection] = useState('bottom')
    const [confirmation, setConfirmation] = useState(false)

    return (
        <div className="container-page">
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
                <CodeContainer
                    text={t('modal-extra-props')}
                    code={modalConfirm}
                />

                <CodeContainer
                    text={t('dir-modal')}
                    code={`direction='bottom' // or top,left,right`}
                />

                <p>Live demo :</p>

                {confirmation == false ?
                    <Modal
                        isOpen={modalOpen}
                        setOpen={setModalOpen}
                        direction={direction}
                        title="Title Example"
                    >
                        Example body
                    </Modal>
                    :
                    <Modal
                        isOpen={modalOpen}
                        setOpen={setModalOpen}
                        direction={direction}
                        title="Title Example"
                        confirm={true}
                        setConfirm={setConfirm}
                    >
                        Example body
                    </Modal>
                }
                <button className='btn-modal' onClick={() => setModalOpen(true)}>Open Modal</button>

                <div className='container-live-demo'>
                    <label className='label-demo' htmlFor="selectDirection">
                        Select the direction:
                        <select className='select-dierection' onChange={(event) => setDirection(event.target.value)} >
                            <option>bottom</option>
                            <option>top</option>
                            <option>left</option>
                            <option>right</option>
                        </select>
                    </label>
                    <label className='label-demo' htmlFor="cbox1">
                        Confirm
                        <input onChange={() => setConfirmation(true)} type="radio" name="confirmation" checked={confirmation} />
                    </label>
                    <label className='label-demo' htmlFor="cbox2">
                        Without confirm
                        <input onChange={() => setConfirmation(false)} type="radio" name="outConfirmation" checked={!confirmation} />
                    </label>

                </div>


                <CodeContainer
                    text={t('full-code')}
                    code={modalFunction}
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