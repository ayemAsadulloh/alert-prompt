// ====================TASK 1=====================
// let sayName = prompt ("Ismingiz" , "Akromjon")
// let age = prompt ("Yoshingiz" , "17")
// let place = prompt ("Yashash joyingiz" , "Toshkent")

// console.log(`Ismi: ${sayName}
// Yoshi: ${age}
// Yashash joyi: ${place}
// `);
// ========================TASK 2================
// let arr = []
// arr[0] = prompt("VAR ni qanday ishlatamiz") 
// arr[1] = prompt("hue-rotate nma bilan beriladi")
// arr[2] = prompt("BREAKPOINT lar nma")
// arr[3] = prompt("bootstrapda P-1 nechi remga teng") 
// arr[4] = prompt("CONTAIN vazifasi")
// arr[5] = prompt("SASS nima")
// console.log(arr);
// ==============================================

"use strict"

let isSpeaking = +prompt("Your speakin score")
let isReading = +prompt("Your reading score")
let isWriting = +prompt("Your writing score")
let isListening = +prompt("Your listening score")

let allBall = isSpeaking + isReading + isReading + isListening
console.log(Math.round(allBall / 4));
document.write(Math.round(allBall / 4))


// let giveHello = prompt("yoqtirgan narsangizni kiriting")
// let isName = prompt("lyuboy narsa")
// document.write(giveHello + ": " + isName)  