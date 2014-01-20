//jQuery Text Avatar v0.0.5, 2014/1/20, Knovour Zheng, MIT License
(function ($) {
	'use strict';

	var _ONE_WORD_ONLY = 26; //26px
	var _reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/i; //check Chinese, Japenese & Korean character
	$.fn.textAvatar = function(options) {
		var _contentLength = this.length;
		for(var i = 0; i < _contentLength; i++) {
			// tAvatar => textAvatar
			var _tAvatarCanvas = this.eq(i);
			var _defaultOptions = _generateOptions(_tAvatarCanvas);
			$.extend(_defaultOptions, options);

			var _tAvatar = '';
			if(!_reg.test(_defaultOptions.name)) {
				//(/ +/g, ' '): replace multi space to one space, prevent typing error
				var text = _defaultOptions.name.replace(/ +/g, ' ').split(' ');
				var length = (text.length > 2) ? 2 : text.length;
				for(var j = 0; j < length; j++) {
					var temp = text[j].trim()[0];
					_tAvatar += (temp !== undefined) ? temp.toUpperCase() : '';
				}
			}

			else
				_tAvatar = _defaultOptions.name[0];

			_tAvatar = (_defaultOptions.width <= _ONE_WORD_ONLY) ? _tAvatar[0] : _tAvatar;

			var __data = {
				options: _defaultOptions,
				target: _tAvatarCanvas,
				letters: _tAvatar
			};

			__createAvatar.defaultStyle(__data);
		}
	};

	function _generateOptions($canvas) {
		return {
			name: $canvas.data('name') ? $canvas.data('name').trim(): '',
			width: $canvas.width(),
			bgColor: $canvas.data('bgcolor') ? $canvas.data('bgcolor').trim() : 'whitesmoke',
			color: $canvas.data('color') ? $canvas.data('color').trim() : 'dimgrey',
			font: $canvas.data('font') ? $canvas.data('font').trim() : 'Arial'
		};
	}

	var __createAvatar = {
		defaultStyle: function(data) {
			var options = data.options;

			this.lockCanvasSize(data.target, options.width);

			var _context = data.target[0].getContext('2d');
			this.drawBackgroundColor(_context, options.bgColor, options.width);
			this.drawLetters(
				_context,
				this.generateFont(options.width, options.font),
				(data.target[0].width / 2),
				(data.target[0].height / 2),
				data.letters,
				options.color
			);
		},
		trippleChars: function(data) {
			// A\/  (char X <= cross two chars)
			// B/\
			// fontsize: A, B (* 0.26), X (*0.52)
		},
		quadraChars: function(data) {
			// LO
			// VE
			// fontsize: ALL * 0.26
		},
		lockCanvasSize: function($canvas, width) {
			$canvas.css({height: width});
			$canvas[0].width = width;
			$canvas[0].height = width;
		},
		drawBackgroundColor: function(context, bgColor, x) {
			context.fillStyle = bgColor;
      context.fillRect(0, 0, x, x);
		},
		drawLetters: function(context, fontData, x, y, letter, color) {
			context.font = fontData;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = color;
      context.fillText(letter, x, y);
		},
		generateFont: function(width, fontFamily) {return (width * 0.52 + 'px ' + fontFamily);}
	};

	$(document).ready(function() {$('[data-toggle="textavatar"]').textAvatar();});
})(jQuery);
