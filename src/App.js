import { Routes, Route, HashRouter } from 'react-router-dom'
import Layout from './components/Layout';
import Estimate from './views/estimate';



const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="estimate" element={<Estimate />} />
        </Route>
      </Routes>
      </HashRouter>
  )
}

export default App;
