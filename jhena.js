onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Autoplay prevented:', error);
        // Optionally, add user interaction prompt here
    });
});

