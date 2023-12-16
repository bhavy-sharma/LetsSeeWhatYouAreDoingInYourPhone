document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const screenShareVideo = document.getElementById('screenShareVideo');
  
    let stream;
  
    startButton.addEventListener('click', async () => {
      try {
        stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        screenShareVideo.srcObject = stream;
      } catch (error) {
        console.error('Error accessing screen:', error);
      }
    });
  });
  