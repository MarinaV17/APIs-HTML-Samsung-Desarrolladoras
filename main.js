if (!(window.File && window.FileReader && window.FileList)) {
    alert('The API is not supported by this browser.');
}

function validateFileSelected(e) {
    var file = e.target.files[0];

    if (!file.type.match('video.*')){
        alert("You must upload a video file")
    }

//Tercer paso: FileReader para leer el fichero

    var reader = new FileReader();

    reader.onload = (function (theFile){
        return function (e) {
            alert('The video is uploading. This process may take a few seconds...')
            var videoDiv = document.createElement('div');

            videoDiv.innerHTML = '<video controls id="video" src="' + e.target.result + '" title="'+ theFile.name + '"/>';

            document.getElementById('videoOutput').insertBefore(videoDiv, null);

            document.getElementById('video').addEventListener('canplay', () => {

                play.style.visibility = 'visible';
                pause.style.visibility = 'visible';
                volumeUp.style.visibility = 'visible';
                volumeDown.style.visibility = 'visible';
            });
        }

    }) (file);

    reader.readAsDataURL(file);
}

document.getElementById('file').addEventListener('change', validateFileSelected, false);
