/*IMPRIMIR IMPARES 1-20*/
    console.log("Los numeros impares entre 1-20 son: ")
    for (var i = 1; i <= 20; i++){
        if (i % 2 === 1) {
            console.log(i);
        } 
    }

/*DISMINUIR MULTIPLOS DE 3*/
    console.log("Valores divisibles por 3 del 100 al 0")
    for (var i = 100; i > 0; i--){
        if (i % 3 === 0) {
            console.log(i);
        }   
    }

/*IMPRIME LA SECUENCIA*/
    console.log("Imprimir la siguiente secuencia")
    for (var i = 4; i >= -3.5; i -= 1.5){
        console.log(i);
    }

    /*SIGMA*/
    console.log("Sigma")
    sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum += i; 
        console.log(i)
    }
    console.log("La suma total es: " + sum)

/*FACTORIAL*/
    console.log("Factorial")
    product = 1;
    for (var i = 1; i <= 12; i++){
        product *= i;
        console.log(i)
    }
    console.log("Resultado Final: " + product)