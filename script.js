const url = "http://localhost:3000"

const teamsContainer = document.querySelector("#teams-container")

async function getAll() {
    const response = await fetch(url);

    const data = await response.json();


    data.map((team) => {
        const divCards = document.createElement("div");
        const divInfo = document.createElement("div");
        const divEmblem = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h2");
        const state = document.createElement("p");

        const emblem = team.emblem;

        name.innerText = team.name;
        state.innerText = team.state;

        divInfo.appendChild(name);
        divInfo.appendChild(state);
        divEmblem.appendChild(img);
        divCards.appendChild(divInfo);
        divCards.appendChild(divEmblem);

        img.src = emblem
        img.width = 60

        teamsContainer.appendChild(divCards);
        divCards.classList.add("cards");

    });
}

    const btn = document.querySelector("#send");

    btn.addEventListener("click", async function(e) {

        e.preventDefault();
        const id = document.querySelector("#search");
        const value = id.value;

        const response = await fetch(`${url}/${value}`);
        const data = await response.json();
        
        document.getElementById("teams-container").innerHTML = "<div id='team'></div>";

        const divInfos = document.createElement("div");
        const name = document.createElement("p");
        const state = document.createElement("p");
        const foundationYear = document.createElement("p");
        const stadium = document.createElement("p");
        const mascot = document.createElement("p");
        const img = document.createElement("img");

        name.innerText = "Name: "+ data.name;
        state.innerText = "State: " + data.state;
        foundationYear.innerText = "Foundation Year: " + data.foundationYear;
        stadium.innerText = "Stadium: " + data.stadium;
        mascot.innerText = "Mascot: " + data.mascot;
        img.src = data.emblem;


        divInfos.appendChild(name);
        divInfos.appendChild(state);
        divInfos.appendChild(foundationYear);
        divInfos.appendChild(stadium);
        divInfos.appendChild(mascot);

        const divG = document.querySelector("#team");
        
        divG.appendChild(img);
        divG.appendChild(divInfos);
        divInfos.classList.add("teamInfos");
        name.classList.add("txtTeam");
        state.classList.add("txtTeam");
        foundationYear.classList.add("txtTeam");
        stadium.classList.add("txtTeam");
        mascot.classList.add("txtTeam");       

    });
    

getAll();
