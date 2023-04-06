var foot = document.getElementsByTagName("footer")[0]

var links = {
    "Дискорд":"https://discord.gg/2rpgNFdmXR"
}

for (const key in links) {
    foot.innerHTML += `<p><a href="${links[key]}">${key}</a></p>`
}