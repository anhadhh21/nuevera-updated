const resumeData = localStorage.getItem("resumeData");

try {
  if (resumeData) {
    const resume = JSON.parse(resumeData);

    const resumeHTML = `
            <div class="p-4 bg-white rounded shadow">
                <h2 class="text-3xl font-semibold mb-2">${resume.firstName} ${resume.lastName}</h2>
                <p class="text-gray-600">${resume.email} | ${resume.phone}</p>
                
                <h3 class="text-xl font-semibold mt-4">Education</h3>
                <p class="font-medium">${resume.educationDegree}</p>
                <p class="text-gray-600">${resume.educationSchool} | ${resume.educationDate}</p>
                
                <h3 class="text-xl font-semibold mt-4">Work Experience</h3>
                <p class="font-medium">${resume.workTitle}</p>
                <p class="text-gray-600">${resume.workCompany} | ${resume.workDate}</p>
                <p class="mt-2">${resume.workDescription}</p>
            </div>
        `;

    const resumeContainer = document.getElementById("resume");
    resumeContainer.innerHTML = resumeHTML;
  } else {
    throw new Error("Resume not created");
  }
} catch (error) {
  console.error(error);
  const errorContainer = document.getElementById("error");
  errorContainer.textContent =
    "Error: Could not load the resume. Please ensure you have generated the resume first.";
}
