function table(){
    let requiredTable = document.getElementById("input-1").value
    let lenghtTable = document.getElementById("input-2").value
    let result=""
    for(let i=1;i<=lenghtTable;i++){
        result+= requiredTable + "x" +i + "="+(requiredTable*i) + "\n"
    }
    document.getElementById("container-2").innerText=(result)
}

