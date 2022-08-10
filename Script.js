document.onkeydown = function(e){
    console.log("Key code is; ",e.keycode)
    if(e.keycode==38){
        kid = document.querySelector('.dino')
    }
}