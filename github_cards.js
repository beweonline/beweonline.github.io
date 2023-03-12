var cardsObj = {};

cardsObj._01 = {
	id: '01',
	swap: [true,true],
	tabs: ["console", "editor"],
	titles: [["online webIDE","https://beweonline.github.io/moesspruino/webIDE/index.html"],
		["offline binaries", "https://github.com/beweonline/moesspruino/releases/tag/v"]],
	txtTitle: 'moesspruino webIDE',	
	code1: `\
var status = true;
var toggle = _=> status = !status;
var setPin = _=> digitalWrite('D16', toggle());
var i = setInterval(setPin, 500);\
`,
	code2: `var status = true, LED = NodeMCU.D0;
function blink(){
  status = !status;
  digitalWrite(NodeMCU.D0, status);
}
var i = setInterval(blink, 300);\
	`,
	code3: `\
changeInterval(i, 600);\
	`,
	code4: `\
clearInterval(i);\
	`,
	txt: `
<p>here are two equivalent examples of how to let the built-in LED flash</p>
<p>click any code box to copy to the clipboard</p>
<p>below is the example from the REPL console demo</p>
<pre onclick="clipboard(event,['_01','copycode','1'])"><code class="language-javascript">\
var status = true;
var toggle = _=> status = !status;
var setPin = _=> digitalWrite('D16', toggle());
var i = setInterval(setPin, 500);
\</code></pre>

<p>below is the example from the code editor demo</p>

<pre onclick="clipboard(event,['_01','copycode','2'])"><code class="language-javascript">\
var status = true, LED = NodeMCU.D0;
function blink(){
  status = !status;
  digitalWrite(NodeMCU.D0, status);
}
var i = setInterval(blink, 300);
\</code></pre>

<p>below are commands for the console to change flashing periods interactively and to stop the process</p>
<pre onclick="clipboard(event,['_01','copycode','3'])"><code class="language-javascript">\
changeInterval(i, 600);
\</code></pre>
<pre onclick="clipboard(event,['_01','copycode','4'])"><code class="language-javascript">\
clearInterval(i);
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};

cardsObj._02 = {
	id: '02',
	swap: [false],
	tabs: ["source code"],
	titles: [["inspect & downloads","https://github.com/beweonline/moesspruino"]],
	txtTitle: 'github repository',
	txt: `<p class="flow-text">
moesspruino is a customization of the espruino webIDE. both this alteration
and the original project are free open source software. head over to github and
find all the files to start building and customizing your experience.
</p>`
};
