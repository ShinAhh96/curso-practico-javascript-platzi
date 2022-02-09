console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado+ " CM");
const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " CM");
const areCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado es: " + areCuadrado + " CM Cuadrados");
console.groupEnd;
/* codigo del triangulo */
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
console.log("Los lados del Trignagulo miden: " + ladoTriangulo1 + " CM, "+ ladoTriangulo2 + " CM, " + ladoTriangulo3 + " CM");
const baseTriangulo = 4;
console.log("La base del Triangulo mide: " + baseTriangulo + " CM");
const alturaTriangulo = 5.5;
console.log("La altura de Triangulo mide: " + alturaTriangulo + " CM");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo mide: " + perimetroTriangulo + " CM");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Area del Triangulo mide: " + areaTriangulo + "CM^2");
console.groupEnd;
/* codigo del Circulo */
console.group("Circulos");
// PI
const pi = Math.PI;
console.log(`PI es igual a: ${pi}`);
// DIAMETRO
//RADIO
const radioCirculo = 4;
console.log(`El Radio del Circulo es igual a: ${radioCirculo} CM`);
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del Circulo es igual a: ${diametroCirculo} CM`);
//CIRCUFERENCIA
const perimetroCirculo = diametroCirculo*pi;
console.log(`La circuferencia del Circulo es igual a: ${perimetroCirculo} CM`);
//AREA
const areaCirculo = (radioCirculo*radioCirculo)*pi;
console.log(`El Area del Circulo es igual a: ${areaCirculo} CM^2`);
console.groupEnd;