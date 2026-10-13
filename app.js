let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")
let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnX=true

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const resetGame=() => {
    turnX=true
    enableBoxes()
    msgContainer.classList.add("hide")
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked")
    
      if(turnX)
        {
            box.innerText="X"
            turnX=false
        }
      else
        {
            box.innerText="O"
            turnX=true
        }
      box.disabled=true  
      checkWinner()    
    })   
});


const disableBoxes=() => {
    for(let box of boxes)
    {
        box.disabled=true
    }
}


const enableBoxes=() => {
    for(let box of boxes)
    {
        box.disabled=false
        box.innerText=""
}
}


const showWinner = (winner) => {
    msg.innerText=`Congrats, WINNER - ${winner}!!!`
    msgContainer.classList.remove("hide")
    disableBoxes()
}


const checkWinner =() => {
    for(let pattern of winPatterns)
    {
        //traversing each group of pattern's index 1 at a time and storing their value in a variable

        let postn1val = boxes[pattern[0]].innerText 
        let postn2Val = boxes[pattern[1]].innerText
        let postn3Val = boxes[pattern[2]].innerText
  
        if(postn1val !="", postn2Val !="", postn3Val !="")
        {
            if (postn1val===postn2Val && postn2Val===postn3Val)
            {
                console.log("Congrats, WINNER -", postn1val, "!!!")
                showWinner(postn1val)
            }
        }

    }
}


newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)