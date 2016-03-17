grains.forEach(function (item) {
    var $li = $('<li>');
    var $ul = $('ul');
    var $p = $('<p>');
    var $img = $('<img>');
    var $h2 = $('<h2>');

      $ul.append($li);
      $img.attr('src', 'images/' + item.img);
      $li.append($img);
      $h2.html(item.name);
      $li.append($h2);
      $p.html(item.desc);
      $li.append($p);
      });
