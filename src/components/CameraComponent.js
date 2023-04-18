import React, { useState, useRef } from 'react';
import { Button } from '@material-ui/core';

const CameraComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [stream, setStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const handleRecordClick = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream) => {
            videoRef.current.style.display = "block";
            canvasRef.current.style.display = "block";
            videoRef.current.srcObject = mediaStream;
            videoRef.current.play();
            setStream(mediaStream);
            const recorder = new MediaRecorder(mediaStream);
            setMediaRecorder(recorder);
            setIsRecording(true);
            const chunks = [];
            recorder.ondataavailable = (e) => {
                chunks.push(e.data);
                const video = videoRef.current;
                const canvas = canvasRef.current;
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width / 2, canvas.height / 2);
                
                fetch('`http://localhost:3000/process`', {
                  method: 'POST',
                  
                  }).then(response => {
                    // handle response from server

                  });
              
        };
            recorder.onstop = () => {
                videoRef.current.style.display = "none";
                canvasRef.current.style.display = "none";
                const blob = new Blob(chunks, { type: 'video/mp4' });
                const videoUrl = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = videoUrl;
                a.download = 'recorded-video.mp4';
                document.body.appendChild(a);
                a.click();
                URL.revokeObjectURL(videoUrl);
        };
        recorder.start();
        
      })
      .catch((error) => console.log(error));
  };

    const handleStopClick = () => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            setIsRecording(false);
            mediaRecorder.stop();
            stream.getTracks().forEach((track) => track.stop());
          }
  };

  return (
      <>
        <video ref={videoRef} style={{ display: 'none' }}  />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        <Button variant="contained" color="primary" onClick={handleRecordClick} disabled={isRecording}>
        {isRecording ? 'Recording...' : 'Record'}
        </Button>
        {isRecording && (
        <Button variant="contained" color="secondary" onClick={handleStopClick}>
          Stop
        </Button>
      )}
    </>
  );
};

export default CameraComponent;
