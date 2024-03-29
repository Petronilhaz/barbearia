import Home from "./components/Home"
import PriceTable from "./components/PriceTable";
import Schedule from "./components/Schedule";
import WaitingList from "./components/WaitingList";
import Contact from "./components/Contact/Contact";
import { CustomerProvider } from "./context/context";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <CustomerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tabela de Preços" element={<PriceTable />}/>
          <Route path="/Agendar Corte" element={<Schedule />}/>
          <Route path="/Lista de Espera" element={<WaitingList />} />
          <Route path="/Contato" element={<Contact />} />
        </Routes>
      </Router>
    </CustomerProvider>
    </>
  );
}

export default App;
