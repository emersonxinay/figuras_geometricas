// calculando el perimetro y el area del cuadrado 
const perimetro_cuadrado = (lado) => lado * 4;
const area_cuadrado = (lado) => lado * lado;
// calculando triangulo
const perimetro_triangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;
const area_triangulo = (base, altura) => (base * altura) / 2;

// calculando diametro, perimetro y area del  circulo
const perimetro_circulo = (radio) => 2 * (3.14) * radio;
const area_circulo = (radio) => (3.14) * radio * radio;
const diametro_circulo = (radio) => 2 * radio;

// para el año 
const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();
document.getElementById('fecha').innerText = anioActual

// creando funciones 
function calcularPerimetro() {
  let ingresarLado = document.getElementById('ingresarLado')
  let value = Number(ingresarLado.value)

  const resultado = `El perimetro del cuadrado es: ${perimetro_cuadrado(value)} cm`;
  // insertando al html
  document.getElementById('resultado').innerText = resultado
  document.getElementById('resultado1').innerText = resultado
}
function calcularArea() {
  let ingresarLado = document.getElementById('ingresarLado')
  let value = Number(ingresarLado.value)

  const resultado = `El perimetro del cuadrado es: ${area_cuadrado(value)} cm^2`;
  // insertando al html
  document.getElementById('resultado').innerText = resultado
  document.getElementById('resultado1').innerText = resultado

}

// =====>>>>>>> Todo con respecto al triangulo <<<<<<<=====
function calcularPerimetroTri() {
  let ingresarLado1 = document.getElementById('ingresarLado1')
  let value = Number(ingresarLado1.value)
  let ingresarLado2 = document.getElementById('ingresarLado2')
  let value2 = Number(ingresarLado2.value)
  let ingresarLado3 = document.getElementById('ingresarLado3')
  let value3 = Number(ingresarLado3.value)

  const resultadotri = `El perimetro del triangulo es: ${perimetro_triangulo(value, value2, value3)} cm`;
  // insertando al html
  document.getElementById('resultado').innerText = resultadotri
  document.getElementById('resultado2').innerText = resultadotri
}

// calcular area del triangulo 
function calcularAreaTri() {
  let ingresarBase = document.getElementById('ingresarBase')
  let value = Number(ingresarBase.value)
  let ingresarAltura = document.getElementById('ingresarAltura')
  let value2 = Number(ingresarAltura.value)
  const resultadotri = `El area del triangulo es: ${area_triangulo(value, value2)} cm^2`;
  // insertando al html
  document.getElementById('resultado').innerText = resultadotri
  document.getElementById('resultado2').innerText = resultadotri
}


// ==>>>>>> funciones para circulo  <<<<====

function calcularAreaCirculo() {
  let ingresarRadio = document.getElementById('ingresarRadio')
  let value = Number(ingresarRadio.value)

  const resultado_circulo = `El area del ciruclo es: ${area_circulo(value)} cm^2`;
  // insertando al html
  document.getElementById('resultado').innerText = resultado_circulo
  document.getElementById('resultado3').innerText = resultado_circulo
}

// calculando perimetro
function calcularPerimetroCirculo() {
  let ingresarRadio = document.getElementById('ingresarRadio')
  let value = Number(ingresarRadio.value)

  const resultado_circulo = `El perimetro del circulo es: ${perimetro_circulo(value)} cm`;
  // insertando al html
  document.getElementById('resultado').innerText = resultado_circulo
  document.getElementById('resultado3').innerText = resultado_circulo
}

// calculando diametro del circulo 
function calcularDiametroCirculo() {
  let ingresarRadio = document.getElementById('ingresarRadio')
  let value = Number(ingresarRadio.value)

  const resultado_circulo = `El Diametro del circulo es: ${diametro_circulo(value)} radianes`;
  // insertando al html
  document.getElementById('resultado').innerText = resultado_circulo
  document.getElementById('resultado3').innerText = resultado_circulo
}


