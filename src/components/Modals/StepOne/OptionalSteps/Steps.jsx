import React, { useState } from "react";
import closered from "../../../../assets/StepOne/closered.png";
import upload from "../../../../assets/StepOne/file-upload.png";

const ProgressBar = () => {
  const steps = ["سيرتك الذاتية", "رابط لينكدان"];
  const [activeStep, setActiveStep] = useState(1); 
  const [selectedFile, setSelectedFile] = useState(null); // State for the selected file
  const [imageSrc, setImageSrc] = useState(upload); 

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImageSrc(closered); // Change to the new image URL
      console.log(file.name);
    }
  };

  const handleImageClick = () => {
    // Set the new image source and reset the selected file
    setImageSrc(upload);
    setSelectedFile(null); // Remove the selected file
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Replace with your API endpoint
      fetch("YOUR_BACKEND_API_ENDPOINT", {
        method: "POST",
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log("File uploaded successfully:", data);
        })
        .catch(error => {
          console.error("Error uploading file:", error);
        });
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
            <div className="flex flex-wrap gap-10 justify-between items-center px-4 py-3 mt-1 w-full text-center bg-white border border-violet-200 border-solid min-h-[48px] rounded-[32px] max-md:max-w-full">
            <input
                type="file"
                id="fileUpload"
                accept=".doc,.docx,.pdf" // Allow only Word and PDF files
                onChange={handleFileChange}
                className="hidden" // Hide the default file input
              />
              <img
                src={imageSrc}
                onClick={handleImageClick}
                alt="Upload Icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <button
                onClick={() => document.getElementById("fileUpload").click()} // Trigger file input click
                className="gap-2.5 self-stretch my-auto h-6"
              >
                {selectedFile ? selectedFile.name : "أرفع سيرتك الذاتية"}
              </button>
            </div>
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
            />
          </div>
        </div>
      )}

<div className="flex z-0 gap-6 items-center self-center mt-10 text-lg font-medium leading-none text-right whitespace-nowrap max-md:max-w-full">
      <button className="gap-1 self-stretch px-12 py-3 my-auto border-2 border-solid border-neutral-800 border-opacity-20 min-h-[30px] rounded-[32px] text-neutral-800 w-[200px] max-md:px-5">
        تخطي
      </button>
      <button 
       onClick={handleUpload}
       disabled={!selectedFile} // Disable button if no file is selected
       className={`gap-2.5 self-stretch px-12 py-3 my-auto text-white rounded-[32px] w-[200px] max-md:px-5 ${
        selectedFile ? "bg-neutral-800" : "bg-gray-400" // Change color based on state
      }`}
    >
      اضافة
      </button>
    </div>
    </>
  );
};

export default ProgressBar;