describe('dinjector', function () {
	it('should define modules', function () {
		var msg = 'your module is loaded';

		define('myfirstmodule', function () {
			return msg;
		});

		expect(require('myfirstmodule')).toBe('your module is loaded');
	});

	it('should cache modules', function () {
		var counter = 0;

		define('myfirstmodule', function () {
			counter++;

			return counter;
		});

		expect(require('myfirstmodule')).toBe(1);
		expect(require('myfirstmodule')).toBe(1);
	});

	it('should require require', function () {
		expect(require('require')).toBe(require);
	});
});