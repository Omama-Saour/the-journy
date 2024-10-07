import React, { useState } from "react";
import Header from "../../../components/StepOne/Header";
import LinkedInProfileUpload from "../../../components/StepThree/LinkedInProfileUpload/LinkedInProfileUpload";
import LoadingComponent from "../../../components/StepThree/LoadingComponent/LoadingComponent";
import AnalysisSection from "../../../components/StepThree/LinkedInAnalysis/AnalysisSection";
import SkillAssessment from "../../../components/StepThree/LinkedInAnalysis/SkillAssessment";
import ProgressSteps from "../../../components/StepThree/ProgressSteps";
import patternbackground from "../../../assets/loading/patternbackground.png";
import arrow from "../../../assets/StepOne/arrow-left-line.png";
import { Send_PDFfileLinkedIn, Send_Resault, Get_LinkedInAnalysis } from "./service";
import { useNavigate } from "react-router-dom";

const StepNThree = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loadingDone, setLoadingDone] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("يرجى اختيار ملف PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    setError("");

    try {
      const response = await Send_PDFfileLinkedIn(formData);
      console.log(response);
      console.log("تم إرسال الملف بنجاح!");
      const sendResponse = await Send_Resault(response.data);
      console.log(sendResponse);
      console.log("تم إرسال النتيجة بنجاح!");

       // Get analysis
       const analysisResponse = await Get_LinkedInAnalysis();
       setAnalysisData(analysisResponse.data); // Store analysis data
       console.log(analysisResponse);
       console.log(analysisResponse.data);

      setLoading(false);
      setLoadingDone(true);
    } catch (err) {
      console.error("Failed to send file:", err);
      setError("فشل في إرسال الملف. حاول مرة أخرى.");
    }
  };

  return (
    <div
      className="flex overflow-hidden flex-col"
      style={{
        backgroundImage: `url(${patternbackground})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <main className="flex z-10 flex-wrap gap-10 justify-center p-8 w-full min-h-[632px] max-md:px-5 max-md:max-w-full">
        {loading && (
          <>
            <LoadingComponent />
            <div className="flex flex-col">
              <ProgressSteps />
            </div>
          </>
        )}

        {!loading && !loadingDone && (
          <>
            <LinkedInProfileUpload setSelectedFile={setSelectedFile} />
            <div className="flex flex-col">
              <ProgressSteps />
            </div>
          </>
        )}

        {loadingDone && (
          <>
            <AnalysisSection analysisData={analysisData} /> 

            <div className="flex flex-col">
              <ProgressSteps />
              <SkillAssessment analysisData={analysisData} />
            </div>
          </>
        )}
      </main>
      {error && (
        <div dir="rtl" className="text-red-500 text-xl text-center bg-white">
          {error}
        </div>
      )}

      <div className="flex relative gap-2.5 items-center px-24 py-14 max-md:px-5">
        <div
          className={`flex gap-2.5 justify-center items-center self-stretch pr-4 pl-5 my-auto ${
            loading || !selectedFile ? "bg-stone-300" : "bg-black"
          }
     
          h-[75px] min-h-[75px] rotate-[-3.141592653589793rad] rounded-[50px] w-[75px] cursor-pointer`}
          onClick={() => {
            if (loadingDone) {
              navigate("/StepNFour", { replace: true });
            } else if (!loading) {
              handleSubmit();
            }
          }}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="loader"></div>
              </div>
            </div>
          ) : (
            <img
              loading="lazy"
              src={arrow}
              alt=""
              className="object-contain self-stretch my-auto w-10 aspect-square"
            />
          )}
        </div>
      </div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default StepNThree;
