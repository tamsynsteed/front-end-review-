function toggleNav() {
  const links = document.getElementById("nav-links");
  console.log("hello");
  links.style.width == "0px"
    ? (links.style.width = "100vw")
    : (links.style.width = "0px");
}

//check styles on links
// ? - if
// : - else

//if width is 0, make it 100. if not 0, make it 0 //
