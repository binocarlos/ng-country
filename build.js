// a script to turn the big objects into small ones
var countries = require('country-slice');
var through = require('through');

var arr = [];

var map = through(function(c){

	arr.push({
		name:c.name,
		region:c.region
	})
	
})

var stream = countries.stream();

map.on('end', function(){
	console.log(JSON.stringify(arr));
})

stream.pipe(map);


//fs.writeFileSync(__dirname + '/countries.json', , 'utf8');