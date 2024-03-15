
let numeroSecreto = Math.floor(Math.random()*100+1);
console.log("el numero es:"+ numeroSecreto);
let numeroUsuario = 0
let intentos = 1 ;
let maximosintentos=3;

while(numeroSecreto != numeroUsuario){
    let numeroUsuario = prompt("Ingrese un numero del 1 al 10");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        /*se puede convinar el codigo javaScrip con ${Codigo}*/
    alert(`El numero: ${numeroSecreto}  acerto, los itentos fueron ${intentos}`);
    }else {
        
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }
        else{
            alert('El numero secreto es mayor');
        }
    }    
    
    intentos = intentos + 1;       
    if(intentos> maximosintentos ){
        alert(`Superaste el numero de intentos que son : ${maximosintentos}`);
        break;
    }     
}
