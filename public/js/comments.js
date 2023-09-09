let comments = document.querySelector("#commentBoxes")
let delBtn = document.querySelectorAll(".delBtn")
let editBtn = document.querySelectorAll(".editBtn")

for (let i = 0; i< delBtn.length; i++) {
  
    console.log(delBtn)
    delBtn[i].addEventListener("click", async function (event){
    console.log("hello")
    console.log(event.target.value)
    // if(event.target.matches("delBtn")){
        let clickedId = event.target.getAttribute("data-id")
        
    
        const response = await fetch("/api/comments/"+clickedId, {
            method: "DELETE", 
        })
        await response.json();
    
        if(response.status === 200){
    
            window.location.reload();
        }
        else{
            console.log("error")
        }
    // }
    })
    }

    
for (let i = 0; i< editBtn.length; i++) {
  
    console.log(editBtn)
    editBtn[i].addEventListener("click", async function (event){
    console.log("hello")
    console.log(event.target.value)
    // if(event.target.matches("delBtn")){
        let clickedId = event.target.getAttribute("data-id")
        
    
        const response = await fetch("/api/comments/"+clickedId, {
            method: "PUT", 
        })
        await response.json();
    
        if(response.status === 200){
    
            window.location.reload();
        }
        else{
            console.log("error")
        }
    // }
    })
    }