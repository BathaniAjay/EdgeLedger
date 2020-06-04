//  var map;
//       function initMap() {
//         map = new google.maps.Map(document.querySelector('.map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }

// mapboxgl.accessToken = 'pk.eyJ1IjoiYWpheWJhdGhhbmkiLCJhIjoiY2thdHk0N2dlMDVvdDJ6bzRmbDIxb2puNyJ9.xQBgDwpN4AkOCr0yT2LDHQ';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

      // SMOOTH SCROLL 
      $('#navbar a, .btn').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top -50
        }, 1000, 'swing');
    });

    window.addEventListener('scroll',function() {
      if (window.scrollY >150) {
        this.document.querySelector('#navbar').style.backgroundColor = "#333";
        this.document.querySelector('#navbar').style.opacity=0.9;
      }
      else {
        this.document.querySelector('#navbar').style.backgroundColor = "#333";
      }
     
    });