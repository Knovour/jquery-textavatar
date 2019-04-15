jQuery Text Avatar (include vanillajs version)
=================
Let user name become a simple text avatar
#### [Demo]

## Usage

For older version check [here](https://github.com/Knovour/jquery-textavatar/tree/old)

```bash
npm i jquery.textavatar
```

Load **textavatar.css** or just merge to your css file.

#### jQuery
```html
<div class='textavatar' style='width: 140px;' data-name='NAME INSIDE'></div>
<script src="jquery.textavatar.js"></script>
```
```javascript
$('.textavatar').textAvatar()
```
#### Auto Create
```html
<div class='textavatar' style='width: 140px;' data-name="NAME INSIDE" data-toggle="textavatar"></div>
```


#### Options
There is only **width** and **name** now.
```javascript
$('DIV-NAME').textAvatar({
    width: 120, //no need to type 'px'
    name: NAME HERE
})
```

#### VanillaJS
```html
<div class='textavatar' style='width: 140px;' data-name='NAME INSIDE'></div>
```

For es6 module
```javascript
import textAvatar from 'textavatar.js'

textAvatar(document.querySelector('.textavatar'))
```

For normal usage
```html
<script src="textavatar.iife.js"></script>
```


#### Auto Create
```html
<div class='textavatar' style='width: 140px;' data-name="NAME INSIDE" data-toggle="textavatar"></div>
```


#### Options
There is only **width** and **name** now.
```javascript
textAvatar(document.querySelector('DIV-NAME'), {
    width: 120, //no need to type 'px'
    name: NAME HERE
})
```

## MIT License

[Demo]: http://knovour.github.io/jquery-textavatar
