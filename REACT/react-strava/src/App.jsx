import './App.css';
import Header from './Header';
import { useState, useContext } from 'react';
import Emaitzak from './Emaitzak';
import CONFIG from './config/config';
import {mock1} from './assets/klubak';
import Jarduerak from './Jarduerak';  
import { Routes, Route } from 'react-router-dom';
import { LanguageContext } from './LanguageProvider';

function App() {
  const [query, setQuery] = useState("");
  const [emaitza, setEmaitza] =useState(null);
  // Language kontestua
  const langContext = useContext(LanguageContext);

  const callServer = async (param) => {
    if (CONFIG.use_server){
      try {
        let queryparams="";
        if (param !== "all"){
          queryparams = "/search?q=" + query;
        }
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);
        const data = await response.json();
        setEmaitza(data);
      }catch (error) {
        console.log(error);
      }
    }
    else {
      setEmaitza(mock1.klubak);
    }
  }
  const cambiaLang = (e, newlang)=>{
    e.preventDefault();
    langContext.switchLang(newlang);
  }
  return (
        <div className="main">
      <Header />
      <Routes>
        {/* Home: bilatzailea eta zerrenda */}
        <Route path="/" element={
          <div>
            <h2 id="bilatzailea">{langContext.strings.bilatzailea}</h2>
            <a href="#" onClick={(e)=>cambiaLang(e, "eu")}>eu</a>
            /
            <a href="#" onClick={(e)=>cambiaLang(e, "en")}>en</a>
            /
            <a href="#" onClick={(e)=>cambiaLang(e, "es")}>es</a>
            <input type='text' id="query" value={query} onChange={e=>setQuery(e.target.value)} placeholder={langContext.strings.izena}></input>
            <button id="botoia" onClick={()=>callServer()}>{langContext.strings.bilatu}</button>
            <button id="denak" onClick={()=>callServer("all")}>{langContext.strings.guztiak}</button>
            {emaitza !== null ? <Emaitzak emaitza={emaitza}/> : <h3>{langContext.strings.ezemaitzarik}</h3>}
          </div>
        }/>      
        {/* Detailea, jarduerak */}
        <Route path="/detailea/:id" element={<Jarduerak />} />
      </Routes>
    </div>
  );
}

export default App
