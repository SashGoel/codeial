// controller function for route '/'
module.exports.home = function(req, res){
    return res.render('home', {
        title: "Home"
    });
}

