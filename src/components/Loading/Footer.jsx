import React, { useState, useEffect } from 'react';
import journyImage from '../../assets/loading/logowhite.png';
import youtube from '../../assets/loading/youtube.png';
import facebook from '../../assets/loading/facebook.png';
import twitter from '../../assets/loading/twitter.png';
import instagram from '../../assets/loading/instagram.png';
import linked from '../../assets/loading/linked.png';
import PrivacyPolicy from '../Modals/LandingFirst/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from '../Modals/LandingFirst/TermsConditions/TermsConditions';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize',   
 handleResize);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenConditions, setIsOpenConditions] = useState(false);
  const navigate = useNavigate();

  const handleOpenClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenClickConditions = () => {
    setIsOpenConditions(true);
  };

  const handleCloseConditions = () => {
    setIsOpenConditions(false);
  };

  return (
    <>
      <footer className="flex flex-col justify-center px-24 py-14 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center p-14 w-full bg-neutral-800 rounded-[32px] max-md:px-5 max-md:max-w-full">
          <div dir="rtl" className={`flex flex-wrap gap-10 ${isMobile ? 'justify-center' : 'justify-between' } items-center w-full max-md:max-w-full`}>
            <img
              loading="lazy"
              src={journyImage}
              alt="Company logo"
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.86] w-[157px]"
            />
            <div className="flex gap-4 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src={youtube}
                alt="Social media icon 1"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <img
                loading="lazy"
                src={facebook}
                alt="Social media icon 2"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <img
                loading="lazy"
                src={twitter}
                alt="Social media icon 3"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <img
                loading="lazy"
                src={instagram}
                alt="Social media icon 4"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <img
                loading="lazy"
                src={linked}
                alt="Social media icon 5"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
            </div>
          </div>
          <div className="flex mt-8 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
          <div className="flex flex-wrap gap-8 justify-center items-center mt-8 w-full text-white max-md:max-w-full">
          <nav className={`flex flex-wrap flex-1 shrink ${isMobile ? '' : 'gap-4'} items-center self-stretch my-auto text-base font-medium leading-none basis-0 min-w-[240px] max-md:max-w-full ${isMobile ? 'justify-center' : ''}`}>   
                <a
                href="#support"
                onClick={() => navigate('/ContactPage', { replace: true })}
                className={`self-stretch px-2 py-3 my-auto text-white no-underline ${isMobile ? 'text-sm' : ''}`}
              >
                الدعم والمساعدة
              </a>
              <a
                href="#terms"
                onClick={handleOpenClickConditions}
                className={`self-stretch px-2 py-3 my-auto text-white no-underline ${isMobile ? 'text-sm' : ''}`}
              >
                شروط والاحكام
              </a>
              <a
                href="#privacy"
                onClick={handleOpenClick}
                className={`self-stretch px-2 py-3 my-auto text-white no-underline ${isMobile ? 'text-sm' : ''}`}
              >
                سياسة الخصوصية
              </a>
            </nav>
            <div
              dir="rtl"
              className={`self-stretch my-auto text-sm leading-snug ${isMobile ? 'text-xs' : ''}`}
            >
              الرحلة @ 2024. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>

      {isOpen && <PrivacyPolicy onSave={handleClose} />}

      {isOpenConditions && <TermsConditions onSave={handleCloseConditions} />}
    </>
  );
};

export default Footer;