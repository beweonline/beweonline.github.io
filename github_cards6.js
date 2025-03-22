var cardsObj6 = {};

cardsObj6._01 = {
	id: '01',
	swap: [false],
	tabs: ["setup your servos"],
	titles: [["boilerplate","#"]],
	txtTitle: 'the little sister',
	copycode: function(prop){return this['code'+prop]},
	code1: `\
var sg9 = require('sg91.js');
var myS = ['D6','D7'];
sg9.setup(myS);

`,
	code2: `\
function ani(){
  cal(1)
  .then(_=> s0.mov(3))
  .then(_=> s0.mov(2.5));
}

ani();
\
`,
	txt: `
<p>when coding the ESP8266 over WIFI, restrictions due its low working memory
ask for a much more parsimonious version of the servo library</p>
<p>one mature optimisation consists in limiting variable names to 3 characters</p>
<p>such abbreviations are reminiscent of the well known mnemonics
used for instructions in the assembly languages:</p>

<ul class="columns">
	<li style="display: inline">cal</li>
	<li style="display: inline; position: absolute; left: 15%">calibrate</li>
	<li style="display: inline; position: absolute; left: 50%">stp</li>
	<li style="display: inline; position: absolute; left: 60%">stop</li>
	<br>
	<li style="display: inline">pos</li>
	<li style="display: inline; position: absolute; left: 15%">position</li>
	<li style="display: inline; position: absolute; left: 50%">vbs</li>
	<li style="display: inline; position: absolute; left: 60%">verbose</li>
	<br>
	<li style="display: inline">pls</li>
	<li style="display: inline; position: absolute; left: 15%">pulse</li>
	<li style="display: inline; position: absolute; left: 50%">dur</li>
	<li style="display: inline; position: absolute; left: 60%">duration</li>
	<br>
	<li style="display: inline">mov</li>
	<li style="display: inline; position: absolute; left: 15%">move</li>
	<li style="display: inline; position: absolute; left: 50%">inc</li>
	<li style="display: inline; position: absolute; left: 60%">increment</li>
	<br>
	<li style="display: inline">slp</li>
	<li style="display: inline; position: absolute; left: 15%">sleep</li>
	<li style="display: inline; position: absolute; left: 50%">alv</li>
	<li style="display: inline; position: absolute; left: 60%">alive</li>
	<br>
	<li style="display: inline">wke</li>
	<li style="display: inline; position: absolute; left: 15%">wake</li>
	<li style="display: inline; position: absolute; left: 50%">z</li>
	<li style="display: inline; position: absolute; left: 60%">idle</li>
	<br>
</ul>

<p>store the <a class="blue-grey-text text-lighten-5" target="_blank" 
href="https://github.com/beweonline/moesspruino/blob/main/sg90/sg91.js">
SG91.js</a> file on your espruino compatible MCU</p>
<p>first we "require" the sg91.js file as a module</p>
<p>next we create an array that holds our digital out pins</p>
<p>finally we call the setup method and pass our array</p>
<p>setup registers each servo as an object in the global domain</p>
<p>servos are enumerated by their position in the array</p>

<br>

<pre onclick="clipboard(event,['_01','copycode','1'])"><code class="language-javascript">\
var sg9 = require('sg91.js');
var myS = ['D6','D7'];
sg9.setup(myS);
\</code></pre>

<br>

<p>here setup() created servo objects s0 and s1 in the global scope</p>
<p>library functions have now become methods of those objects</p>
<p>additionally an array ss was registered in the global scope, too</p>

<br>

<pre><code class="language-javascript">\
    ss
>>> [s0,s1]    //content of ss array
    s0.dev
>>> s0         //name of the 'device' servo0
\</code></pre>

<br>

<p>commands of this tiny library are JavaScript Promises, too</p>
<p>we create a function "ani" where we chain those together</p>
<p>this way next steps will be executed only after the previous one has finished<p>

<p>before servos can do anything, they MUST be calibrated!</p>
<p>so firstly, we calibrate all servos at once with cal(1)</p>
<p>next we use the '.then' mechanism to pass anonymous 'arrow' functions</p>

<p>here we ask s0 at D6 to move to position 3</p>
<p>after that we move it back to the middle</p>
<p>finally, we make a call to our function</p>
<br>

<pre onclick="clipboard(event,['_01','copycode','2'])"><code class="language-javascript">\
function ani(){
  cal(1)
  .then(_=> s0.mov(3))
  .then(_=> s0.mov(2.5));
}

ani();
\</code></pre>
	`	
};


cardsObj6._02 = {
	id: '02',
	swap: [false],
	tabs: ["essential servo control"],
	titles: [["commands I","#"]],
	txtTitle: 'sg91 commands I',
	code1: `\
cal();
cal(1);
s0.cal();
s0.cal(1);
\
`,
	code2: `\
s0.pse(1000);
s1.mov(3);
s0.pls(3.1);
s1.cal();
\
`,
	code3: `\
s1.move(2);
s1.move(2, 500);
\
`,
	txt: `
<p>the sg91 module offers a few commands to control servos</p>
<p>the function "cal()" will MOVE all servos to position 2.5</p>
<p>if we pass "1" as the argument it will PULSE to that position</p>
<p>if the function is called as a method it will calibrate only that servo</p>
<br>
<pre onclick="clipboard(event,['_02','copycode','1'])"><code class="language-javascript">\
cal();     //moves all servos to 2.5
cal(1);    //pulses all servos to 2.5
s0.cal();  //moves s0 to 2.5
s0.cal(1); //pulses s0 to 2.5
\</code></pre>

<br>
<p>any servo can be paused for a certain amount of milliseconds</p>
<p>a servo can be moved step-by-step to a position between 0.9 and 4.5</p>
<p>it can also be pulsed instantly to a position</p>
<p>be careful! if your servo is connected to heavy load, it might break.</p>
<br>

<pre onclick="clipboard(event,['_02','copycode','2'])"><code class="language-javascript">\
s0.pse(1000);
s1.mov(3);
s0.pls(3.1);
s1.cal();
\</code></pre>

<br>
<p>mov() can take complex arguments:</p>
<p>(stop position, duration of step interval)<p>
<p>as arguments to the function, two options are available:</p>
<p>(stop)  (stop, duration)</p>
<p>duration refers to the time passing between steps of rotation</p>
<p>duration has to be greater than 10ms and is 40ms by default</p>
<br>

<pre onclick="clipboard(event,['_02','copycode','3'])"><code class="language-javascript">\
s1.mov(2);        //move to 2 with default duration
s1.mov(2, 500);   //move to 2 with 500ms per step
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};


cardsObj6._03 = {
	id: '03',
	swap: [false],
	tabs: ["adjust servo stepping"],
	titles: [["commands II","#"]],
	txtTitle: 'sg91 commands II',
	code1: `\
s0.slp();
s0.wke();
\
`,
	code2: `\
s0.mov(3)
.then(_=> s0.mov(s0.pos+1));
\
`,
	code3: `\
s0.inc = 1/10;
s0.mov(2,100);
s1.inc = 1/200;
s1.mov(2,10);
\
`,
	code4: `\
slp();
pse(1000);
wke();
\
`,
	code5: `\
stp();
\
`,
	txt: `
<p>to counter gravitational force a servo would have to pulse constantly</p>
<p>.slp() and .wke() are methods to activate and deactivate pulsing of a servo</p>
<br>
<pre onclick="clipboard(event,['_03','copycode','1'])"><code class="language-javascript">\
s0.slp();
s0.wke();
\</code></pre>
<br>

<p>there're two attributes that control servo position and movement speed</p>
<p>.pos stores the current position between 0.9 and 4.5</p>
<p>e.g. s0.pos retrieves position of s0</p>
<p>the example below would move s0 to 3 and on by one unit to 4</p>
<br>

<pre onclick="clipboard(event,['_03','copycode','2'])"><code class="language-javascript">\
s0.mov(3)
.then(_=> s0.mov(s0.pos+1));
\</code></pre>

<br>
<p>.inc stores the step size as a fraction of 1</p>
<p>the default of 1/100 means that there are 100 steps between 1 and 2</p>
<p>the smaller the value the more steps have to be taken
<p>if step duration were not to change this would make a servo slowlier</p>
<p>but step resolution and step duration can be combined to achieve effects</p>
<br>

<pre onclick="clipboard(event,['_03','copycode','3'])"><code class="language-javascript">\
s0.inc = 1/20;
s0.mov(2, 100);  //few long 100ms & coarse 0.1 steps
s1.inc = 1/200;
s1.mov(2, 10);   //many short 10ms & smooth 0.005 steps
\</code></pre>

<br>
<p>some global commands deal with all servos at once</p>
<p>slp, wke and pse execute such commands on all registered digital pins</p>
<p>while stp() will put all servos to sleep and unregister them</p>
<p>use this command as an emergency break</p>
<br>

<pre onclick="clipboard(event,['_03','copycode','4'])"><code class="language-javascript">\
slp();      //puts all servos to sleep
pse(1000);  //pauses all servos for 1s
wke();      //wakes all servos up
\</code></pre>
<br>
<pre onclick="clipboard(event,['_03','copycode','5'])"><code class="language-javascript">\
stp();
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};
