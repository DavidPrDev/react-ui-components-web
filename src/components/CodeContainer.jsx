import '../styles/CodeContainer.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const CodeContainer = ({ text = null, code }) => {

    const { t } = useTranslation();

    const [copy, setCopy] = useState(false)

    const handelCopy = () => {

        setCopy(true);
        navigator.clipboard.writeText(code);
        setTimeout(() => {
            setCopy(false)
        }, 1000);
    }

    return (
        <>
            {text && <p className='txt-code'>{text}</p>}
            <div className='code-container'>

                <SyntaxHighlighter className="code" language="jsx" style={darcula}>
                    {code}
                </SyntaxHighlighter>

                <span onClick={() => handelCopy()} className='copy-icon'>
                    {copy == false ? <FaCopy size={25} /> : <FaCheckCircle size={25} />}
                </span>

            </div>
        </>
    );
}