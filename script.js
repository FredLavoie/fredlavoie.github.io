$(document).ready(function() {

  $('#project-content').css({'display': 'none'});

  // toggle 'now content' show/hide
  $('#now-button').on('click', function () {
    $('#project-content').slideUp(400);
    $('#now-content').slideToggle(400);
    // $('#project-content').css({'display': 'none'});
  });

    // toggle 'project content' show/hide
    $('#project-button').on('click', function () {
      $('#now-content').slideUp(400);
      $('#project-content').slideToggle(400);
      // $('#now-content').css({'display': 'none'});
    });

});
