const winningConditions = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
var Flag=0;
var ItemCount=0;
var XScr=0;
var OScr=0;
var itemList= Array(9).fill("");
function Additem(ClassName){
  let bodybc=document.getElementsByTagName('body')[0]
  Flag==0?bodybc.style.backgroundColor="#fab7b7":bodybc.style.backgroundColor="#bbf8b0";
  var Items="❎⭕";
  var Place_Part =document.getElementsByClassName(ClassName)[0];
  if(Place_Part.innerHTML==""){
    Place_Part.innerHTML=Items[Flag];
    let index= parseInt(ClassName.slice(-1), 10);
    itemList[index]=Items[Flag];
    console.log(itemList);
    Flag= Flag==0 ?1:0;
    ItemCount+=1;
    if(ItemCount>=5)setTimeout(CheckSuccess, 100);
  }
}
function CheckSuccess(){
  console.log("CheckSuccess",ItemCount);
  for(const condition of winningConditions){
    const [a , b , c] = condition;    
    if(itemList[a]=="⭕" && itemList[b]=="⭕" && itemList[c]=="⭕"){
        alert("⭕ WIN");
        OScr+=1;
        document.getElementsByClassName("OScore")[0].innerHTML=OScr;
        Clear_Game_Place();
        return;
    }
    if(itemList[a]=="❎" && itemList[b]=="❎" && itemList[c]=="❎"){
        alert("❎ WIN");
        XScr+=1;
        document.getElementsByClassName("XScore")[0].innerHTML=XScr;
        Clear_Game_Place();
        return;
    }
  }

  if(ItemCount==9){
    alert(" DRAW ,\nContinue the game");
    Clear_Game_Place();
  }
}
function Clear_Game_Place(){
  for (let i = 0; i < 9; i++) {
    (function(index) {
        var divTag = document.getElementsByTagName("div")[index];
        divTag.classList.add("FontSizeDecre");
        setTimeout(function() {divTag.innerHTML = "";}, 1000);
        divTag.addEventListener("animationend", function() {
            divTag.classList.remove("FontSizeDecre");}, 
        { once: true });
    })(i);
  }
  itemList= Array(9).fill("");
  ItemCount=0;
}