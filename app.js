const express = require ("express");
const app = express ();

const path= require ("path");
const carpetaPublica=path.resolve(__dirname,"public");
app.use (express.static(carpetaPublica));

app.listen (process.env.PORT || 3000 function (){
    console.log ("Servidor corriendo en el puerto 3000"));

//Ruta que cuando reciba la petición
//Devuelva la vista
//Llamar a los archivos públicos
app.get("/", (req, res)=>{
    const rutaHaciaHome=path.resolve(__dirname, "views/home.html");
    console.log(rutaHaciaHome)
    res.sendFile(rutaHaciaHome);
})
//app.get("/nosotros", (req,res)=>)
app.get("/register", (req, res)=>{
    const rutaHaciaRegistro=path.resolve(__dirname, "views/register.html");
    console.log(rutaHaciaRegistro)
    res.sendFile(rutaHaciaRegistro);
})
app.get("/login", (req, res)=>{
    const rutaHaciaLogin=path.resolve(__dirname, "views/login.html");
    console.log(rutaHaciaLogin)
    res.sendFile(rutaHaciaLogin);
})