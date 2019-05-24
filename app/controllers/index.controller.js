exports.render = (req, res) =>{
    console.log(req);
    res.set('Content-Type', 'application/json');
    res.send(res.send("token:",req.token));
};