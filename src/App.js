import { Route, Routes } from "react-router-dom";
import Register from "./modules/auth/pages/Register";
import Login from "./modules/auth/pages/Login";
import RequireAuth from "./modules/auth/RequireAuth";
import ChangePassword from "./modules/auth/pages/ChangePassword";
import ReChangePassword from "./modules/auth/pages/ReChangePassword";
import ReChangePassword2 from "./modules/auth/pages/ReChangePassword2";

import LandingFirstPage from "./modules/loading/HomePage";
import ContactPage from "./modules/loading/ContactPage";

import LandingPage from "../src/modules/payment/LandingPage";
import Pricing from "./modules/payment/Pricing";
import PaymentPage from "./modules/payment/PaymentPage";

import StepNone from "./modules/steps/stepone/StepNone";
import StepNTwo from "./modules/steps/steptwo/StepNTwo";
import StepNThree from "./modules/steps/stepthree/StepNThree";
import StepNFour from "./modules/steps/stepfour/stepNFour";
import StepNFive from "./modules/steps/stepfive/stepNFive";

import LandingLastPage from "./modules/loading/LandingLastPage";

function App() {
  return (
    <div style={{ fontFamily: "Cairo, sans-serif" }}>
      {/* <Register /> */}
      <Routes>

        <Route path="/" element= { <LandingFirstPage /> }/>
        {/* <Route path="/" element= { <LandingFirstPage /> }/>   */}
        
        {/* Landing */}
        <Route path="/LandingFirstPage" element= { <LandingFirstPage /> }/> 
        <Route path="/ContactPage" element= { <ContactPage /> }/> 
        
        {/* Auth */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/rechange-password" element={<ReChangePassword/>} />
        <Route path="/rechange-password2" element={<ReChangePassword2/>} />

{/* manage routes: */}

        {/* payment */}
        <Route path="/LandingPage" element= { <LandingPage /> }/>
        <Route path="/Pricing" element= { <Pricing /> }/>  
        <Route path="/PaymentPage" element= { <PaymentPage /> }/>  

        {/*steps*/}
        <Route path="/StepNone" element= { <StepNone /> }/>  
        <Route path="/StepNTwo" element= { <StepNTwo /> }/>  
        <Route path="/StepNThree" element= { <StepNThree /> }/>  
        <Route path="/StepNFour" element= { <StepNFour /> }/>  
        <Route path="/StepNFive" element= { <StepNFive /> }/>  

        {/* Last Page */}
        <Route path="/LandingLastPage" element= { <LandingLastPage /> }/>  

        <Route element={<RequireAuth />}>
          <Route path="/" element={<LandingPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
