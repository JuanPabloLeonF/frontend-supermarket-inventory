import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* ==========================================================================
   0. IMPORTS DE TIPOGRAFÍA Inter
   ========================================================================== */
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

import './index.css'
import { ContainerMain } from './presentation/templates/container-main/ContainerMain'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContainerMain/>
  </StrictMode>,
)
