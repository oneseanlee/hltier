import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Company } from './pages/Company';

import Home2 from "./pages/Home2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </Router>
  );
}

export default App;
