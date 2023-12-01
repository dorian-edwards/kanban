import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './index.css'
import App from './App'
import ThemeContextProvider from './contexts/ThemeContext'
import SidePanelProvider from './contexts/SidePanelContext'
import OverlayContextProvider from './contexts/OverlayContext'
import StateManagement from './contexts/StateManagement'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <OverlayContextProvider>
        <SidePanelProvider>
          <StateManagement>
            <App />
          </StateManagement>
        </SidePanelProvider>
      </OverlayContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)
