const cardString = `
<div id="card" class="card blue-grey lighten-2">
	<div class="card-image" >
		<img id="img" class="activator" src="">
		<a class="btn-floating btn-large halfway-fab waves-effect waves-light blue lighten-2"
			onclick="gif(this)"><i class="material-icons">play_arrow</i></a>
	</div>
	<div class="card-tabs">
		<div class="row noMarginBottom">
			<ul class="cardTab col s10 tabs tabs-fixed-width tabs-transparent noOverflow">
				<li class="tab"><a href="">TAB</a></li>
			</ul>
			<div class="col s2"></div>
		</div>
	<div class="card-content">
		<div class="row noMarginBottom">
			<span class="col s12 m6 card-title">TITLE</span>
		</div>
	</div>
	</div>
	<div class="card-reveal blue-grey lighten-2">
		<span class="card-title grey-text text-darken-4">TITLE<i class="material-icons right">close</i></span>
		<p>TXT</p>
	</div>
</div>
`