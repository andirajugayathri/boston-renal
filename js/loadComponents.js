function loadComponent(elementId, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop().split(".")[0]; // Get the current page name
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "header.html", setActiveNav);
    loadComponent("footer", "footer.html");
});


//silder start
        let slideIndex = 1;
        let slideInterval;

        function showSlides(n) {
            const slides = document.getElementsByClassName("slide");
            const dots = document.getElementsByClassName("dot");
            
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;
            
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
                dots[i].classList.remove("active");
            }
            
            slides[slideIndex-1].classList.add("active");
            dots[slideIndex-1].classList.add("active");
        }

        function nextSlide() {
            showSlides(slideIndex += 1);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
            resetInterval();
        }

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        }

        // Initialize slider
        showSlides(slideIndex);
        resetInterval();


        // slider end



      //  <script>
      document.getElementById('mobileServicesToggle').addEventListener('click', function (e) {
          e.preventDefault();
          document.getElementById('mobileServicesMenu').classList.toggle('d-none');
      });
// </script>


