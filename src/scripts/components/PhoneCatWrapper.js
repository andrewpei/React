/** @jsx React.DOM */

var PhoneCatWrapper = React.createClass({
  render: function() {
    return (
      <div class="row">
        <div class="col-md-2">
          Search:
          <input type="text"/>
          Sort by:
          <select >
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </div>
        <div class="col-md-10">
          <ul class="phones">
          <li class="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" class="thumb"><img src="/images/phones/motorola-xoom-with-wi-fi.0.jpg" /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>
          <li class="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" class="thumb"><img src="/images/phones/motorola-xoom-with-wi-fi.0.jpg" /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>
          <li class="thumbnail phone-listing">
            <a href="#/phones/motorola-xoom-with-wi-fi" class="thumb"><img src="/images/phones/motorola-xoom-with-wi-fi.0.jpg" /></a>
            <a href="#/phones/motorola-xoom-with-wi-fi" >Motorola XOOM™ with Wi-Fi</a>
            <p>The Next, Next Generation

              Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).
            </p>
          </li>

        </ul>
        </div>
      </div>

    )

  }

});

module.exports = PhoneCatWrapper;
