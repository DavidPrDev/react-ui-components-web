import '../styles/Presentation.css'
import { Link } from 'react-router-dom';
import { FaCopy } from "react-icons/fa6";

export const Presentation = () => {
    const textToCopy = 'npm install react-ui-components-dpr';
    return (
        <div className='container-presentation'>
            <h1>React-ui-components</h1>
            <p className='sub-title'>A small library for react with variety of ui components</p>

            <div className='btn-container'>
                <Link className='btn-get-started' to="/get-started">Get started</Link>
                <p className='npm-code'>npm install react-ui-components-dpr </p><span onClick={() => { navigator.clipboard.writeText(textToCopy); }} className='copy-icon'><FaCopy size={20} /></span>
            </div>
        </div>
    )
}