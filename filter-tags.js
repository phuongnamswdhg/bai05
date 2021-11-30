(function() {
  var $imgs = $('#gallery img');
  var $buttons = $('#buttons');
  var tagged = {};

  $imgs.each(function(){
var img = this;
var tags = $(this).data('tags');

if (tags) {
    tags.split(',').forEach(function(TagName) {
    if (taggerd[TagName] == null) {
        tagged[tagName] = [];
    }
    tagged[tagName].push(img);
    });
  }
});

$('<button/>',{
    text: 'show All',
    class: 'active',
    click: function() {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
        $imgs.show();
    }
}).appendTo($buttons);

$.each(tagged, funcyion(tagName){
    $('button/>',{
        text: tagName + '(' + taggeed[tagName].length +')',
        click: function(){
            $(this)
                .addClass('active');
                .siblings()
                .removeClass('active');
            $imgs
                .hide()
                .filter(taggd[tagName])
                .show();
        }
    }).appendTo($buttons);
    });

});