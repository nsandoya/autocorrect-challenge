import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import AutocorrectApp from './AutocorrectApp'
import TextArea from './components/TextArea'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='title'>
      <h1>Autocorrect</h1>
      <p>Coding Challenge</p>

      <span>Please, use these typos --with a white space included: okya, wierd, beginer</span>
    </div>
    <TextArea></TextArea>
  </StrictMode>,
)
