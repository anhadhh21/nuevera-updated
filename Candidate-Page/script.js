// Sample data for latest job listings
const jobsData = [
    { title: "Web Developer", company: "Example Tech", location: "New York" },
    { title: "Software Engineer", company: "Sample Solutions", location: "San Francisco" },
    { title: "Data Analyst", company: "Data Insights", location: "Chicago" },
    // Add more job listings here
  ];
  
  // Function to display latest job listings
  function displayJobs() {
    const jobListContainer = document.querySelector(".job-list");
  
    let jobsHTML = '';
    jobsData.forEach(job => {
      jobsHTML += `
        <div class="job-card">
          <h3>${job.title}</h3>
          <p>${job.company} - ${job.location}</p>
        </div>
      `;
    });
  
    jobListContainer.innerHTML = jobsHTML;
  }
  
  // Call the function to display latest job listings when the page loads
  window.onload = displayJobs;



const currentPageTitle = document.title

// Get all navigation links
const menus = document.querySelectorAll('.home');

// Loop through each navigation link to find the active page
menus.forEach(link => {
  // Check if the link's URL matches the current page URL
  if (link.textContent ==='Home'&& link.href=== window.location.href) {
    // Add the 'active' class to the corresponding navigation element
    link.classList.add('active');
  }
});
  
  $(".card").on("click",function(){
    $(".detail").addClass("active");
  });

  $(".close-detail").on("click",function(){
    $(".detail").removeClass("active");

  });

  $(".menu-bar").on("click",function(){
    $(".sidebar").addClass("active");
  });

  $(".logo").on("click",function(){
    $(".sidebar").removeClass("active");
  });