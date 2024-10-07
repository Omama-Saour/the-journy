import React from "react";
import Header from "../../components/StepOne/Header";
import MainContentLastPage from "../../components/Loading/LastPage/MainContent";
import Footer from "../../components/Loading/Footer";
import BackgroundImages from "../../components/Payment/loadingPayment/BackgroundImages";
import { useNavigate } from "react-router-dom";

const LandingLastPage = () => {

  const navigate = useNavigate();
  const handleReStart = () => {
    // Implement start journey functionality
   navigate("/LandingFirstPage", { replace: true })
  };

  return (
    <div className="flex overflow-hidden relative flex-col items-start bg-white">
      <Header />
      <MainContentLastPage userName="ماهي" onStart={handleReStart} />
      <Footer />
      <BackgroundImages />
    </div>
  );
};

export default LandingLastPage;
