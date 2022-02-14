function perimetroCuadrado(lado){
    return lado*4
}
function areaCuadrado(lado){
    return lado**2;
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("section__square__number--id");
    const result = document.getElementById("section__square--result");
    const medida = document.getElementById("listamedidaCuadrado");
    const unitValue = medida.value;
    const value = Number(input.value);
    const perimetro = perimetroCuadrado(value);
    result.innerText = `El perímetro del Cuadrado es: ${perimetro} ${unitValue}`;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("section__square__number--id");
    const result = document.getElementById("section__square--result");
    const medida = document.getElementById("listamedidaCuadrado");
    const unitValue = medida.value;
    const value = Number(input.value);
    const area = areaCuadrado(value);
    result.innerText = `El Area del Cuadrado es: ${area}${unitValue}²`;
}
/* codigo del triangulo */
function calcularAlturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2){
        return Math.sqrt((lado1 * lado1) - ((base / 2) * (base / 2)))
    } else{
        return (lado1 * lado2) / base
    }
}
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}
function areaTriangulo(base, altura){
    return (base*altura)/2;
}
/* calculo del area y perimetro del  triangulo */
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("section__square__number--id--triangule1");
    const input2 = document.getElementById("section__square__number--id--triangule2");
    const input3 = document.getElementById("section__square__number--id--triangule3");
    const result = document.getElementById("section__square--result--triangle");
    const valueText = document.getElementById("listmedidaidtriangle");
    const perimetro = perimetroTriangulo(Number(input1.value),Number(input2.value),Number(input3.value));
    result.innerText = (`El Perimetro del Triangulo es: ${perimetro} ${valueText.value}`);
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("section__square__number--id--triangule1");
    const input2 = document.getElementById("section__square__number--id--triangule2");
    const input3 = document.getElementById("section__square__number--id--triangule3");
    const result = document.getElementById("section__square--result--triangle");
    const valueText = document.getElementById("listmedidaidtriangle");
    let areaT = calcularAlturaTriangulo(Number(input1.value),Number(input2.value),Number(input3.value));
    let area = areaTriangulo(areaT,Number(input3.value));
    result.innerText = (` El Area del Triangulo es: ${area} ${valueText.value}`);
}

/* Codigo del Circulo */

function diametroCirculo(radio){
    return radio*2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    let perimetro = Math.round(diametro*Math.PI);
    return console.log(`El perimetro del Circulo es: ${perimetro} cm`);
}
function areaCirculo(radio){
    return Math.floor((radio**2)*Math.PI);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("section__square__number--id--circle");
    const result = document.getElementById("section__square--result--circle");
    const medida = document.getElementById("listmedidaidCircle");
    const unitValue = medida.value;
    const diametro =diametroCirculo(Number(input.value));
    result.innerText = `El Perimetro del Cuadrado es: ${diametro}${unitValue}`;
}
function calcularAreaCirculo(){
    const input = document.getElementById("section__square__number--id--circle");
    const result = document.getElementById("section__square--result--circle");
    const medida = document.getElementById("listmedidaidCircle");
    const unitValue = medida.value;
    const area = areaCirculo(Number(input.value));
    result.innerText = `El Area del Cuadrado es: ${area}${unitValue}²`;
}

/* Codigo del rectangulo */
function perimetroRectangulo(b,h){
    let p =((b*2)+(h*2));
    return p;
}

function calcularPerimetroRectangulo(){
    const inputh = document.getElementById("section__square__number--id--rectangleh");
    const inputb = document.getElementById("section__square__number--id--rectangleb");
    const result = document.getElementById("section__square--result--rectangle");
    const medida = document.getElementById("listmedidaidCircle");
    const unitValue = medida.value;
    const perimetro = perimetroRectangulo(Number(inputb.value),Number(inputh.value));
    result.innerText = `El Perimetro del Cuadrado es: ${perimetro}${unitValue}²`;
}
function calcularAreaRectangulo (){

}


