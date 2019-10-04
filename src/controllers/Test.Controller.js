'use strict'

let controller = {
    unprotected: (req,res)=>{
        res.send("Ruta sin proteger");
    },
    protected: (req,res)=>{
        res.send(`Ok ${req.user.username} ${req.user.email} - Ruta protegida.`);
    },

}

module.exports = controller;