// version OK
  window.addEventListener('DOMContentLoaded', function() {
    var progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(function(progressBar) {
      var width = progressBar.dataset.width;
      progressBar.style.width = '0';
      //setTimeout(function() {
        progressBar.style.width = width;
    //  }, 100);
    });
  });

    // Función para manejar el clic en el enlace "Home"
    function goToHome() {
      // Redirecciona a la página de inicio (index.html)
      window.location.href = 'index.html';
      // Al hacer clic en "Home", guarda la posición de desplazamiento actual en localStorage
      localStorage.setItem('scrollPosition', 'top');
    }


    // Función para almacenar la posición actual del desplazamiento en localStorage
  function storeScrollPosition() {
    localStorage.setItem('scrollPosition', window.scrollY);
  }

  // Función para restaurar la posición del desplazamiento desde localStorage
  function restoreScrollPosition() {
    const scrollPosition = localStorage.getItem('scrollPosition');

    /*if (scrollPosition !== null) {
      if (scrollPosition === 'top') {
        window.scrollTo(0, 0); // Vuelve al inicio de la página
        localStorage.removeItem('scrollPosition'); // Elimina el valor almacenado después de restaurarlo
      }
      else if (scrollPosition === 'abilities') {
        console.log("scroll:", scroll);
        console.log("scrollPosition:", scrollPosition);

        window.scrollTo(0, scroll);
        localStorage.removeItem('scrollPosition');
        localStorage.removeItem('scroll');

      }
      else{
        window.scrollTo(0, scrollPosition);
        localStorage.removeItem('scrollPosition'); // Elimina el valor almacenado después de restaurarlo
      }
    }
    */
    if (scrollPosition !== null) {
     if (scrollPosition === 'top') {
       window.scrollTo(0, 0); // Vuelve al inicio de la página
       localStorage.removeItem('scrollPosition'); // Elimina el valor almacenado después de restaurarlo
     
     } else {
       window.scrollTo(0, scrollPosition);
       localStorage.removeItem('scrollPosition'); // Elimina el valor almacenado después de restaurarlo
     }
   }
  }

/*
  // Evento que se dispara antes de recargar la página (F5)
  window.addEventListener('beforeunload', storeScrollPosition);

  // Evento que se dispara cuando la página se ha vuelto a cargar
  window.addEventListener('load', restoreScrollPosition);
  */
  // Evento que se dispara antes de recargar la página (F5)
  window.addEventListener('beforeunload', storeScrollPosition);

  // Evento que se dispara cuando la página se ha vuelto a cargar
  window.addEventListener('DOMContentLoaded', function () {
    restoreScrollPosition();
  });
