const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentAngle = 0;

nextBtn.addEventListener('click', () => {
  currentAngle -= 120;
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
});

prevBtn.addEventListener('click', () => {
  currentAngle += 120;
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
});


document.addEventListener('DOMContentLoaded', function() {
  var soundWave2 = document.getElementById('soundWave');
  soundWave2.style.animationPlayState = 'paused';

  // Créer un nouvel élément audio pour le fichier audio
  var audio = new Audio('https://www.dropbox.com/scl/fi/qovtqz9kikcoxmjbvaqgg/david-final-eng.mp3?rlkey=uai6qw4s9vbzocv40mx138vvk&st=oq7zatgh&raw=1');

  // Créer un nouvel élément pour afficher le timer
  var timer = document.createElement('div');
  timer.id = 'audioTimer';
  timer.textContent = '0:00 / 0:00';
  document.querySelector('.bouton1').appendChild(timer);

  document.querySelector('.bouton1').addEventListener('click', function() {
    var soundWaveContainer = document.getElementById('soundWaveContainer');
    var soundWave = document.getElementById('soundWave');
    var animateButton = document.getElementById('animateButton');

    // Ajouter la classe CSS "pressed" lors du clic
    animateButton.classList.add('pressed');

    // Supprimer la classe CSS "pressed" après un court délai (par exemple, 150ms)
    setTimeout(function() {
      animateButton.classList.remove('pressed');
    }, 150);

    if (soundWave.style.animationPlayState === '' || soundWave.style.animationPlayState === 'paused') {
      soundWave.style.animationPlayState = 'running';

      // Lire le fichier audio
      audio.play();

      // Mettre à jour le timer toutes les secondes
      setInterval(function() {
        var currentTime = Math.floor(audio.currentTime);
        var duration = Math.floor(audio.duration);
        var currentTimeStr = new Date(currentTime * 1000).toISOString().substr(14, 5);
        var durationStr = new Date(duration * 1000).toISOString().substr(14, 5);
        timer.textContent = currentTimeStr + ' / ' + durationStr;
      }, 1000);
    } else {
      soundWave.style.animationPlayState = 'paused';

      // Arrêter le fichier audio
      audio.pause();
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var soundWave2 = document.getElementById('soundWave2');
  soundWave2.style.animationPlayState = 'paused';

  // Créer un nouvel élément audio pour le fichier audio
  var audio = new Audio('https://www.dropbox.com/scl/fi/tc7z9v6g4hlv6q9oibn8v/raph-final-eng.mp3?rlkey=x3tt0uo71qs8h4dz9n722wxnb&st=56sdqdct&raw=1');

  // Créer un nouvel élément pour afficher le timer
  var timer = document.createElement('div');
  timer.id = 'audioTimer2';
  timer.textContent = '0:00 / 0:00';
  document.querySelector('.bouton2').appendChild(timer);

  document.querySelector('.bouton2').addEventListener('click', function() {
    var soundWaveContainer = document.getElementById('soundWaveContainer2');
    var soundWave = document.getElementById('soundWave2');
    var animateButton = document.getElementById('animateButton2');

    // Ajouter la classe CSS "pressed" lors du clic
    animateButton.classList.add('pressed2');

    // Supprimer la classe CSS "pressed" après un court délai (par exemple, 150ms)
    setTimeout(function() {
      animateButton.classList.remove('pressed2');
    }, 150);

    if (soundWave.style.animationPlayState === '' || soundWave.style.animationPlayState === 'paused') {
      soundWave.style.animationPlayState = 'running';

      // Lire le fichier audio
      audio.play();

      // Mettre à jour le timer toutes les secondes
      setInterval(function() {
        var currentTime = Math.floor(audio.currentTime);
        var duration = Math.floor(audio.duration);
        var currentTimeStr = new Date(currentTime * 1000).toISOString().substr(14, 5);
        var durationStr = new Date(duration * 1000).toISOString().substr(14, 5);
        timer.textContent = currentTimeStr + ' / ' + durationStr;
      }, 1000);
    } else {
      soundWave.style.animationPlayState = 'paused';

      // Arrêter le fichier audio
      audio.pause();
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var soundWave2 = document.getElementById('soundWave3');
  soundWave2.style.animationPlayState = 'paused';

  // Créer un nouvel élément audio pour le fichier audio
  var audio = new Audio('https://www.dropbox.com/scl/fi/m2ia84ancdprtu13xk9ul/Noemi-final.mp3?rlkey=31glvfgzmxt9zkeblgwb9hfcz&st=da4x5wqd&raw=1');

  // Créer un nouvel élément pour afficher le timer
  var timer = document.createElement('div');
  timer.id = 'audioTimer3';
  timer.textContent = '0:00 / 0:00';
  document.querySelector('.bouton3').appendChild(timer);

  document.querySelector('.bouton3').addEventListener('click', function() {
    var soundWaveContainer = document.getElementById('soundWaveContainer3');
    var soundWave = document.getElementById('soundWave3');
    var animateButton = document.getElementById('animateButton3');

    // Ajouter la classe CSS "pressed" lors du clic
    animateButton.classList.add('pressed3');

    // Supprimer la classe CSS "pressed" après un court délai (par exemple, 150ms)
    setTimeout(function() {
      animateButton.classList.remove('pressed3');
    }, 150);

    if (soundWave.style.animationPlayState === '' || soundWave.style.animationPlayState === 'paused') {
      soundWave.style.animationPlayState = 'running';

      // Lire le fichier audio
      audio.play();

      // Mettre à jour le timer toutes les secondes
      setInterval(function() {
        var currentTime = Math.floor(audio.currentTime);
        var duration = Math.floor(audio.duration);
        var currentTimeStr = new Date(currentTime * 1000).toISOString().substr(14, 5);
        var durationStr = new Date(duration * 1000).toISOString().substr(14, 5);
        timer.textContent = currentTimeStr + ' / ' + durationStr;
      }, 1000);
    } else {
      soundWave.style.animationPlayState = 'paused';

      // Arrêter le fichier audio
      audio.pause();
    }
  });
});

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  window.location.href = "mobile.html";
}