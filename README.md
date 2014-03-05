jQuery Text Avatar
=================
Let user name become an simple text avatar
#### [Site]

## Usage
Load **textavatar.css** or just combine it in your css file.
jQuery is needed.

#### Normal use
```html
<div class='textavatar' style='width: 140px;' data-name='NAME INSIDE'></div>
<script src="jquery.textavatar.js"></script>
```
```javascript
$('.textavatar').textAvatar();
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
});
```

## The MIT License (MIT)

Copyright (c) 2013 Knovour Zheng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



> Written with [StackEdit](https://stackedit.io/).

[Site]: http://knovour.github.io/jquery-textavatar
