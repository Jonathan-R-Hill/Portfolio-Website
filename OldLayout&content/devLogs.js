
function loadDevLog1() {
    const contentDiv = document.getElementById('content');
    const imagesFolder = "./Images/GameLog_Images/Log1/";

    contentDiv.innerHTML = `
        <h1>Development Log 1</h1>
        <p>So far we have managed to make some sprites and basic functionality such as:</p><br>
        <ul>
            <p>Character animation & movement</p>
            <p>Character & object collision</p>
            <p>NPC text when nearby</p>
            <img src="${imagesFolder}popUp_text.png" style="width:500px; height:300px;" alt="Popup Text Image"><br>

            <p>NPC Interact for text Dialogue (this will be expanded for text options later)</p>
            <img src="${imagesFolder}interact_text.jpg" style="width:500px; height:300px;" alt="Interact Text Image"><br>

            <p>Added stamina & health drain/recovery</p>
            <p>Added a live updating Health & Stamina UI</p>
            <img src="${imagesFolder}ui_sprites.jpg" style="width:500px; height:300px;" alt="UI Sprites Image"><br>

            <p>Added various Sprites/Objects</p>
            <p>Created a tile that will cause damage to the player</p>
        </ul>
    `;
}


function loadDevLog2() {
    const contentDiv = document.getElementById('content');
    const imagesFolder = "./Images/GameLog_Images/Log2/";

    contentDiv.innerHTML = `
        <h1>Development Log 2</h1>
        <p>This is the detailed content of Dev Log 2...</p>
    `;
}

module.exports = {
    loadDevLog1,
    loadDevLog2
};
