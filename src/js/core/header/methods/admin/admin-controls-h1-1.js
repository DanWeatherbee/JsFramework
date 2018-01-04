/*
Written in a Object Oriented pattern OOP by Dan Weatherbee
 Controls =============================================
*/
app.editH1_1 = function(
    editH1TextBtn11,
    saveH1TextBtn11,
    editTextArea1
) {
    "use strict";
    var self = this;

    self.editH1TextBtn1 = '<i class="fa fa-edit edit-btns" id="edit-h1-btn1" onclick="app.editH1Text1()"></i>';
    self.saveH1TextBtn1 = '<i class="fa fa-save edit-btns" id="save-h1-btn1" onclick="app.saveH1Text1()"></i>';
    self.editTextArea1 = '<textarea class="form-control textarea-style white-txt-shadow center-block" rows="1" number="3" maxlength="10000" ' +
        'id="h1-input1">' +
        self.siteContentObj.app.header[0].header +
        '</textarea>';

    app.editH1Text1 = function() {
        if ($('#edit-h1-btn1')) {
            $('#edit-h1-btn1').remove();
        };
        $('#root').prepend(self.editTextArea1);
        $('#root').prepend(self.saveH1TextBtn1);
    }
    app.saveH1Text1 = function() {
        var usrInput = $('#h1-input1').val();
        self.siteContentObj.app.header[0].header = usrInput;
        $('#header').html('');
        $('#header').prepend(self.siteContentObj.app.header[0].header);
        $('#save-h1-btn1').remove();
        $('#h1-input1').remove();
        app.saveContentToDB();
        location.reload();
    }
    app.createH1Text1 = function() {
        $('#edit-h1-btn1').remove();
        $('#header').prepend(self.editH1TextBtn1);
    }
    self.createH1Text1();
};