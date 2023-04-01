var infoVersion = {
    "0.0.2":"1hzJ25SfCIpaRznijd_rqhpRUiL-PB0D0",
    "0.0.3":"1G5hUhjkPouCaFQmFE1O4fgJ_keXkXM7b",
    "0.0.4":"",
    "0.0.5":"",
}



if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Style.href = "css/versionPC.css"
}

var version = document.location.search.slice(9)

var code = `<h2>В ${version} добавили:</h2>`

//if (version != "") {
//    ver()
//}else{
    loadVer()
//}




// function ver(){
    
//     version = "0.0.3"
    
//     Style.href = "css/version.css"
//     parse(infoVersion[version],t=true)
// }

// function parse(item,t=false) {
    
//     for (var i = 0; i < item.length; i++) {
//         code += "<ul>"
        
//         console.log(item[i]);
//         if (typeof(item[i])=="string") {
//             code += `<li>${item[i]}</li>`
//         } else if (typeof(item[i])=="object") {
//             code += `<li>${item[i][0]}</li>`
//             parse(item[i][1])
//         }
//         code += "</ul>"
        
        
//     }
//     if (t) {
         
//         console.log(code);
//         main.innerHTML = code
//     }
    
// }


function loadVer(){
    var codes = ""
    for(var i in infoVersion){
        codes += `<a class="vers" download href="https://nikita35356.github.io/versionLiveInSpace/${i}.zip"><img class="img" src="sprites/${i}.png" alt="" /><div class=names>${i}</div></a>`
    }
    main.innerHTML = `<h2>При нажатии подождите пару секунд</h2><div id="tt">` + codes + `</div>`
}


function openVers(vers){
    document.location.href += "?version="+vers
}
