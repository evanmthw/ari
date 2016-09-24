'use strict';

var client = require('ari-client');
var util = require('util');

client.connect('http://localhost:8088', 'asterisk', 'asterisk',
    function (err, ari) {
  // Use once to start the application
  ari.once('StasisStart',
      function (event, incoming) {
      console.log(incoming);

    incoming.answer(
      function (err) {

      var playback = ari.Playback();

      // Play demo greeting and register dtmf event listeners
      incoming.play(
        {media: 'sound:demo-congrats'},
        playback,
        function (err, playback) {
        }
      );
      });
    });
  ari.start('answer-playback');
});
