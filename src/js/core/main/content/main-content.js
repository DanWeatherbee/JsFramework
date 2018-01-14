// Nav =======================================================>
var main = '<nav class="font-1 navbar fixed-top navbar-expand-lg navbar-dark black-txt-shadow blue-gradient">' +
    '<a class="navbar-brand all-caps text-center" href="http://danweatherbee-front-end-web-developer.com">Developer<br />Dan Weatherbee<br />2018</a>' +
    '<img src="favicon.ico" class="center-block">' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"' +
    'aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navbarText">' +
    '<ul class="navbar-nav mr-auto">' +
    '<li class="nav-item active">' +
    '<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#block1">Features</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#block2">Pricing</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#block4">block4</a>' +
    '</li>' +
    '</ul>' +
    '<span class="navbar-text white-text center-block">' +
    '<b>Dan Weatherbee</b> | <em>Web Developer</em> | ' +
    '<i class="fa fa-envelope-o" aria-hidden="true"> dan@jedi-clan.us</i> | ' +
    '<i class="fa fa-phone" aria-hidden="true"> Call: 1 - 250 307 6272</i>' +
    '</span>' +
    '</div>' +
    '</nav>' +
    '<!-- End Nav =================================|-->' +
    // Main container begin ==============================>
    '<!-- **************|   MAIN   |************--   !  WARNING if you take out the Main container you will DELETE your CUSTOM button,' +
    ' use default to get it back however your edits will be lost' +
    ' unless you copy the text into the windows buffer - Ctrl + C  ============  Begin Main Container  ===========-->' +
    '<main id="main" class="contaner-fluid animated fadeIn margin-top-5">' +
    '<!-- =============== Video Parallax  ===============-->' +
    '<video class="main-parallax-video animated zoomIn" autoplay="true">' +
    '<source src="videos/mp4.mp4" type="video/mp4" />' +
    '</video>' +
    '<!-- ==========  End Video Parallax  =========-->' +
    // Content ================================>
    '<!--==***************** MOCKUP AREA BEGIN HEADER*******************==|-->' +
    '<h1 class="animated slideInRight header-txt black-txt-shadow white-txt xl-txt text-center blue-gradient-btn" id="main-header-h1">' +
    'JsFramework Prototype V 1.0</h1>' +
    '<p class="animated slideInRight header-txt black-txt-shadow white-txt text-center medium-txt blue-gradient-btn" id="main-header-p">' +
    'Created in Java Script using the MDB Bootstrap CSS framework for state of the art design<br /> --- with Administration built right in.' +
    '</p>' +
    '<a href="#block1"><i class="fa fa-briefcase black-txt-shadow animated lightSpeedIn" ' +
    ' aria-hidden="true"></i></a>' +
    '<a href="#block1"><i class="fa fa-shopping-cart text-left black-txt-shadow animated lightSpeedIn"' +
    ' aria-hidden="true"></i></a>' +
    '<div class="text-center">' +
    '<a href="#block1"><i class="fa fa-long-arrow-down black-txt-shadow radius-100 margin-top-35' +
    ' pad-2 animated bounce infinite margin-top-20" aria-hidden="true"></i></a>' +
    '</div>' +
    '<!--==***************** MOCKUP AREA END HEADER*******************==|-->' +
    '<!--Block 1 ================|-->' +
    '<!--==***************** MOCKUP AREA BEGIN  Create here. *******************==|-->' +
    // block 1 ==TODO build wether api for nav =====================>
    '<iframe class="showcase-banner animated zoomInDown" width="100%" height="auto" src="worldplay-showcase-bkg.html" scrolling="no" frameBorder="0">' +
    '</iframe>' +
    '<div class="container"><div class="col-sm-12"><p class="medium-txt white-txt text-center" id="canvas-txt">' +
    'Paste your HTML write into the textarea and boom! Instant website!<br />' +
    'Save it with a click to a json file, Plug and play!</p></div></div>' +
    '<!--These hrs are for link navigation nav/footer -->' +
    '<hr class="margin-bottom-3 margin-top-15" id="block1">' +
    '<!-- **************|   VIDEO  PLAYER  BEGIN  |************--> ' +
    '<section class="container-fluid block font-1 text-center animated slideInLeft">' +
    '<a class="btn btn-outline-success xl-txt blue-gradient-btn margin-top-5" id="video-btn" onClick="loadPlayerDw()">Video Player</a>' +
    '<button class="btn btn-outline-success xl-txt blue-gradient-btn margin-top-5" onClick="playGame()">Play Game</button>' +
    '<div id="player-dw-root"></div>' +
    '</section>' +
    '<!-- **************|   VIDEO  PLAYER  END  |************--> ' +

    '<!--==***************** MOCKUP AREA END Paste your html in above. **********************==|-->' +
    '<!--Block 1 end ============================|-->' +
    '<!-- **************|   MAIN  END   |************--> ' +
    '</main>' + // MAIN container end ==============================>
    //  Footer ===================================>
    '<!--Footer Begin ===========================|-->' +
    '<footer class="page-footer center-on-small-only blue-gradient container-fluid animated fadeInUp">' +
    '<!--Footer Links-->' +
    '<div class="container">' +
    '<div class="row">' +
    '<!--First column-->' +
    '<div class="col-md-4">' +
    '<h5 class="title mb-4 mt-3 font-bold">' +
    'None-Database Editable Website in Javascript</h5>' +
    '<p> * Great App for developers, edit online without tools and code it later.' +
    '<br /> * Paste html directly into container and it is injected via Javascript.' +
    '<br /> * With admin off the website feeds off Json file via API.' +
    '<br />This App is unbreakable - code can be rebuilt internally via Default button.' +
    '</p>' +
    '</div>' +
    '<!--/.First column-->' +
    '<hr class="clearfix w-100 d-md-none">' +
    '<!--Second column-->' +
    '<div class="col-md-2 mx-auto">' +
    '<h5 class="title mb-4 mt-3 font-bold">Links</h5>' +
    '<ul>' +
    '<li><a href="#root">Home</a></li>' +
    '<li><a href="#block1">Features</a></li>' +
    '<li><a href="#block2">Pricing</a></li>' +
    '<li><a href="#block4">block 4</a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Second column-->' +
    '<hr class="clearfix w-100 d-md-none">' +
    '<!--Third column-->' +
    '<div class="col-md-2 mx-auto">' +
    '<h5 class="title mb-4 mt-3 font-bold">Links</h5>' +
    '<ul>' +
    '<li><a href="#block4">block 4</a></li>' +
    '<li><a href="#block5">block 5</a></li>' +
    '<li><a href="#block6">block 6</a></li>' +
    '<li><a href="#block7">block 7</a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Third column-->' +
    '<hr class="clearfix w-100 d-md-none">' +
    '<!--Fourth column-->' +
    '<div class="col-md-2 mx-auto">' +
    '<h5 class="title mb-4 mt-3 font-bold ">Links</h5>' +
    '<ul>' +
    '<li><a href="#block">block 1</a></li>' +
    '<li><a href="#block">block 2</a></li>' +
    '<li><a href="#block">block 3</a></li>' +
    '<li><a href="#block">block 4</a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Fourth column-->' +
    '</div>' +
    '</div>' +
    '<!--/.Footer Links-->' +
    '<hr>' +
    '<!--Call to action-->' +
    '<div class="call-to-action">' +
    '<ul>' +
    '<li>' +
    '<h5 class="mb-1">Register for free</h5>' +
    '</li>' +
    '<li><a href="" class="btn btn-danger btn-rounded">Sign up!</a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Call to action-->' +
    '<hr>' +
    '<!--Social buttons-->' +
    '<div class="social-section text-center">' +
    '<ul>' +
    '<li><a class="btn-floating btn-sm btn-fb"><i class="fa fa-facebook"> </i></a></li>' +
    '<li><a class="btn-floating btn-sm btn-tw"><i class="fa fa-twitter"> </i></a></li>' +
    '<li><a class="btn-floating btn-sm btn-gplus"><i class="fa fa-google-plus"> </i></a></li>' +
    '<li><a class="btn-floating btn-sm btn-li"><i class="fa fa-linkedin"> </i></a></li>' +
    '<li><a class="btn-floating btn-sm btn-dribbble"><i class="fa fa-dribbble"> </i></a></li>' +
    '</ul>' +
    '</div>' +
    '<!--/.Social buttons-->' +
    '<!--Copyright-->' +
    '<div class="footer-copyright">' +
    '<div class="container-fluid">' +
    '© 2018 Copyright: <a href="http://danweatherbee-front-end-web-developer.com"> danweatherbee-front-end-web-developer.com </a>' +
    '</div>' +
    '</div>' +
    '<!--/.Copyright-->' +
    '</footer>' +
    '<!--/.Footer--></main>';