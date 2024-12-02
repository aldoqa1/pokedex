const container = document.getElementById("container");
const types = {
    grass : "rgb(168, 252, 184)",
    fire  : "rgb(241, 144, 144)",
    water  : "rgb(168, 206, 252)",
    normal  : "rgb(255, 245, 213)",
    bug : "rgb(229, 226, 234)",
    poison : "rgb(207, 185, 230)",
    electric : "rgb(242, 218, 112)",
    ground : "rgb(220, 199, 105)"
}

getData();

async function getData() {

    for(let x=1;x<30;x++){

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
        const pokemon = await res.json(); 
        const div = document.createElement("div");
        div.classList.add("card");
        const type = pokemon.types[0].type.name;
        console.log(types[type]);
        div.style.backgroundColor = types[type];
        div.innerHTML=`
            <div class="picture-container">
                <img class="picture" loading="lazy" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
            <p id="${pokemon.id}">#${pokemon.id.toString().padStart(3, "0")}</p>
            <h2>${pokemon.name}</h2>
            <span>Type: ${type}</span>
        `;
        
        container.appendChild(div);
    }
   
}

