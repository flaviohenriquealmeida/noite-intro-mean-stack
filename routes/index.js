
/*
 * GET home page.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workshop-express');
var Schema = mongoose.Schema;

var contatoSchema = new Schema({

		nome: String,
		email: String
});

var Contato = mongoose.model('Contato', contatoSchema);

exports.lista = function(req, res){
	Contato.find({}, function(error, contatos) {
		if(error) next(error);
		res.json(contatos);
	});
};

exports.grava = function(req, res) {
	var contato = new Contato(req.body);
	contato.save(function(error, contato) {
		if(error) next(error);

		res.send(200);
	});
};

exports.remove = function(req, res) {
	var id = req.params.id;
	Contato.findOneAndRemove({_id: id}, function(error) {
		if(error) next(error);
		res.send(200);
	});
}