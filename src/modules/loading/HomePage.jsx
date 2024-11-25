import React, { useState, useEffect } from 'react';
import Layout from "../../components/Loading/Layout";
import Hero from "../../components/Loading/Hero";
import Features from "../../components/Loading/Features";
import AboutUs from "../../components/Loading/AboutUs";
import CandidateProfile from "../../components/Loading/CandidateProfile";
import ExpertAdvice from "../../components/Loading/ExpertAdvice";
import Steps from "../../components/Loading/Steps";
import Pricing from "../../components/Loading/Pricing";
import FAQ from "../../components/Loading/FAQ";
import CookieConsent from "../../components/Modals/LandingFirst/CookieConsent/CookieConsent"
import Founder from "../../components/Loading/Founder";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);
  return (
    <Layout>
      <CookieConsent/>
      <Hero />
      <Features />
      <AboutUs />
      <CandidateProfile />
      <ExpertAdvice />
      {
        isMobile ? 
      <>
       <Pricing />
       <Steps /> 
      </>
        :
      <>
        <Steps /> 
        <Pricing />
      </>
      }
      <Founder/>
      <FAQ />
    </Layout>
  );
};

export default HomePage;
