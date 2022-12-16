var counter = 0
alert(counter)
function gmailclick(){
    if (counter==0){
        counter = 1;
        alert(counter);
    }
}
function waffleclick(){
    if (counter==1){
        counter = 2;
        alert(counter);
    } else if (counter==2){
        counter = 3;
        alert(counter);
    }
}
function profilepicclick(){
    if (counter==3){
        counter = 4;
        alert(counter);
    }
}
function termsclick(){
    if (counter==4){
        counter = 5;
        alert(counter);
    }
}
function micclick(){
    if (counter==5){
        counter = 6;
        alert(counter);
    } else if (counter==6){
        counter = 7;
        alert(counter);
    }
}
function luckyclick(){
    textvalue = document.getElementById("textbox").value;
    if (textvalue=="$options+new%#" & counter==7){
        alert("gg")
    }
}