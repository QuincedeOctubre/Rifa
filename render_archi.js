const re = async (archi)=>{
    let res = await fetch(archi), r = await res.text()
    document.querySelector(".contenido").innerHTML = r
}
export default re