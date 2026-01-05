import { useContext } from 'react'
import { LanguageContext } from './LanguageProvider';

export default function Header(props) {
    const langContext = useContext(LanguageContext);
    return (<div id="goiburua">
        <img className="logo" src="/strava.webp" alt="strava logoa" />
       <h3 className="mezua">{langContext.strings.mezua}</h3>
    </div>
    );
}