exports.render = (req, res) =>{
    console.log(req);
    res.setHeader("Content-Type", "application/json");
    res.send(res.send("token:",req.token));
};