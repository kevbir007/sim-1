const express = require('express');
const bodyParser = require('body-parser');
const inventory = require('./inventory');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

const app = express();/* 74E */
massive( process.env.CONNECTION_STRING ).then( dbInstance => {app.set('db', dbInstance)});/* 70C */
/* 76F */
app.use( bodyParser.json() );
app.use( cors() );

const baseURL = "/api/bin";

// delete info from bin
/* 76C */
app.delete(baseURL + "/delete/:id", function(req, res, next){/* 74M */
    const db = app.get("db");
    db.delete_item([req.params.id])
    .then((response) => res.status(200).send(response))
    .catch((error) => res.send(error))
    // req.params.bin
    // res.sendStatus(200)
});
// edit bin
app.put(baseURL + "/update/:id/:item/:price"/*76E*/, function(req, res, next){
    const db = app.get("db");
    console.log("hit")
    db.update_bin([req.params.id, req.params.item, req.params.price])
    .then((response) => res.status(200).send(response))
    .catch((error) => res.send(error))
    // req.params.bin
    // res.sendStatus(200)
});
app.post(baseURL + "/:shelfname/:bin", function(req, res, next){
    const db = app.get("db"); // IMPORTANT
    console.log(req.params.shelfname)
    console.log(req.params.bin)
    console.log(req.body)
    db.new_item([req.params.shelfname, req.params.bin, req.body.name, req.body.price])
    .then((response) => res.status(200).send(response)) // .then and .catch go together always
    .catch((error) => res.send(error))
});
app.get(baseURL + "/:shelfname/:bin", function(req, res, next){
    const db = app.get("db");
    console.log('oh hai')
    db.get_info_by_shelf_and_bin([req.params.shelfname, req.params.bin])
    .then((response) => res.status(200).send(response))
    .catch((error) => res.send(error))
    // req.params.bin
    // res.status(200).send(inventory)
});
// similar to the one above(not completely)
app.get(baseURL + "/:shelfname", function(req, res, next){
    const db = app.get("db");
    db.get_info_by_shelf([req.params.shelfname])
    .then((response) => res.status(200).send(response))
    .catch((error) => res.send(error))
});



const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );

