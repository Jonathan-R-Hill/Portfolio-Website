
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the section ID
        const contentDiv = document.getElementById('content');

        // Set the content of the conentDiv based on the clicked section
        if (targetId === 'aboutMe') { contentDiv.innerHTML = getAboutMeContent(); }
        else if (targetId === 'gameDev') { contentDiv.innerHTML = ''; }
        else if (targetId == 'contact') { contentDiv.innerHTML = getContactContent(); }

        updateLeftDiv(targetId);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


function updateLeftDiv(targetId) {
    const leftDiv = document.getElementById('overlay');

    if (targetId === 'gameDev') {
        leftDiv.innerHTML = getDevContentLeft();
    }
    else {
        leftDiv.innerHTML = `
            <h1>Jonathan Hill</h1>
            <img src="./Images/fire.jpg" alt="Profile Image" style="width:250px; height:200px;" />
        `
    }
}

function getAboutMeContent() {
    return `
        <h1>About Me</h1><br>
        <p>
            I'm currently a second-year student at Teesside University<br>
            Studying Computer Science.<br>
            I have experience creating small projects for myself and friends. <br>
            These vary from games to web scrapers. <br>
            Below are some links to my projects<br><br><br>
            <ul>
                <h3>Small Games and projects using Python</h3><br>
                <a href="https://github.com/Jonathan-R-Hill/Python-Projects">
                        Small projects & games using Python Libraries</a><br>

                <br><br>
                <h3>Creating projects that use both GUI & Console in Java & Python</h3><br>
                <a href="https://github.com/Jonathan-R-Hill/Language-App">A Language learning vocabulary app</a><br>
                <a href="https://github.com/Jonathan-R-Hill/Itinarary-ManagerGUI">An Itinerary business prototype</a><br>
            </ul>

            For more feel free to visit my Git hub at: https://github.com/Jonathan-R-Hill <br>
            You can also find the source code for this website there too.
        </p>
    `;
}

// TODO
function getDevContentLeft() {
    return `
        <h1>Development Logs</h1>
        <ul>
            <a href="#" onclick="loadDevLog1()">Development Log 1</a>
        </ul>
        `;
}

// TODO
function getContactContent() {
    return `
        <h1>Contact</h1>
        <p>TODO</p>
    `;
}
