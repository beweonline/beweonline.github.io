var cardsObj2 = {};

cardsObj2._01 = {
	id: '01',
	swap: [false],
	tabs: ["setup your servos"],
	titles: [["boilerplate","#"]],
	txtTitle: 'sg90 boilerplate',
	code1: `\
var sg90 = require("sg90.js");
var myServos = ["D0","D1","D2","D3"];
sg90.setup(myServos);

\
`,
	code2: `\
function animation(){
  calibrate(1)
  .then(_=> servo0.move(3))
  .then(_=> servo0.move(2.7));
}

animation();
\
`,
	txt: `
<p>store the <a class="blue-grey-text text-lighten-5" target="_blank" 
href="https://github.com/beweonline/moesspruino/blob/main/sg90/sg90.js">
SG90.js</a> file on your espruino compatible MCU</p>
<p>first we "require" the sg90.js file as a module</p>
<p>next we create an array that holds our digital out pins</p>
<p>finally we call the setup method and pass our array</p>
<p>setup registers each servo as an object in the global domain</p>
<p>servos are enumerated by their position in the array</p>
<br>
<pre onclick="clipboard(event,['_01','copycode','1'])"><code class="language-javascript">\
var sg90 = require("sg90.js");
var myServos = ["D0","D1","D2","D3"];
sg90.setup(myServos);
\</code></pre>

<br>
<p>commands of this library are JavaScript Promises</p>
<p>we create a function "animation" where we chain those together</p>
<p>first we calibrate all servos at once</p>
<p>next we use ".then" to pass an anonymous arrow function</p>
<p>this way next steps will be executed only after the previous one has finished<p>
<p>here we ask servo0 at D0 to move to position 3</p>
<p>after that we move it back to the middle</p>
<p>finally we make a call to our function</p>
<br>

<pre onclick="clipboard(event,['_01','copycode','2'])"><code class="language-javascript">\
function animation(){
  calibrate(1)
  .then(_=> servo0.move(3))
  .then(_=> servo0.move(2.7));
}

animation();
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};

cardsObj2._02 = {
	id: '02',
	swap: [false],
	tabs: ["essential servo control"],
	titles: [["commands I","#"]],
	txtTitle: 'sg90 commands I',
	code1: `\
calibrate();
calibrate(1);
servo0.calibrate();
servo0.calibrate(1);
\
`,
	code2: `\
servo0.pause(1000);
servo1.move(3);
servo2.pulse(3.1);
servo3.calibrate();
\
`,
	code3: `\
servo1.move(2);
servo1.move(2, 500);
servo0.move(2, 3);
servo2.move(2, 3, 20);
\
`,
	txt: `
<p>the sg90 module offers a few commands to control servos</p>
<p>the function "calibrate()" will move all servos to position 2.7</p>
<p>if we pass "1" as the argument it will pulse to that position</p>
<p>if the function is called as a method it will calibrate only that servo</p>
<br>
<pre onclick="clipboard(event,['_02','copycode','1'])"><code class="language-javascript">\
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

<pre onclick="clipboard(event,['_02','copycode','2'])"><code class="language-javascript">\
servo0.pause(1000);
servo1.move(3);
servo2.pulse(3.1);
servo3.calibrate();
\</code></pre>

<br>
<p>move() can take complex arguments:</p>
<p>(start position, stop position, duration of step interval)<p>
<p>any of the following combinations are possible:</p>
<p>(stop)  (stop, duration)  (start, stop)  (start, stop, duration)</p>
<p>if a start position is detected, the servo will pulse to it before moving to stop</p>
<p>duration has to be greater than 10 and is 40 by default</p>
<br>

<pre onclick="clipboard(event,['_02','copycode','3'])"><code class="language-javascript">\
servo1.move(2);        //move to 2 with default duration
servo1.move(2, 500);   //move to 2 with 500ms per step
servo0.move(2, 3);     //pulse to 2 and move to 3
servo2.move(2, 3, 20); //pulse 2, move 3, 20ms steps
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};

cardsObj2._03 = {
	id: '03',
	swap: [false],
	tabs: ["adjust servo stepping"],
	titles: [["commands II","#"]],
	txtTitle: 'sg90 commands II',
	code1: `\
servo0.sleep();
servo0.wake();
\
`,
	code2: `\
servo0.move(3)
.then(_=> servo0.move(servo0.position+1));
\
`,
	code3: `\
servo0.increment = 1/20;
servo0.move(2,100);
servo1.increment = 1/200;
servo1.move(2,10);
\
`,
	code4: `\
sleep();
wake();
pause();
\
`,
	code5: `\
stop();
\
`,
	txt: `
<p>to counter gravitational force a servo would have to pulse constantly</p>
<p>.sleep() and .wake() are methods to activate and deactivate pulsing of a servo</p>
<br>
<pre onclick="clipboard(event,['_03','copycode','1'])"><code class="language-javascript">\
servo0.sleep();
servo0.wake();
\</code></pre>
<br>

<p>there're two attributes that control servo position and movement speed</p>
<p>.position stores the current position between 0.9 and 4.5</p>
<p>e.g. servo0.position retrieves position of servo0</p>
<p>the example below would move servo0 to 3 and on by one unit to 4</p>
<br>

<pre onclick="clipboard(event,['_03','copycode','2'])"><code class="language-javascript">\
servo0.move(3)
.then(_=> servo0.move(servo0.position+1));
\</code></pre>

<br>
<p>.increment stores the step size as a fraction of 1</p>
<p>the default of 1/100 means that there are 100 steps between 1 and 2</p>
<p>the smaller the value the more steps have to be taken
<p>if step duration were not to change this would typically make a servo slowlier</p>
<p>but step resolution and step duration can be combined to achieve various effects</p>
<br>

<pre onclick="clipboard(event,['_03','copycode','3'])"><code class="language-javascript">\
servo0.increment = 1/20;
servo0.move(2,100); //20 steps in 200ms
servo1.increment = 1/200;
servo1.move(2,10); //200 steps in 200ms
\</code></pre>

<br>
<p>some global commands deal with all servos at once</p>
<p>sleep, wake and pause execute such commands on all registered digital pins</p>
<p>while stop() will put all servos to sleep and unregister them</p>
<p>use this command as an emergency break</p>
<br>

<pre onclick="clipboard(event,['_03','copycode','4'])"><code class="language-javascript">\
sleep();
wake();
pause();
\</code></pre>
<br>
<pre onclick="clipboard(event,['_03','copycode','5'])"><code class="language-javascript">\
stop();
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};

cardsObj2._04 = {
	id: '04',
	swap: [false],
	tabs: ["advanced techniques"],
	titles: [["motion functions","#"]],
	txtTitle: 'advanced animation pattern',
	code1: `\
function pickPos(){
  return new Promise( (res) => {
   servo0.move(4, 20)
   .then(_=> servo2.move(2.4, 20))
   .then(_=> servo1.move(4.2, 20))
   .then(_=> res());
  });
}
\
`,
	code2: `\
function pickPos(x){
  return new Promise( (res) => {
   servo0.move(4, x)
   .then(_=> servo2.move(2.4, 2*x))
   .then(_=> servo1.move(4.2, x/2))
   .then(_=> res());
  });
}
\
`,
	code3: `\
function pickPos(x){
  return new Promise((res) => {
   Promise.all(
    [
    servo0.move(4, x),
    servo2.move(2.4, 2*x),
    servo1.move(4.2, x/2)
    ]
   ).then(_=> res());
  });
}
\
`,
	code4: `\
function s123(a,b){
  return new Promise((res) => {
   Promise.all(
    [
    servo0.move(a[0], b[0]),
    servo2.move(a[1], b[1]),
    servo1.move(a[2], b[2])
    ]
   ).then(_=> res());
  });
}
\
`,
	code5: `\
calibrate()
  .then(_=> {
    a=[4, 2.4, 4.2]; b=[20, 40, 10];
    s012(a,b);
  })
  .then(_=> calibrate());
\
`,
	txt: `
<p>of course you can call functions from within functions</p>
<p>since you might have recurrent movements to perform,</p>
<p>you might want to collect the relevant commands in a dedicated function</p>
<p>take the pick and place positions as cases in point</p>
<p>resolve such functions after all it's sub-Promises have each resolved</p>

<br>
<pre onclick="clipboard(event,['_04','copycode','1'])"><code class="language-javascript">\
function pickPos(){
  return new Promise( (res) => {
   servo0.move(4, 20)
   .then(_=> servo2.move(2.4, 40))
   .then(_=> servo1.move(4.2, 10))
   .then(_=> res()); //resolves pickPos()
  });
}
\</code></pre>

<br>
<p>but instead of hard coding values you could use function arguments</p>
<p>here, step duration appears to be a candidate for parametrisation</p>
<p>now we could call pickPos(20) or even pickPos(100)</p>
<p>with differing values x the proportional step duration stays invariant</p>
<p>note: since x/2 must suffice >= 10 we can not chose any x less than 20</p>
<br>

<pre onclick="clipboard(event,['_04','copycode','2'])"><code class="language-javascript">\
function pickPos(x){
  return new Promise( (res) => {
   servo0.move(4, x)
   .then(_=> servo2.move(2.4, 2*x))
   .then(_=> servo1.move(4.2, x/2))
   .then(_=> res());
  }); //11.55s
}
\</code></pre>

<br>
<p>one way to increase effiency is to do multiple tasks at the same time</p>
<p>in certain situations multiple servos could operate simultaneously</p>
<p>you can then take advantage of JavaScript's native concurrency</p>
<p>all commands of your function can then be executed in parallel</p>
<p>the pattern for doing so is shown below</p>
<p>this code gets servos to reach final destination by a good third faster</p>
<p></p>
<br>

<pre onclick="clipboard(event,['_04','copycode','3'])"><code class="language-javascript">\
function pickPos(x){
  return new Promise((res) => {
   Promise.all(
    [
    servo0.move(4, x),
    servo2.move(2.4, 2*x),
    servo1.move(4.2, x/2)
    ]
   ).then(_=> res());
  });
} //7.75s -33%
\</code></pre>

<br>
<p>in an attempt to abstract patterns of motion you could do one better yet</p>
<p>assume you have recurrent parallel motions of servos 0,1 and 2</p>
<p>you could simply pass arrays as arguments to allow for greater flexibility</p>
<p>each array holds numeric values for position and duration respectively</p>
<br>

<pre onclick="clipboard(event,['_04','copycode','4'])"><code class="language-javascript">\
function s012(a,b){
  return new Promise((res) => {
   Promise.all(
    [
    servo0.move(a[0], b[0]),
    servo2.move(a[1], b[1]),
    servo1.move(a[2], b[2])
    ]
   ).then(_=> res());
  });
}
\</code></pre>

<br>
<p>and here is an example of how you might want to use that</p>
<br>
<pre onclick="clipboard(event,['_04','copycode','5'])"><code class="language-javascript">\
calibrate()
  .then(_=> {
    a=[4, 2.4, 4.2]; b=[20, 40, 10];
    s012(a,b);
  })
  .then(_=> calibrate());
\</code></pre>
`,
	copycode: function(prop){return this['code'+prop]}
};