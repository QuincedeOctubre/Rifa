const insert_gana = ()=>{
    document.addEventListener("click", e=>{
        if(!(e.target.matches(".btn_gua_gana"))) return false;

        let ganador = document.querySelector(".b_gana").innerHTML, 
        nombre = document.querySelector(".nombre_gana").value,
        premio = document.querySelector(".premio_gana").value,
        ganadores = JSON.parse(localStorage.getItem("ganadores"));

        ganadores.push({
            puesto : 0,
            nombre,
            ganador,
            premio
        })

        console.log(ganadores)
        let a = ganadores.length;
        ganadores.forEach(el => {
            el.puesto = a;
            a--;
        });

        localStorage.setItem("ganadores", JSON.stringify(ganadores))
        document.querySelector(".aler_h2").innerHTML = ""
    })
}

export default insert_gana