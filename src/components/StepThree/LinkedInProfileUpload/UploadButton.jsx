import React, { useState } from "react";

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log(file.name);
      // upload to server
      console.log(selectedFile);
    }
  };

  return (
    <div className="flex gap-2 justify-center items-center self-end mt-2 text-lg font-medium leading-none text-white">
      <div dir="rtl" className="flex items-center">
        <p className="text-black ml-4">4 . </p>

        <input
          type="file"
          id="fileUpload"
          accept=".pdf" // Allow only PDF files
          onChange={handleFileChange}
          className="hidden" // Hide the default file input
        />

        <button
          onClick={() => document.getElementById("fileUpload").click()} // Trigger file input click
          className="gap-2.5 self-stretch px-12 py-6 my-auto bg-neutral-800 min-h-[56px] rounded-[32px] w-[200px] max-md:px-5"
        >
          رفع الملف
        </button>
      </div>
    </div>
  );
};

export default UploadButton;
