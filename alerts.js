import insert_gana from "./almacenar.js"

const alerts = (h2_t, btn_t)=>{
    document.querySelector(".aler_h2").innerHTML = h2_t
    document.querySelector(".aler_btn").innerHTML = btn_t

    document.querySelector(".all").classList.add("blur")
    document.querySelector(".ganador").classList.add("ganadorActivo")

    
    document.addEventListener("click", e=>{
        if (!(e.target.matches(".aler_btn"))) return false;

        document.querySelector(".all").classList.remove("blur")
        document.querySelector(".ganador").classList.remove("ganadorActivo")
        
        // --------------------------------------
    })
    insert_gana()
}

export default alerts