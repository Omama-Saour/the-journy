import React from "react";
import Header from "../../components/StepOne/Header";
import MainContentLastPage from "../../components/Loading/LastPage/MainContent";
import Footer from "../../components/Loading/Footer";
import BackgroundImages from "../../components/Payment/loadingPayment/BackgroundImages";

const LandingLastPage = () => {

  const handleReStart = () => {
    // Implement start journey functionality
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
