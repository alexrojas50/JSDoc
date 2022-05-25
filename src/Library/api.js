const express = require("express");
const app = express();
/**
 * Index Route
 * @Name Ruta principal  
 * @path {Get} /Index
 */
app.get('/Index', (req, res) => res.send('Welcome'));

/**
 * @module Apis
 */

/**
 * User Route
 * @Name Ruta Usuarios
 * @path {Post} /Users
 */
app.get('/Users', (req, res) => res.send('Welcome'));

/**
 * Delete Route
 * @Name Ruta Borrar  
 * @path {Delete} /Delete
 */
app.get('/Detele', (req, res) => res.send('Welcome'));

/**
 * Edit Route
 * @Name Ruta Editar  
 * @path {Put} /Edit
 */
app.get('/Edit', (req, res) => res.send('Welcome'));


app.set('port', 3000);
app.listen(app.get('port'),() =>{
    console.log('**SERVER ACTIVO **', app.get('port'));
});
