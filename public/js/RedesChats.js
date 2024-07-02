const ContRedChat = document.querySelector(".cont_redesChats");
const btnAddBox = document.querySelector(".add_box");
let boxCount = 0;

const  LoadBoxesSeionStorage = () =>{
    const SaveBoxes = JSON.parse(sessionStorage.getItem('boxes'));
    if(SaveBoxes){
        SaveBoxes.forEach(boxtext => {
            const box = document.createElement('div');
            const EliminarBox = document.createElement("span");
            const btnaddRedChat = document.createElement("button");
            box.setAttribute("class", "box_RedChat");
         EliminarBox.setAttribute("class", "BtnEliminar");
        btnaddRedChat.setAttribute("class", "add_redchat");
        btnaddRedChat.setAttribute("type", "button");
        EliminarBox.innerHTML = "X";
        btnaddRedChat.textContent = "+ add";
      
       box.appendChild(EliminarBox);
        box.appendChild(btnaddRedChat);
            ContRedChat.appendChild(box);
           
            box.addEventListener("mouseover", e =>{
                if(e.target){
                    EliminarBox.style.display = "block";
                }
            });
            
            box.addEventListener("mouseout", e =>{
                if(e.target){
                    EliminarBox.style.display = "none";
                }
            });
            if(boxtext == "+ add" || boxtext == ""){
                boxtext = "+ add";
              }else{
                box.style.backgroundImage = boxtext;
                box.style.backgroundSize = "cover";
                box.style.backgroundPosition = "start";  
                box.removeChild(btnaddRedChat);
              }
            EliminarBox.addEventListener("click", e =>{
                if(e.target){
                    ContRedChat.removeChild(box);
                    let boxes = JSON.parse(sessionStorage.getItem('boxes')) || [];
                    boxes = boxes.filter(box = box.innreText);
                    sessionStorage.setItem('boxes', JSON.stringify('boxes'))
                }
                });
                  
            btnaddRedChat.addEventListener("click", (e)=>{
                if(e.target){
                    box.removeChild(btnaddRedChat);
            const contSelect = document.createElement("ul");
            let tituloRed = document.createElement("p");
            let insta = document.createElement("li");
            let face = document.createElement("li");
            let twit = document.createElement("li");
            let tituloChats = document.createElement("p");
            let Disc = document.createElement("li");
            let Whatsapp = document.createElement("li");
            let Teleg = document.createElement("li");
            
            tituloRed.textContent = "Redes";
            insta.textContent = "Instagram";
            face.textContent = "Facebook";
            twit.textContent = "twiter";
            tituloChats.textContent = "Chats";
            Disc.textContent = "Discord";
            Whatsapp.textContent = "WhatsApp";
            Teleg.textContent = "Telegram";
            
            contSelect.setAttribute("class", "contSelect");
            tituloRed.setAttribute("class", "titleRed");
            insta.setAttribute("class", "selecRed");
            face.setAttribute("class", "selecRed");
            twit.setAttribute("class", "selecRed");
            tituloChats.setAttribute("class", "titleChats");
            Disc.setAttribute("class", "selecRed");
            Whatsapp.setAttribute("class", "selecRed");
            Teleg.setAttribute("class", "selecRed");
            contSelect.appendChild(tituloRed);
            contSelect.appendChild(insta);
            contSelect.appendChild(face);
            contSelect.appendChild(twit);
            contSelect.appendChild(tituloChats);
            contSelect.appendChild(Disc);
            contSelect.appendChild(Whatsapp);
            contSelect.appendChild(Teleg);
            box.appendChild(contSelect);
            contSelect.style.display = "flex";
            box.addEventListener("mouseover", e =>{
        if(e.target){
            EliminarBox.style.display = "block";
        }
    })
    
    box.addEventListener("mouseout", e =>{
        if(e.target){
            EliminarBox.style.display = "none";
        }
    })
            
            face.addEventListener("click", (e)=>{
                if(e.target){
            
            
                    box.style.backgroundImage = "url('/img/facebook-movil-640x598.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";   
                    box.removeChild(contSelect);
            
                }
            })
            insta.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/Instagram.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                }
            })
            
            twit.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/twiter_chat.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                };
            });

            Disc.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/discord.png')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                };
            });
            Whatsapp.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/watsapp.webp')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                };
            });

            Teleg.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/Telegram-600x1008.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                };
            });
            };
            
        });
    });
      boxCount = SaveBoxes.length;
    }
};
LoadBoxesSeionStorage();

// Fuera del load


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
const saveBoxEnSesionStorage = ()=>{
    const boxes = Array.from(ContRedChat.children).map(box => box );
    sessionStorage.setItem('boxes' , JSON.stringify(boxes));
}

btnaddRedChat.addEventListener("click", (e)=>{
    if(e.target){
newBox.removeChild(btnaddRedChat);
const contSelect = document.createElement("ul");
let tituloRed = document.createElement("p");
let insta = document.createElement("li");
let face = document.createElement("li");
let twit = document.createElement("li");
let tituloChats = document.createElement("p");
let Disc = document.createElement("li");
let Whatsapp = document.createElement("li");
let Teleg = document.createElement("li");

tituloRed.textContent = "Redes";
insta.textContent = "Instagram";
face.textContent = "Facebook";
twit.textContent = "twiter";

tituloChats.textContent = "Chats";
Disc.textContent = "Discord";
Whatsapp.textContent = "WhatsApp";
Teleg.textContent = "Telegram";

contSelect.setAttribute("class", "contSelect");
tituloRed.setAttribute("class", "titleRed");
insta.setAttribute("class", "selecRed");
face.setAttribute("class", "selecRed");
twit.setAttribute("class", "selecRed");
tituloChats.setAttribute("class", "titleChats");
Disc.setAttribute("class", "selecRed");
Whatsapp.setAttribute("class", "selecRed");
Teleg.setAttribute("class", "selecRed");

contSelect.appendChild(tituloRed);
contSelect.appendChild(insta);
contSelect.appendChild(face);
contSelect.appendChild(twit);
contSelect.appendChild(tituloChats);
contSelect.appendChild(Disc);
contSelect.appendChild(Whatsapp);
contSelect.appendChild(Teleg);
newBox.appendChild(contSelect);
contSelect.style.display = "flex";


face.addEventListener("click", (e)=>{
    if(e.target){


        newBox.style.backgroundImage = "url('/img/facebook-movil-640x598.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";   
        newBox.removeChild(contSelect);
        let Imgbox = newBox.style.backgroundImage;

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
});

Disc.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/discord.png')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.removeChild(contSelect);
    }
});

Whatsapp.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/watsapp.webp')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.removeChild(contSelect);
        const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( newBox => newBox.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
    }
});

Teleg.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/Telegram-600x1008.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.removeChild(contSelect);
        const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( newBox => newBox.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
    }
})
    };
    
});

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
ContRedChat.removeChild(newBox)
    
 }

})
saveBoxEnSesionStorage();
}

    
})
