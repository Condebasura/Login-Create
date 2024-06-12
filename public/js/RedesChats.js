const ContRedChat = document.querySelector(".cont_redesChats");
const btnAddBox = document.querySelector(".add_box");


btnAddBox.addEventListener("click", (e)=>{
    if(e.target){
        const newBox = document.createElement("div");
        const btnaddRedChat = document.createElement("button");

        newBox.setAttribute("class", "box_RedChat");
        btnaddRedChat.setAttribute("class", "add_redchat");
        btnaddRedChat.setAttribute("type", "button");

        btnaddRedChat.textContent = "+ add";
    newBox.appendChild(btnaddRedChat);
ContRedChat.appendChild(newBox);
let computeStyle = window.getComputedStyle(newBox);
if(computeStyle.backgroundImage !== 'none'){
    console.log("la caja  tiene imagen")
newBox.removeChild(btnaddRedChat)
}    

btnaddRedChat.addEventListener("click", (e)=>{
    if(e.target){
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
        newBox.removeChild(btnaddRedChat);
        newBox.removeChild(contSelect);

    }
})
insta.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/Instagram.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.removeChild(btnaddRedChat);
        newBox.removeChild(contSelect);
    }
})

twit.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/twiter_chat.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.removeChild(btnaddRedChat);
        newBox.removeChild(contSelect);
    }
})
}
})
}

    
})
