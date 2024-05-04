function myFunction() {
    let x = document.getElementById("mobile-nav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }