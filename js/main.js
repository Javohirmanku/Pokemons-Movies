let elRow = document.querySelector(".rowPM");
let elBtn1 = document.querySelector(".buttonPM__1");
let elBtn2 = document.querySelector(".buttonPM__2");
let elBtn3 = document.querySelector(".buttonPM__3");
let elResult = document.querySelector(".result");

let pokemonArray = pokemons;
let moviesArray = movies.slice(0,151);


elBtn1.addEventListener("click", function(){
  elRow.innerHTML = null;
  render(pokemonArray);
});

elBtn2.addEventListener("click", function(){
  elRow.innerHTML = null;
  render(moviesArray);
});

elBtn3.addEventListener("click", function(){
  elRow.innerHTML = null;
  elRow.innerHTML = `<p class="card h-100" >Cleaned</p>`;
  elResult.textContent = "Cleaned!";
});

function render(array) {
  array = array.slice(0, prompt("Nechta film ko'rmoqchisiz?"));
  elResult.textContent = array.length;
  for (const item of array) {
    let newOneDiv = document.createElement("div");
    newOneDiv.classList = "col";
    
    let newTwoDiv = document.createElement("div");
    newTwoDiv.classList = "card h-100";
    
    let newImg = document.createElement("img");
    newImg.classList = "imgPM";
    
    
    let newThreeDiv = document.createElement("div");
    newThreeDiv.classList = "card-body text-center";
    
    let newH5 = document.createElement("h5");
    let newText = document.createElement("p");
    newText.classList = "m-0";
    
    if (item.name) {
      newImg.src = item.img;
      newH5.textContent = item.name;
      newText.textContent = item.id;
    }else{
      newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
      newH5.textContent = item.Title;
      newText.textContent = item.language;
    }
    
    newThreeDiv.appendChild(newH5);
    newThreeDiv.appendChild(newText);
    newTwoDiv.appendChild(newImg);
    newTwoDiv.appendChild(newThreeDiv);
    newOneDiv.appendChild(newTwoDiv);
    elRow.appendChild(newOneDiv);
    
  }
}


