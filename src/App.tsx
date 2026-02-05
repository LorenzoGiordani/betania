import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ChiSiamo } from './pages/ChiSiamo';
import { ProgrammaTerapeutico } from './pages/ProgrammaTerapeutico';
import { AccoglienzaMigranti } from './pages/AccoglienzaMigranti';
import { CasaFrancesco } from './pages/CasaFrancesco';
import { AltriServizi } from './pages/AltriServizi';
import { Laboratori } from './pages/Laboratori';
import { Contatti } from './pages/Contatti';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/programma-terapeutico" element={<ProgrammaTerapeutico />} />
            <Route path="/accoglienza-migranti" element={<AccoglienzaMigranti />} />
            <Route path="/casa-francesco" element={<CasaFrancesco />} />
            <Route path="/altri-servizi" element={<AltriServizi />} />
            <Route path="/laboratori" element={<Laboratori />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
