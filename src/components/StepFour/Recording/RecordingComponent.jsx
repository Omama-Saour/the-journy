import React, { useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";
import icon from "../../../assets/StepFour/record-audio-microphone.png";
import { Send_questionAnswer } from "../../../modules/steps/stepfour/service";

const RecordingComponent = ({ questions }) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoURL, setVideoURL] = useState("");
  const [recordingTime, setRecordingTime] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const currentQuestion = questions[currentQuestionIndex];

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleDataAvailable = useCallback(({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  }, []);

  const handleStartCaptureClick = useCallback(async () => {
    try {
      // Request permission to access the webcam
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      webcamRef.current.srcObject = stream; // Set the stream to the webcam ref
  
      setRecording(true);
      mediaRecorderRef.current = RecordRTC(stream, {
        type: "video",
      });
      mediaRecorderRef.current.startRecording();
      mediaRecorderRef.current.ondataavailable = handleDataAvailable;
    } catch (error) {
      console.error("Error accessing webcam:", error);
      setError("فشل في الوصول إلى الكاميرا. تأكد من منح الأذونات."); // Set error message
      alert("فشل في الوصول إلى الكاميرا. تأكد من منح الأذونات")
    }
  }, [webcamRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    setRecording(false);
    mediaRecorderRef.current.stopRecording(() => {
      const blob = mediaRecorderRef.current.getBlob();
      setRecordedChunks([blob]);
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
    });
    setRecordingTime(0);
  }, []);

  useEffect(() => {
    let interval;
    if (recording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [recording]);

  // Reset video and recording state
  const resetRecording = () => {
    setRecordedChunks([]);
    setVideoURL("");
    setRecordingTime(0);
  };

  // Format the recording time in MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Send video to API
  const handleNextQuestion = async () => {
    if (recordedChunks.length > 0) {
      setLoading(true);
      setError(""); // Reset error state
      const formData = new FormData();
      formData.append("question_id", currentQuestion.id);
      formData.append("video_file", recordedChunks[0]);

    // Ensure recordedChunks[0] exists before creating the File
    // const blob = recordedChunks[0];
    // var videoFile =null ;
    // if (blob) {
    //  videoFile = new File([blob], `video_${currentQuestionIndex + 1}.mp4`, {
    //     type: 'video/mp4',
    //   }); }
    //   formData.append("video_file", videoFile);

      try {
        await Send_questionAnswer(formData);
        // Move to the next question
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        resetRecording(); // Reset for the next recording
      } catch (error) {
        console.error("Error sending video:", error);
        setError("فشل تحميل الفيديو. حاول مرة أخرى."); // Set error message
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main className="flex overflow-hidden flex-col justify-center p-8 text-lg bg-white w-full max-w-[796px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] text-neutral-800 max-md:px-5">
      <div className="flex flex-wrap gap-2 items-center w-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-sm font-semibold leading-snug text-neutral-800">
          الترجمة التوضيحية
        </h2>
        <input
          type="checkbox"
          className="flex shrink-0 w-5 h-5 bg-white rounded border border-solid border-neutral-800"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        {isChecked ? (
          <p
            dir="rtl"
            className="mt-6 text-sm font-semibold leading-snug w-full text-center text-neutral-800 max-md:max-w-full"
          >
            {currentQuestion?.text}
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

      <div className="flex gap-1.5 justify-center items-center self-center text-neutral-800 max-md:max-w-full">
        <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-white rounded-full border-4 border-red-600 border-solid" />
        <div className="self-stretch my-auto">
          REC {formatTime(recordingTime)}
        </div>
      </div>

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
              onClick={resetRecording}
              className="flex gap-2.5 justify-center items-center self-center py-2 pr-7 pl-7 max-w-full bg-white
          min-h-[56px] rounded-[32px] w-[200px] max-md:px-5 border-2 border-solid border-stone-300 text-black font-medium"
            >
              <span className="self-stretch my-auto">اعاده التسجيل</span>
            </button>
            <button
              onClick={handleNextQuestion}
              className={`flex gap-2.5 justify-center items-center self-center py-2 pr-7 pl-7 max-w-full ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-neutral-800"
              } min-h-[56px] rounded-[32px] w-[200px] max-md:px-5 text-white font-medium`}
              disabled={loading}
              dir="rtl"
            >
              {loading ? "جار التحميل..." : "السؤال التالي"}
            </button>
          </div>
          {error && (
            <p dir="rtl" className="mt-4 text-red-600 text-center">
              {error}
            </p>
          )}
        </>
      ) : (
        <>
          {!recording && (
            <figure className="mt-2 w-full max-md:max-w-full overflow-hidden rounded-lg bg-black">
              {currentQuestion?.video_path ? (
                <video
                  controls
                  src={
                    "https://journey.flaamingo.com/storage/" +
                    currentQuestion.video_path
                  }
                  className="object-cover w-full my-auto"
                />
              ) : (
                <p dir="rtl" className="text-center text-neutral-800">
                  لا يوجد فيديو متاح للسؤال الحالي.
                </p>
              )}
            </figure>
          )}

          <figure className="mt-2 w-full max-md:max-w-full overflow-hidden rounded-lg bg-black">
            <Webcam
              // className="object-cover w-full h-full aspect-[1.43]"
              className={`object-cover w-full h-full aspect-[1.43] ${recording ? '' : 'hidden'}`}
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
            disabled={recording}
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

      {/* Check if all questions have been answered */}
      {currentQuestionIndex >= questions.length && (
        <p
          dir="rtl"
          className="mt-6 text-lg font-semibold text-center text-neutral-800"
        >
          هذا هو آخر سؤال.
        </p>
      )}
    </main>
  );
};

export default RecordingComponent;
