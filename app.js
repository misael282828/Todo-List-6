const form = document.getElementById('form');
const inputTarea = document.getElementById('inputTarea');
const btnAdd = document.getElementById('btnAdd');
const newTarea = document.getElementById('newTarea');

btnAdd.addEventListener('click', (e) => {

  e.preventDefault();

  // const form = document.createElement('div');
  form.classList.add('form-control', 'pt-3', 'mt-5', 'pb-3', "bg-danger" , "bg-gradient", "noBorder");

  const nuevaTarea = document.createElement('input');
  nuevaTarea.classList.add('form-control', 'mt-4');
  nuevaTarea.type = 'text';
  nuevaTarea.setAttribute('readonly', 'readonly');
  nuevaTarea.value = inputTarea.value;

  //boton Borrar
  const borrar = document.createElement('button');
  borrar.classList.add('btn','btn-dark','mt-3' );
  borrar.innerText = "Borrar"


  //boton editar
  const editar = document.createElement('button');
  editar.classList.add('btn','btn-secondary', 'mx-3','mt-3');
  editar.innerText = "Editar"

  //validar nueva tarea 
  if (nuevaTarea.value === "") {
    alert("add a new task ");
  } else {

    inputTarea.value = "";
    console.log("tarea agregada");
    form.appendChild(nuevaTarea);
    // form.appendChild(form);
    form.appendChild(borrar)
    form.appendChild(editar)

    form.appendChild(nuevaTarea);
  }

  //borrar task
  borrar.addEventListener("click",(e) => {
    e.preventDefault();

    form.removeChild(nuevaTarea)
    form.removeChild(borrar)
    form.removeChild(editar)

  });

  //Editar tarea
  editar.addEventListener("click",(e) => {
  
    e.preventDefault();

    editar.classList.toggle('btn-success')
    
    if( editar.innerHTML === "Editar"){
      nuevaTarea.removeAttribute("readonly");
      editar.innerText ='Save'
    }else{
      nuevaTarea.setAttribute("readonly", "readonly");
      editar.innerText ='Editar'
      
      console.log('Tarea Editada');
    }

  });


})