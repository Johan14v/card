window.onload = function() {
    var preloader = document.getElementById('preloader');
    var content = document.querySelector('.content');
  

    setTimeout(function() {
      preloader.style.display = 'none';
      content.style.display = 'block';
    }, 1000);
  };
  
