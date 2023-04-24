let input = document.querySelector("input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class item {
  constructor(tarea) {
    this.crearDiv(tarea);
  }

  crearDiv(tarea) {
    let inputItem = document.createElement("input");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = tarea;

    let divItem = document.createElement("div");
    divItem.classList.add("item");

    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = `<i class='fas fa-lock'></i>`;
    botonEditar.classList.add("boton-editar");

    botonEditar.addEventListener("click", function () {
      if (inputItem.disabled) {
        inputItem.disabled = false;
        botonEditar.innerHTML = `<i class='fas fa-lock-open'></i>`;
      } else {
        inputItem.disabled = true;
        botonEditar.innerHTML = `<i class='fas fa-lock'></i>`;
      }
    });

    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = `<i class="fas fa-trash"></i>`;
    botonRemover.classList.add("boton-remover");

    botonRemover.addEventListener("click", function () {
      divItem.remove();
    });

    divItem.appendChild(inputItem);
    divItem.appendChild(botonEditar);
    divItem.appendChild(botonRemover);

    container.appendChild(divItem);
  }
}

function chequearInput() {
  let tarea = input.value.trim();
  if (tarea !== "") {
    new item(tarea);
    input.value = "";
  }
}

botonAgregar.addEventListener("click", chequearInput);
