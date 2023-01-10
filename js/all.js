  function email() {
    document.getElementById("demo").innerHTML ="diego.munoz@ejemplo.com"
  }  
  function cumple() {
    document.getElementById("demo").innerHTML ="12 de Mayo de 1983"
  }   
  function adress() {
    document.getElementById("demo").innerHTML ="Rosario, Sante Fe"
  }
  function phone() {
    document.getElementById("demo").innerHTML ="(341) 155000000"
  }
  
  function escribirEnPantalla(texto){
    let arr=texto.split("");
    i=0;
   let intervalo= setInterval(function(){
      if(i==arr.length-1){ 
        document.getElementById("titulo").innerHTML+=arr[i];
        clearInterval(intervalo);} 
      else {
      if(arr[i]==" "){
       document.getElementById("titulo").innerHTML+=arr[i];
       document.getElementById("titulo").innerHTML+=arr[i+1];
        i+=2;
      }else{
      document.getElementById("titulo").innerHTML+=arr[i];
      i++;
        }
      }
    },500); 
  }
  
  escribirEnPantalla("Diego Muñoz");
  
  var anio = new Date().getFullYear();