
var random_number=Math.floor(Math.random()*6)+1;
var random_dice_image="dice" + random_number + ".png";
var image_src="images/" + random_dice_image ;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",image_src);

var random_number2=Math.floor(Math.random()*6)+1;
var random_dice_image2="dice" + random_number2 + ".png";
var image_src2="images/" + random_dice_image2 ;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",image_src2);

if(random_number>random_number2){
    document.querySelector("h1").innerHTML="Player 1 wins!!";
}
else if("random_number2>random_number"){
    document.querySelector("h1").innerHTML="Player 2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="Its a draw";
}
