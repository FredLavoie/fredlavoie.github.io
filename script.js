$(document).ready(function() {

  $('#project-content').css({'display': 'none'});


  // toggle 'now content' show/hide
  $('#now-button').on('click', function () {
    $('#now-content').slideToggle(300);
    $('#project-content').css({'display': 'none'});
  });

    // toggle 'now content' show/hide
    $('#project-button').on('click', function () {
      $('#project-content').slideToggle(300);
      $('#now-content').css({'display': 'none'});
    });

});
