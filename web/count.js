(function () {
  var jsons = [];
  var update = function () {
    var count = $('#msg').val().length + $('#src').val().length;
    $('#count').text(count);
    $('#json').text('{"msg": "'+ $('#msg').val() + '", "src": "' + $('#src').val() + '"}');
  };

  $('#msg').on('keyup', function (e) {
    update();
  });
  $('#src').on('keyup', function (e) {
    update();
  });

  $('form').submit(function (e) {
    jsons.push($('#json').text());
    $('#jsons').text(jsons.join(',\n'));
    $('#msg').val('').focus();
    $('#src').val('');
    return false;
  });
})();
