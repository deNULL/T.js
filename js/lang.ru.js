T.define({
  ru: {
    /*
    $plural: function(n) {
      return 'other';
    },
    */
    //$aux: {
      your: {
        ins:        { $plural: { one: 'вашей', other: 'вашими' } },
        acc:        { $plural: { one: 'вашу', other: 'ваших' } },
      },
      uploaded:     { $plural: { one: 'загрузил', other: 'загрузили' } },
      impressed:    { $plural: { one: 'был впечатлен', other: 'были впечатлены' } },
      liked:        { $gender: { m: 'оценил', f: 'оценила' } },
      
      users:        { $plural: { one: '{} пользователь', few: '{} пользователя', other: '{} пользователей' } },
      photos: {
        nom:        { $plural: { one: 'фотография', few: 'фотографии', other: 'фотографий' } },
        gen:        { $plural: { one: 'фотографии', few: 'фотографий', other: 'фотографий' } },
        dat:        { $plural: { one: 'фотографии', few: 'фотографиям', other: 'фотографиям' } },
        acc:        { $plural: { one: 'фотографию', few: 'фотографии', other: 'фотографий' } },
        ins:        { $plural: { one: 'фотографией', few: 'фотографиями', other: 'фотографиями' } },
        abl:        { $plural: { one: 'фотографии', few: 'фотографиях', other: 'фотографиях' } },
      },
    //},

    ok:            'OK',
    cancel:        'отмена',
    online:        'онлайн {>users}',

    inline_enable: 'начать инлайн-перевод',
    inline_disable: 'завершить инлайн-перевод',
    show_keys:     'показать все ключи',

    inftest: '<b>{0} {1}</b><ul><li>{$name.gen 0 2} {$surname.gen 1 2} (род.)</li><li>{$name.dat 0 2} {$surname.dat 1 2} (дат.)</li><li>{$name.acc 0 2} {$surname.acc 1 2} (вин.)</li><li>{$name.ins 0 2} {$surname.ins 1 2} (твор.)</li><li>(о) {$name.abl 0 2} {$surname.abl 1 2} (пр.)</li></ul>',

    newsfeed: {
      uploaded:    '{>users users} {>uploaded users} {>photos.acc photos}',
      test:        '{>your.ins photos} {>photo.count.ins photos} {>impressed users} {>user.count users}',
      liked_you:   '{user.name} {>liked user.gender} {photos} {>your.acc photos} {>photo.count.acc photos}',
      liked_other: '{user.first_name} {>liked user.gender} {photos} {>photos.acc photos} {$name.acc owner.first_name owner.gender} {$surname.acc owner.last_name owner.gender}',
      press_ok:    'нажмите «{>ok}»',
    },
  },
});