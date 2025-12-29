import { HashRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { ResultPage } from './pages/Result/ResultPage';
import { routPaths } from './consts/routPaths';
import { PersonPage } from './pages/Person/PersonPage';

function App() {
  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', gap: 40}}>
      <h1 style={{fontSize: 35}}>Тайный Санта</h1>

      <HashRouter>
        <Routes>
          <Route path={routPaths.home} element={<HomePage />} />
          <Route path={routPaths.result} element={<ResultPage />} />
          <Route path={routPaths.person} element={<PersonPage />} />
          {/* TODO fallback page */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
