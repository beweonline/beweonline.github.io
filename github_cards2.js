var cardsObj2 = {};

cardsObj2._01 = {
	id: '01',
	swap: [false],
	tabs: ["boilerplate"],
	titles: [["boilerplate",""]],
	txtTitle: 'sg90 boilerplate',
	code1: `\
var sg90 = require("sg90.js");
var myServos = ["D0","D1","D2","D3"];
sg90.setup(myServos);\
`,
	code2: `\
function animation(){
  calibrate(1)
  .then(_=> servo0.move(3));
}

animation();\
	`,
	txt: `
<p>first we "require" the sg90.js file as a module</p>
<p>next we create an array that holds our digital out pins</p>
<p>finally we call the setup method and pass our array</p>
<br>
<pre onclick="clipboard(event,['_01','copycode','1'])"><code class="language-javascript">\
var sg90 = require("sg90.js");
var myServos = ["D0","D1","D2","D3"];
sg90.setup(myServos);
\</code></pre>

<br>
<p>we create a function "animation" and chain commands with Promises</p>
<p>first we calibrate all servos at once</p>
<p>next we use ".then" to pass an anonymous arrow function</p>
<p>here we ask servo0 at D0 to move to position 3</p>
<p>finally we execute our function</p>
<br>

<pre onclick="clipboard(event,['_01','copycode','2'])"><code class="language-javascript">\
function animation(){
  calibrate(1)
  .then(_=> servo0.move(3));
}

animation();
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};

cardsObj2._02 = {
	id: '02',
	swap: [false],
	tabs: ["commands"],
	titles: [["commands",""]],
	txtTitle: 'sg90 commands',
	code1: `\
calibrate();
calibrate(1);
servo0.calibrate();
servo0.calibrate(1);\
`,
	code2: `\
servo0.pause(1000);
servo0.move(3);
servo0.pulse(3.1);
servo0.calibrate();\
`,
	txt: `
<p>the sg90 module offers a few commands to control servos</p>
<p>the function "calibrate()" will move all servos to position 2.7</p>
<p>if we pass "1" as the argument it will pulse to that position</p>
<p>if the function is called as a method it will calibrate only that servo</p>
<br>
<pre onclick="clipboard(event,['_01','copycode','1'])"><code class="language-javascript">\
calibrate();
calibrate(1);
servo0.calibrate();
servo0.calibrate(1);
\</code></pre>

<br>
<p>any servo can be paused for a certain amount of milliseconds</p>
<p>a servo can be moved step-by-step to a position between 0.9 and 4.5</p>
<p>it can also be pulsed instantly to a position</p>
<p>be careful! if your servo is connected to heavy load, it might break.</p>
<br>

<pre onclick="clipboard(event,['_01','copycode','2'])"><code class="language-javascript">\
servo0.pause(1000);
servo0.move(3);
servo0.pulse(3.1);
servo0.calibrate();
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};
