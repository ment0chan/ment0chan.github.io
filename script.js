var ph1 = ['secret', 'underground', 'leaked', 'private', 'stolen', '0day'];
var ph2 = ['goverment', 'mj12', 'illuminati', 'FBI', 'NSA', 'MOSSAD'];
var ph3 = ['document', 'software', 'accounts', 'information', 'dump', 'database'];
var ph4 = ['.doc', '.txt', '.pdf', '.rar', '.zip', '.sql']
function grand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function tral() {
  $('body').html('<h1>IP logged successfully</h1><img src="http://i.imgur.com/cSNT4lP.jpg">');
}

var string = "";

for (var i = 0; i < 10; i++) {
  string +='<img src="http://www.apache.org/icons/text.gif" alt="[TXT]"> <a href="#" onclick="tral()">';
  string += ph1[grand(0,5)] + "_"+ ph2[grand(0,5)] +"_" +ph3[grand(0,5)] +ph4[grand(0,5)];
  string +='</a> 2013-10-04 15:47 '+grand(1,30)+'MB \n';
}

$(document).ready(function(){
  $('#sikrit-files').html(string);
});
