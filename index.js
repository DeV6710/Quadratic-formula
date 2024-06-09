let sub = document.getElementById("submit");
let equal = document.getElementById("equal");
let a =   document.getElementById("a") ;
let b = document.getElementById("b")
let c = document.getElementById("c");
let form = document.getElementById("f")
let radd =  document.getElementById("radical")
let steps = document.getElementById("steps")
let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let back = document.getElementById("back")
let bruh = document.getElementById("p")




sub.addEventListener("click",function(e){
    e.preventDefault()
    let av = parseInt(a.value)
    let bv = parseInt(b.value)
    let cv = parseInt(c.value)
   

   
    
        
        let umb = Math.sqrt((bv ** 2) - 4*(av)*(cv))
        let neg = (-bv - umb) / (2 * av);
        let pos = (-bv + umb) / (2 * av);
        console.log(neg,pos)
        equal.innerText = "your values are   " + "( " +[(pos).toFixed(3),(neg).toFixed(3)] + " )"
    steps.style.display = "inline-block"
    
       
       
});


radd.addEventListener("click",function(e){
    e.preventDefault()
    let av = parseInt(a.value)
    let bv = parseInt(b.value)
    let cv = parseInt(c.value)
    let rad = (bv ** 2) - 4*(av)*(cv)
    let double_a = 2 *av
    let test = Math.sqrt(rad)
    if(Number.isInteger(test) === true){
        Math.sqrt(rad)
        console.log(test)
        console.log(rad *rad)
        equal.innerText = "your values are "+ -bv +" ± "+test+ "  / " +double_a
    }else{
        equal.innerText = "your values are "+ -bv +" ± "+"√"+rad+ "  / " +double_a
        console.log(test)
        console.log(rad *rad)
    }
    
    
    
    steps.style.display = "inline-block"
    
})

steps.addEventListener("click",function(e){
    let av = parseInt(a.value)
    let bv = parseInt(b.value)
    let cv = parseInt(c.value)

    let rad = (bv ** 2) - 4*(av)*(cv)
    let double_a = 2 *av
    let test = Math.sqrt(rad)

    let umb = Math.sqrt((bv ** 2) - 4*(av)*(cv))
    let neg = (-bv - umb) / (2 * av);
    let pos = (-bv + umb) / (2 * av);
       
    e.preventDefault()
    a.style.display = "none"
    b.style.display = "none"
    c.style.display = "none"
    sub.style.display = "none"
    radd.style.display = "none"
    steps.style.display = "none"
    steps.style.display = "none"
    bruh.style.display = "none"
    equal.style.display = "none"

    first.innerText = "1. "+av +"x² +"+bv+"+"+cv
   
    second.innerText = "2. "+-bv +" ± "+"√ "+ bv+"²  -4"+ " * "+av+" * "+cv+ " / "+"2 * "+av
    third.innerText = "3. "+"your values are "+ -bv +" ± "+"√"+rad+ "  / " +double_a +"    or " + "( " +[(pos).toFixed(3),(neg).toFixed(3)] + " )"
    if(Number.isInteger(test) === true){
        third.innerText = "3. "+"your values are "+ -bv +" ± "+test+ "  / " +double_a +"    or " + "( " +[(pos).toFixed(3),(neg).toFixed(3)] + " )"
    }else{
        third.innerText = "3. "+"your values are "+ -bv +" ± "+"√"+rad+ "  / " +double_a +"    or " + "( " +[(pos).toFixed(3),(neg).toFixed(3)] + " )"
    }
    back.style.display = "inline-block"
    back.addEventListener("click",function(){
        location.reload();
    })
})






// f.addEventListener("submit",function(e){
//     e.preventDefault()
//     let av = parseInt(a.value)
//     let bv = parseInt(b.value)
//     let cv = parseInt(c.value)
   

//     if(isNaN(av)=== true && isNaN(av) === true && isNaN(cv) ){
//         equal.innerText = "Error :)"
//     }else{
//         let umb = Math.sqrt((bv ** 2) - 4*(av)*(cv))
//         let neg = (-bv - umb) / (2 * av);
//         let pos = (-bv + umb) / (2 * av);
//         console.log(neg,pos)
//         equal.innerText = "your values are   " + "( " +[(pos).toFixed(3),(neg).toFixed(3)] + " )"
//     }
    
// });





// console.log(b**2)

// console.log(Math.sqrt((4 ** 2) - 4*(1)*(1)));


// console.log((10 - 4 )/ 2)
