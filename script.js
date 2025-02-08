
// ---------- Theme Section ---------- //
const themeToggle = document.getElementById('theme-toggle');
// Add event listener for click event
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ---------- Education & Experience section ---------- //
function loadEducationContent() {
    return `
        <h2>Education</h2><hr><br>
        <ul>
            <h3>Teesside University</h3>
                <p>Currently studying BSc (Hons) Computer Science - Sept 2023 - Present</p><br>
                <h4><u>Completed Modules</u></h4>
                    <h4><u>Year 1</u></h4>
                    <li>Algorithmic Problem Solving - Java</li>
                    <li>Object-oriented Programming - Java</li>
                    <li>Secure Computers and Networks - Identifying vulnerabilities & relevant security issues</li>
                    <li>Systems Design and Databases - SQL & Program/System Design</li><br>
                    <h4><u>Year 2</u></h4>
                    <li>Relational and NoSQL Databases - SQL, SQLlite & MongoDB</li>
                    <li>Web Apps and Services - C# .NET</li><br>

                <h4><u>Currently Studying</u></h4>
                    <li>Artificial Intelligence</li>
                    <li>Enterprise Project</li><br>
                
                <h4><u>Modules to be studied</u></h4>
                    <h4><u>Year 3</u></h4>
                    <li>Applied Machine Learning</li>
                    <li>Cloud-native DevOps</li>
                    <li>Computing Project</li>
    
        </ul><br>

        <ul>
            <h3>SoloLearn</h3>
                <li>Python 3 course - Oct 2020</li>
                <li>JavaScript Course - Dec 2020</li>
                <li>Python Data Structures - Feb 2021</li>
                <li>Intermediate Python - Feb 2021</li>
                <li>Python Data Science - Dec 2022</li>
        </ul><br>
        <p>Link to my <a href="https://www.sololearn.com/en/profile/11673171">Sololearn Profile</a></p>
    `;
}

function loadExperienceContent() {
    return `
        <h2>Experience</h2><hr><br>
        <ul>
            <h4>Creating applications using <u>Python</u></h4>
                <li><a href="https://github.com/Jonathan-R-Hill/Language-App">Application to aid language learning</a></li>
                <li><a href="https://github.com/Jonathan-R-Hill/Python-Projects">Creating small games and applications using python while working with API's</a></li>
        </ul><br>

        <ul>
            <h4>Creating applications using <u>Java</u></h4>
                <li><a href="https://github.com/Jonathan-R-Hill/Itinarary-ManagerGUI">Creating applications both using console and GUI elements</a></li>
                <li><a href="https://github.com/Jonathan-R-Hill/Android-Language-App">Mobile applications for android</a></li>
        </ul><br>

        <ul>
            <h4>Creating applications using <u>C#</u></h4>
                <li><a href="https://github.com/Jonathan-R-Hill/GUI-App">Creating applications using WinForms</a></li>
                <li>Currently working on building a Web API that supports CRUD operations for an events management system at University</li>
        </ul><br>
        
        <ul>
            <h4>Creating Web applications using <u>HTML, CSS & JS</u></h4>
                <li><a href="https://github.com/Jonathan-R-Hill/Portfolio-Website">Creating a working web site with working navigation</a></li>
        </ul><br>

        <ul>
        <h4>Creating cross-platform applications: <u>React-Native, ExpressJS, MongoDB & TS</u></h4>

            <li> Currently working on making a Baby Diary tracker that incorporates an account-based system alongside various features, including:

                <li>AI chat/lookup</li>
                <li>Advice Pages</li>               
                <li>Baby Profiles</li>              
                <li>Chart Summaries</li> </li>
        </ul><br>

        <p>More projects available on my <a href="https://github.com/Jonathan-R-Hill/">Github</a><p>
        
    `;
}

// Event listeners for button clicks
document.getElementById("loadExperience").addEventListener("click", function () {
    document.getElementById("content").innerHTML = loadExperienceContent();
});

document.getElementById("loadEducation").addEventListener("click", function () {
    document.getElementById("content").innerHTML = loadEducationContent();
});


// ---------- Projects section ---------- //

function newProjectTile(title, imagePath, pText) {
    return `
        <div class="project secondary-project">
            <h3>${title}</h3>
            <img src="${imagePath}">
            <p>
                ${pText}
            </p>
        </div>
    `
}
