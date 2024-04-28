const { request } = require('express');
const express = require('express');
const conectarDB = require('./config');
const ModelUser = require('./userModel');
const app = express();
const router = express.Router();

router.post("/", async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
        res.send(respuesta);
})

router.get("/", async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
    console.log("Se cargó correctamente");
})

//para buscar por id es asi "findById({_id: id})"
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById({_id: id});
    res.send(respuesta);
    console.log("Se cargó correctamente");
})

router.put("/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id: id}, body);
       res.send(respuesta);
})
  
router.delete("/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findByIdAndDelete({ _id: id })
    res.send(respuesta);
    console.log("Se borró correctamente");
})
  
app.use(express.json())
app.use(router)

app.listen(3000, () => {
    console.log ("El servidor esta en el puerto 3000");
})

conectarDB();