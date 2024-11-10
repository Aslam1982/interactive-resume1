// Toggle function for Skills Section
document.getElementById("toggle-skills").addEventListener("click", function() {
    var skillsContent = document.getElementById("skills-content");
    if (skillsContent.style.display === "none" || skillsContent.style.display === "") {
        skillsContent.style.display = "block";
        this.textContent = "Hide Skills";
    } else {
        skillsContent.style.display = "none";
        this.textContent = "Show Skills";
    }
});

// Toggle function for Experience Section
document.getElementById("toggle-experience").addEventListener("click", function() {
    var experienceContent = document.getElementById("experience-content");
    if (experienceContent.style.display === "none" || experienceContent.style.display === "") {
        experienceContent.style.display = "block";
        this.textContent = "Hide Experience";
    } else {
        experienceContent.style.display = "none";
        this.textContent = "Show Experience";
    }
});

// Toggle function for Education Section
document.getElementById("toggle-education").addEventListener("click", function() {
    var educationContent = document.getElementById("education-content");
    if (educationContent.style.display === "none" || educationContent.style.display === "") {
        educationContent.style.display = "block";
        this.textContent = "Hide Education";
    } else {
        educationContent.style.display = "none";
        this.textContent = "Show Education";
    }
});
