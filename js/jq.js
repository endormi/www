(function(){
  var button = document.getElementById("show");
      var close = document.getElementById("close");
  
      function toggle() {
          if (close.style.visibility === "hidden") {
              close.style.visibility = "visible";
          } else {
              close.style.visibility = "hidden";
          }
      }
  
      button.addEventListener("click", toggle, false);
  })()