var cardsObj3 = {};

cardsObj3._01 = {
	id: '01',
	swap: [false,false],
	tabs: ["DEMO","PLANS"],
	titles: [["robot in action >>>","videos/video.html?src=demo.mp4"],
			 ["PDF plans >>>","https://github.com/beweonline/moesspruino/tree/main/plans"]],
	hideTitles: true,
	txtTitle: 'blueprints',
	txt: `<p class="flow-text">
moessARM is an effort to construct a model of a robotic arm with pick'n'place functionality.
4mm thick A3 sized birch plywood is the stock material used in the plans
provided. 2 x 2cm beech cubes accelerate buildup. to reduce friction the 
arm sits on a rotary bearing with flanges mounted to the base. screw eyes
and M4 bolts make for plain bearings, beech spatulae for rockers.
bamboo skewers as couplers are held in place by rubber collars.
crimp-on ring terminals normally used on electric cables plug on skewers
instead and are fastened on spatulae with nuts and bolts.
<br>
<br>
there're three sets of duplex
<a class="blue-grey-text text-lighten-5" target="_blank" 
href="https://github.com/beweonline/moesspruino/tree/main/plans">plans</a>
at full scale to be printed out on A3 paper.
so work may be split among members in teams of two to four.
</p>`
};

cardsObj3._02 = {
	id: '02',
	swap: [false,false,false],
	tabs: ["BASE","ARM 1","ARM 2"],
	titles: [["base assembly >>>","videos/video.html?src=base.mp4"],
			 ["turntable 1 >>>","videos/turntable.html?src=arm1.mp4"],
			 ["turntable 2 >>>","videos/turntable.html?src=arm2.mp4"]],
	hideTitles: true,
	txtTitle: 'construction support videos',
	txt: `<p class="flow-text">
to help with reading the schematic diagrams
watch a video loop of the base assembly or
scrub through turntable animations of the second and third stage
of the moessARM virtual prototype.
study the upper and lower limbs of an articulated pick'n'place robotic arm
and their base support.
</p>`
};



cardsObj3._03 = {
	id: '03',
	swap: [false,false,false],
	tabs: ["gripper", "four-bar","tolerance"],
	titles: [["grip orientation >>>","videos/video.html?src=linkage1.mp4"],
			 ["rocker-coupler >>>","videos/video.html?src=linkage2.mp4"],
			 ["freedom >>>","videos/video.html?src=linkage3.mp4"]],
	hideTitles: true,
	txtTitle: 'engineering with four-bars',
	txt: `<p class="flow-text">
the mechanics of the arm is describable by a set of planar quadrilateral linkages.
a common structural base will support one or two pivots to allow a joint to rotate or swing.
here the pivot is either a servo's pinion where the horn connects or an M4 bolt or
even a small wooden rod that work as makeshift rotational axes.
if a bar is limited in it's rotation it's called a <span class="italic">rocker</span>.
through the connection by a <span class="italic">coupler</span>
the swinging motion of a motor driven rocker
is transfered to another that carries load and acts as a lever.
<br>
<br>
one may ponder optimum dimensions of any four-bar linkage but ultimately
there is a rather generous degree of tolerance to electro-mechanical design
and many a variation in the length of rocker and coupler can be compensated by
coding appropriate servo actions. the convenient application of crimp-on ring terminals
to establish joints in this project invites to take license with linkage lengths.
<br>
<br>
However, this does not apply at all in the linkage that keeps the gripper parallel
to the floor. Here rockers and couplers need to form two perfect parallelograms.
</p>`
};
