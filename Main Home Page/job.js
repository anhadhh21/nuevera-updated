// Function to show the content of a clicked component
function showContent(component) {
  // Hide all content sections
  var contentSections = document.getElementsByClassName("content-section");
  for (var i = 0; i < contentSections.length; i++) {
    contentSections[i].style.display = "none";
  }

  // Show the selected content section
  document.getElementById(component).style.display = "block";

  // Remove active class from all components
  var components = document.getElementsByClassName("component");
  for (var i = 0; i < components.length; i++) {
    components[i].classList.remove("active");
  }

  // Add active class to the clicked component
  document.getElementById(component + "-link").classList.add("active");
}

// Function to set the default active component to "home" when the page loads
function setDefaultActiveComponent() {
  showContent("home");
}

// Call the setDefaultActiveComponent function when the page finishes loading
window.addEventListener("load", setDefaultActiveComponent);
