import React, { useState } from "react";
import closered from "../../../../assets/StepOne/closered.png";
import upload from "../../../../assets/StepOne/file-upload.png";
import { useNavigate } from "react-router-dom";
import {
  OptionalLinkedInURL,
  OptionalUploadCV,
  SendExtractedCV,
} from "../../../../modules/steps/stepone/service";

const ProgressBar = () => {
  const navigate = useNavigate();
  const steps = ["سيرتك الذاتية", "رابط لينكدان"];
  const [activeStep, setActiveStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null); // State for the selected file
  const [imageSrc, setImageSrc] = useState(upload);
  const [linkedinURL, setLinkedinURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size === 0) {
        setErrorMessage("الملف المحدد فارغ. يرجى اختيار ملف صالح.");
        return;
      }
      setSelectedFile(file);
      setImageSrc(closered);
      console.log(file.name);
    }
  };

  const handleImageClick = () => {
    setImageSrc(upload);
    setSelectedFile(null);
  };

  const cleanDates = (data) => {
    // Check if the data is an array
    if (Array.isArray(data)) {
      return data.map(cleanDates); // Recursively clean each item in the array
    } else if (typeof data === "object" && data !== null) {
      const cleanedData = { ...data }; // Create a shallow copy of the object

      // Check for specific fields and clean them
      if (cleanedData.start_date === "not mentioned") {
        cleanedData.start_date = "2020-01-01";
      }
      if (cleanedData.end_date === "not mentioned") {
        cleanedData.end_date = "2020-01-01";
      }
      if (cleanedData.expiration_date === "not mentioned") {
        cleanedData.expiration_date = "2020-01-01";
      }
      if (cleanedData.issue_date === "not mentioned") {
        cleanedData.issue_date = "2020-01-01";
      }

      // Recursively clean nested arrays or objects
      for (const key in cleanedData) {
        cleanedData[key] = cleanDates(cleanedData[key]);
      }

      return cleanedData; // Return the cleaned object
    }
    return data; // Return the data as is if no condition matches
  };

  const handleAddStep0 = () => {
    setActiveStep(0);
  };

  const handleAddStep1 = async () => {
    setLoading(true);
    setErrorMessage("");

    let isFileUploaded = false;
    let isLinkedInAdded = false;

    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);

      console.log("formData");
      console.log([...formData]);
      try {
        const response = await OptionalUploadCV(formData);
        console.log("File uploaded");
        console.log(response.data);

        // Replace "not mentioned" with an empty string in the response data
        const cleanedData = cleanDates(response.data);

        const sendresponse = await SendExtractedCV(cleanedData);
        console.log("sendresponse", sendresponse);

        // const sendresponse = await SendExtractedCV(response.data);
        // console.log("sendresponse");
        // console.log(sendresponse);
        isFileUploaded = true; // Mark file upload as successful
      } catch (error) {
        console.error("Error uploading CV:", error);
        setErrorMessage("خطأ في رفع السيرة الذاتية. حاول مرة أخرى.");
      }
    }

    if (linkedinURL) {
      const data = { linkedin_url: linkedinURL };

      try {
        const response = await OptionalLinkedInURL(data);
        console.log("LinkedIn added");
        console.log(response);
        isLinkedInAdded = true; // Mark LinkedIn URL addition as successful
      } catch (error) {
        if (error.response && error.response.status === 422) {
          setErrorMessage("الرابط غير صالح، تأكد من إضافة رابط صحيح");
        } else {
          setErrorMessage("خطأ في إرسال رابط لينكدان. حاول مرة أخرى.");
        }
        console.error("Error sending LinkedIn URL:", error);
      }
    }

    setLoading(false);

    // Navigate only if both operations were successful
    if (isFileUploaded && isLinkedInAdded) {
      navigate("/StepNTwo", { replace: true });
    }
  };

  return (
    <>
      <div className="flex z-0 flex-col mt-10 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-start w-full text-base font-bold text-center max-md:max-w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 shrink basis-0 cursor-pointer ${
                index === activeStep ? "text-indigo-600" : "text-neutral-800"
              }`}
              onClick={() => handleStepClick(index)}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center mt-1 w-full max-md:max-w-full">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`flex flex-1 shrink self-stretch my-auto h-1 ${
                index === activeStep ? "bg-indigo-600" : "bg-violet-200"
              } rounded basis-0 min-w-[240px] w-[370px]`}
            />
          ))}
        </div>
      </div>
      {activeStep === 0 && (
        <div className="flex z-0 flex-col mt-10 w-full text-sm min-h-[78px] text-neutral-800 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <label
              htmlFor="fileUpload"
              className="gap-1 self-stretch w-full font-bold text-right h-[22px] max-md:max-w-full"
            >
              رفع سيرتك الذاتية
            </label>

            <button
              onClick={() => document.getElementById("fileUpload").click()}
              className="flex flex-wrap gap-10 justify-between items-center px-4 py-3 mt-1 w-full text-center bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full"
            >
              <input
                type="file"
                id="fileUpload"
                accept=".doc,.docx,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <img
                src={imageSrc}
                onClick={handleImageClick}
                alt="Upload Icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              {selectedFile ? selectedFile.name : "أرفع سيرتك الذاتية"}
            </button>
            {/* </div> */}
          </div>
        </div>
      )}

      {activeStep === 1 && (
        <div className="flex z-0 flex-col mt-10 w-full text-sm min-h-[78px] text-neutral-800 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <label
              htmlFor="linkedinInput"
              className="gap-1 self-stretch w-full font-bold text-right h-[22px] max-md:max-w-full"
            >
              رابط لينكدان
            </label>
            <input
              type="url"
              dir="rtl"
              id="linkedinInput"
              placeholder="أدخل رابط لينكدان"
              className="flex gap-2.5 items-center px-4 py-3 mt-1 w-full text-right bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full"
              aria-label="أدخل رابط لينكدان"
              value={linkedinURL}
              onChange={(e) => setLinkedinURL(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="flex z-0 gap-6 items-center self-center mt-10 text-lg font-medium leading-none text-right whitespace-nowrap max-md:max-w-full">
        {loading ? (
          <div className="loader" />
        ) : (
          <>
            <button
              onClick={() => navigate("/StepNTwo", { replace: true })}
              className="gap-1 self-stretch px-12 py-3 my-auto border-2 border-solid border-neutral-800 border-opacity-20 min-h-[30px] rounded-[32px] text-neutral-800 w-[200px] max-md:px-5"
            >
              تخطي
            </button>
            <button
              onClick={activeStep === 1 ? handleAddStep0 : handleAddStep1}
              className={`gap-2.5 self-stretch px-12 py-3 my-auto text-white rounded-[32px] w-[200px] max-md:px-5 ${
                loading ? "bg-gray-400" : "bg-neutral-800"
              }`}
            >
              إضافة
            </button>
          </>
        )}
      </div>

      {errorMessage && (
        <div dir="rtl" className="text-red-500 text-center mt-4">
          {errorMessage}
        </div>
      )}

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
    </>
  );
};

export default ProgressBar;
