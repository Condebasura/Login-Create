const ContRedChat = document.querySelector(".cont_redesChats");
const btnAddBox = document.querySelector(".add_box");
let boxCount = 0;

const  LoadBoxesSeionStorage = () =>{
    const SaveBoxes = JSON.parse(sessionStorage.getItem('boxes'));
    if(SaveBoxes){

        // Reparar error de en la consola!!
        SaveBoxes.forEach((boxtext ) => {
            const box = document.createElement('div');
            const header = document.createElement('div');
             box.style.maxWidth = "18rem";    
            const EliminarBox = document.createElement("button");
            const btnaddRedChat = document.createElement("button");
            box.setAttribute("class", "box_RedChat card ms-5 mt-5");
            header.setAttribute("class", "card-header");  
          EliminarBox.setAttribute("class", "btn-close cerrar");
        btnaddRedChat.setAttribute("class", "add_redchat");
        btnaddRedChat.setAttribute("type", "button");
        EliminarBox.setAttribute("type", "button");
        btnaddRedChat.textContent = "+ add";
        box.style.boxShadow = "2px 2px 12px #a3a3a3";
        header.appendChild(EliminarBox)
        box.appendChild(header);
       // box.appendChild(btnaddRedChat);
            ContRedChat.appendChild(box);
          
            const cardbody = document.createElement("div");
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
            cardbody.setAttribute("class", "card-body");
            contSelect.setAttribute("class", "contSelect list-group list-group-flush my-3  text-center");
            tituloRed.setAttribute("class", "titleRed list-group-item list-group-item-action text-bg-success");
            insta.setAttribute("class", "selecRed list-group-item list-group-item-action");
            face.setAttribute("class", "selecRed list-group-item list-group-item-action");
            twit.setAttribute("class", "selecRed list-group-item list-group-item-action");
            tituloChats.setAttribute("class", "titleChats list-group-item list-group-item-action text-bg-success");
            Disc.setAttribute("class", "selecRed list-group-item list-group-item-action");
            Whatsapp.setAttribute("class", "selecRed list-group-item list-group-item-action");
            Teleg.setAttribute("class", "selecRed list-group-item list-group-item-action");
            contSelect.appendChild(tituloRed);
            contSelect.appendChild(insta);
            contSelect.appendChild(face);
            contSelect.appendChild(twit);
            contSelect.appendChild(tituloChats);
            contSelect.appendChild(Disc);
            contSelect.appendChild(Whatsapp);
            contSelect.appendChild(Teleg);
            cardbody.appendChild(contSelect);
            box.appendChild(cardbody);
            contSelect.style.display = "flex";
      
            box.addEventListener("mouseover", e =>{
                if(e.target){
                    EliminarBox.style.display = "block";
                    box.style.boxShadow = `2px 2px 12px 4px #444`;
                }
            });
            
            box.addEventListener("mouseout", e =>{
                if(e.target){
                    
                    box.style.boxShadow = "2px 2px 12px #a3a3a3";
                }
            });
            if(boxtext == "+ add" || boxtext == ""){
                boxtext = boxtext;
              

                
              }else{
                box.style.backgroundImage = boxtext;
                box.style.backgroundSize = "cover";
                box.style.backgroundPosition = "start"; 
                box.style.height = "55vh";
                box.style.border = "none";
                box.removeChild(cardbody);
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
            const back = document .createElement("button");
            back.innerHTML = "Volver";
            back.setAttribute("class", "volver");
            contSelect.appendChild(back);
            tituloRed.style.display = "none";
            tituloChats.style.display = "none";
            face.style.display = "flex";
            insta.style.display = "flex";
            twit.style.display = "flex";
        back.addEventListener("click", (e)=>{
        if(e.target){
        
            tituloChats.style.display = "flex";
                Disc.style.display = "none";
            Whatsapp.style.display = "none";
            Teleg.style.display = "none";
        
            tituloRed.style.display = "flex";
            face.style.display = "none";
            insta.style.display = "none";
            twit.style.display = "none";
            contSelect.removeChild(back);
        }
        })
        }
        });
        tituloChats.addEventListener("click", (e) =>{
            if(e.target){
                const back = document .createElement("button");
                back.innerHTML = "Volver";
        back.setAttribute("class", "volver");
                contSelect.appendChild(back);
                tituloChats.style.display = "none";
                tituloRed.style.display = "none";
                Disc.style.display = "flex";
            Whatsapp.style.display = "flex";
            Teleg.style.display = "flex";
            back.addEventListener("click", (e)=>{
                if(e.target){
                
                    tituloChats.style.display = "flex";
                        Disc.style.display = "none";
                    Whatsapp.style.display = "none";
                    Teleg.style.display = "none";
                
                    tituloRed.style.display = "flex";
                    face.style.display = "none";
                    insta.style.display = "none";
                    twit.style.display = "none";
                    contSelect.removeChild(back);
                }
                })
        
            }
        })
            face.addEventListener("click", (e)=>{
                if(e.target){
            
            
                    box.style.backgroundImage = "url('/img/facebook-movil-640x598.jpg')";
                    box.style.backgroundSize = "cover";
                    box.style.backgroundPosition = "start";    
                    box.style.height = "55vh";
                    box.style.border = "none";
                    box.removeChild(cardbody);
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
                    box.style.height = "55vh";
                    box.style.border = "none"; 
                    box.removeChild(cardbody);
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
                    box.style.height = "55vh";
                    box.style.border = "none";  
                    box.removeChild(cardbody);
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
                    box.style.height = "55vh";
                    box.style.border = "none"; 
                    box.removeChild(cardbody);
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
                    box.style.height = "55vh";
                    box.style.border = "none";
                    box.removeChild(cardbody);
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
                    box.style.height = "55vh";
                    box.style.border = "none";  
                    box.removeChild(cardbody);
                      const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( box => box.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
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
        const header = document.createElement('div');
        const EliminarBox = document.createElement("botton");
        const btnaddRedChat = document.createElement("button");
        
        
        newBox.setAttribute("class", "box_RedChat card ms-5 mt-5");
        header.setAttribute("class", "card-header");
        newBox.style.maxWidth = "18rem";
        EliminarBox.setAttribute("class", "btn-close cerrar");
        btnaddRedChat.setAttribute("class", "add_redchat");
        btnaddRedChat.setAttribute("type", "button");
        EliminarBox.setAttribute("type", "button");
        btnaddRedChat.textContent = "+ add";
        header.appendChild(EliminarBox)
        newBox.appendChild(header);
       // newBox.appendChild(btnaddRedChat);
ContRedChat.appendChild(newBox);
let computeStyle = window.getComputedStyle(newBox);
if(computeStyle.backgroundImage !== 'none'){
    newBox.style.boxShadow = "2px 2px 12px #a3a3a3";
return computeStyle;

}  



    
const cardBody = document.createElement("div");
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
cardBody.setAttribute("class", "card-body");
contSelect.setAttribute("class", "contSelect list-group list-group-flush my-3 text-center");
tituloRed.setAttribute("class", "titleRed list-group-item list-group-item-action text-bg-success");
insta.setAttribute("class", "selecRed list-group-item list-group-item-action");
face.setAttribute("class", "selecRed list-group-item list-group-item-action");
twit.setAttribute("class", "selecRed list-group-item list-group-item-action");
tituloChats.setAttribute("class", "titleChats list-group-item list-group-item-action text-bg-success");
Disc.setAttribute("class", "selecChat list-group-item list-group-item-action");
Whatsapp.setAttribute("class", "selecChat list-group-item list-group-item-action");
Teleg.setAttribute("class", "selecChat list-group-item list-group-item-action");


contSelect.appendChild(tituloRed);
contSelect.appendChild(insta);
contSelect.appendChild(face);
contSelect.appendChild(twit);
contSelect.appendChild(tituloChats);
contSelect.appendChild(Disc);
contSelect.appendChild(Whatsapp);
contSelect.appendChild(Teleg);
cardBody.appendChild(contSelect)
newBox.appendChild(cardBody);
contSelect.style.display = "flex";

tituloRed.addEventListener("click", (e) =>{
if(e.target){
    const back = document .createElement("button");
    back.innerHTML = "Volver";
    back.setAttribute("class", "volver");
    contSelect.appendChild(back);
    tituloRed.style.display = "none";
    tituloChats.style.display = "none";
    face.style.display = "flex";
    insta.style.display = "flex";
    twit.style.display = "flex";
back.addEventListener("click", (e)=>{
if(e.target){

    tituloChats.style.display = "flex";
        Disc.style.display = "none";
    Whatsapp.style.display = "none";
    Teleg.style.display = "none";

    tituloRed.style.display = "flex";
    face.style.display = "none";
    insta.style.display = "none";
    twit.style.display = "none";
    contSelect.removeChild(back);
}
})
}
});
tituloChats.addEventListener("click", (e) =>{
    if(e.target){
        const back = document .createElement("button");
        back.innerHTML = "Volver";
back.setAttribute("class", "volver");
        contSelect.appendChild(back);
        tituloChats.style.display = "none";
        tituloRed.style.display = "none";
        Disc.style.display = "flex";
    Whatsapp.style.display = "flex";
    Teleg.style.display = "flex";
    back.addEventListener("click", (e)=>{
        if(e.target){
        
            tituloChats.style.display = "flex";
                Disc.style.display = "none";
            Whatsapp.style.display = "none";
            Teleg.style.display = "none";
        
            tituloRed.style.display = "flex";
            face.style.display = "none";
            insta.style.display = "none";
            twit.style.display = "none";
            contSelect.removeChild(back);
        }
        })

    }
})

face.addEventListener("click", (e)=>{
    if(e.target){


        newBox.style.backgroundImage = "url('/img/facebook-movil-640x598.jpg')";
        newBox.style.backgroundSize = "cover";
        newBox.style.backgroundPosition = "start";   
        newBox.style.border = "none";
        newBox.style.height = "55vh";
        newBox.removeChild(cardBody);
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
        newBox.style.height = "55vh";
        newBox.style.border = "none";
        newBox.removeChild(cardBody);
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
        newBox.style.height = "55vh";
        newBox.style.border = "none";
        newBox.removeChild(cardBody);
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
        newBox.style.height = "55vh";
        newBox.removeChild(cardBody);
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
        newBox.style.height = "55vh";
        newBox.removeChild(cardBody);
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
        newBox.style.height = "55vh";
        newBox.removeChild(cardBody);
        const saveimgEnBoxEnSesionStorage = ()=>{
            const boxes = Array.from(ContRedChat.children).map( newBox => newBox.style.backgroundImage );
            sessionStorage.setItem('boxes' , JSON.stringify(boxes));
        };
        saveimgEnBoxEnSesionStorage()
    }
})
 

newBox.addEventListener("mouseover", e =>{
    if(e.target){
        EliminarBox.style.display = "block";
        
                    newBox.style.boxShadow = `2px 2px 12px 4px #444`;
    }
})

newBox.addEventListener("mouseout", e =>{
    if(e.target){
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

    }
    
});


}


})
}
saveBoxEnSesionStorage();
