fetch("../../modules/Header/header.html")
  .then(function(response) {
    return response.text();
  })
  .then(function(header) {
    document.querySelector(".headerContainer").innerHTML = header;
  });



