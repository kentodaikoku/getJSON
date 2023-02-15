function getJson() {
  let json = {};
  // json取得
  $.ajax({
    url: "json.json",
    dataType: "json",
    async: false,
    success: function(data) {
      // console.log(data.length);
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
var hobbies = '';
contents += '<ul>';
for (let i = 0; i < json.length; i++) {
  for(let k = 0; k < json[i].hobby.length; k++) {
    hobbies += '<li>' + json[i].hobby[k] + '</li>';
  }
  contents += '<li><div class="contents">';
  contents += '<p>' + json[i].name + '</p>';
  contents += '<p>' + json[i].position + '</p>';
  contents += '<span>Hobby</span>';
  contents += '<ul>';
  contents += hobbies;
  contents += '</ul>';
  contents+= '</div></li>';

  hobbies = '';
}
contents += '</ul>';
$('#json').html(contents);

const array = () => {
  let num = 0;
  json.forEach(function(value, index, array) {
    // console.log(value.name);
    // console.log(index);
    num += index;
    if (value.hobby[index] === 'meat') {
      value.hobby.push('eating'); 
    }
  });
  // console.log(`配列番号の和：${num}`);
  // console.log(json);
}
array();
