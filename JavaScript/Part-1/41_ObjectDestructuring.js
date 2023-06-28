"use strict";

const game = {
    gameName : "PUBG",
    makerName : "Tencent",
    device : "mobile",
    year : 2019
}

const {gameName, device, makerName} = game;
console.log(gameName, device, makerName);


// If you want to give some other variable-name
const {gameName:app, device:platform, makerName:developer} = game;
console.log(app, platform, developer);


const {gameName:var1, ...newObj} = game;
console.log(gameName);
console.log(newObj);