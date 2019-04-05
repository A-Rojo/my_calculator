const later = require('later');

const EventEmitter = require('events');

class Programador extends EventEmitter {

	constructor(config){
		super();
		later.date.localTime();

		config.forEach(({temperatura,hora}) => {

		const sched = later.parse.text ( 'at ${hora}');

		later.setInterval(() =>{
		this.emit('ideal',temperatura);
		}, sched);

	   })
	}

}

exports = module.exports = Programador;
