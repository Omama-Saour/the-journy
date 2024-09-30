import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";

const WebcamVideo = () => {
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [recording, setRecording] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const [videoURL, setVideoURL] = useState(""); // State to hold video URL

    const handleDataAvailable = useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks(prev => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStartCaptureClick = useCallback(() => {
        setRecording(true);
        mediaRecorderRef.current = RecordRTC(webcamRef.current.stream, {
            type: "video"
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
    }, [setRecording, mediaRecorderRef]);

    const handleDownload = useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style.display = "none";
            a.href = url;
            a.download = "react.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
    }, [recordedChunks]);

    return (
        <div className="Container">
            <Webcam
                height={200}
                width={200}
                audio={true}
                mirrored={true}
                ref={webcamRef}
            />

            {recording ? (
                <button onClick={handleStopCaptureClick}>Stop Record</button>
            ) : (
                <button onClick={handleStartCaptureClick}>Start Record</button>
            )}

            {recordedChunks.length > 0 && (
                <>
                    <button onClick={handleDownload}>Download</button>
                    <video
                        controls
                        src={videoURL} // Use the video URL here
                        style={{ marginTop: '10px', width: '200px', height: 'auto' }}
                    />
                </>
            )}
        </div>
    );
};

export default WebcamVideo;