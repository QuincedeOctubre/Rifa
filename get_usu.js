const get_gana = ()=>{
    let ganadores = JSON.parse(localStorage.getItem("ganadores"));

        document.addEventListener("click", e=>{
            if(!(e.target.matches(".ver_los_gandores_clic"))) return false;
            document.querySelector(".all_gandores_people").innerHTML = ""

            for (let i = ganadores.length -1; 0 < i +1; i--) {
                document.querySelector(".all_gandores_people").innerHTML += `
                    <div class="row ${i % 2 ? 'all_gandores_peopleDiv_delotrolado' : "a" }">
                        <div class="col-2 borde_derecho ">
                            <p>${ganadores[i].puesto}</p>
                        </div>
                        <div class="col-2 borde_derecho">
                            <p>${ganadores[i].ganador}</p>
                        </div>
                        <div class="col-2 borde_derecho">
                            <p>${ganadores[i].premio}</p>
                        </div>
                        <div class="col-6">
                            <p>${ganadores[i].nombre}</p>
                        </div>
                    </div>
                `
            }

            const osseva = new IntersectionObserver((entras)=>{
                entras.forEach(ent=>{
                    ent.isIntersecting ? ent.target.classList.add("all_gandores_peopleDivActivo") :
                    ent.target.classList.remove("all_gandores_peopleDivActivo")
                })
            }, {
                rootMargin : "-120px",
                threshold : .5
            })
            document.querySelectorAll(".all_gandores_people > div").forEach(el =>{
                osseva.observe(el)
            })
            e.target.remove()
        })
}
export default get_gana