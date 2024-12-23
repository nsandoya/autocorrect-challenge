import { useState } from "react";

export const useAutocorrect = () => {
    const [textArea, setTextArea] = useState("");
    const dictionary = {
        wierd: "weird",
        okya: "okey",
        beginer: "beginner"
    }

    const handleTextArea = ({target}) => {
    // <textarea/> value
    const {value: textAreaInput} = target;
    // 
    let correctedTextAreaValue 
    // Array de palabras
    const textAreaContent = textAreaInput.split(" ")
    // Por cada ítem del diccionario...
    Object.keys(dictionary).forEach((word) => {
      // Variable que guarda una coincidencia con el dict a medida que vamos escribiendo
      let coincidence = textAreaContent.filter((item) => item.toLowerCase() === word)[0];
      // Espacios en blanco para ejecutar el handle después de escribir la palabra (no después de dejar de escribir)
      let whiteSpace = textAreaContent.filter((item) => item === "").length;
      // Si hay una coincidencia con el dict de palabras mal escritas...
      if(coincidence){
        let toReplace = coincidence.toLowerCase();
        if(toReplace === word && whiteSpace === 1){
          correctedTextAreaValue = textAreaInput.replace(coincidence, dictionary[toReplace])
        }
      }
      // Si el usuario borra todo, es necesario actualizar el estado
      if(textAreaInput === "") setTextArea("")
    });
    // Si hay correcciones...
    if(correctedTextAreaValue){
        setTextArea(correctedTextAreaValue)
      }else{
      // Si no hay correcciones, el estado se actualiza con el valor actual de <textarea>
        setTextArea(textAreaInput)
      }
    }

    return {textArea, handleTextArea}

}