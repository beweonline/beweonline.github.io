var cardsObj6 = {};

cardsObj6._01 = {
	id: '01',
	swap: [true, true],
	tabs: ["Tab1", "Tab2"],
	titles: [["Link1","https://"],
		["Link2", "https://"]],
	txtTitle: 'Title',	
	code1: `\

`,
	txt: `
<p></p>
<pre onclick="clipboard(event,['_01','copycode','1'])"><code class="language-javascript">\

\</code></pre>

<p></p>
`,
	copycode: function(prop){return this['code'+prop]}
};

cardsObj6._02 = {
	id: '02',
	swap: [false],
	tabs: ["Tab1"],
	titles: [["Link1","https://"]],
	txtTitle: 'Title',
	txt: ``
};
