import React from "react";
import Header from "../../components/StepOne/Header";
import MainContent from "../../components/Payment/loadingPayment/MainContent";
import Footer from "../../components/Loading/Footer";
import BackgroundImages from "../../components/Payment/loadingPayment/BackgroundImages";

const LandingPage = () => {
  const handleLogout = () => {
    // Implement logout functionality
  };

  const handleStart = () => {
    // Implement start journey functionality
  };

  return (
    <div className="flex overflow-hidden relative flex-col items-start bg-white">
      <Header onLogout={handleLogout} />
      <MainContent userName="ماهي" onStart={handleStart} />
      <Footer />
      <BackgroundImages />
    </div>
  );
};

export default LandingPage;
