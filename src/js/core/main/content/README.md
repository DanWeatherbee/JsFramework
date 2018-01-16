<video width="300" height="200" autoplay="autoplay">
  <source src="video/supercoolvideo.mp4" type="video/mp4" />
</video>
controls is a boolean attribute:

Note: The values "true" and "false" are not allowed on boolean attributes. 
To represent a false value, the attribute has to be omitted altogether.

Perfect Template for a Iframe Creation Class --DW-- | 2018
ESC Scope var, let, const. What you should use. Refferece: http://wesbos.com/let-vs-const/
    // Create Iframe Class

    let cssPrettifyIframeBegin = '<div class="iframe-css-pretty-hide-cover center-block blue-gradient">' +
        '</div>' +
        '<iframe class="iframe-css-pretty animated zoomInDown center-block" ' +
        'width="auto" height="auto" src="' +
        'http://jshint.com/',
        formatType = '', // ============   css , html.
        cssPrettifyIframeEnd = '-beautify/' +
        ' scrolling="no" frameBorder="0">' +
        '</iframe>' +
        '<div class="iframe-css-pretty-hide-cover-bottom center-block blue-gradient">' +
        '</div>',
        // for nav links to hook up to.
        $elem = '<hr class="margin-bottom-3 margin-top-15" id="dev-tools-section">'; // elem to append to.
    // Object
    const prettyIframeObj = {
        'begin_frame': begin_frame,
        'format_type': format_type,
        'end_frame': end_frame,
        '$eleM': $eleM
    };
    // Class
    CreatePrettyIframe = function(
        obj
    ) {
        this.obj = obj;
        // pub methods
        this.init = function() {
            // do some stuff
            this.$elem.append(
                this.begin_frame,
                this.format_type,
                this.end_frame
            );

            this.init();
        };
    };
    // instantiate new obj using class.
    var iframeCssPrettyObj = new CreatePrettyIframe(prettyIframeObj);