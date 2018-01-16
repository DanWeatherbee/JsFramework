/*
* Perfect Template for a Iframe Creation Class --DW-- | 2018

* Create Iframe Class
*/
var begin_frame = '<div class="iframe-css-pretty-hide-cover center-block blue-gradient border-blue-gradient">' +
    '</div>' +
    '<iframe class="iframe-pretty animated zoomInDown" id="iframeP"' +
    'width="auto" height="auto" src="',
    src = 'https://www.cleancss.com/html-beautify/',
    end_frame = '" scrolling="yes" frameBorder="1">' +
    '</iframe>',
    /*
     * $('#pif-root') elem to append to, you must have a div with this id on your page.
     *
     * Object
     */
    prettyIframeObj = {
        'begin_frame': begin_frame,
        'src': src,
        'end_frame': end_frame
    };
// Class
CreatePrettyIframe = function(

    obj
) {
    "use strict";
    var self = this;
    self.obj = obj;
    // pub methods
    self.init = function() {
        // do some stuff
        this.obj.src = prompt("Enter iframe src: ", "https://www.cleancss.com/html-beautify/");
        $('#iframeP').remove();
        $('.navbar').prepend(
            this.obj.begin_frame +
            this.obj.src +
            this.obj.end_frame
        );
        return;
    };
};
// instantiate new obj using class.
var iframeCssPrettyObj = new CreatePrettyIframe(prettyIframeObj);
