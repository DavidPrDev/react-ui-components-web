import '../styles/CodeContainer.css'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';


export const CodeContainer = ({ string }) => {


    return (
        <SyntaxHighlighter language="jsx" style={darcula}>
            {string}
        </SyntaxHighlighter>
    );
}