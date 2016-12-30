// Синхронизация с аудио
var titleElem = document.querySelectorAll('item[type="title"]')[0];
titleElem.onclick = function (){ // проигрывать текст целиком
	aud.children[0].src = getAudioPath("full");
			aud.load();
			aud.play();
};

	var phrases = document.getElementsByTagName("phrases");
	for(var i=0; i<phrases.length; i++){
		console.log(i);
		phrases[i].addEventListener("click", playPhrase, true);
	}
	function playPhrase(event){
		if(event.path[4].tagName == "PHRASES"){
			var id = event.path[4].querySelector('item[type="segnum"]').innerText;
			console.log("play:"+getAudioPath(id));
			aud.children[0].src = getAudioPath(id);
			aud.load();
			aud.play();
		}
	}
	
	function getAudioPath(code){
		var title = document.querySelectorAll('item[type="title"]')[0].innerText;
		return title+"/"+code+".wav";
	}