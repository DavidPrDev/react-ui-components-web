
import '../styles/CopyContainer.css'
import { FaCopy } from "react-icons/fa6";
import { Tooltip } from 'react-ui-components-dpr';
import { useTranslation } from 'react-i18next';

export const CopyContainer = () => {
    const { t } = useTranslation();

    const textToCopy = 'npm install react-ui-components-dpr';
    return (
        <div className='container-code'>
            <div className='container-code-txt'>
                <p>npm install react-ui-components-dpr</p>

                <Tooltip text={t('copy')} direction='bottom'>
                    <span onClick={() => { navigator.clipboard.writeText(textToCopy); }} className='copy-icon'>
                        <FaCopy size={25} />
                    </span>
                </Tooltip>
            </div>
        </div>
    )

}