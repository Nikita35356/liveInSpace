var all = document.getElementsByClassName("gor-scroll")

for (let i = 0; i < all.length; i++) {
    const g = all[i];
    g.addEventListener('mousewheel', {handleEvent: onWheel, g: g}, false);
}



function onWheel(event) {
    this.g.scrollBy(event.deltaY, 0);
}