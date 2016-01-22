# ember-favourite-heart ❤️[![Build Status](https://travis-ci.org/anilmaurya/ember-favourite-heart.svg?branch=master)](https://travis-ci.org/anilmaurya/ember-favourite-heart) [![npm version](https://badge.fury.io/js/ember-favourite-heart.svg)](https://badge.fury.io/js/ember-favourite-heart) [![Codacy Badge](https://api.codacy.com/project/badge/grade/3a2cc5e08fcc4978a4107557737a1754)](https://www.codacy.com/app/anil_2/ember-favourite-heart)

This is Ember cli addon which provide twitter like favourite heart component.
- <a href="http://anilmaurya.github.io/ember-favourite-heart/" target="_blank"> Demo </a>

## Installation

* `ember install ember-favourite-heart`

## Usage
 This addon provides an `ember-inplace-edit` component.

```handlebars
{{ember-favourite-heart liked=model.liked likeCount=model.likes_count likeItem=model action="toggleLike"}}
  
```

### Properties

<table width="100%">
  <tr>
  	<th valign="top" width="165px" align="left">Property</th>
  	<th valign="top" align="left">Description</th>
  </tr>
  <tr>
    <td valign="top"><code>liked</code></td>
    <td valign="top">true/false</td>
  </tr>
  <tr>
    <td valign="top"><code>likeCount</code></td>
    <td valign="top">No. of likes</td>
  </tr>
  <tr>
    <td valign="top"><code>disabled</code></td>
    <td valign="top">Disable like/unlike (default: false)</td>
  </tr>
</table>

### Actions

<table width="100%">
  <tr>
  	<th valign="top" width="165px" align="left">Action</th>
  	<th valign="top" align="left">Description</th>
  </tr>
  <tr>
    <td valign="top"><code>action</code></td>
    <td valign="top">Action to be called after clicking on heart</tr>
  </tr>
  <tr>
    <td valign="top"><code>likeItem</code></td>
    <td valign="top">Optional parameter passed with action</tr>
  </tr>
</table>


### Credits

http://www.9lessons.info/2015/11/twitter-heart-button-css3-animation.html
