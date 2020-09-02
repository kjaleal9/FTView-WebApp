var dragFile = document.getElementById('drag-file');
var txtArea = document.getElementById('txtArea');
var submitButton = document.getElementById('submit-button');
var fileText = document.getElementById('file-selected');

submitButton.style.display = 'none';

$('#file-upload').bind('change', function () {
    var fileName = '';
    fileName = $(this).val();
    $('#file-selected').html(`${fileName}`);
});
