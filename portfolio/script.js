function mostrarTecnologias(projeto) {
  let tecnologias = "Este projeto foi desenvolvido com HTML, CSS e JavaScript.";

  if (projeto === "Site de Games") {
    tecnologias += "\nObs: Futuramente pretendo integrar mais funcionalidades em JavaScript.";
  }

  alert("Tecnologias utilizadas em: " + projeto + "\n\n" + tecnologias);
}