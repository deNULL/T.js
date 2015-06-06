VK.init({
  apiId: 4933491
});
function authInfo(response) {
  if (response.session) {
    alert('user: '+response.session.mid);
  } else {
    alert('not auth');
  }
}
VK.Auth.getLoginStatus(authInfo);
//VK.UI.button('loginBtn');

T.lang('ru');
T.addUpdateListener(function(diff) {
  console.log('Translation updated: ', diff);
  render();
});

var names = [
'Денис Ольшин',
'Павел Дуров',
'Пётр Сулимко',
'Сандра Баллок f',
'Чарльз Дарвин',
];

T.inlineTranslation(false);
function render() {
  var nm = [];
  for (var i = 0; i < names.length; i++) {
    nm.push('<li>' + T('inftest', names[i].split(' ')) + '</li>');
  }
  var dt = [];
  var dts = [-50000000000, -500000000, -50000000, -10000000, -1000000, -100000, -10000, -1000, 1000, 10000, 100000, 1000000, 10000000, 50000000, 500000000, 50000000000];
  for (var i = 0; i < dts.length; i++) {
    var v = new Date(new Date().getTime() + dts[i] * 0.7 + Math.random() * dts[i] * 0.6);
    dt.push('<li>' + T('$Date.DMMMMYYYYHHmmss', v) + ': <b>' + T('$rdate', v) + '</b></li>');
  }
  document.getElementById('content').innerHTML =
    '<h3>Подстановки:</h3>' +
    '<p>' + T('newsfeed.liked_other', { user: { first_name: 'Денис', gender: 'm' }, photos: 10, owner: { first_name: 'Олег', last_name: 'Иванов-Бруевич', gender: 'm' } }) + '</p>' +
    '<h3>Имена:</h3>' +
    '<p><ul>' + nm.join('') + '</ul></p>' +
    '<h3>Даты:</h3>' +
    '<p><ul>' + dt.join('') + '</ul></p>' +
    '<h3>Числа:</h3>' +
    '<p><ul>' +
      '<li>По умолчанию (<b><code>{$num}</code></b>): ' + T('$num', Math.random() * 100000) + '</li>' +
      '<li>С разделителем тысяч и округлением (<b><code>{$num.t.0}</code></b>): ' + T('$num.t.0', Math.random() * 1000000000) + '</li>' +
      '<li>С разделителем тысяч и знаком (<b><code>{$num.+t}</code></b>): ' + T('$num.+t', Math.random() * 10000000) + '</li>' +
      '<li>С ведущими нулями (<b><code>{$num.7}</code></b>): ' + T('$num.7', Math.random() * 100000) + '</li>' +
      '<li>С округлением (<b><code>{$num..2}</code></b>): ' + T('$num..2', Math.random() * 100000) + '</li>' +
      '<li>С нулями в конце (<b><code>{$num..07}</code></b>): ' + T('$num..07', Math.round(Math.random() * 100000) / 1000) + '</li>' +
    '</ul></p>' +
    '<button onclick="toggleInline();">' + T(T.inlineTranslation() ? 'Inline_disable!' : 'Inline_enable!') + '</button> ' +
    '<button onclick="T.showAllKeys();">' + T('Show_keys') + '</button>';
}

function toggleInline() {
  T.inlineTranslation(!T.inlineTranslation());
  render();
}
render();