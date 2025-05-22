function saludar(nombre) {
    return `Hola, ${nombre}`;
  }
  
  saludar("Mundo");
  console.log(saludar("Mundo  funcion basica"));
  
  const saludar2=(edgar) =>{
      return `Hola, ${edgar}`;
  }
  
  console.log(saludar2("Mundo  funcion flecha"));
  
  const saludar3= (nombre) => `Hola, ${nombre}`;
  
  console.log(saludar3("Mundo  funcion flecha 2"));
  
  
  //funcion tipo clecha donde entre una edad y diga si es mayor o menor de edad 
  
  const edad= (edad) => {
      if(edad>=18){
          return "Eres mayor de edad  👺👺👺👺👺";
      }else{
          return "Eres menor de edad 👻👻👻👻👻";
      }
  };
     
  
  console.table(edad(50));
  
  
  const getUser = () =>({
      name: "Edgar",
      años: 20,
      udi :"edgar@gmail.com",
      contraseña:"Edgy123",
  })
  
  const user = getUser().udi ; ;
  console.table(user);
  
  
  console.table(getUser());