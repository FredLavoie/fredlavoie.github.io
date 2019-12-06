
let nowState = 1;
let goalsState = 0;
let projectState = 0;

$(document).ready(function() {

  $('#now-button').css({'background-color': '#4a148c', 'color': '#f4edf5'});
  $('#project-content').css({'display': 'none'});
  $('#goals-content').css({'display': 'none'});

  // toggle 'now content' show/hide
  $('#now-button').on('click', function () {
    goalsState = 0;
    projectState = 0;
    if(nowState === 0) {
      nowState = 1;
      $('#now-content').fadeIn(250);
      $('#goals-content').fadeOut(5);
      $('#project-content').fadeOut(5);
    }

    $('#now-button').css({'background-color': '#4a148c', 'color': '#f4edf5'});
    $('#goals-button').css({'background-color': '', 'color': ''});
    $('#project-button').css({'background-color': '', 'color': ''});
  });

  // toggle 'project content' show/hide
  $('#project-button').on('click', function () {
    nowState = 0;
    goalsState = 0;
    if(projectState === 0) {
      projectState = 1;
      $('#now-content').fadeOut(5);
      $('#goals-content').fadeOut(5);
      $('#project-content').fadeIn(250);
    }

    $('#now-button').css({'background-color': '', 'color': ''});
    $('#goals-button').css({'background-color': '', 'color': ''});
    $('#project-button').css({'background-color': '#4a148c', 'color': '#f4edf5'});
  });

   // toggle 'goals content' show/hide
   $('#goals-button').on('click', function () {
    nowState = 0;
    projectState = 0;
    if(goalsState === 0) {
      goalsState = 1;
      $('#now-content').fadeOut(5);
      $('#goals-content').fadeIn(250);
      $('#project-content').fadeOut(5);
    }

    $('#now-button').css({'background-color': '', 'color': ''});
    $('#goals-button').css({'background-color': '#4a148c', 'color': '#f4edf5'});
    $('#project-button').css({'background-color': '', 'color': ''});
  });


});
