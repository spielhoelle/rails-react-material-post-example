import React from 'react';
import ReactDOM from 'react-dom';

import PostBox from './PostBox.js.jsx';

import NavigationBar from 'NavigationBar.js'
import Footer from 'Footer.js'
import Slider from 'Slider.js'


$(document).on("turbolinks:load", function() {
  var $content = $("#content");
  if ($content.length > 0) {
    ReactDOM.render(
      <PostBox url="posts.json" />,
      document.getElementById('content')
    );
  }
})

