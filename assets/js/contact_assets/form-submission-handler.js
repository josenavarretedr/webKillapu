
var $form = $('#gform'),
    url = 'https://script.google.com/macros/s/AKfycbxKzozGi-ZaMnoPLj6lIVY5YNvFdXRKzvLMZ6Dgq1Y9rAisBkbq/exec';

function resultadosForm() {
  console.log('Se realizó el envío correctamente');
  console.log($form.serializeObject());
  $('#form_name').val('');
  $('#form_email').val('');
  $('#form_message').val('');
  $('#formSuccess').fadeIn(1000);
  setTimeout(function() { $('#formSuccess').fadeOut(1000) }, 5000);
  return false
}

$('#gform').submit(function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject()
  }).success(resultadosForm());
});

// $('#submit-form').on('click', function(e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "POST",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(resultadosForm());
// });
