// did I pick my option of heads or tails
// 


// let clickEm = document.getElementById('fliperrr').addEventListener('click', clickEm)
let buttons = document.querySelectorAll('#fliperrr')
buttons.forEach(button => button.addEventListener('click', clickEm))

function clickEm(e){
   const pushy = e.target.innerText
   console.log(pushy)

   fetch(`/api?WhatYouChoose=${pushy}`)
   .then(res => res.json())
   .then((data) => {
      console.log(data)
   })

}



// OSCAR WAS THE BIGGEST HELP WITH THIS, 
// let heads = 0;
// let tails = 0;
// let coin = document.querySelector(".coins");
// document.querySelector("#fliperrr").addEventListener("click", flipbtn);
// let resetbtn = document.querySelector("#reset-button");

// function flipbtn(){
//     let randomCoin = Math.floor(Math.random() * 2);
//      if(randomCoin < 1){
//         document.querySelector('img').src = "tails1.png"
//         console.log("does it work");
//      }else{
//         document.querySelector('img').src = "heads1.png"
//         console.log("???does it work");
//      }
    // coin.style.animation = "none";
    // if(i){
    //     setTimeout(function(){
    //         coin.style.animation = "spin-heads 3s fowards"
    //     },100)
    //     heads++;
    // }else{
    //     setTimeout(function(){
    //         coin.style.animation = "spin-tails 3s fowards"
    //     },100)
    //     tails++;
    // }

// console.log(i);