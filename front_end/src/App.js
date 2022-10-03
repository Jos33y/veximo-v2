import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Quick from "./component/quickDepositWithdrawl";
import VisaMasterCard from "./component/visaQuickDepositWithdrawal";
import SignIn from "./Authentication/SignIn";
import Register from "./Authentication/Register";
import ConfirmEmail from "./Authentication/Register/confirmEmail";
import EmailConfirmed from "./Authentication/Register/emailConfirmed";
import DashboardHome from "./Dashboard/pages/Home";
import DashboardTrades from "./Dashboard/pages/Trades";
import DashboardAssets from "./Dashboard/pages/Assets";
import DashboardReferralProgram from "./Dashboard/pages/RefProgram";
import DashboardSettings from "./Dashboard/pages/Settings";
import DashboardOrderHistory from "./Dashboard/pages/History/order";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="veximo" element={<Quick />} />
                <Route path="card" element={<VisaMasterCard />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/confirm_email" element={<ConfirmEmail />} />
                <Route path="/email_confirmed" element={<EmailConfirmed />} />
                <Route path="/dashboard/home" element={<DashboardHome />} />
                <Route path="/dashboard/trades" element={<DashboardTrades />} />
                <Route path="/dashboard/assets" element={<DashboardAssets />} />
                <Route path="/dashboard/ref_program" element={<DashboardReferralProgram />} />
                <Route path="/dashboard/settings" element={<DashboardSettings />} />
                <Route path="/dashboard/history/order" element={<DashboardOrderHistory />} />

            </Routes>
        </Router>
    </div>
  );
}

export default App;
