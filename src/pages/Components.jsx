import '../styles/Components.css'
import { useTranslation } from 'react-i18next';
import { TutorialPill } from '../components/TutorialPill';
import { CodeContainer } from '../components/CodeContainer';
import {
    modalFunction,
    modalBtn,
    modalComponentOutConfirm,
    modalConfirm,
    tooltipComp,
    tooltipFunction,
    dragComponent,
    importDrag,
    dragFunction
} from '../constants/constants';
import { Modal, Tooltip, DragAndDrop } from 'react-ui-components-dpr';
import { useState } from 'react';

export const Components = () => {

    const { t } = useTranslation();

    const [modalOpen, setModalOpen] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [file, setFile] = useState(null);
    const [direction, setDirection] = useState('bottom');
    const [confirmation, setConfirmation] = useState(false);
    const [type, setType] = useState('document');
    const [multiple, setMultiple] = useState(false);


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
                <div className='container-modal'>
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
                </div>
                <button className='btn-modal' onClick={() => setModalOpen(true)}>Open Modal</button>

                <div className='container-live-demo'>
                    <label className='label-demo' htmlFor="selectDirection">
                        Select direction:
                        <select className='select-dierection' id="selectDirection" onChange={(event) => setDirection(event.target.value)} >
                            <option>bottom</option>
                            <option>top</option>
                            <option>left</option>
                            <option>right</option>
                        </select>
                    </label>
                    <label className='label-demo' htmlFor="cbox1">
                        Confirm
                        <input onChange={() => setConfirmation(true)} type="radio" name="confirmation" id="cbox1" checked={confirmation} />
                    </label>
                    <label className='label-demo' htmlFor="cbox2">
                        Without confirm
                        <input onChange={() => setConfirmation(false)} type="radio" id="cbox2" name="outConfirmation" checked={!confirmation} />
                    </label>

                </div>


                <CodeContainer
                    text={t('full-code')}
                    code={modalFunction}
                />


            </div>

            <div id="daragAnDdrop">
                <TutorialPill
                    title="Drag & drop"
                    text={t('import-drag')}
                    component={<CodeContainer code={importDrag} />}
                />

                <CodeContainer
                    text={t('txt-drag')}
                    code={dragComponent}
                />

                <CodeContainer
                    text={t('props-drag')}
                    code={`type='document' // or image`}
                />

                <CodeContainer
                    text={t('props-drag-multi')}
                    code={`multiple={true}`}
                />

                <p>Live demo: </p>
                <div className='container-live-demo'>
                    <label className='label-demo' htmlFor="selectDocument">
                        Select type:
                        <select className='select-dierection' id="selectDocument" onChange={(event) => setType(event.target.value)} >
                            <option value='document'>Document</option>
                            <option value='image'>Image</option>
                        </select>
                    </label>
                    <label className='label-demo' htmlFor="cbox5">
                        Multiple
                        <input onChange={() => setMultiple(true)} type="radio" name="multiple" id="cbox5" checked={multiple} />
                    </label>
                    <label className='label-demo' htmlFor="cbox6">
                        Individual
                        <input onChange={() => setMultiple(false)} type="radio" id="cbox6" name="individual" checked={!multiple} />
                    </label>

                </div>
                <div className='container-drag'>
                    {multiple == false ?
                        <DragAndDrop
                            setFile={setFile}
                            file={file}
                            type={type}
                        />
                        :
                        <DragAndDrop
                            multiple={true}
                            setFile={setFile}
                            file={file}
                            type={type}
                        />
                    }

                </div>
                <CodeContainer
                    text={t('full-code')}
                    code={dragFunction}
                />

            </div>

            <div id="tooltip">
                <TutorialPill
                    title="Tooltip"
                    text={t('txt-modal')}
                    component={<CodeContainer code={`import { Tooltip } from 'react-ui-components-dpr';`} />}
                />

                <CodeContainer
                    text={t('txt-tooltip')}
                    code={tooltipComp}
                />

                <CodeContainer
                    text={t('tooltip-props')}
                    code={`direction='bottom' //or top`}
                />

                <p>Live demo :</p>
                <div className='container-live-demo'>
                    <label className='label-demo' htmlFor="cbox3">
                        Bottom
                        <input onChange={() => setDirection('bottom')} type="radio" name="confirmationt" id="cbox3" checked={direction === 'bottom'} />
                    </label>
                    <label className='label-demo' htmlFor="cbox4">
                        Top
                        <input onChange={() => setDirection('top')} type="radio" id="cbox4" name="outConfirmationt" checked={direction === 'top'} />
                    </label>
                </div>
                <div className='container-tooltip'>
                    <Tooltip text='Text example' direction={direction}>
                        <p className='tooltip-target'>Hover mi 🖱️</p>
                    </Tooltip>
                </div>


                <CodeContainer
                    text={t('full-code')}
                    code={tooltipFunction}
                />
            </div>

        </div>
    )
}