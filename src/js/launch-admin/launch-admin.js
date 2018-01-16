                                        /*
                                        * ---------------------------------***-----------------------------------|
                                        *      JsFramework Copywrite Dan Weatherbee 2018   *
                                         *|=====    DON'T MESS WITH THIS ONE     ======|*
                                        *                         WEBSITE DEFAULT                         *
                                        *                          ****    ADMIN    ****                           *
                                        *                                     ====                                     *
                                        * -----------------------------------------------------------------------|
                                         */
var dbContentEdited = localStorage.getItem('ContentEdited'),
    dbContentDefault = localStorage.getItem('ContentDefault'),
    defaultContentDB = new File([dbContentEdited], "ContentEdited.json"),
    editedContentDB = new File([dbContentDefault], "ContentDefault.json"),
    saveContentPage = function() {
        saveAs(defaultContentDB);
        saveAs(editedContentDB);
    },
    clearContentPage = function() {
        localStorage.clear();
        location.reload();
    },
    appendScore = function() {
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
        ),
        init = function () {console.log('App initiated')};
    };
