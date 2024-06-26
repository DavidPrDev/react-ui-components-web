import './styles/App.css'
import { Nav } from './components/Nav'
import { GetStarted } from './pages/GetStarted';
import { Components } from './pages/Components';
import { NotFound } from './pages/NotFound';
import { Presentation } from './pages/Presentation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import englishTranslations from './translations/en.json';
import spanishTranslations from './translations/es.json';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: englishTranslations,
    },
    es: {
      translation: spanishTranslations,
    },
  },
});

function App() {

  return (
    <>
      <Router>
        <I18nextProvider i18n={i18next}>
          <Nav />

          <Routes>
            <Route path="/" exact element={<Presentation />} />
            <Route path="/get-started" exact element={<GetStarted />} />
            <Route path="/components" exact element={<Components />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </I18nextProvider>

      </Router>
    </>
  )
}

export default App
