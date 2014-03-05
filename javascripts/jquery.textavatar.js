// https://github.com/Knovour/jquery-textavatar


(function ($) {
	'use strict';

	var _ONE_WORD = 26; //26px
	$.fn.textAvatar = function(options) {
		var _abbrTemplate = '<abbr title="_name_">_text_avatar_</abbr>';
		var _reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/i; //check Chinese, Japenese & Korean character

		var _contentLength = this.length;
		for(var i = 0; i < _contentLength; i++) {
			// tAvatar => textAvatar
			var _tAvatarContent = this.eq(i);
			var _defaultOptions = {
				name: (!_tAvatarContent.data('name')) ? '' : _tAvatarContent.data('name').trim(),
				width: _tAvatarContent.width(),
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

			_tAvatar = (_defaultOptions.width <= _ONE_WORD) ? _tAvatar[0] : _tAvatar;

			var _newAbbr = _abbrTemplate
				.replace(/_name_/i, _defaultOptions.name)
				.replace(/_text_avatar_/i, _tAvatar);

			var _avatarWidth = _defaultOptions.width;
			_tAvatarContent.html(_newAbbr).css({
				width: _avatarWidth,
				height: _avatarWidth,
				'font-size': _getFontSize(_avatarWidth)
			});
		}
	};

	function _getFontSize(width) {return (width * 0.4 + 'px');}
})(jQuery);

$(function() {
	$('[data-toggle="textavatar"]').textAvatar();
});
