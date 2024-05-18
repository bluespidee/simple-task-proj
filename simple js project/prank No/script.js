const target =document.getElementById("btn-no")
const yes =document.getElementById("btn-yes")

// function movetarget(){
//     const maxWidth = 400
//     const maxHeigth = 400

//     const randomX =Math.floor(Math.random()*maxWidth)
//     const randomy =Math.floor(Math.random()*maxHeigth)

//     target.style.left =randomX +"px"
//     target.style.top =randomy +"px"
// }
// target.addEventListener("mouseenter",function(){
//     movetarget()
// })    
target.addEventListener("mouseover",()=>{
    target.style.position="absolute"
    target.style.top = Math.floor(Math.random()*40 )+ "vh"
    target.style.left = Math.floor(Math.random()*40) + "vw"

})

yes.addEventListener("click",()=>{
    alert("thank you sir ")
})