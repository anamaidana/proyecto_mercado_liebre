const express = require ("express");
const app = express ();

const path= require ("path");
const carpetaPublica=path.resolve(__dirname,"public");
app.use (express.static(carpetaPublica));

app.listen (3000, ()=>console.log ("servidor corriendo"));

//Ruta que cuando reciba la petición
//Devuelva la vista
//Llamar a los archivos públicos
app.get("/", (req, res)=>{
    const rutaHaciaHome=path.resolve(__dirname, "views/home.html");
    console.log(rutaHaciaHome)
    res.sendFile(rutaHaciaHome);
})
//app.get("/nosotros", (req,res)=>)