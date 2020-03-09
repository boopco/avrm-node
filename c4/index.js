const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const fs = require('fs');

var app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res)=>{
//    res.send('ok'); 
res.render('main');
});

app.get('/ime/:ime', (req, res)=>{
    let data = {
        ime:req.params.ime,
        prezime:'Studentovski',
        denovi: ['pon', 'vto', 'sre', 'cet', 'pet', 'sab', 'ned'],
        
        

    };
    res.render('ime', data);
})


app.get('/studenti', (req, res)=>{
    fs.readFile('./studenti.json', (err, data)=>{
        if (err){
            res.status(400).send('bad request');
            return;
        }
        let out={
            students: JSON.parse(data)
        };
        res.render('studenti', out);
    })
});

app.post('/studenti', (req, res)=>{
    fs.readFile('./studenti.json', (err, data)=>{
        if (err){
            res.status(400).send('bad request');
            return;
        }
       data = JSON.parse(data);
       data.push({
           ime: req.body.ime,
           prezime: req.body.prezime,
           prosek: req.body.prosek,
       });
       data=JSON.stringify(data);
       fs.writeFile('./studenti.json', data, (err)=>{
        if (err){
            res.status(400).send('bad request');
            return;
        }
        res.redirect('/studenti');
       });
    });
  });

  app.get('/studenti/delete/:id', (req, res)=>
  )

app.listen(8080, (err)=>{
    if (err){
        console.log('Could not start server', err);
        return;
    }
    console.log('Server started successfully');
})
