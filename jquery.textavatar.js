// https://github.com/Knovour/jquery-textavatar

;($ => {
	const ONE_WORD_WIDTH = 26
	const ASIA_CHAR_REG = /[\u4E00-\u9FA5\uF900-\uFA2D]/ig //check Chinese, Japenese & Korean character

	$.fn.textAvatar = function (options = {}) {
		$(this).each(function () {
			if (!$(this).data('name') && !options.name)
				return

			const defaultOptions = {
				name: (options.name || $(this).data('name')).trim(),
				width: parseFloat(options.width || $(this).width())
			}

			const name = defaultOptions.name
				.replace(/ +/g, ' ')  // Replace multi space to one space, prevent typing error
				.trim()
				.toUpperCase()
				.split(' ')

			const isTwoWord = !ASIA_CHAR_REG.test(defaultOptions.name) && name.length > 1 && defaultOptions.width > ONE_WORD_WIDTH
			const avatarContent = isTwoWord ? `${name[0][0]}${name[name.length - 1][0]}` : name[0][0]

			$(this)
				.html(`<abbr title="${defaultOptions.name}">${avatarContent}</abbr>`)
				.css({
					width: defaultOptions.width,
					height: defaultOptions.width,
					'font-size': `${defaultOptions.width * 0.4}px`
				})
		})
	}
})(jQuery)

$(() => $('[data-toggle="textavatar"]').textAvatar())
