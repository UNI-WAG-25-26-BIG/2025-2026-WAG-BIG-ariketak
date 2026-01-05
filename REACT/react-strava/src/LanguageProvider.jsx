import { createContext, useState } from "react";

export const LanguageContext = createContext({});

const langData = {
  "en": {
    mezua: "Welcome to Strava web",
    bilatzailea: "Club search",
    izena: "Search club name",
    bilatu: "Search",
    guztiak: "See All",
    ezemaitzarik: "No results to display"
  },
  "es": {
    mezua: "Bienvenido a la web de Strava",
    bilatzailea: "Búsqueda de clubes",
    izena: "Buscar nombre del club",
    bilatu: "Buscar",
    guztiak: "Ver todos",
    ezemaitzarik: "No hay resultados para mostrar"
  },
  "eu": {
    mezua: "Ongi etorri Strava web orrira",
    bilatzailea: "Kluben bilatzailea",
    izena: "Bilatu klubaren izena",
    bilatu: "Bilatu",
    guztiak: "Ikusi guztiak",
    ezemaitzarik: "Ez dago erakusteko emaitzarik"
  }
}

export function LanguageProvider(props) {
  const [lang, setLang] = useState("eu");

  function switchLang(newLang){
    console.log("Hizkuntza aldatuko da:", newLang);
    setLang(newLang);
  }

  const context = {
    language: lang,
    strings: langData[lang],
    switchLang: switchLang,
  };

  return (
    <LanguageContext value={context}>
      {props.children}
    </LanguageContext>
  );
};