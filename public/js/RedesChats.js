const ContRedChat = document.querySelector(".cont_redesChats");
const btnAddBox = document.querySelector(".add_box");


btnAddBox.addEventListener("click", (e)=>{
    if(e.target){
        const newBox = document.createElement("div");
        const EliminarBox = document.createElement("span");
        const btnaddRedChat = document.createElement("button");

        newBox.setAttribute("class", "box_RedChat");
        EliminarBox.setAttribute("class", "BtnEliminar");
        btnaddRedChat.setAttribute("class", "add_redchat");
        btnaddRedChat.setAttribute("type", "button");
        EliminarBox.innerHTML = "X";
        btnaddRedChat.textContent = "+ add";
     
       newBox.appendChild(EliminarBox);
        newBox.appendChild(btnaddRedChat);
ContRedChat.appendChild(newBox);
let computeStyle = window.getComputedStyle(newBox);
if(computeStyle.backgroundImage !== 'none'){
newBox.removeChild(btnaddRedChat);

}    

btnaddRedChat.addEventListener("click", (e)=>{
    if(e.target){
        newBox.removeChild(btnaddRedChat);
const contSelect = document.createElement("ul");
let insta = document.createElement("li");
let face = document.createElement("li");
let twit = document.createElement("li");

insta.textContent = "Instagram";
face.textContent = "Facebook";
twit.textContent = "twiter";

contSelect.setAttribute("class", "contSelect");
insta.setAttribute("class", "selecRed")
face.setAttribute("class", "selecRed")
twit.setAttribute("class", "selecRed")
contSelect.appendChild(insta);
contSelect.appendChild(face);
contSelect.appendChild(twit);
newBox.appendChild(contSelect);
contSelect.style.display = "flex";


face.addEventListener("click", (e)=>{
    if(e.target){


        newBox.style.backgroundImage = "url('/img/facebook-movil-640x598.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";   
        newBox.removeChild(contSelect);

    }
})
insta.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/Instagram.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.removeChild(contSelect);
    }
})

twit.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/twiter_chat.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.removeChild(contSelect);
    }
})
}
})
newBox.addEventListener("mouseover", e =>{
    if(e.target){
        EliminarBox.style.display = "block";
    }
})

newBox.addEventListener("mouseout", e =>{
    if(e.target){
        EliminarBox.style.display = "none";
    }
})

EliminarBox.addEventListener("click", e =>{
    if(e.target){
        
        ContRedChat.removeChild(newBox);
    }
})
}

    
})
