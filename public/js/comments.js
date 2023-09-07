let comments = document.querySelector("#comments")
let delBtn = document.querySelector("#delBtn")

comments.addEventListener("click", async function (event){
if(event.target.matches("delBtn")){
    let clickedId = event.target.getAttribute("data-id")
    console.log(event.target)

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
}
})
