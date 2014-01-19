// Text Avatar v0.0.1, 2013/10/14, Knovour Zheng
(function ($) {
	'use strict';

	var _oneWord = 26; //26px
	$.fn.textAvatar = function(options) {
		var _reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/i; //check Chinese, Japenese & Korean character

		var _contentLength = this.length;
		for(var i = 0; i < _contentLength; i++) {
			// tAvatar => textAvatar
			var _tAvatarCanvas = this.eq(i);
			var _defaultOptions = {
				name: (!_tAvatarCanvas.data('name')) ? '' : _tAvatarCanvas.data('name').trim(),
				width: _tAvatarCanvas.width(),
			};

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

			_tAvatar = (_defaultOptions.width <= _oneWord) ? _tAvatar[0] : _tAvatar;

			_tAvatarCanvas.css({height: _defaultOptions.width});
			_tAvatarCanvas[0].width = _defaultOptions.width;
			_tAvatarCanvas[0].height = _defaultOptions.width;
			var _tAvatarContext = _tAvatarCanvas[0].getContext('2d');
			var _x = _tAvatarCanvas[0].width / 2;
      var _y = _tAvatarCanvas[0].height / 2;


      _tAvatarContext.fillStyle="whitesmoke";
      _tAvatarContext.fillRect(0, 0, _tAvatarCanvas[0].width, _tAvatarCanvas[0].width);
      _tAvatarContext.font = _getFontSize(_tAvatarCanvas[0].width) + 'px Arial';
      _tAvatarContext.textAlign = 'center';
      _tAvatarContext.textBaseline = 'middle';
      _tAvatarContext.fillStyle = 'dimgrey';
      _tAvatarContext.fillText(_tAvatar, _x, _y);
		}
	};

	function _getFontSize(width) {return (width * 0.52);}
})(jQuery);
