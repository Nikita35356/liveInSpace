var main = document.getElementsByTagName("main")[0]

var infoVersion = {
    "Main файл":""
}





var version = document.location.search.slice(1).split("&")

//main.innerHTML = `<h2>Раздел "${version[0].split("=")[1]}"</h2>`

if (version != "") {
    ver()
}else{
    loadVer()
}




function ver(){
    //parse(infoVersion[version],t=true)
}

function parse(item,t=false) {
    
    for (var i = 0; i < item.length; i++) {
        code += "<ul>"
        
        console.log(item[i]);
        if (typeof(item[i])=="string") {
            code += `<li>${item[i]}</li>`
        } else if (typeof(item[i])=="object") {
            code += `<li>${item[i][0]}</li>`
            parse(item[i][1])
        }
        code += "</ul>"
        
        
    }
    if (t) {
         
        console.log(code);
        main.innerHTML = code
    }
    
}