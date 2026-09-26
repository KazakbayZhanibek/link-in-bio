import { hydrateRoot } from 'react-dom/client'
import App from './App'
import '@fontsource/unbounded/cyrillic-800.css'
import '@fontsource/unbounded/latin-800.css'
import '@fontsource/manrope/cyrillic-400.css'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/cyrillic-600.css'
import '@fontsource/manrope/latin-600.css'
import './style.css'

hydrateRoot(document.getElementById('root')!, <App />)
