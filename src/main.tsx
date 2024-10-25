import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './Routes.tsx'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import { AuthProvider } from './firebaseConfig.tsx'
import './index.css'
import Layout from './lib/layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Layout children={<App />} />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
