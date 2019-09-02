$(document).ready(function() {

  $('#now-button').css({'background-color': '#4a148c', 'color': '#f4edf5'});
  $('#project-content').css({'display': 'none'});

  // toggle 'now content' show/hide
  $('#now-button').on('click', function () {
    $('#project-content').slideUp(400);
    $('#now-content').slideToggle(400);
    $('#now-button').css({'background-color': '#4a148c', 'color': '#f4edf5'});
    $('#project-button').css({'background-color': '', 'color': ''});
  });

  // toggle 'project content' show/hide
  $('#project-button').on('click', function () {
    $('#now-content').slideUp(400);
    $('#project-content').slideToggle(400);
    $('#now-button').css({'background-color': '', 'color': ''});
    $('#project-button').css({'background-color': '#4a148c', 'color': '#f4edf5'});
  });



});
