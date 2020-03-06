//route handler
const index = (req, res) =>{
    res.send('ok');
}

const pero = (req, res) =>{
    res.send("Hi Pero!");
}

const name = (req, res) =>{
    res.send(req.params.name);
}

const calc = (req, res) =>{
    switch (req.params.op){
        case 'add':
            res.send (''+(Number(req.params.a)+Number(req.params.b)));
             break;
        case  'div':
            res.send (''+(Number(req.params.a)/Number(req.params.b)));
             break;
         case 'sub':
            res.send (''+(Number(req.params.a)-Number(req.params.b)));
            break;
        case 'mul':
            res.send (''+(Number(req.params.a)*Number(req.params.b)));
             break;
             default:
                 res.send('Unknown operation');
    }
}

const post = (req, res) =>{
    let pozdrav = `Zdravo ${req.body.ime} ${req.body.prezime}`;
    res.send(pozdrav);
}

module.exports={
    index,
    pero,
    name,
    calc,
    post
};


1 ruta so get 1 so post
eden file niza od studenti 
na get da gi ispecahti site iminja i preziminja od studenti niza
na post rutata preku post metodot da ispratam ime/prezime (student) i da se dopise vo fajlot
1 otvori
2 procitaj
3 parse
4 dodadi studen
5 strinigfy 
6 pratite nazad