const _textAvatar = ($elems, options = {}) => {
	const ONE_WORD_WIDTH = 26
	const ASIA_CHAR_REG = /[\u4E00-\u9FA5\uF900-\uFA2D]/ig //check Chinese, Japenese & Korean character

	const $targets = $elems.length ? $elems : [$elems]
	$targets.forEach($elem => {
		if ((!$elem.dataset || !$elem.dataset.name) && !options.name)
			return

		const defaultOptions = {
			name: (options.name || $elem.dataset.name.trim()),
			width: parseFloat(options.width || $elem.offsetWidth)
		}

		const name = defaultOptions.name
			.replace(/ +/g, ' ')  // Replace multi space to one space, prevent typing error
			.trim()
			.toUpperCase()
			.split(' ')

		const isTwoWord = !ASIA_CHAR_REG.test(defaultOptions.name) && name.length > 1 && defaultOptions.width > ONE_WORD_WIDTH
		const avatarContent = isTwoWord ? `${name[0][0]}${name[name.length - 1][0]}` : name[0][0]

		$elem.innerHTML = `<abbr title="${defaultOptions.name}">${avatarContent}</abbr>`
		$elem.style.width = `${defaultOptions.width}px`
		$elem.style.height = `${defaultOptions.width}px`
		$elem.style.fontSize = `${defaultOptions.width * 0.4}px`
	})
}

document.addEventListener('DOMContentLoaded', () => _textAvatar(document.querySelectorAll('[data-toggle="textavatar"]')))

export default _textAvatar
