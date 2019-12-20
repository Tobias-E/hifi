fetch('../../modules/Footer/footer.html')
   .then(function(response) {
     return response.text()
   }).then(function(footer) {
       document.querySelector(".footerContainer").innerHTML = footer
   })
   