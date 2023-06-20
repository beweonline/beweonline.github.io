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

cardsObj2._03 = {
	id: '03',
	swap: [false],
	tabs: ["commands II"],
	titles: [["commands II",""]],
	txtTitle: 'sg90 commands I',
	code1: `\
servo0.sleep();
servo0.wake();\
`,
	code2: `\
servo0.position;
servo0.increment = 1/50;\
`,
	code3: `\
sleep();
wake();
pause();
stop();\
`,
	txt: `
<p>to counter gravitational force a servo would have to pulse constantly</p>
<p>.sleep() and .wake() are methods to activate and deactivate pulsing of a servo</p>
<br>
<pre onclick="clipboard(event,['_01','copycode','1'])"><code class="language-javascript">\
servo0.sleep();
servo0.wake();
\</code></pre>
<br>

<p>the're two attributes that control servo position and moving speed</p>
<p>.position stores the current position between 0.9 and 4.5</p>
<p>e.g. servo0.position retrieves position of servo0</p>
<p>servo0.move(servo0.position+1) would move servo0 by one unit</p>
<br>
<p>.increment stores the step size as a fraction of 1.</p>
<p>the smaller the value the more steps have to be taken the slowlier the motion</p>
<br>
<pre onclick="clipboard(event,['_01','copycode','1'])"><code class="language-javascript">\
servo0.position;
servo0.increment = 1/50;
\</code></pre>

<br>
<p>some global commands deal with all servos at once</p>
<p>sleep wake and pause execute such commands on all registered digital pins</p>
<p>while stop() will put all servos to sleep and unregister them</p>
<p>use this command as an emergency break</p>
<br>

<pre onclick="clipboard(event,['_01','copycode','2'])"><code class="language-javascript">\
sleep();
wake();
pause();
\</code></pre>
<br>
<pre onclick="clipboard(event,['_01','copycode','2'])"><code class="language-javascript">\
stop();
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};
