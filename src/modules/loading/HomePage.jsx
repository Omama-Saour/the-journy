import React from "react";
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

const HomePage = () => {
  return (
    <Layout>
      <CookieConsent/>
      <Hero />
      <Features />
      <AboutUs />
      <CandidateProfile />
      <ExpertAdvice />
      <Steps />
      <Pricing />
      <FAQ />
    </Layout>
  );
};

export default HomePage;
