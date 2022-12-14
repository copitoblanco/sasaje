const { Router } = require('express');
const router = Router();
const validate = require('express-jsonschema').validate;

let jugadores = [];
 
var jugadorSchema={
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


//Jugador
router.get('/jugador/:id', (req, res) => { 
    const j = jugadores.find(({id}) => id === parseInt(req.params.id))
    if(j==null){
        res.json({"Msg":"Not found"});
    }else{
        res.json(j);
    }
})

router.delete('/jugador/:id', (req, res) => { 
    const removefromlistById = (plists, id) =>
        plists.filter(jugadores => jugadores.id !== id);
    const result = removefromlistById(jugadores, 2);
    jugadores = result
    res.json({"Msg":"Ok"})
})

router.get('/jugador', (req, res) => {    
    res.json(jugadores);
})

router.post('/jugador', validate({body: jugadorSchema}), (req, res) => {
    const j = jugadores.find(({id}) => id === req.body.id)
    if(j==null){
        jugadores.push(req.body);   
        res.json(req.body);
    }else{
        res.json({"Msg":"Id ya existe"});
    }
})


module.exports = router;