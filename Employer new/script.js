const form = document.getElementById("resumeForm");
const preview = document.getElementById("preview");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const resumeData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    educationDegree: formData.get("educationDegree"),
    educationSchool: formData.get("educationSchool"),
    educationDate: formData.get("educationDate"),
    workTitle: formData.get("workTitle"),
    workCompany: formData.get("workCompany"),
    workDate: formData.get("workDate"),
    workDescription: formData.get("workDescription"),
  };

  alreadyexist = localStorage.getItem("resumeData");
  if (alreadyexist) {
    localStorage.removeItem("resumeData");
  }

  localStorage.setItem("resumeData", JSON.stringify(resumeData));

  window.location.href = "resume.html";
});
