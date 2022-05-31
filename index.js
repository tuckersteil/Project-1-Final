let cardImages = document.getElementsByTagName("img")
let newCount = 0
let dataValue
let count
let cards
let userValues = []
let dealerValues = []
let countValue = 0
function myResetFunc(){
    console.log("rest was called")
    document.getElementById("dealBtn").disabled = true
    document.getElementById("stayBtn").disabled = true
    let reset = document.getElementById("reset")
        reset.addEventListener("click", ()=> {
        console.log("reset was clicked")
        userValues = []
        dealerValues = []
        console.log(userValues)
        console.log(dealerValues)
        let testy = document.getElementById("uCard1")
        let testy2 = document.getElementById("uCard2")
        let testy10 = document.getElementById("uCard3")
        let testy11 = document.getElementById("uCard4")
        let testy12 = document.getElementById("uCard5")
        let testy13 = document.getElementById("uCard6")
        let testy14 = document.getElementById("uCard7")
        let testy3 = document.getElementById("dCard1")
        let testy4 = document.getElementById("dCard2")
        let testy5 = document.getElementById("dCard3")
        let testy6 = document.getElementById("dCard4")
        let testy7 = document.getElementById("dCard5")
        let testy8 = document.getElementById("dCard6")
        let testy9 = document.getElementById("dCard7")
        let reAddHitBtn = document.getElementById("hitBtn")
        document.getElementById("hitBtn").disabled = true
        document.getElementById("stayBtn").disabled = true
        document.getElementById("dealBtn").disabled = false
        testy.src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
        testy2.src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
        testy3.src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
        testy4.src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
        testy5.classList.add('hidden')
        testy6.classList.add('hidden')
        testy7.classList.add('hidden')
        testy8.classList.add('hidden')
        testy9.classList.add('hidden')
        testy10.classList.add('hidden')
        testy11.classList.add('hidden')
        testy12.classList.add('hidden')
        testy13.classList.add('hidden')
        testy14.classList.add('hidden')
        count = 0
        newCount = 0
        countValue = 0 
        userValues = []
        dealerValues = []
        cardValues = []
        dealerTotal = 0
    })
}


function dealCards(data){
    count = 0
    console.log(data)
    cards = data.cards
    dataValue = data
    for(let i = 0; i< cardImages.length;i++){
        cardImages[i].src =  cards[i].image
        cardImages[1].src = "https://media.istockphoto.com/photos/bicycle-rider-back-playing-card-design-picture-id157772536?s=612x612"
    }
    createCards(cards)
}   

function createCards(cards){
    let cardValues = []
    userValues = []
    for (let i = 0; i < cards.length; i++){
        cardValues[i] = cards[i].value
    }
    cardValues.forEach(item => {
        if(item === "QUEEN" || item === "KING" || item === "JACK"){
            item = "10"
            userValues.push(item)
        }
        else if (item === "ACE"){
            item = "11"
            userValues.push(item)
        }
        else{
            userValues.push(item)
        }
    })
    dealerValues = userValues.splice(0, 7)
            console.log(cardValues)
            console.log(dealerValues)
            console.log(userValues)
    buildBtn(userValues, dealerValues)
    
}

function buildBtn(userValues, dealerValues){
    console.log(userValues)
    console.log(dealerValues)
    let hitStayArray = [...document.getElementsByClassName("array")];
    hitStayArray.forEach(button => {
        button.addEventListener("click", (e) =>{
            userAction(userValues, dealerValues, e)
        })
    })
}
    // let hitBtnClick = document.getElementById("hitBtn")
    // hitBtnClick.addEventListener("click", (e)=>{
    //     console.log(userValues)
    //     console.log(e)
    //     userAction(userValues, dealerValues, e)
    // })
    // let stayBtnClick = document.getElementById("stayBtn")
    // stayBtnClick.addEventListener("click", (e)=>{
    //     console.log(userValues)
    //     console.log(dealerValues)
    //     console.log(e)
    //     userAction(userValues, dealerValues, e)
    // })


function userAction(userValues, dealerValues, e){
    console.log(e)
    console.log(userValues)
    console.log(dealerValues)
    if (e.target.id === "hitBtn"){
        count = 0
        userHit(userValues);
    }
    if (e.target.id === "stayBtn"){
        userStay(dealerValues);
    }
}
    
    

function increase(){ 
    return count++
}



function userHit(userValues){
    console.log("i was accessed")
    console.log(userValues)
    // let dealerValues = userValues.splice(0, 7)
    // console.log(dealerValues)
    console.log(userValues)
    increase()
    countValue = 0
    for (let i = count; i <= count; i++){
        cardImages[i + 8].classList.remove('hidden')
    }
    for (let i = 0; i <= count+1; i++){
        countValue = countValue + parseInt(userValues[i])
        if (countValue > 21 && true === userValues.includes("11")){
            console.log("found ace")
            for(i=0; i < userValues.length +1; i++){//userValues.length
                if(userValues[i] === "11"){
                    userValues[i] = 1
            
            
            countValue = 0
            for (let i = 0; i <= count+1; i++){
                countValue = countValue + parseInt(userValues[i])
                console.log(countValue)
            }
                
            console.log(countValue)
            }
        }
    }
}
    console.log(countValue)
    userBusts(countValue)
}

function userBusts(countValue){
    if (countValue > 21){
        document.getElementById("hitBtn").disabled = true;
        document.getElementById("stayBtn").disabled = true;
        setTimeout(() => {
            alert("You Busted")}, 1000)  
            myResetFunc()              
    } 
}

function userStay(dealerValues){
    document.getElementById("hitBtn").disabled = true;
    document.getElementById("stayBtn").disabled = true;
    //let dealerValues = userValues.splice(0, 7)
    //console.log(dealerValues)
    
    cardImages[1].src = cards[1].image
    cardImages[1].classList.remove('hidden')
    //let stayValue = 0
    // for (let i = 0; i <= count+1; i++){
    //     stayValue = stayValue + parseInt(userValues[i])
    //     if (stayValue > 21 && true === userValues.includes("11")){
    //         console.log("found ace")
    //         for(i=0; i < userValues.length; i++){
    //             if(userValues[i] === "11"){
    //                 userValues[i] = 1
    //             }
    //         }
    //         stayValue = 0
    //         for (let i = 0; i <= count+1; i++){
    //             stayValue = stayValue + parseInt(userValues[i])
    //         }
    //     }
    // }
    if (count === 0){
        countValue = parseInt(userValues[0]) + parseInt(userValues[1])
    }
    console.log(countValue)
    /////// up untill here works for uservalues and shows two dealer cards 
    let dealerTotal = parseInt(dealerValues[0]) + parseInt(dealerValues[1])
    console.log(dealerTotal)
    if(dealerTotal === 21 && dealerTotal === countValue){
       
        console.log(dealerTotal)
        setTimeout(() => {
            alert("Draw, Deal Again")}, 1000) 
            myResetFunc() 
    }
    if (dealerTotal === 21 && dealerTotal > countValue){
        
        console.log(dealerTotal)
        setTimeout(() => {
            alert("Dealer Wins")}, 1000)
            myResetFunc() 
            
    }
    if(dealerTotal < 21 && dealerTotal >= 17 && dealerTotal > countValue){
        
        console.log(dealerTotal)
        setTimeout(() => {
            alert("Dealer Wins")}, 1000)
            myResetFunc()
            
    }
    else if(dealerTotal < 21 && dealerTotal >= 17 && dealerTotal < countValue){
        
        console.log(dealerTotal)
        setTimeout(() => {
            alert("Congrats You Won!")}, 1000)  
            myResetFunc() 
            
    }
    else if(dealerTotal < 21 && dealerTotal >= 17 && dealerTotal === countValue){
       
        console.log(dealerTotal)
        setTimeout(() => {
            alert("Draw, Deal Again")}, 1000)  
            myResetFunc()  
    }
    else if (dealerTotal <=16){
        console.log(countValue)
        console.log(dealerTotal)
        let d3 = document.querySelector('#dCard3')
        d3.classList.remove('hidden')
        dealerTotal = dealerTotal + parseInt(dealerValues[2])
        console.log(dealerTotal)
        
        if (dealerTotal > 21 && true === dealerValues.includes("11"))
            for(i=0; i<dealerValues.length; i++){
                if(dealerValues[i] === "11"){
                    dealerValues[i] = 1
                }
                dealerTotal = parseInt(dealerValues[0]) + parseInt(dealerValues[1]) + parseInt(dealerValues[2]) 
                console.log(dealerTotal)
                
            }
        
        if (dealerTotal > 21){
            console.log(dealerTotal)
            
            setTimeout(() => {
                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                myResetFunc() 
                
        }


        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > countValue){
            console.log(dealerTotal)
            
            setTimeout(() => {
                alert("Dealer Wins")}, 1000)
                myResetFunc() 
                
        }
        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < countValue){
            console.log(dealerTotal)
            
            setTimeout(() => {
                alert("Congrats You Won!")}, 1000)    
                myResetFunc() 
                
        }
        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === countValue){
            console.log(dealerTotal)
            
            setTimeout(() => {
                alert("Draw, Deal Again")}, 1000)   
                myResetFunc()  
        }
        else if(dealerTotal <= 16){
            console.log(dealerTotal)
            
            let d4 = document.querySelector('#dCard4')
            d4.classList.remove('hidden')
            dealerTotal = dealerTotal + parseInt(dealerValues[3])
            
            console.log(dealerTotal)
            if (dealerTotal > 21 && true === dealerValues.includes("11"))
                for(i=0; i<dealerValues.length; i++){
                    if(dealerValues[i] === "11"){
                        dealerValues[i] = 1
                }
                dealerTotal = parseInt(dealerValues[0]) + parseInt(dealerValues[1]) + parseInt(dealerValues[2]) + parseInt(dealerValues[3])
                console.log(dealerTotal)
                
            }
            
            if (dealerTotal > 21){
                console.log(dealerTotal)
                
                setTimeout(() => {
                    alert("Congrats, Dealer Busted. You Won!")}, 1000)
                    myResetFunc() 
                    
            }
            if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > countValue){
                console.log(dealerTotal)
                
                setTimeout(() => {
                    alert("Dealer Wins")}, 1000)  
                    myResetFunc() 
                    
            }
            else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < countValue){
                console.log(dealerTotal)
                
                setTimeout(() => {
                    alert("Congrats You Won!")}, 1000)  
                    myResetFunc()   
                    
            }
            else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === countValue){
                console.log(dealerTotal)
                
                setTimeout(() => {
                    alert("Draw, Deal Again")}, 1000)   
                    myResetFunc()  
            }
            else if (dealerTotal <= 16){
                console.log(dealerTotal)
                
                let d5 = document.querySelector('#dCard5')
                d5.classList.remove('hidden')
                dealerTotal = dealerTotal + parseInt(dealerValues[4])
                console.log(dealerTotal)
                if (dealerTotal > 21 && true === dealerValues.includes("11"))
                    for(i=0; i<dealerValues.length; i++){
                        if(dealerValues[i] === "11"){
                            dealerValues[i] = 1
                }
                dealerTotal = parseInt(dealerValues[0]) + parseInt(dealerValues[1]) + parseInt(dealerValues[2]) + parseInt(dealerValues[3]) + parseInt(dealerValues[4])
                console.log(dealerTotal)
                
            }

                if (dealerTotal > 21){
                    console.log(dealerTotal)
                    
                    setTimeout(() => {
                        alert("Congrats, Dealer Busted. You Won!")}, 1000)
                        myResetFunc() 
                        
                }

                if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > countValue){
                    console.log(dealerTotal)
                    
                    setTimeout(() => {
                        alert("Dealer Wins")}, 1000)
                        myResetFunc() 
                        
                    
                }
                else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < countValue){
                    console.log(dealerTotal)
                    
                    setTimeout(() => {
                        alert("Congrats You Won!")}, 1000)   
                        myResetFunc()  
                        
                }
                else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === countValue){
                    console.log(dealerTotal)
                   
                    setTimeout(() => {
                        alert("Draw, Deal Again")}, 1000)   
                        myResetFunc()  
                }
                else if (dealerTotal <= 16){
                    console.log(dealerTotal)
                    
                    let d6 = document.querySelector('#dCard6')
                    d6.classList.remove('hidden')
                    dealerTotal = dealerTotal + parseInt(dealerValues[5])
                    console.log(dealerTotal)
                    
                    if (dealerTotal > 21 && true === dealerValues.includes("11"))
                        for(i=0; i<dealerValues.length; i++){
                            if(dealerValues[i] === "11"){
                                dealerValues[i] = 1
                }
                dealerTotal = parseInt(dealerValues[0]) + parseInt(dealerValues[1]) + parseInt(dealerValues[2]) + parseInt(dealerValues[3]) + parseInt(dealerValues[4]) + parseInt(dealerValues[5])
                console.log(dealerTotal)
                
            }
                    if (dealerTotal > 21){
                        console.log(dealerTotal)
                        
                        setTimeout(() => {
                            alert("Congrats, Dealer Busted. You Won!")}, 1000)
                            myResetFunc() 
                            
                    }
    
                    if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > countValue){
                        console.log(dealerTotal)
                        
                        setTimeout(() => {
                            alert("Dealer Wins")}, 1000)
                            myResetFunc() 
                            
                        
                    }
                    else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < countValue){
                        console.log(dealerTotal)
                        
                        setTimeout(() => {
                            alert("Congrats You Won!")}, 1000)   
                            myResetFunc()  
                            
                    }
                    else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === countValue){
                        console.log(dealerTotal)
                        
                        setTimeout(() => {
                            alert("Draw, Deal Again")}, 1000)    
                            myResetFunc() 
                    }
                    else if (dealerTotal <= 16){
                        console.log(dealerTotal)
                        
                        let d7 = document.querySelector('#dCard7')
                        d7.classList.remove('hidden')
                        dealerTotal = dealerTotal + parseInt(dealerValues[6])
                        console.log(dealerTotal)
                       
                        if (dealerTotal > 21 && true === dealerValues.includes("11"))
                        for(i=0; i<dealerValues.length; i++){
                            if(dealerValues[i] === "11"){
                                dealerValues[i] = 1
                }
                dealerTotal = parseInt(dealerValues[0]) + parseInt(dealerValues[1]) + parseInt(dealerValues[2]) + parseInt(dealerValues[3]) + parseInt(dealerValues[4]) + parseInt(dealerValues[5]) + parseInt(dealerValues[6])
                console.log(dealerTotal)
               
            }
        
                        if (dealerTotal > 21){
                            console.log(dealerTotal)
                            
                            setTimeout(() => {
                                alert("Congrats, Dealer Busted. You Won!")}, 1000)
                                myResetFunc() 
                                
                        }
        
                        if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal > countValue){
                            console.log(dealerTotal)
                            
                            setTimeout(() => {
                                alert("Dealer Wins")}, 1000)
                                myResetFunc() 
                                
                            
                        }
                        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal < countValue){
                            console.log(dealerTotal)
                            
                            setTimeout(() => {
                                alert("Congrats You Won!")}, 1000)  
                                myResetFunc()   
                        }
                        else if(dealerTotal <= 21 && dealerTotal >= 17 && dealerTotal === countValue){
                            console.log(dealerTotal)
                            
                            setTimeout(() => {
                                alert("Draw, Deal Again")}, 1000)  
                                myResetFunc()   
                        }
                    }
                }
            }
        }
    }
}


    
    


document.addEventListener("DOMContentLoaded", () => {
    const dealBtn = document.querySelector("#dealBtn");
    dealBtn.addEventListener("click", () => {
        //dealBtn.disabled = true
        document.getElementById("stayBtn").disabled = false
        document.getElementById("hitBtn").disabled = false
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=14')
        .then(response => response.json())
        .then(data => dealCards(data))
        //.then(data => displayUserValue(data))
    })
})