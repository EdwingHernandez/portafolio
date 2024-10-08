const botonTema = document.getElementById("iconoDarkMode");
const iconoTema =  document.getElementById("iconoTema");


// Si el tema guardado es "oscuro", añadir la clase .dark-mode
botonTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if(iconoTema.classList.contains("bx-toggle-left")){
    iconoTema.classList.remove("bx-toggle-left");
    iconoTema.classList.add("bxs-toggle-right");
  }else{
    iconoTema.classList.remove("bxs-toggle-right");
    iconoTema.classList.add("bx-toggle-left");
    }
});