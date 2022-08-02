import get_gana from "./get_usu.js";
import num_al from "./num_al.js";
import re from "./render_archi.js";

(()=>{
    const addRemoveClass = (quita, agre,clase)=>{
        quita.classList.remove(clase)
        agre.classList.add(clase)
    }, cambio = ()=>{
        let dir = location.hash;
        if (dir === "#/" || dir === ""){
            addRemoveClass(document.querySelectorAll("a")[1], document.querySelectorAll("a")[0],"navActivo")
            re("ruleta.html")
            num_al()
        }else if (dir === "#/ga" ){
            addRemoveClass(document.querySelectorAll("a")[0], document.querySelectorAll("a")[1], "navActivo")
            re("gandores.html")
            get_gana()
            
        }
    }

    cambio()
    window.addEventListener("hashchange", e=>{
        cambio()
    })
})();