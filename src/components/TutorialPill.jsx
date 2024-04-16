import '../styles/TutorialPill.css'
export const TutorialPill = ({ title, text, component = null, textLink = null, link = null }) => {

    return (

        <div className='container-pills'>
            <h2 className='subtitle'>{title}</h2>
            <p>{text}</p>
            {link && <ul><li><a className='a-pill' href={link}>{textLink}</a></li></ul>}
            {component && component}
        </div>
    )
}