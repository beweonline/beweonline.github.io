var cardsObj7 = {};

cardsObj7._01 = {
	id: '01',
	swap: [false, false],
	tabs: ["robot construction", "plan"],
	titles: [["presentation >>>", "cards7/construction/reveal.html"],
			 ["PDF plan >>>","https://github.com/beweonline/moesspruino/tree/main/plans"]],
	txtTitle: 'I mechanics',
	hideTitles: true,
	txt: `<p class="flow-text">
junior is an almost-no-tools-required stripped down version of senior
designed for classroom settings without a proper crafts workshop and limited teaching time.
as such it relies on prefabricated elements:
M4 screws, nuts, washers, perforated injection moulded boards, perforated metal strips, cylindrical plastic casings, lugs, skewers;
a few pliers, screwdrivers, wrenches and a battery powered driller will suffice.
the robot can be built by pupils in as little as 4 hrs.

<br>
<br>

accompanying the presentation there's a <a class="blue-grey-text text-lighten-5" target="_blank" 
href="https://github.com/beweonline/moesspruino/tree/main/plans">plan</a> to be printed out on A3 paper.
</p>
`
};

cardsObj7._02 = {
	id: '02',
	swap: [false],
	tabs: ["control electric flow"],
	titles: [["breadboard presentation >>>", "cards7/breadboard/reveal.html"]],
	txtTitle: 'II electronics',
	txt: `<p class="flow-text">
on a half-length 400 pins breadboard, we accomodate the microcontroller, power supply
with additional wiring and a microswitch button pulled down to ground inline with an indicator LED.
it's important to note that ordinary jumper wire is a cause of signal instability!
the ic inside of servo motors responds to elctrical noise and cable movement or slack joints.
effectively the pulswidth gets longer or shorter resulting in the servo to rotate w/ chaotic jumps.
much sturdier and thicker wire like a paper clip does the trick, though.
on ports D6 & D7 such wires stick into the board and female ends of a F2M dupont cable
attach to it. though it's possible to do the same for the DC+ and DC- end points, 
the breadboard power supply conveniently offers 5V pins which provide better fastening.
	`
};

cardsObj7._03 = {
	id: '03',
	swap: [false],
	tabs: ["elementary cnc", "intermediate cnc"],
	titles: [["step-by-step A >>>", "cards7/codeJuniorA/reveal.html"],
	         ["step-by-step B >>>", "cards7/codeJuniorB/reveal.html"]],
	txtTitle: 'III cybernetics',
	hideTitles: true,
	copycode: function(prop){return this['code'+prop]},
	code1: `\
sg9 = require('sg91.js');
myS = ['D6','D7'];
myO = {vbs: true,
       inc: 0.1};
sg9.setup(myS, myO);

\
`,
	code2: `\
cal(1);

ani = function(){

};

\
`,
	code3: `\
cls = NodeMCU.D1;
pinMode(cls , 'input');

oC = {}

cb = function() {}

setWatch(cb, cls, oC);

ani = function() {}

hld = function() {}

\
`,
	txt: `<p class="flow-text">
espruino firmware w/ its live javascript interpreter makes it fun and intuitive to 
exercise computer numeric control (cnc). the sg9x libraries provide a simple boilerplate
mechanism to get going quickly.
</p>
<br>
<p>the 'boilerplate'</p>
<pre onclick="clipboard(event,['_03','copycode','1'])"><code class="language-javascript">\
sg9 = require('sg91.js');
myS = ['D6','D7'];
myO = {vbs: true,
       inc: 0.1};
sg9.setup(myS, myO);
\</code></pre>
<br>
<p class="flow-text">
what's left to do in the elementary example, is: define pins and properties of
your servos, calibrate by pulsing and define a sequence of servo motions in a reusable function.
</p>
<p>structure for code example A - calibrate by pulse and animate servos</p>
<pre onclick="clipboard(event,['_03','copycode','2'])"><code class="language-javascript">\
cal(1);
ani = function(){};
\</code></pre>
<br>
<p class="flow-text">
the intermediate example takes it a step further through button control where a
watchdog observes a pin and an associated callback function decides what to do:
awake and calibrate the servos, start or pause the servo animation.
</p>
<br>
<p>structure for code example B - watchdog, callback & hold function</p>
<pre onclick="clipboard(event,['_03','copycode','3'])"><code class="language-javascript">\
cls = NodeMCU.D1;
pinMode(cls , 'input');
oC = {}
cb = function() {}

setWatch(cb, cls, oC);

ani = function() {}
hld = function() {}
\</code></pre>
	`
};