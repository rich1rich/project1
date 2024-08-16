const body=document.getElementsByClassName("body")[0];
const torch=document.getElementsByClassName("torch")[0];

body.addEventListener("mousemove",(event)=>{
    let x=event.clientX;
    let y=event.clientY;
    torch.style.left=x+"px";
    torch.style.top=y+"px";

})