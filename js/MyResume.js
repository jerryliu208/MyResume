function progress(ID, percent) {
				var user = ID;
				var el = document.getElementById(user);
				var width = 1;
		        var P = percent;
				var id = setInterval(frame, 15);
				function frame(){
					if(width >=P){
						clearInterval(id);
					}
					else{
						width++;
						el.style.width = width + '%';
					}
				}
			}