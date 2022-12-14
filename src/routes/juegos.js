const { Router } = require('express');
const router = Router();
const validate = require('express-jsonschema').validate;

let juegos = []
 
var juegoSchema={
    type: 'object',
    properties: {
        id: {
            type: 'number',
            required: true
        },
        name: {
            type: 'string',
            required: true
        }
    }
}


//Juego
router.get('/juego/:id', (req, res) => { 
    const j = juegos.find(({id}) => id === parseInt(req.params.id))
    if(j==null){
        res.json({"Msg":"Not found"});
    }else{
        res.json(j);
    }
})

router.delete('/juego/:id', (req, res) => { 
    const removefromlistById = (plists, id) =>
        plists.filter(juegos => juegos.id !== id);
    const result = removefromlistById(juegos, 2);
    juegos = result
    res.json({"Msg":"Ok"})
})

router.get('/juego', (req, res) => {    
    res.json(juegos);
})

router.post('/juego', validate({body: juegoSchema}), (req, res) => {
    const j = juegos.find(({id}) => id === req.body.id)
    if(j==null){
        juegos.push(req.body);   
        res.json(req.body);
    }else{
        res.json({"Msg":"Id ya existe"});
    }
})


module.exports = router;