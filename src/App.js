import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Quick from "./component/qucikDepositWithdrawl";
import VisaMasterCard from "./component/visaQuickDepositWithdrawal";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="veximo" element={<Quick />} />
                <Route path="card" element={<VisaMasterCard />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
