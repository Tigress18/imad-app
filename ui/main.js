console.log('Loaded!');


var long= document.getElementbyId('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft+10;
    long.style.marginLeft = marginLeft + 'px';
}
long.onClick= function(){
   var interval = setInterval(moveRight,100)
};
