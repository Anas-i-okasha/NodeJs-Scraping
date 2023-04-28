const express = require('express');
const mainRouter = express.Router();
const { getAllComputersData } = require('../controller/main-controller');


mainRouter.get('/',async(req,res)=>{
    const data = await getAllComputersData();
    const rows = data.map(({ index,title, value,imageLink }) => {
    return `<tr><td>${index}</td><td>${title}</td><td>${value}</td><td><img src="${imageLink}"></td></tr>`;
        }).join('');
    const table = `<table>${rows}</table>`;
    res.send(table);
})

module.exports = mainRouter;