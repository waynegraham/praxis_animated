$(document).ready(function() {
  $('.dance').hover(
    function() {
      $(this).attr('src', $(this).data('danceparty'));
    },
    function() {
      $(this).attr('src', $(this).data('static'));
    }
  );
});
