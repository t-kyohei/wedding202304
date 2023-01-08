var scount=0;
var tcount=0;
var last=0;
var last2=0;
var answer3=0;
var answer5=0;
var answer52=0;
var local = localStorage.getItem('last');
if(local == "OK"){
 last=1;
}

var local2 = localStorage.getItem('last2');
if(local2 == "OK"){
 last2=1;
}

//扉を開いた後の表示制御

if(last2==1){
	document.getElementById("aries").classList.add("d-none");
	document.getElementById("leo").classList.add("d-none");
	document.getElementById("pisces").classList.add("d-none");
	document.getElementById("goza").classList.remove("d-none");
	document.getElementById("reverse").classList.remove("d-none");

}


/*
*最終の3つの扉
*
*/
var btns =document.getElementsByClassName("btn-info");
	for(var i=0; i<btns.length;i++){
		btns[i].onclick = function() {
		   	if(last == 1){
		   	 checklast(this.value);
		   	}
		};
	}
	
function checklast(value){

	var collapses =document.getElementsByClassName("collapse");
	var bol = true;
	var kt = false;
	var mt = false;
	var kn = false;
	
	for(var i=0; i<collapses.length;i++){
	//一つずつ確認する
	  var now  = collapses[i];
	  var nowval = now.getAttribute("value");
	  var boli = now.classList.contains("show");

	    if(nowval == value){
	    //押していたら、フラグを変える
	    	if(boli == true){
	    	    boli = false;
	    	}else{
	    	    boli = true;
	    	}
	    }
	    
		
	    if(nowval == "3" || nowval == "6" || nowval == "10"){
	      if(boli == false){
	         bol = false;
	      }
	    }else{
		   if(boli == true){
		     bol = false;
		   }
		
		}
		
		
	}
	

	

	if (bol == true) {
	
	alert("何かが変わった。変わった全て確認せよ。");
	localStorage.setItem('last2', "OK");
    window.location.href = './'; 
	
		
	}else{
	document.getElementById("lasttext").classList.add("d-none");
	document.getElementById("maintext").classList.remove("d-none");
	
	}

}

/*
*送信ボタン押下時のキーワード
*
*/


document.getElementById("submit").onclick = function(){
var text = document.getElementById("text").value;
	/*if(text =="12345" ){	
		alert("己の３つの扉を開いたときに鍵に導かれる");
		last=1;
	}else */
	if(text =="サカナのまきエサ" || text == "さかなのまきえさ" || text == "サカナのまきえさ" || text == "サカナノマキエサ"){	
	     alert("渦が出現した");
		document.getElementById("uzu").classList.remove("d-none");
		
	}else if(text =="まったりん"){
	     if(last == 1){
	        alert("まっ");
	     	localStorage.setItem('finish', "OK");
         	window.location.href = '../next/'; 
         }else{
	     alert("困ったりん");
	     }
	}else if(last2 == 1&& (text =="噴水"||text =="ふんすい")){
	   	 localStorage.setItem('kiba', "OK");
	     alert("何かが出現した");
	     document.getElementById("eru").classList.remove("d-none");
         
	}else{
	    alert("何も起きないようだ");
	}


}

/*
*ベルを出す音
*
*/


function sound()
{
	// [ID:sound-file]の音声ファイルを再生[play()]する
	var sound =document.getElementById( 'sound-file' );
	sound.play() ;
}


function sound2()
{
	// [ID:sound-file]の音声ファイルを再生[play()]する
	document.getElementById( 'sound-file2' ).play() ;
}

/*
*卵の色のチェック
*
*/
$(function() {
     $(".egg").click(function() {
     if(answer3==0){
          var colorckeck = true;
          var value = Number(this.getAttribute("value")) + 1;
		  if(value== 7){
		    value =1;
		  }
		  this.setAttribute("value",value);
		  
		  
          // 現在のセルの色が無色透明かを判別
          if(value=="1") {
               // 水色に染める
               $(this).css("background-color", "aqua");
          } else if(value=="2"){
               // 黄色にするyellow
               $(this).css("background-color", "yellow");
          }else if(value=="3"){
               // 紫にする
               $(this).css("background-color", "purple");
          }else if(value=="4"){
               // ピンクにする
               $(this).css("background-color", "#FF69B4");
          }else if(value=="5"){
               // 黄緑にする
               $(this).css("background-color", "lime");
          }else if(value=="6"){
               // 肌色にする
               $(this).css("background-color", "#FFA07A");
          }
          
          
          var eggs =document.getElementsByClassName("egg");
          
		  for(var i=0; i<eggs.length;i++){
			//一つずつ確認する
	  		var now  = eggs[i];
	  		var nowval = now.getAttribute("value");
	  	   
	  	   
	    if((i == 0 || i==3 )&& nowval != 6){
	    	colorckeck = false;
	    }else if((i == 1 || i==2 )&& nowval != 4){
	    	colorckeck = false;
	    }else if((i == 4 || i==7 )&& nowval != 1){
	    	colorckeck = false;
	    }else if((i == 5 || i==6 )&& nowval != 2){
	    	colorckeck = false;
	    }else if((i == 8 || i==11 )&& nowval != 3){
	    	colorckeck = false;
	    }else if((i == 9 || i==10 )&& nowval != 5){
	    	colorckeck = false;
	    }

		
		}
	   if(colorckeck == true){
	   	document.getElementById("answer3").classList.remove("d-none");
	   	document.getElementById("starmark").classList.remove("d-none");
	   	document.getElementById("starmark2").classList.remove("d-none");
		answer3=1;
		
	    }
		
		}
		
	
          
     });
}); 



/*
*賞の色チェック
*
*/

$(function() {
     $(".kin").click(function() {
     if(last2==1){
         if(answer52==0){
          var colorckeck = true;
          var value = Number(this.getAttribute("value")) + 1;
		  if(value== 7){
		    value =1;
		  }
		  this.setAttribute("value",value);
		  
		  
          // 現在のセルの色が無色透明かを判別
          if(value=="1") {
               // 赤色に染める
               $(this).css("background-color", "#FF0000");
          } else if(value=="2"){
               // ピンクにする
               $(this).css("background-color", "#FF69B4");
          }else if(value=="3"){
               // 黄色にする
               $(this).css("background-color", "#FFFF00");
          }else if(value=="4"){
               // オレンジにする
               $(this).css("background-color", "#FF773E");
          }else if(value=="5"){
               // 緑色にする
               $(this).css("background-color", "#008080");
          }else if(value=="6"){
               // 茶色にする
               $(this).css("background-color", "#FFD700");
          }
          
          var kins =document.getElementsByClassName("kin");
          
		  for(var i=0; i<kins.length;i++){
			//一つずつ確認する
	  		var now  = kins[i];
	  		var nowval = now.getAttribute("value");
	  	   
	  	   
	    if(i == 0 && nowval != 1){
	    	colorckeck = false;
	    }else if(i == 1&& nowval != 6){
	    	colorckeck = false;
	    }else if(i == 2 && nowval != 3){
	    	colorckeck = false;
	    }else if(i == 3 && nowval != 4){
	    	colorckeck = false;
	    }else if(i == 4 && nowval != 2){
	    	colorckeck = false;
	    }else if(i == 5 && nowval != 5){
	    	colorckeck = false;
	    }

		
		}
	   if(colorckeck == true){
	   	document.getElementById("answer52").classList.remove("d-none");
		answer52=1;
	    }
		
		}
     
     
     }else{
     	if(answer5==0){
          var colorckeck = true;
          var value = Number(this.getAttribute("value")) + 1;
		  if(value== 4){
		    value =1;
		  }
		  this.setAttribute("value",value);
		  
		  
          // 現在のセルの色が無色透明かを判別
          if(value=="1") {
               // 銀色に染める
               $(this).css("background-color", "#C9CACA");
          } else if(value=="2"){
               // 金色にするyellow
               $(this).css("background-color", "#DBB400");
          }else if(value=="3"){
               // 銅にする
               $(this).css("background-color", "#C9AE5D");
          }
          
          var kins =document.getElementsByClassName("kin");
          
		  for(var i=0; i<kins.length;i++){
			//一つずつ確認する
	  		var now  = kins[i];
	  		var nowval = now.getAttribute("value");
	  	   
	  	   
	    if((i == 0 || i==3 )&& nowval != 2){
	    	colorckeck = false;
	    }else if((i == 1 || i==4 )&& nowval != 1){
	    	colorckeck = false;
	    }else if((i == 2 || i==5 )&& nowval != 3){
	    	colorckeck = false;
	    }

		
		}
	   if(colorckeck == true){
	   	document.getElementById("answer5").classList.remove("d-none");
		answer5=1;
	    }
		
		}
		
	}
          
     });
}); 



//戻すボタン
document.getElementById("reverse").onclick = function(){
localStorage.removeItem('last2');
window.location.href = './'; 

}
