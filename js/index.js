var scount=0;
var tcount=0;
var tocount=0;


document.getElementById("shizu").onclick = function() {
   scount ++;
   checkcount();
};

document.getElementById("tanu").onclick = function() {
   tcount ++;
   checkcount();
};

document.getElementById("tota").onclick = function() {
   tocount ++;
   checkcount();
};


var local2 = localStorage.getItem('kiba');
if(local2 == "OK"){
 document.getElementById("kiba").classList.remove("d-none");
 document.getElementById("head").classList.add("d-none"); 

}


function checkcount(){

	if (scount==8 &&  tcount==5 ) {
	alert('正解！');
   document.getElementById("next").classList.remove("d-none");

	}else if(scount==8 && tocount==5){
	
	alert('それは違うよ');
	
	}

}


		 function touchStartEvent(event) {
            // タッチによる画面スクロールを止める
            event.preventDefault();
        }

        function touchMoveEvent(event) {
            event.preventDefault();

            // ドラッグ中のアイテムをカーソルの位置に追従
            var draggedElem = event.target;
            var touch = event.changedTouches[0];
            event.target.style.position = "fixed";
            event.target.style.top = (touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2) + "px";
            event.target.style.left = (touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2) + "px";
        }

        function touchEndEvent(event) {
            event.preventDefault();

            // ドラッグ中の操作のために変更していたスタイルを元に戻す
            var droppedElem = event.target;
            droppedElem.style.position = "";
            event.target.style.top = "";
            event.target.style.left = "";

            // ドロップした位置にあるドロップ可能なエレメントに親子付けする
            var touch = event.changedTouches[0];
            // スクロール分を加味した座標に存在するエレメントを新しい親とする
            var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);
            if(newParentElem.id == "tota"){
               alert("こいつは狼だ！");
               localStorage.setItem('finish', "OK");
                window.location.href = './next/'; 
               
            }else if(newParentElem.id == "tanu"){
               alert("食べちゃダメ！");
               
               
            }else if(newParentElem.id == "shizu"){
               alert("食べちゃダメ！");
            }

        }

        
            // ドラッグ可能アイテムへのタッチイベントの設定
                var kiba =  document.getElementById("kiba")
                kiba.addEventListener('touchstart', touchStartEvent, false);
                kiba.addEventListener('touchmove', touchMoveEvent, false);
                kiba.addEventListener('touchend', touchEndEvent, false);
        