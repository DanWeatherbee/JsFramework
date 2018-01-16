var app = new CreateAppClass(CreateDB);
var gameDW = '<a class="btn btn-outline-default nav-link blue-gradient medium-txt black-txt-shadow text-center" id="game-play-btn2" onClick="playGame()">Click to Replay - Hint: Use your arrow keys to play.</a><iframe class="ipad-big animated zoomInDown center-block" width="800" height="800" src="app-p3-master/index.html" scrolling="no" frameBorder="0"></iframe>';
app.renderMain = function() {
    var self = this;
    $('#root').append(self.siteContentObj.app.main[0].main);
};

app.renderMainJson = function(db) {
    var self = this;
    // This is where we decide wether to load edited or default databases.
    self.db = 'ContentDefault.json';
    fetch(self.db)
        .then(
            function(response) {
                if (response.status !== 200) {

                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    playGame()
                    $('.edit-btns-edit-fixed').addClass('animated hinge');
                    alert('There is no db fille to load. Create one and download it. Place it in the src folder.');


                }

                // Examine the text in the response
                response.json().then(function(data) {
                    self.siteContentObj = data;
                    self.renderMain();
                    $('.fa-save').remove();
                    $('.fa-edit').remove();
                    $('.fa-refresh').remove();
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
};

var launchAdmin = function() {

    var answer = prompt("Do you wish to load admin?", "yes");

    if (answer === 'yes') {
        app.renderMain();
    } else {
        app.renderMainJson();
    };
};


/*
                                                                              ADMIN ON
                                                                         ++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
| ======================|           launch page virtual with admin.
*/
launchAdmin();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++
*/

/*
                                                                              ADMIN OFF
                                                                         ++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 |======================|           launch page from database.
*/
// app.renderMainJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++


                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/