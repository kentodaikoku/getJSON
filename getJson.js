function getJson() {
  let json = {};
  // json取得
  $.ajax({
    url: "json.json",
    dataType: "json",
    async: false,
    success: function(data) {
      console.log(data.length);
      json = data;
    },
    error: function(data) {
      alert('error');
    }
  });
  return json;
}

var json = getJson();
var contents = '';
contents += '<ul>';
for (let i = 0; i < json.length; i++) {
  contents += '<li>' + json[i].name + '</li>';
}
contents += '</ul>';
$('#json').html(contents);