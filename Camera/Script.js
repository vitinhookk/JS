// CAMERA -> SCRIPT.JS
const video = document.getElementById("video")

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream
        video.play()
    })
    .catch(error => {
        console.error("Não foi possível acessar a câmera: ", error)
    })