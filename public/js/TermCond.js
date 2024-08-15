const back = document.querySelector(".fa-circle-left");

back.addEventListener("click", (e)=>{
    if(e.target){
        return history.back(-1);
    }
})