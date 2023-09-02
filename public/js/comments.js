let comments = document.querySelector("#comments")

comments.addEventListener("click", async function (event){
if(event.target.matches("button")){
    let clickedId = event.target.getAttribute("data-id")
    console.log(clickedId)

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