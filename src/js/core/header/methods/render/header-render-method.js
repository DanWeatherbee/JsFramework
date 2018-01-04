var app = new CreateAppClass(CreateDB);

app.renderHeader = function() {
    var self = this;
    $('#root').append(self.siteContentObj.app.header[0].header);
};

app.renderHeaderJson = function(db) {
    var self = this;
    // This is where we decide wether to load edited or default databases.
    self.db = 'ContentDefault.json';
    fetch(self.db)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    alert('There is no db fille to load. Create one and download it. Place it in the src folder.');
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    self.siteContentObj = data;
                    self.renderHeader();
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
        app.renderHeader();
    } else {
        app.renderHeaderJson();
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
// app.renderHeaderJson();
/*
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                                +++++++++++++++++++++++++++++++++++++++++
                                                                         ++++++++++++++++++


                                                                                   CREATED
                                                                         BY DAN WEATHERBEE
                                                                                   DEC    2017
*/