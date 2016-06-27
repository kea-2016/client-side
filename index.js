var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
console.log(endpoint)

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(data.body) // FYI: data.body is a string

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space'})
})
