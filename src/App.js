import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProgramStudi from './pages/ProgramStudi';
import About from './pages/About';
import Sejarah from './pages/Sejarah';
import Struktur from './pages/Struktur';
import Beasiswa from './pages/Beasiswa';
import Masjid from './pages/Masjid';
import Kelas from './pages/Kelas';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
import VisiMisi from './pages/VisiMisi';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-hidden">
        <div className="flex flex-col min-h-screen relative">
          <header className="relative z-50">
            <Navbar />
          </header>
          
          <main className="flex-grow relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tentang/profil" element={<Profile />} />
              <Route path="/visi-misi" element={<VisiMisi />} />
              <Route path="/program-studi" element={<ProgramStudi />} />
              <Route path="/tentang" element={<About />} />
              <Route path="/sejarah" element={<Sejarah />} />
              <Route path="/tentang/struktur" element={<Struktur />} />
              <Route path="/kemahasiswaan/beasiswa" element={<Beasiswa />} />
              <Route path="/fasilitas/masjid" element={<Masjid />} />
              <Route path="/fasilitas/kelas" element={<Kelas />} />
              <Route path="/daftar" element={<Registration />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <footer className="relative z-10">
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
