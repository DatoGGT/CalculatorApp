const btn1=document.getElementById("1")
const btn2=document.getElementById("2")
const btn3=document.getElementById("3")
const btn4=document.getElementById("4")
const btn5=document.getElementById("5")
const btn6=document.getElementById("6")
const btn7=document.getElementById("7")
const btn8=document.getElementById("8")
const btn9=document.getElementById("9")
const btn0=document.getElementById("0")
const btnpl=document.getElementById("plus")
const btnmn=document.getElementById("minus")
const btnnam=document.getElementById("multi")
const btndev=document.getElementById("devide")
const btntol=document.getElementById("equal")
const btndot=document.getElementById("dot")
const c=document.getElementById("ac")
const de=document.getElementById("de")
const display=document.getElementById("sum")
de.addEventListener("click",()=>{
    display.textContent=display.textContent.toString().slice(0,-1)
})

c.addEventListener("click",()=>{
    display.textContent=""
})
btn1.addEventListener("click",()=>{
    display.textContent+=btn1.textContent
})
btn2.addEventListener("click",()=>{
    display.textContent+=btn2.textContent
    
})
btn3.addEventListener("click",()=>{
    display.textContent+=btn3.textContent
    
})
btn4.addEventListener("click",()=>{
    display.textContent+=btn4.textContent
    
})
btn5.addEventListener("click",()=>{
    display.textContent+=btn5.textContent
    
})
btn6.addEventListener("click",()=>{
    display.textContent+=btn6.textContent
    
})
btn7.addEventListener("click",()=>{
    
    display.textContent+=btn7.textContent
})
btn8.addEventListener("click",()=>{
    
    display.textContent+=btn8.textContent
})
btn9.addEventListener("click",()=>{
    
    display.textContent+=btn9.textContent
})
btn0.addEventListener("click",()=>{
    display.textContent+=btn0.textContent
    
})
btnpl.addEventListener("click",()=>{
    if(display.textContent.endsWith(btnpl.textContent)){
        return null
    }
    
    display.textContent+=btnpl.textContent
    
})
btnmn.addEventListener("click",()=>{
    if(display.textContent.endsWith(btnmn.textContent)){
        return null
    }
    
    display.textContent+=btnmn.textContent
    
})

btnnam.addEventListener("click",()=>{
    if(display.textContent.endsWith(btnnam.textContent)){
        return null
    } 
    display.textContent+=btnnam.textContent
})

btndev.addEventListener("click",()=>{
    if(display.textContent.endsWith(btndev.textContent)){
        return null
    }  
    display.textContent+=btndev.textContent
})

btntol.addEventListener("click",()=>{
    display.textContent=eval(display.textContent)
    
})

btndot.addEventListener("click",()=>{
    display.textContent+=btndot.textContent
    
})


