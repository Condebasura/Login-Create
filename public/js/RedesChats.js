const ContRedChat = document.querySelector(".cont_redesChats");
const btnAddBox = document.querySelector(".add_box");
let boxCount = 0;

const  LoadBoxesSeionStorage = () =>{
    const SaveBoxes = JSON.parse(sessionStorage.getItem('boxes'));
    if(SaveBoxes){

        const pieDePagina = document.querySelector(".pie");
        if(SaveBoxes.length > 0){

            
            pieDePagina.style.position = "static";
            pieDePagina.style.bottom = "1px";
        }else{
            pieDePagina.style.position = "fixed";
            pieDePagina.style.bottom = "1px";
        }
        SaveBoxes.forEach((boxtext ) => {
            const box = document.createElement('div');    
            const EliminarBox = document.createElement("i");
            const btnaddRedChat = document.createElement("button");
            box.setAttribute("class", "box_RedChat");
         EliminarBox.setAttribute("class", "fa-regular fa-circle-xmark");
        btnaddRedChat.setAttribute("class", "add_redchat");
        btnaddRedChat.setAttribute("type", "button");
        btnaddRedChat.textContent = "+ add";
        btnaddRedChat.style.border = "dashed #9c9c9ccb";
        EliminarBox.style.display = "none";
        box.style.boxShadow = "2px 2px 12px #a3a3a3";
       box.appendChild(EliminarBox);
        box.appendChild(btnaddRedChat);
            ContRedChat.appendChild(box);
          
      
            box.addEventListener("mouseover", e =>{
                if(e.target){
                    EliminarBox.style.display = "block";
                    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                    box.style.boxShadow = `2px 2px 12px 4px ${randomColor}`;
                }
            });
            
            box.addEventListener("mouseout", e =>{
                if(e.target){
                    EliminarBox.style.display = "none";
                    box.style.boxShadow = "2px 2px 12px #a3a3a3";
                }
            });
            if(boxtext == "+ add" || boxtext == ""){
                boxtext = boxtext;
              box.style.border = "3px ,  dashed , #9c9c9ccb";

                
              }else{
                box.style.backgroundImage = boxtext;
                box.style.backgroundSize = "cover";
                box.style.backgroundPosition = "start";  
                box.removeChild(btnaddRedChat);
              }


            EliminarBox.addEventListener("click", e =>{
                if(e.target){
                 ContRedChat.removeChild(box);
                 let boxes = JSON.parse(sessionStorage.getItem('boxes') || '[]');
                 boxes = boxes.filter(box => box !== boxtext); 
                 sessionStorage.setItem('boxes', JSON.stringify(boxes));
                 console.log(boxes.length)
                 if(boxes.length === 0){
                    const pieDePagina = document.querySelector(".pie");
                    pieDePagina.style.position = "fixed";
                    pieDePagina.style.bottom = "1px";
                }
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
    tituloRed.addEventListener("click", (e) =>{
        if(e.target){
            tituloRed.style.display = "none";
            face.style.display = "flex";
            insta.style.display = "flex";
            twit.style.display = "flex";
            
         tituloChats.style.display = "flex";
            Disc.style.display = "none";
            Whatsapp.style.display = "none";
            Teleg.style.display = "none";
        }
        });
        tituloChats.addEventListener("click", (e) =>{
            if(e.target){
                tituloChats.style.display = "none";
                Disc.style.display = "flex";
            Whatsapp.style.display = "flex";
            Teleg.style.display = "flex";
        
            tituloRed.style.display = "flex";
            face.style.display = "none";
            insta.style.display = "none";
            twit.style.display = "none";
            }
        })
            face.addEventListener("click", (e)=>{
                if(e.target){
            
            
                    box.style.backgroundImage = "url('/img/facebook-movil-640x598.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";    
                    box.style.border = "none";
                    box.removeChild(contSelect);
                    const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( box => box.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
            
                }
            })
            insta.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/Instagram.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                    const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( box => box.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
                }
            })
            
            twit.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/twiter_chat.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                    const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( box => box.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
                };
            });

            Disc.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/discord.png')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                    const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( box => box.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
                };
            });
            Whatsapp.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/watsapp.webp')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                    const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( box => box.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
                };
            });

            Teleg.addEventListener("click", (e)=>{
                if (e.target){
                    box.style.backgroundImage = "url('/img/Telegram-600x1008.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";  
                    box.removeChild(contSelect);
                      const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( box => box.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
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

const saveBoxEnSesionStorage = ()=>{
    const boxes = Array.from(ContRedChat.children).map(newBox => newBox.style.backgroundImage );
    sessionStorage.setItem('boxes' , JSON.stringify(boxes));
// usar en el pie de pagina position fixed para cuando no hay ningun box y static para cuando se crea uno nuevo!!

btnAddBox.addEventListener("click", (e)=>{
    if(e.target){
        const newBox = document.createElement("div");
        const EliminarBox = document.createElement("i");
        const btnaddRedChat = document.createElement("button");
          const pieDePagina = document.querySelector(".pie");
  
          pieDePagina.style.position = "static";
          pieDePagina.style.bottom = "1px";
        newBox.setAttribute("class", "box_RedChat");
        EliminarBox.setAttribute("class", "fa-regular fa-circle-xmark");
        btnaddRedChat.setAttribute("class", "add_redchat");
        btnaddRedChat.setAttribute("type", "button");
        btnaddRedChat.textContent = "+ add";
        EliminarBox.style.display = "none";
        newBox.style.border = "3px ,  dashed , #9c9c9ccb";
       newBox.appendChild(EliminarBox);
        newBox.appendChild(btnaddRedChat);
ContRedChat.appendChild(newBox);
let computeStyle = window.getComputedStyle(newBox);
if(computeStyle.backgroundImage !== 'none'){
    newBox.style.boxShadow = "2px 2px 12px #a3a3a3";
newBox.removeChild(btnaddRedChat);
return computeStyle;

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
Disc.setAttribute("class", "selecChat");
Whatsapp.setAttribute("class", "selecChat");
Teleg.setAttribute("class", "selecChat");


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

tituloRed.addEventListener("click", (e) =>{
if(e.target){
    tituloRed.style.display = "none";
    face.style.display = "flex";
    insta.style.display = "flex";
    twit.style.display = "flex";

 tituloChats.style.display = "flex";
    Disc.style.display = "none";
    Whatsapp.style.display = "none";
    Teleg.style.display = "none";
}
});
tituloChats.addEventListener("click", (e) =>{
    if(e.target){
        tituloChats.style.display = "none";
        Disc.style.display = "flex";
    Whatsapp.style.display = "flex";
    Teleg.style.display = "flex";

    tituloRed.style.display = "flex";
    face.style.display = "none";
    insta.style.display = "none";
    twit.style.display = "none";
    }
})

face.addEventListener("click", (e)=>{
    if(e.target){


        newBox.style.backgroundImage = "url('/img/facebook-movil-640x598.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";   
        newBox.style.border = "none";
        newBox.removeChild(contSelect);
          const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( newBox => newBox.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
       

    }
})
insta.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/Instagram.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.style.border = "none";
        newBox.removeChild(contSelect);
          const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( newBox => newBox.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
    }
})

twit.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/twiter_chat.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.style.border = "none";
        newBox.removeChild(contSelect);
          const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( newBox => newBox.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
    }
});

Disc.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/discord.png')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.style.border = "none";
        newBox.removeChild(contSelect);
          const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( newBox => newBox.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
    }
});

Whatsapp.addEventListener("click", (e)=>{
    if (e.target){
        newBox.style.backgroundImage = "url('/img/watsapp.webp')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";  
        newBox.style.border = "none";
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
        newBox.style.border = "none";
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
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                    newBox.style.boxShadow = `2px 2px 12px 4px ${randomColor}`;
    }
})

newBox.addEventListener("mouseout", e =>{
    if(e.target){
        EliminarBox.style.display = "none";
        newBox.style.boxShadow = "2px 2px 12px #a3a3a3";
    }
})


EliminarBox.addEventListener("click", e =>{
    if(e.target){
        ContRedChat.removeChild(newBox);
        let boxes = JSON.parse(sessionStorage.getItem('boxes') || '[]');
        boxes = boxes.filter(box => box !== newBox.style.backgroundImage);
sessionStorage.setItem('boxes', JSON.stringify(boxes));
console.log(boxes.length);
if(boxes.length === 0){
    const pieDePagina = document.querySelector(".pie");
    pieDePagina.style.position = "fixed";
    pieDePagina.style.bottom = "1px";
}
    }
    
});


}


})
}
saveBoxEnSesionStorage();
