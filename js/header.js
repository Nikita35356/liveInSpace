header.innerHTML = `<div class="icon"></div>`


const NAMES = {
    "index":"index",
    "versionInfo":"versionInfo",
    "versionDownload":"versionDownload"
}

const NameTwo = {
    "index":"Главная",
    "versionInfo":"Обновления",
    "versionDownload":"Скачать"
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    
} else {
    
}


var name = document.location.pathname.replace(/.*\//, "" ).replace(/\.html/,"")




for (var i in NAMES) {
    if (name == i){
        header.innerHTML += `<p>${NameTwo[i]}</p>`
    }else{
        header.innerHTML += `<p><a href="${NAMES[i]}.html">${NameTwo[i]}</a></p>`
    }
    
}





