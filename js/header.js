var header = document.getElementsByTagName("header")[0]

header.innerHTML =`<img class=icon src=icon.png>`


const NAMES = {
    "index":"index"//,
    // "versionInfo":"versionInfo",
    // "versionDownload":"versionDownload",
    // "modsWiki":"modsWiki"
}

const NameTwo = {
    "index":"Главная",
    "versionInfo":"Обновления",
    "versionDownload":"Скачать",
    "modsWiki":"Мод Вики"
}


// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    
// } else {
    
// }


var name = document.location.pathname.replace(/.*\//, "" ).replace(/\.html/,"")




for (var i in NAMES) {
    if (name == i && location.search == ""){
        header.innerHTML += `<p id="select">${NameTwo[i]}</p>`
    }else{
        header.innerHTML += `<p><a href="${NAMES[i]}.html">${NameTwo[i]}</a></p>`
    }
    
}






/*var req = new XMLHttpRequest();
req.open("GET", "js/version.js", false);
req.send();
console.log(req.responseText);*/