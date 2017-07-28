import React from 'react';
import ReactDOM from 'react-dom';
import { Slider, Slide } from 'react-materialize';
var SliderBox = React.createClass({
  render: function() {
    return (
      <Slider interval="1000">
        <Slide
          src="http://lorempixel.com/580/250/nature/1"
          title="This is our big Tagline!">
          Here's our small slogan.
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/2"
          title="Left aligned Caption"
          placement="left">
          Here's our small slogan.
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/3"
          title="Right aligned Caption"
          placement="right">
          Here's our small slogan.
        </Slide>
      </Slider>
    )
    }
  })
  $(document).on("turbolinks:load", function() {
    ReactDOM.render(
      <SliderBox />,
      document.getElementById('slider')
    );
})

