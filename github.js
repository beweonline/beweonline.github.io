//george.kiwi 03/2023
var path = "cards1";

let myCards = [];
let cardPromiseResolve;

function section(nr){
	const container = document.getElementById("container");
	container.style.display = 'none';
	const stickyLicense = document.getElementById("sticky license");
	stickyLicense.style.display = 'none';
	const footer = document.getElementById("foot");
	footer.style.display = 'none';
	if(Matter.Spy.length != 0){
		M.Pushpin.getInstance(Matter.Pin[0].el).destroy();
		M.ScrollSpy.getInstance(Matter.Spy[0].el).destroy();	
	}
	M.Sidenav.getInstance(Matter.Sidenav[0].el).close();
	cardSection = nr;
	cardsObj = [];
	myCards = [];
	cardsObj = window["cardsObj"+nr];
	for(var x = container.children.length-1; x >= 0 ; x--){
		container.children[x].remove();
	}
	path = "cards"+nr;
	console.log(path);
	setTimeout(_=>{addCards()
	.then( result => {
		// format sticky/fixed bottom
		if(result.children.length == 0){
			stickyLicense.classList.remove("sticky-bottom");
			stickyLicense.classList.add("fixed-bottom");
			footer.classList.add("fixed-bottom");
		} else {
			stickyLicense.classList.add("sticky-bottom");
			stickyLicense.classList.remove("fixed-bottom");
			footer.classList.remove("fixed-bottom");	
		}
		container.style.display = 'block';
		footer.style.display = 'block';
		stickyLicense.style.display = 'block';
		resize();
		console.log(Matter.Pin);
		elems = document.querySelectorAll('.tabs');
		Matter.Tabs = M.Tabs.init(elems, {});
		setupScrollSpy();
	} )}, 100);
}

function mobileSection(nr){
	M.Tabs.getInstance(Matter.Tabs[0].el).select(nr);
}

function addImg(card, item){
	// default gif
	const img = findChild(card, "activator");
	img.classList.add("cursor");
	img.src = path+"/"+item.id+"ax.gif";
	console.log(path+"/"+item.id+"ax.gif");
	img.id = "img"+item.id;
}

function addTabs(card, item){
	const cardTab = findChild(card, "cardTab");
	const tabDiv = cardTab.innerHTML;
	cardTab.children[0].remove();
	for(var i=0; i< item.tabs.length; i++){
		var newTab = document.createElement("div");
		newTab.innerHTML = tabDiv;
		newTab = newTab.children[0];
		newTab.children[0].text = item.tabs[i];
		const tabId = i;
		if("hideTitles" in item){
			if(item.hideTitles){
				newTab.children[0].addEventListener("click", _=> {
					hideTitles(card.id, tabId);
				});
			}
		}
		// set longplay gif?
		let floatButton = findChild(card, "btn-floating");
		if(item.swap[i]){
			newTab.children[0].onclick = (e) => {
				tabSwap(e, tabId, card.id);
				floatButton.style.display = "block";
			}
			floatButton.style.display = "block";
		} else {
			newTab.children[0].onclick = (e) => {
				tabSwap(e, tabId, card.id);
				floatButton.style.display = "none";
				}
			floatButton.style.display = "none";
		}
		//console.log(newTab.children[0], tabId, card.id);
		if(i==0){newTab.children[0].classList.add("active");}
		cardTab.appendChild(newTab);
	}
}

function tabSwap(e, tabId, id){
	console.log(e, tabId, id);
	const card = document.getElementById(id);
	const floatButton = findChild(card, 'btn-floating');
	gif(floatButton, path, tabId);
}

function addTitles(card, item){
	const titles = findChild(card, "card-title").parentElement;
	const titleDiv = titles.innerHTML;
	titles.children[0].remove();
	for(var i=0; i< item.titles.length; i++){
		var newTitle = document.createElement("div");
		newTitle.innerHTML = titleDiv;
		//console.log(item.titles[i][1].length, item.titles[i][1]);
		let html;
		if(item.titles[i][1].length > 2){
			html = '<a target="_blank" href='+item.titles[i][1]+
					     '>'+item.titles[i][0]+'</a>';
		} else {
			html = '<a href='+item.titles[i][1]+
					     '>'+item.titles[i][0]+'</a>';
		}
		newTitle.children[0].innerHTML = html;
		newTitle.children[0].children[0].style.color = "rgba(0,0,0,0.87)";
		titles.appendChild(newTitle);
		if("hideTitles" in item){
			if(item.hideTitles){
				if(i==0) {newTitle.style.display="block";
				} else {
					newTitle.style.display="none";
				}
			}
		}
	}
}

function hideTitles(cardID, tabID){
	// hide all divs except the one matching tab index
	const card = document.getElementById(cardID);
	const children = card.children[1].children[1].children[0].children;
	for(var i=0; i < children.length; i++){
		if(i != tabID){children[i].style.display="none";}
		else {children[i].style.display="block";}
	}
}

function addText(card, item){
	const reveal = findChild(card, "card-reveal");
	//console.log(reveal.children[0]);
	reveal.children[0].childNodes[0].textContent = item.txtTitle;
	reveal.children[1].innerHTML = item.txt;
}

//populate domain
function addCards(){
	return new Promise((resolve, reject) => {
		//populate myCards[]
		for(obj in cardsObj){
			var x = cardsObj[obj];
			myCards.push(x);
		}
		// hide parent until appendage completed
		const container = document.getElementById("container");
		container.style.display = 'none';
		// add list entries to scrollSpy
		const spy = document.getElementById("spy");
		spy.innerHTML = "";
		for(var i=0; i< myCards.length; i++){
			console.log("myCards", myCards[i], myCards[i].txtTitle);
			const li = document.createElement("li");
			const html = "<a href=#" + myCards[i].id + ">" + myCards[i].txtTitle + "</a>";
			li.innerHTML = html;
			spy.appendChild(li);
			const item = myCards[i];
			myCards[item.id] = {};
			// new <div>
			const appendage = new Promise((resolve, reject) => {
				const div = document.createElement("div");
				div.innerHTML = cardString;
				myCards[item.id] = div.children[0];
				myCards[item.id].id = item.id;
				container.appendChild(myCards[item.id]);
				//
				setTimeout(() => {resolve(myCards[item.id]);}, 100);
			});
			// <children> setup
			appendage.then( result => {
				result.classList.add("section", "scrollspy");
				result.style.padding = "0";
				addImg(result, item);
				addTabs(result, item);
				addTitles(result, item);
				addText(result, item);
			})
		}
	checkImgInterval(myCards, container);
	cardPromiseResolve = resolve;
	})
}

function checkImgInterval(elems, result){
	let ids = elems.map(x => x.id);
	window['interval'] = setInterval(_=>checkImgLoaded(ids, result), 100);
}

function checkImgLoaded(ids, result){
	let check = 1;
	for(id of ids){
		const img = document.getElementById("img"+id);
		const div = img != undefined && img.complete == true ? 1 : 0;
		check = check/div;
		console.log(id, img, check);
	}
	if(check == 1){
		cardPromiseResolve(result);
		clearInterval(interval);
		console.log("DONE");
	}
}

function setupScrollSpy(){
	const nav = document.getElementById("nav");
	const foot = document.getElementById("foot");

	const body = document.body, html = document.documentElement;
	const top = document.getElementById("spy").getBoundingClientRect().y;
	
	const height = Math.max(body.scrollHeight, body.offsetHeight, 
				   html.clientHeight, html.scrollHeight, html.offsetHeight);
	const bottom = height-foot.clientHeight;//-(window.innerHeight*5/6);
	
	elems = document.querySelectorAll('.pushpin');
	Matter.Pin = M.Pushpin.init(elems, {top: top, bottom: bottom, offset: nav.clientHeight});

	elems = document.querySelectorAll('.scrollspy');
	Matter.Spy = M.ScrollSpy.init(elems, {scrollOffset: nav.clientHeight});
}

//.then show + resize cards
var Matter = {};
onresize = resize;
document.addEventListener('DOMContentLoaded', function() {
	//observeContainer();
	cardsObj = window["cardsObj"+1];
	addCards()
	.then( result => {
		result.style.display = 'block';
		resize();

		let elems = document.querySelectorAll('.sidenav');
		const options = {edge: "left"};
		Matter.Sidenav = M.Sidenav.init(elems, options);
		
		elems = document.querySelectorAll('.tabs');
		Matter.Tabs = M.Tabs.init(elems, {});
		
		setupScrollSpy();
	} )
});

//sticky elements
document.addEventListener('scroll', function() {
	//menubar stick on top
	const navbar = document.getElementById("nav");
	const menubar = document.getElementById("menubar");
	if(window.scrollY > navbar.children[0].clientHeight){
		menubar.classList.add("sticky-top");
		menubar.style.top = "0px";
	} else {
		menubar.classList.remove("sticky-top");
	}
	// footer stick to bottom
})

function findChild(parent, childClass){
	for(var child of parent.childNodes){
		if(child.classList && child.classList.contains(childClass)) {
			return child
		} else if(child.childNodes){
			var recursion = findChild(child, childClass);
			if(recursion){
				return recursion
			}
		}
	}
}

function highlight(){
	document.querySelectorAll('pre code').forEach((el) => {
		hljs.highlightElement(el);})
}

function clipboard(e, msg){
	var code = cardsObj[msg[0]][msg[1]](msg[2]);
	navigator.clipboard.writeText(code);
	//animation click confirm
	let codeBox = e.target;
	codeBox.style.animationName = "flashBox";
	setTimeout(_=> codeBox.style.animationName = false, 1000);
}

function resize(){
	/*logo();*/ cards(); floatButtons(); de(); highlight();
}

function logo(){
	const nav = document.getElementById("nav");
	const navHeight = nav.children[0].clientHeight;
	const logo = document.getElementById("logo");
	logo.height = navHeight;
}

function cards(){
	const cards = document.getElementsByClassName("card");
	for(elem of cards){
		const img = elem.children[0].children[0];
		const imgHeight = img.naturalHeight;
		const imgWidth = img.naturalWidth;
		elem.style.width = "auto";
		if(elem.clientWidth > imgWidth){
			elem.style.width = imgWidth+"px";
		}
	}
}

function de(){
	const de = document.querySelectorAll('.de');
	if(window.innerWidth < 601){
		for(e of de){e.style.display = "none";}
		//{e.textContent=""}
	} else {
		for(e of de){e.style.display = "block";}
	}
}

function floatButtons(){
	const buttons = document.querySelectorAll('.btn-floating');
	for(button of buttons){
		if(window.innerWidth < 400){
			button.classList.remove("btn-large");
			button.classList.add("btn-small");
		}
		else{
			button.classList.remove("btn-small");
			button.classList.add("btn-large");	
		}
	}
}

function gif(e, path, tabId){
	const onclick = e.onclick;
	e.onclick = "";
	if(!path){path = window['path'];}
	var id = e.parentElement.parentElement.id; //01
	// get active tab
	function cardActiveIndex(e){
		const card = e.parentElement.parentElement;
		const activeTab = findChild(card, 'active');
		for(tab of Matter.Tabs){
			if(tab.el.classList.contains('cardTab')){
				const TabCard = tab.el.parentElement.parentElement.parentElement;
				const TabImg = TabCard.children[0].children[0].id;
				if(TabImg == ('img'+id)){
					index = tab.index;
					switch(index){
						case 0: return 'a'
						case 1: return 'b'
						case 2: return 'c'
						case 3: return 'd'
					}
				}
			}
		}
	}	
	if(tabId != undefined){
		// tabs for gif selection
		switch(tabId){
			case 0: index = 'a'; break;
			case 1: index = 'b'; break;
			case 2: index = 'c'; break;
			case 3: index = 'd'; break;
		}
		swapPic(index, true);
	} else {
		// active button for play
		var index = cardActiveIndex(e);
		swapPic(index, false);
	}
	//swap ...Yx.gif for ...Y.gif
	function swapPic(index, tab){
		const elem = document.getElementById('img'+id);
		const filePath = path+'/';
		if(elem.src.slice(-8) == id+index+'x.gif' && tab==false){
			// load to temp div
			const img = document.createElement("img");
			tempCardId = "0"+(myCards.length+1);
			img.id = "img"+tempCardId;
			img.src = filePath+id+index+'.gif';
			img.style.display = "none";
			container.appendChild(img);
			//loading screen
			let oldHeight = elem.clientHeight;
			elem.parentElement.style.height = oldHeight+"px";
			elem.src = "";
			spinner(elem);
			//check loaded
			imgPromise = new Promise((resolve, reject) => {
				checkImgInterval([{id:tempCardId}], elem);
				cardPromiseResolve = resolve;
				setTimeout(function(elem){
					if(elem.naturalHeight == 0){
						clearStyle(elem);
						e.onclick = onclick;
						gif(e, path);
					}
					}, 10000, elem);
			})
			//revert if img does not exist
			imgPromise.then( elem => {
				//set card.src
				elem.src = img.getAttribute('src');
				//reset preloaded gif
				setTimeout(_=> elem.src = elem.getAttribute('src'), 50);
				clearStyle(elem);
				e.children[0].innerHTML = 'pause';
				e.classList.remove("blue");
				e.classList.remove("lighten-2");
				e.classList.add("amber");
				e.classList.add("accent-3");
				e.style.animation = false;
				img.remove();
				e.onclick = onclick;
			})
			function clearStyle(elem){
				console.log("img children", elem.parentElement.children)
				elem.parentElement.style.height = "";
				console.log(elem.parentElement.children[2]);
				elem.parentElement.children[2].remove();
			}
			function spinner(elem){
				const div = document.createElement("div");
				let spin =
				`<div class="lds-dual-ring"></div>`
				div.innerHTML = spin
				elem.parentElement.appendChild(div.children[0]);
			}
			//handbrake
		} else {
			elem.src = filePath+id+index+'x.gif';
			e.children[0].innerHTML = 'play_arrow';
			e.classList.remove("amber");
			e.classList.remove("accent-3");
			e.classList.add("blue");
			e.classList.add("lighten-2");
			e.style.animation = "";
			e.onclick = onclick;
		}
	}
}
