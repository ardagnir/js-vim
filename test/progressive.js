//Test to ensure that learn vim progressively is an effective tutorial for this implementation:
//http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/

var vim = require('../index');

var expect = function(assertion) {

	return {
		equal: function(obj) {
			if(assertion == obj) return true;
			throw "expected " + assertion + " to equal " + obj;
		}
	}
};

describe('survive', function(){

	beforeEach(function() {
		var doc = new vim.Doc();
		vim.curDoc = doc;
	})

	it('i enters insert mode', function() {
			vim.exec('i');
			expect(vim.modeName).equal('insert');
	});

	it('x deletes current character', function() {
		vim.new();
		vim.exec('esc');
		vim.exec('i');
		vim.exec('h');
		var text = vim.curDoc.text();
		console.log(text);
		console.log(vim.curDoc._lines);
		expect(vim.curDoc.text().indexOf('h')).equal(0);
		vim.exec('esc');
		console.log(vim.curDoc._lines);
		vim.exec('x');
		//expect(vim.curDoc.text().indexOf('h')).equal(-1);
	});

	//wq

	it('dd delete and copy current line', function() {
		vim.new();
		vim.exec('esc');
		vim.exec('i');
		vim.exec('hello');
		vim.exec('\n');
		vim.exec('there');
		vim.exec('esc');
		vim.exec('dd');
		expect(vim.text()).equal('hello');
		//console.log(vim.text());
	});
});