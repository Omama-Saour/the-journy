import React, { useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";
import icon from "../../../assets/StepFour/record-audio-microphone.png";

const RecordingComponent = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoURL, setVideoURL] = useState(""); // State to hold video URL
  const [recordingTime, setRecordingTime] = useState(0); // State for recording time
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setRecording(true);
    mediaRecorderRef.current = RecordRTC(webcamRef.current.stream, {
      type: "video",
    });
    mediaRecorderRef.current.startRecording();
    mediaRecorderRef.current.ondataavailable = handleDataAvailable;
  }, [webcamRef, setRecording, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    setRecording(false);
    mediaRecorderRef.current.stopRecording(() => {
      const blob = mediaRecorderRef.current.getBlob();
      setRecordedChunks([blob]);
      const url = URL.createObjectURL(blob); // Create a URL for the blob
      setVideoURL(url); // Set the video URL state
    });
    setRecordingTime(0); // Reset timer when stopping
  }, [setRecording, mediaRecorderRef]);

  useEffect(() => {
    let interval;
    if (recording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Clear on unmount or when recording stops
  }, [recording]);

  // Format the recording time in MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <main className="flex overflow-hidden flex-col justify-center p-8 text-lg bg-white max-w-[796px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] text-neutral-800 max-md:px-5">
      <div className="flex flex-wrap gap-2 items-center w-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-sm font-semibold leading-snug text-neutral-800">
          الترجمة التوضيحية
        </h2>

        {/* <button
      className="flex flex-col self-stretch my-auto w-5"
      onClick={onToggle}
      aria-pressed={isOn}
    >
      <div
        className={`flex shrink-0 w-5 h-5 bg-white rounded border border-solid border-neutral-800 ${
          isOn ? "bg-blue-500" : ""
        }`}
      />
    </button> */}

        <input
          type="checkbox"
          className="flex shrink-0 w-5 h-5 bg-white rounded border border-solid border-neutral-800"
          checked={isChecked}
          onChange={handleCheckboxChange} // Handle change here
        />

        {isChecked ? (
          <p
            dir="rtl"
            className="mt-6 font-bold leading-snug text-center text-neutral-800 max-md:max-w-full"
          >
            هل يمكنك وصف مشروع صعب عملت عليه وكيف تأكدت من أن تصميم تجربة
            المستخدم يلبي احتياجات المستخدم وأهداف العمل؟
          </p>
        ) : (
          <p
            dir="rtl"
            className="mt-6 text-sm font-semibold leading-snug w-full text-center text-neutral-800 max-md:max-w-full"
          >
            تم إيقاف تشغيل الترجمة التوضيحية. نوصي بعدم تشغيل التعليقات
            التوضيحية لمحاكاة المقابلة الحقيقية بشكل أفضل.
          </p>
        )}
      </div>

      {/* edit to show time of recording now */}
      <div className="flex gap-1.5 justify-center items-center self-center text-neutral-800">
        <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-white rounded-full border-4 border-red-600 border-solid" />
        <div className="self-stretch my-auto">
          REC {formatTime(recordingTime)}
        </div>
      </div>

      {/* vedio show  */}
      {recordedChunks.length > 0 ? (
        <>
          <figure className="mt-2 w-full max-md:max-w-full overflow-hidden rounded-lg bg-black">
            <video
              controls
              src={videoURL}
              className="object-cover w-full h-full aspect-[1.43]"
            />
          </figure>

          <div className="flex gap-4 items-center self-center mt-4">
            <button
              className="flex gap-2.5 justify-center items-center self-center py-2 pr-7 pl-7 max-w-full bg-white
   min-h-[56px] rounded-[32px] w-[200px] max-md:px-5 border-2 border-solid border-stone-300 text-black font-medium"
            >
              <span className="self-stretch my-auto">اعاده التسجيل</span>
            </button>

            <button
              className="flex gap-2.5 justify-center items-center self-center py-2 pr-7 pl-7 max-w-full bg-neutral-800
   min-h-[56px] rounded-[32px] w-[200px] max-md:px-5 text-white font-medium"
            >
              <span className="self-stretch my-auto">السؤال التالي</span>
            </button>
          </div>
        </>
      ) : (
        <>
          {/* camera */}
          <figure className="mt-2 w-full max-md:max-w-full overflow-hidden rounded-lg bg-black">
            <Webcam
              className="object-cover w-full h-full aspect-[1.43]"
              audio={true}
              mirrored={true}
              ref={webcamRef}
            />
          </figure>

          <button
            onClick={handleStartCaptureClick}
            className={`flex gap-2.5 justify-center items-center self-center py-2 pr-7 pl-7 max-w-full ${
              recording ? "bg-gray-400 cursor-not-allowed" : "bg-neutral-800"
            } min-h-[56px] rounded-[32px] w-[200px] max-md:px-5 text-white font-medium`}
            disabled={recording} // Disable the button if isRecording is true
          >
            <span className="self-stretch my-auto">اضغط للتسجيل</span>
            <img
              loading="lazy"
              src={icon}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>

          {recording && (
            <button
              onClick={handleStopCaptureClick}
              className="mt-3 font-semibold leading-snug text-center text-red-600 max-md:max-w-full"
            >
              <span className="inline-block border-b-2 border-red-600">
                توقف عن التسجيل
              </span>
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default RecordingComponent;
