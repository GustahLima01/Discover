function toggleMode() {
  const html = document.documentElement // pega o html do documentElement
  html.classList.toggle("light")
  // a condição acima é a mesma coisa que a logica abaixo

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img") //passa o seletor do css

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos de sol preto e jaqueta  preta, sem barba e fundo azul com roxo");
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo");
  }
}
