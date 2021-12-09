var text = $('.text-overflow'),
   btn = $('.btn-overflow'),
   hidebtn = $('.btn-overflow-hide'),
   btna = $('.appended').find('.btn-overflow'),
   h = text[0].scrollHeight;

if (h > 120) {
   btn.addClass('less');
   btn.css('display', 'block');
}

btn.click(function (e) {
   e.stopPropagation();
   $(this).parent().clone(true).addClass('appended').appendTo($(this).parent());



});

hidebtn.click(function (e) {
   e.stopPropagation();
   $(this).parent().fadeOut().remove();



});



