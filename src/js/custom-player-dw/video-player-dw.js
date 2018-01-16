/*
Dan Weatherbees Custom Player
                Jan 11 2018
Create div in your page and giv it the id |  #player-dw-root  | then add a button
with the attribute onClick="loadPlayerDw(videos/mp4.mp4)".

e.g. template;

<div id="player-dw-root"></div>
<a class="btn btn-success" onClick="loadPlayerDw()">Add Video Player</a>
 */


var loadPlayerDw = function() {
    $('#root').html(
        '<h1 class="loading text-center animated zoomIn infinite big-txt">Player is loading <i class="fa fa-spinner" aria-hidden="true"></i></h1>'
    );
    renderPlayer();
};

var renderPlayer = function() {

    $('#root').append(
        '<video class="dw-player ipad center-block" height="auto" width="1000" autoplay="true">' +
        '<source class="vid-src" src="videos/worldplay.mp4" type="video/mp4" />' +
        '</video>'
    );
    $('.loading').remove();
    $('#showcase-container').fadeOut();
    setTimeout(function() {
        $('#showcase-container').fadeIn();
        $('.dw-player').addClass('animated hinge');
        $('#root').append('<button type="button" class="nav-link xl-txt" style="position:absolute;left:40%;top:10%;" onClick=(location.reload())>Refresh</button>');
    }, 39000);

};
var playGame = function() {
    $('#game-play-btn').hide();
    var gameDW = '<a class="btn btn-outline-default nav-link blue-gradient medium-txt black-txt-shadow text-center" id="game-play-btn" onClick="playGame()">Click to Replay - Hint: Use your arrow keys to play.</a><iframe class="ipad-big animated zoomInDown center-block" width="800" height="900" src="app-p3-master/index.html" scrolling="no" frameBorder="0"></iframe>';

    $('nav').addClass('animated hinge');
    $('#game-header').addClass('animated hinge');
    $('#edit-content-page').addClass('animated hinge');
    setTimeout(function() {
        $('#root').html('');
        $('#root').append(
            gameDW
        );
    }, 2000);
};
