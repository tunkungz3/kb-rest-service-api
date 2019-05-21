exports.render = (req, res) =>{
    console.log(req);
    res.send(res.send("token:",req.token));
};