//route handler
const index = (req, res) =>{
    res.send('ok');
}

const post  = (req, res) =>{
    res.send("Hi Pero!");
}

module.exports={
    index,
    post
};