let sub = document.getElementById("submit");
let equal = document.getElementById("equal");
let a =   document.getElementById("a") ;
let b = document.getElementById("b")
let c = document.getElementById("c");
let form = document.getElementById("f")







f.addEventListener("submit",function(e){
    e.preventDefault()
    let av = parseInt(a.value)
    let bv = parseInt(b.value)
    let cv = parseInt(c.value)
   

    if(isNaN(av)=== true && isNaN(av) === true && isNaN(cv) ){
        equal.innerText = "Error :)"
    }else{
        let umb = Math.sqrt((bv ** 2) - 4*(av)*(cv))
        let neg = (-bv - umb) / (2 * av);
        let pos = (-bv + umb) / (2 * av);
        console.log(neg,pos)
        equal.innerText = "your values are   " + "( " +[(pos).toFixed(2),(neg).toFixed(2)] + " )"
    }
    
});

// console.log(b**2)

// console.log(Math.sqrt((4 ** 2) - 4*(1)*(1)));


// console.log((10 - 4 )/ 2)