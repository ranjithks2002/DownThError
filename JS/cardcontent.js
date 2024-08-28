function content1(text1){
    document.querySelector('.content4').textContent=text1;
}
function content2(text2){
    document.querySelector('.content5').textContent=text2;
}
function content3(text3){
    document.querySelector('.content6').textContent=text3;
}
function applylink(source){
    console.log(source);
    document.querySelector('.content7').href=source;
}