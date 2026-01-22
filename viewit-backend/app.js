const express = require("express");

const app = express();
const prot = 4000;

app.listen(prot, ()=> {
    console.log(`서버 실행중: http://localhost:${port}`);
})