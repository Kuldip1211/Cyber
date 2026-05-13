const AdminAuth = (req,res,next) =>{
    console.log("middleware is working");
    next();
}

module.exports = {
    AdminAuth
}