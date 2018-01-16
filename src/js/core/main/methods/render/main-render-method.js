/*
 * ---------------------------------***-----------------------------------|
 *      JsFramework Copywrite Dan Weatherbee 2018   *
 *|=====    DON'T MESS WITH THIS ONE     ======|*
 *                         WEBSITE DEFAULT                         *
 *                          ****    ADMIN    ****                           *
 *                                     ====                                     *
 * -----------------------------------------------------------------------|
 */
// Variables begin ----------------------------------------------------|
var app = new CreateAppClass(CreateDB),
    adminMsg,
    gameDW = '<a class="' +
    'btn btn-outline-default nav-link blue-gradient medium-txt black-txt-shadow text-center"' +
    ' id="game-play-btn2" ' +
    'onClick="playGame()">' +
    'Click to Replay - Hint: Use your arrow keys to play.' +
    '</a>' +
    '<iframe class="' +
    'ipad-big animated zoomInDown center-block' +
    ' width="800" height="800" ' +
    'src="app-p3-master/index.html" scrolling="no" frameBorder="0">' +
    '</iframe>',
    createAdminBtn,
    getJson,
    renderMain;
adminMsg = 'variables loaded.';
alert(adminMsg);
// Variables End ----------------------------------------------------|


renderMain = function(db) {

    adminMsg = 'renderMain loaded.'

    this.db = db;
    console.log(this.db.app.main[0]);
    alert(adminMsg);
   $('#root').append(this.db.app.main[0].main);
};
getJson = function(db) {


    adminMsg = 'getJson loaded.';
    alert(adminMsg);
    /*
     *                 This is where we decide --
     *            load edited or default databases.
     *
     */
    this.db = 'ContentDefault.json';
    fetch(this.db)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    adminMsg = 'There is no db fille to load. Create one and download it. Place it in the src folder.';
                    alert(adminMsg);

                }

                // Examine the text in the response
                response.json().then(function(data) {
                    adminMsg = 'api success.';
                    alert(adminMsg);
                    console.log(data);

                });
            }
        )
        .catch(function(err) {
            adminMsg = 'api failure.';
            alert(adminMsg);
            console.log('Fetch Error :-S', err);
        });
};
//                                       LOAD FROM API           ----------------->








//                                       LOAD FROM LOACALSTORAGE---->







//                                       LAUNCH FRAMEWORK ----------------->

var createAdminBtn = function() {
        adminMsg = 'createAdminBtn loaded.';
        alert(adminMsg);
        $('#root').html('');
        $('#root').append(
            '<div class="container-fluid text-center admin_control">' +
            '<i class="btn blue-gradient-btn font-weight-bold font-xl fa fa-cubes text margin-body-top-5"' +
            ' aria-hidden="true" ' +
            'onClick="' +

            'questionUser()' +

            '">' +
            '<br />JsFramework V 1.0<br /><em>Admin</em></i>' +
            '<br />' +
            '</div>'
        );
    },

    //                     DEFAULT/EDITED LOAD CONTROL  ------------>

    questionUser = function(answer) {
        adminMsg = 'questionUser loaded.';
        alert(adminMsg);
        this.answer = prompt("Do you wish to load admin?", "default");
        if (!answer === 'yes') {
            renderEdited();
            return;
        };
        renderDefault();
    },
    renderDefault = function() {
        adminMsg = 'renderDefault loaded expected app obj array in console.'
        alert(adminMsg);
        renderMain(app.siteContentObj);
    },
    renderEdited = function() {
        adminMsg = 'renderEdited loaded.'
        alert(adminMsg);
        alert(adminMsg);

    },
    init = function() {
        adminMsg = 'init loaded.'
        alert(adminMsg);
        alert('init');
        createAdminBtn();
        //       SELF EXICUTING                               ------------>
    }();
/*
 *       SELF EXICUTING                               ------------>
 *
 *   };
 *   init();
 *
 */

// TODO create error function.
/*
function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
};
*/