const fs = require('fs');
const getData = (fname) =>{
    return new Promise((Success, Fail) =>{
        fs.readFile(fname, 'utf8', (err, data) =>{
            if(err){
                return Fail(err);
            }
            let json = JSON.parse(data);
            return Success(json);
        })
    })
}

getData('studenti.json')
    .then(students =>{
        console.log(students);
        
        let ssbn = students.sort((a,b)=>{
        if(a.ime.lenght > b.ime.lenght){
            return -1;
        }else if (a.ime.lenght <b.ime.length){
            retrun 1;
        }else {
            return 0;
        }
        )
    })
    .catch(err=>{
        console.error(err);
    })
