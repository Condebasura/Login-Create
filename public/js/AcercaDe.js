const back = document.querySelector(".bi-arrow-left-circle-fill");

back.addEventListener("click", (e)=>{
    if(e.target){
        return history.back(-1);
    }
})