const video = document.getElementById('video');
const buttonContainer = document.getElementById('button-container');
const button = document.getElementById('button');

// Prompt to select media stream, then pass to video element, then play

async function selectMediaStream() {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = captureStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (error) {
    // Handling errors
    console.log('Error: ', error);
  }

  return captureStream;
}

button.addEventListener('click', () => {
  buttonContainer.classList.add('animate__rotateOut');
  video.requestPictureInPicture().catch((error) => {
    // Error handling
    console.log('Error: ', error);
  });
  setTimeout(() => {
    buttonContainer.classList.remove('animate__rotateOut');
  }, 1100);
});

// On Load
selectMediaStream();
