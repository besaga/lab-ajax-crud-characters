const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()//haces un promesa llamando a toda la lista
      .then(response => {
        let container = document.querySelector(".characters-container")//creas una variable donde introduces los characters
        let newData = ""// creas una variable vacia para itere por todo el array de minions creados

        response.data.forEach(character => {
          newData +=    // new data que esta vacio ahora imprimiria  el character.name,ocupation etc
            `<div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>
          </div>`
        })
        container.innerHTML = newData//del container que quiero modificar saldrá la variable vacia donde imprime los min ions
      })
      .catch(err => console.error(err))   //si da error
  });









  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName('character-id')[0].value
    charactersAPI
      .getOneRegister(id)
      .then(res => {
        console.log(res);

        let container = document.querySelector(".characters-container")
        let newData =
          `<div class="character-info">
          <div class="name">${res.data.name}</div>
          <div class="occupation">${res.data.occupation}</div>
          <div class="cartoon">${res.data.cartoon}</div>
          <div class="weapon">${res.data.weapon}</div>
          </div>`

        container.innerHTML = newData

      })
      .catch(err => console.error(err))   //si da error

  });






  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementsByName('character-id')[0].value;

    charactersAPI
      .deleteOneRegister(id)
      .then(res => {
        let container = document.querySelector(".characters-info")

      })
      .catch(err => console.log(err))

  });



  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault();

    const edcharacterForm = document.querySelector("#edit-character-form")
    const inputs = document.querySelectorAll("#edit-character-form input")
    const id = document.getElementsByName('chr-id')[0].value;

    const name = inputs[1].value
    const occupation = inputs[2].value
    const weapon = inputs[3].value
    const cartoon = inputs[4].checked
    const info = { name, occupation, weapon, cartoon }

    charactersAPI.updateOneRegister(id, info)
      .then(res => {
        edcharacterForm.reset()
        charactersAPI.getFullList()
      })
      .catch(err => console.log(err))

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
