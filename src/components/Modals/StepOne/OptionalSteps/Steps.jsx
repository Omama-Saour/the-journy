import React, { useState } from "react";
import closered from "../../../../assets/StepOne/closered.png";
import upload from "../../../../assets/StepOne/file-upload.png";
import {
  OptionalLinkedInURL,
  OptionalUploadCV,
  SendExtractedCV,
} from "../../../../modules/steps/stepone/service";

const ProgressBar = ({ onSave }) => {
  const steps = ["سيرتك الذاتية", "رابط لينكدان"];
  const [activeStep, setActiveStep] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null); 
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

//   const cleanDates = (data) => {
//     const today = new Date();
//     const formattedToday = today.toISOString().split('T')[0]; // Formats as 'YYYY-MM-DD'

//     // Function to convert date from DD-MM-YYYY to YYYY-MM-DD
//     const formatDate = (dateStr) => {
//         const parts = dateStr.split('-');
//         if (parts.length === 3) {
//             const [day, month, year] = parts;
//             return `${year}-${month}-${day}`; // Reformat to YYYY-MM-DD
//         }
//         return dateStr; // Return original if format is unexpected
//     };

//     // Check if the data is an array
//     if (Array.isArray(data)) {
//         return data.map(cleanDates); // Recursively clean each item in the array
//     } else if (typeof data === "object" && data !== null) {
//         const cleanedData = { ...data }; // Create a shallow copy of the object

//         if (cleanedData.start_date === "not mentioned" || cleanedData.start_date === "Present" || cleanedData.start_date === "present") {
//             cleanedData.start_date = formattedToday;
//         }
//         if (cleanedData.end_date === "not mentioned" || cleanedData.end_date === "Present" || cleanedData.end_date === "present" ) {
//             cleanedData.end_date = formattedToday;
//         }
//         if (cleanedData.expiration_date === "not mentioned" || cleanedData.expiration_date === "Present" || cleanedData.expiration_date === "present") {
//             cleanedData.expiration_date = formattedToday;
//         }
//         if (cleanedData.issue_date === "not mentioned" || cleanedData.issue_date === "Present" || cleanedData.issue_date === "present") {
//             cleanedData.issue_date = formattedToday;
//         }
    
//         if (cleanedData.issue_date && /^\d{2}-\d{2}-\d{4}$/.test(cleanedData.issue_date)) {
//             cleanedData.issue_date = formatDate(cleanedData.issue_date);
//         }

//         for (const key in cleanedData) {
//             cleanedData[key] = cleanDates(cleanedData[key]);
//         }

//         return cleanedData;
//     }
//     return data;
// };

const cleanDates = (data) => {
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0]; // Formats as 'YYYY-MM-DD'

  // Function to convert date from DD-MM-YYYY to YYYY-MM-DD
  const formatDate = (dateStr) => {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
          const [day, month, year] = parts;
          return `${year}-${month}-${day}`; // Reformat to YYYY-MM-DD
      }
      else if (parts.length === 2) { // Check for MM-YYYY format
        const [month, year] = parts;
        const day = '01';
        return `${year}-${month}-${day}`; // Set day to 01 for MM-YYYY
    }
      return null; // Return null for unexpected formats
  };

  // Function to check if a date is valid
  const isValidDate = (dateStr) => {
      const date = new Date(dateStr);
      return !isNaN(date.getTime());
  };

  // Check if the data is an array
  if (Array.isArray(data)) {
      return data.map(cleanDates); // Recursively clean each item in the array
  } else if (typeof data === "object" && data !== null) {
      const cleanedData = { ...data }; // Create a shallow copy of the object

      // List of date fields to check
      const dateFields = ['start_date', 'end_date', 'expiration_date', 'issue_date'];

      dateFields.forEach((field) => {
          const dateValue = cleanedData[field];

          // Replace with today's date for specific strings
          if (dateValue === "not mentioned" || dateValue === "Present" || dateValue === "present") {
              cleanedData[field] = formattedToday;
          } else if (typeof dateValue === 'string') {
              // Check for valid formats
              const formattedDate = formatDate(dateValue);
              if (formattedDate && isValidDate(formattedDate)) {
                  cleanedData[field] = formattedDate; // Update to formatted date
              } else {
                  cleanedData[field] = formattedToday; // Replace with today's date if invalid
              }
          }
      });

      // Recursively clean nested objects or arrays
      for (const key in cleanedData) {
          cleanedData[key] = cleanDates(cleanedData[key]);
      }

      return cleanedData;
  }
  return data;
};
const onNext = () => {
  setActiveStep(0);
} 

  const handleAddStep0 = async () => {
    
    setLoading(true);
    setErrorMessage("");

    let isLinkedInAdded = false;
    // send api of linked in here 
    if (linkedinURL) {
      const data = { linkedin_url: linkedinURL };

      try {
        const response = await OptionalLinkedInURL(data);
        console.log("LinkedIn added");
        console.log(response);
        isLinkedInAdded = true; 
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

    if (isLinkedInAdded) {
      setActiveStep(0);
    }
  };

  const handleAddStep1 = async () => {
    setLoading(true);
    setErrorMessage("");

    let isFileUploaded = false;
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
        const cleanedData = cleanDates(response.data);

        const sendresponse = await SendExtractedCV(cleanedData);
        console.log("sendresponse", sendresponse);

        isFileUploaded = true; 
      } catch (error) {
        console.error("Error uploading CV:", error);
        setErrorMessage("خطأ في رفع السيرة الذاتية. حاول مرة أخرى.");
      }
    }
    setLoading(false);

    if (isFileUploaded) {
      onSave();
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
              onClick={activeStep === 1 ? onNext : onSave}
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
