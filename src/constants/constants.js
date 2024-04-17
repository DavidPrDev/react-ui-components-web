export const modalBtn=`const [modalOpen, setModalOpen] = useState(false);

<button onClick={() => setModalOpen(true)}>Open Modal</button>`;

export const modalComponentOutConfirm=`        
    <Modal
      isOpen={modalOpen}
      setOpen={setModalOpen}
      direction='bottom'
      title="Example title"
    >
      <p>Example text in the body of modal. </p>
    </Modal>`;

export const modalConfirm=`
const [confirm, setConfirm] = useState(false);

      <Modal
        isOpen={modalOpen}
        setOpen={setModalOpen}
        direction='bottom'
        title="Example title"
        confirm={true}
        setConfirm={setConfirm}
      >`

export const modalFunction = `
import React, { useState } from 'react';
import { Modal } from 'react-ui-components-dpr';

const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      <Modal
        isOpen={modalOpen}
        setOpen={setModalOpen}
        direction='bottom'
        title="Example title"
        confirm={true}
        setConfirm={setConfirm}
      >
        <p>Example text in the body of modal. </p>
      </Modal>

    </>
  );
};

export default App;`;

export const tooltipComp=` 
<Tooltip text={t('change-lang')} direction='bottom'>
    <p>Text example</p>
</Tooltip>`;

export const tooltipFunction = `
import React, { useState } from 'react';
import { Tooltip } from 'react-ui-components-dpr';

const App = () => {

  return (
    <>
      <Tooltip text={t('change-lang')} direction='bottom'>
         <p>Text example</p>
      </Tooltip>
    </>
  );
};

export default App;`;

export const dragComponent=`
  <DragAndDrop
    setFile={setFile}
    file={file}
    type='document'
  />`;
export const importDrag=`
import { DragAndDrop } from 'react-ui-components-dpr';
const [file, setFile] = useState(null);
`;

export const dragFunction =`
import React, { useState } from 'react';
import { DragAndDrop } from '../../react-ui-components';

const App = () => {
  const [file, setFile] = useState(null);

  return (
    <>
        <DragAndDrop
          multiple={true}
          setFile={setFile}
          file={file}
          type='document'

        />
    </>
  );
};

export default App;
`; 