let firstUser =document.getElementById("firstUser")
let secondUser =document.getElementById("secondUser")

let game = document.getElementById("game")

let check = 0

function startGame1(){
    if(firstUser.value=="" && secondUser.value==""){
    alert("Enter Correct Charachter")
    }
     else if(firstUser.value.toString().toLowerCase() == "x" || firstUser.value.toString().toLowerCase() == "0"){
        if(firstUser.value.toString().toLowerCase() == "x" && secondUser.value.toString().toLowerCase() == "0"){
            console.log("get correct data")
            game.style.display="block"
        }
    }
    else if(firstUser.value.toString().toLowerCase() == "x" && secondUser.value.toString().toLowerCase() =="0"){
        console.log("get correct data")
        game.style.display="block"
    }
    else {
        console.log("second value incorrect")
    }
    


}




function check(t){
   console.log(t.innerHtml)  
}
