# ember-favourite-heart ❤️

This is Ember cli addon which provide twitter like favourite heart component.
- <a href="http://anilmaurya.github.io/ember-favourite-heart/" target="_blank"> Demo </a>

## Installation

* `ember install ember-favourite-heart`

## Usage
 This addon provides an `ember-inplace-edit` component.

```handlebars
{{ember-favourite-heart liked=model.liked likeCount=model.likes_count action="toggleLike"}}
  
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
</table>


### Credits

http://www.9lessons.info/2015/11/twitter-heart-button-css3-animation.html
