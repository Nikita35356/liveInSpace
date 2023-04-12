var infoVersion = {
    "0.0.2":"1hzJ25SfCIpaRznijd_rqhpRUiL-PB0D0",
    "0.0.3":"1G5hUhjkPouCaFQmFE1O4fgJ_keXkXM7b",
    "0.0.4":"",
    "0.0.5":"",
    "0.0.6":""
}



// if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     Style.href = "css/versionPC.css"
// }

var version = document.location.search.slice(9)

var code = `<h2>В ${version} добавили:</h2>`


loadVer()





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
