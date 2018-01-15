$('window').ready(function() {
    // app.editHeaderText();
    app.editMain();
    $('#root').prepend('<a href="#root" id="edit-btn-link"><i class="fa fa-edit edit-btns-edit-fixed" id="edit-content-page" onclick="editContentPage()"> Customize Website</i></a>');
    $('#root').prepend('<i class="fa fa-save edit-btns-save-fixed" id="save-content-page" onclick="saveContentPage()"> Create Database</i>');
    $('#root').prepend('<i class="fa fa-refresh edit-btns-default-fixed" id="default-content-page" onclick="clearContentPage()"> Default</i>');
    editContentPage();

    $('.edit-btns').hide();
    $('.fa-long-arrow-down').fadeIn();
    $('#edit-content-page').fadeIn();
});

var editContentPage = function() {
    $('.fa').fadeIn();
    $('#edit-content-page').hide();
};

var saveContentPage = function() {

    // Download databases. ===============================================
    var dbContentEdited = localStorage.getItem('ContentEdited');
    var dbContentDefault = localStorage.getItem('ContentDefault');
    // Download edited database.
    var defaultContentDB = new File([dbContentEdited], "ContentEdited.json");
    //saveAs(editedDB);
    // Download default database.
    var editedContentDB = new File([dbContentDefault], "ContentDefault.json");

    // Save to downloads folder.
    saveAs(defaultContentDB);
    saveAs(editedContentDB);
    $('#save-content-page').hide();
    $('#edit-content-page').fadeIn();
};

// Reset to default.
var clearContentPage = function() {
    localStorage.clear();
    location.reload();
};
// ==================================================================
var wowOn = function() {
    new WOW().init();
    console.log('wow initiated.');
};
var appendScore = function() {
    var bonus = localStorage.getItem('bonus', bonus);
    var completed = localStorage.getItem('completed', completed);
    var lastplayer = localStorage.getItem('lastplayer', lastplayer);
    var lastplayerscore = localStorage.getItem('lastplayerscore', lastplayerscore);
    var men = localStorage.getItem('men', men);
    var name = localStorage.getItem('name', name);
    var score = localStorage.getItem('score', score);

    $('.navbar').append(
        '<span class="nav-link white-txt black-txt-shadow">Frogger High Score | ' +
        lastplayer +
        ' | ' +
        lastplayerscore +
        ' | Your High Score | ' +
        name +
        ' | Bonus |' +
        bonus +
        ' | Completed |' +
        completed +
        ' | Men |' +
        men +
        ' | Score |' +
        score +
        '</span>'
    );
};
$(document).ready(function() {
    setTimeout(wowOn, 300);
    setTimeout(appendScore, 3000);
});