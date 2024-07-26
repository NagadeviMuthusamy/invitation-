document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('nameboard');
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  });
  function map(){
    // var latitude = 37.7749;
    // var longitude = -122.4194;
    // var zoomLevel = 12;

    var url = `https://maps.app.goo.gl/uM1rEfjGa5zZJP7DA?g_st=iw`;
    window.open(url,'_blank');

  }

  document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var message = document.getElementById("message").value;
    var whatsappNumber = "+916381817516";
    var url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
});

window.addEventListener('scroll', function() {
    let image = document.querySelector('#imgtra');
    let scrollPosition = window.scrollY;

    // Adjust the opacity based on scroll position
    image.style.transform=`translateX(100px)`;
  });