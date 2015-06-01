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
'Иван Биншток',
'Иван Вайншток',
'Иван Дюссар',
'Иван Коэн',
'Иван Крав',
'Иван Крузенштерн',
'Иван Оуэн',
'Иван Росштерн',
'Иван Хепберн',
'Иван Штерн',
'Иван Абрамович',
'Иван Аванесьянц',
'Иван Аветисьянц',
'Иван Агриппа',
'Иван Азроянц',
'Иван Аксючиц',
'Иван Александрович',
'Иван Алексаньянц',
'Иван Аленич',
'Иван Алешкевич',
'Иван Армениац',
'Иван Арутюнянц',
'Иван Бабаджанянц',
'Иван Бабич',
'Иван Бавтрукевич',
'Иван Бай',
'Чарльз Дарвин',
];

T.inlineTranslation(false);
function render() {
  var nm = [];
  for (var i = 0; i < names.length; i++) {
    nm.push('<li>' + T('inftest', names[i].split(' ')) + '</li>');
  }
  document.getElementById('content').innerHTML = 
    '<p>' + T('newsfeed.liked_other', { user: { first_name: 'Денис', gender: 'm' }, photos: 10, owner: { first_name: 'Олег', last_name: 'Иванов-Бруевич', gender: 'm' } }) + '</p>' +
    '<p><ul>' + nm.join('') + '</ul></p>' +
    '<button onclick="toggleInline();">' + T(T.inlineTranslation() ? 'Inline_disable!' : 'Inline_enable!') + '</button> ' +
    '<button onclick="T.showAllKeys();">' + T('Show_keys') + '</button>';
}

function toggleInline() {
  T.inlineTranslation(!T.inlineTranslation());
  render();
}
render();