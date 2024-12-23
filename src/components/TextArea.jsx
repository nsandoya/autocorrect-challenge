//import React from 'react'

import { useAutocorrect } from "../hooks/useAutocorrect"

const TextArea = () => {
  // Custom hook :)
  const {textArea, handleTextArea} = useAutocorrect()

  return (
    <div>
      <textarea 
        type="textarea"
        value={textArea}
        onChange={handleTextArea}
        placeholder="Write your wrong text here :)"
        rows={10}
        cols={80}
      ></textarea>
    </div>
  )
}

export default TextArea
