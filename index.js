const number = (event) =>{
    let ans = document.getElementById("ans");
    ans.value += event ;
}

const empty = () =>{
    let x = document.getElementById("ans");
    x.value = "";   
}

const lempty = () =>{
    let x = document.getElementById("ans");
    let remain = "" //785
    for (let i=0 ; i < (x.value.length - 1) ; i++ ){
        remain += x.value[i]

    }
    x.value = remain
    
}
const answer  = () =>{
     let x = document.getElementById("ans");
     x.value = eval(x.value)
}