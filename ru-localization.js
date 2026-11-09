/* Russian runtime localization for the Cyberpunk Red Companion web build. */
(function () {
  'use strict';

  var dict = window.__RU_DICT || {};

  // Interface language chosen in Settings > About. Default is Russian.
  var langKey = 'cpr.ru.lang';
  var lang = 'ru';
  try {
    lang = window.localStorage.getItem(langKey) === 'en' ? 'en' : 'ru';
  } catch (e) {}
  window.__RU_LANG__ = lang;

  // The build writes Russian literals into main.dart.js for editable fields
  // and stored values. Keep the reverse map so English mode can restore them.
  var EN_REVERSE = {"Банда. Вы жили в жестоком доме, который занимала ваша банда. Вы часто голодали, мёрзли и боялись. Возможно, вы даже не знали своих настоящих родителей. Образование? Банда научила вас драться, убивать и воровать — чего ещё желать?":"Ganger \"Family\". A savage, violent home in any place the gang could take over. You were usually hungry, cold, and scared. You probably didn't know who your actual parents were. Education? The Gang taught you how to fight, kill, and steal—what else did you need to know?","Жители Боевой зоны. Ваш дом — полуразрушенное здание в Зоне, укреплённое от нападений. Иногда вы голодали, но обычно могли найти кровать и еду. Учились дома.":"Combat Zoners. A step up from a gang \"family,\" your home was a decaying building somewhere in the ‘Zone', heavily fortified. You were hungry at times, but regularly could score a bed and a meal. Home schooled.","Городские бездомные. Вы жили в машинах, мусорных баках или заброшенных грузовых модулях. Если везло, удавалось найти еду. Обычно вы голодали, мёрзли и боялись, если только не были достаточно сильны, чтобы драться за объедки. Образование? Школа суровой жизни.":"Urban Homeless. You lived in cars, dumpsters, or abandoned shipping modules. If you were lucky. You were usually hungry, cold, and scared, unless you were tough enough to fight for the scraps. Education? School of Hard Knocks.","Жители верхних этажей мегаструктур. Вы выросли в одной из огромных мегаструктур, построенных после войны. Крошечная квартира, киббл и скап на обед, в основном тёплая постель. Более образованные взрослые жильцы или местная корпорация могли открыть школу.":"Megastructure Warren Rats. You grew up in one of the huge new megastructures that went up after the War. A tiny conapt, kibble and scop for food, a mostly warm bed. Some better educated adult warren dwellers or a local Corporation may have set up a school.","Реклеймеры. Сначала вы жили в дороге, а затем перебрались в заброшенный город-призрак, чтобы отстроить его заново. Жизнь первопроходца опасна, зато простой еды хватало, а ночевать можно было в безопасности. Если находился свободный взрослый, он занимался с вами дома.":"Reclaimers. You started out on the road, but then moved into one of the deserted ghost towns or cities to rebuild it. A pioneer life: dangerous, but with plenty of simple food and a safe place to sleep. You were home schooled if there was anyone who had the time.","Семья кочевников. Вашим домом были крепкие трейлеры, машины и огромные дорожные комбини. Вы рано научились водить и драться, но семья всегда заботилась о вас. Еда была свежей и её хватало. В основном вы учились дома.":"Nomad Pack. You had a mix of rugged trailers, vehicles, and huge road kombis for your home. You learned to drive and fight at an early age, but the family was always there to care for you. Food was actually fresh and abundant. Mostly home schooled.","Корпоративные руководители. Богатые и влиятельные, они жили в роскошных домах со слугами и ни в чём себе не отказывали. Частная охрана всегда обеспечивала вашу безопасность. Вы точно учились в престижной частной школе.":"Corporate Execs. Wealthy, powerful, with servants, luxury homes, and the best of everything. Private security made sure you were always safe. You definitely went to a big-name private school.","Корпоративные менеджеры. Достаток, большие дома в безопасных районах и хорошие машины. Иногда родители нанимали прислугу, хотя это случалось редко. Вы учились и в частных, и в корпоративных школах.":"Corporate Managers. Well to do, with large homes, safe neighborhoods, nice cars, etc. Sometimes your parent(s) would hire servants, although this was rare. You had a mix of private and corporate education.","Корпоративные техники. Уверенный средний класс: удобные квартиры или пригородные дома, минивэны и корпоративные технические школы. Что-то среднее между Америкой 1950-х и романом «1984».":"Corporate Technicians. Middle-middle class, with comfortable conapts or Beaverville suburban homes, minivans and corporate-run technical schools. Kind of like living 1950s America crossed with 1984.","Эджраннеры. Ваш дом постоянно менялся в зависимости от очередной «работы» родителей. Это могла быть роскошная квартира, городская конурка или мусорный бак, если приходилось скрываться. Еда и кров варьировались от изысканных до самых скромных.":"Edgerunners. Your home was always changing based on your parents' current \"job.\" Could be a luxury apartment, an urban conapt, or a dumpster if you were on the run. Food and shelter ran the gamut from gourmet to kibble.","Азиатский поп (яркий, похожий на сценический костюм, молодёжный)":"Asia Pop (Bright, Costume-like, Youthful)","Стиль бродяжки (бездомный, потрёпанный, бродячий)":"Bag Lady Chic (Homeless, Ragged, Vagrant)","Богемный (народный, ретро, свободолюбивый)":"Bohemian (Folksy, Retro, Free-spirited)","Деловая одежда (лидерство, уверенность, авторитет)":"Businesswear (Leadership, Presence, Authority)","Цвета банды (опасные, жестокие, мятежные)":"Gang Colors (Dangerous, Violent, Rebellious)","Универсальный шик (стандартный, яркий, модульный)":"Generic Chic (Standard, Colorful, Modular)","Высокая мода (эксклюзивная, дизайнерская, кутюрная)":"High Fashion (Exclusive, Designer, Couture)","Одежда для отдыха (комфорт, подвижность, спортивность)":"Leisurewear (Comfort, Agility, Athleticism)","Кожа кочевников (вестерн, прочная, племенная)":"Nomad Leathers (Western, Rugged, Tribal)","Городской шик (броский, технологичный, уличный)":"Urban Flash (Flashy, Technological, Streetwear)","Азиатский поп":"Asia Pop","Стиль бродяжки":"Bag Lady Chic","Богемный":"Bohemian","Деловая одежда":"Businesswear","Цвета банды":"Gang Colors","Универсальный шик":"Generic Chic","Высокая мода":"High Fashion","Одежда для отдыха":"Leisurewear","Кожа кочевников":"Nomad Leathers","Городской шик":"Urban Flash","Брюки":"Bottoms","Верх":"Tops","Куртка":"Jacket","Обувь":"Footwear","Украшения":"Jewelry","Зеркальные очки":"Mirrorshades","Очки":"Glasses","Контактные линзы":"Contact Lenses","Головные уборы":"Hats","Перчатки":"Gloves","Осталось евро-баксов":"Eurobucks Remaining","Лидер":"Leader","Занятия и тематика":"Activities/Themes","Места встреч":"Hangouts","Места встреч и прикрытия":"Hangouts/Fronts","Штаб-квартира":"Headquarters","Отличительные черты":"Identifiers","СЛ/Время":"DV/Time","Длинноствольное оружие":"Shoulder Arms","Навык точной стрельбы из винтовок и дробовиков.":"Skill for accurately firing shoulder-braced projectile weapons, including rifles and shotguns.","Базовое значение 10 позволяет обслуживать и метко стрелять из штурмовых и снайперских винтовок, дробовиков и другого длинноствольного оружия. При значении 14 вы умеете выполнять сложные выстрелы: например, поражать цели в зданиях через окна, почти всегда попадая в оптимальной для вас дистанции. Значение 18 делает вас равным знаменитым стрелкам и снайперам. Обычно вы попадаете в любую цель, которую видите. Скоро за ваши услуги начнут бороться службы безопасности корпораций.":"At a Base 10, you know how to maintain and accurately fire assault rifles, shotguns, sniper rifles, and other shoulder-braced firearms. At a Base 14, you are skilled enough to hit complicated shots like firing through windows to hit targets in buildings and you can almost always hit a target in the sweet spot of your range. At a Base 18, you are the equal of rifle sharpshooters like Annie Oakley and famous snipers such as Vasily Zaytsev. In most cases, if you can see a target you can hit it. It's probably not long before the security Corps start fighting over you.","6-я улица возникла из числа ветеранов Четвёртой корпоративной войны. Это банда линчевателей, защищающая разные районы Найт-Сити. Её участники хорошо вооружены и оснащены боевыми имплантами, оставшимися со службы. В последнее время им пришлось заняться вымогательством и контрабандой, чтобы сводить концы с концами. Они действуют по всему городу и охотно защищают церковь Святых Ангелов.":"Born from the many veterans of the 4thCorporate War, the 6th Street is a vigilante gang which protects various neighborhoods around Night City. Members of the 6th Street are generally well-armed and heavily cybered-up with armament from their days in the field. Recently, they have been forced to move into extortion and smuggling in efforts to pay their bills. While they operate all throughout the city, the 6th Street all are welcome protectors of the Holy Angels Church.","Когда-то Бозо были бандой шутников. Они изменили внешность, став похожими на цирковых клоунов: красные носы, растрёпанные волосы и длинные плоские ступни (не обувь), а также соответствующие костюмы. Их розыгрыши быстро превратились в настоящее насилие, и вскоре Бозо стали бандой убийц-клоунов. Жители их территории усвоили: увидел шайку Бозо — беги. Они играют на самых сильных страхах людей: прячутся в тёмных квартирах, запирают жертв в тесных помещениях с крысами, останавливают лифты и заливают их водой. Это совсем не смешно.":"When they first appeared, the Bozos were a prankster gang. Biosculpted to look like circus clowns with red bulbous noses, wild red hair, and long flat feet (no, not shoes) and costumed to the part, the Bozos became impromptu slapstick. But soon the Bozos became the ultimate killer clown gang. People living on Bozo turf learned the hard way that if you see a pack of Bozos, just run. Bozos enjoy playing on people's greatest fears: lurking in apartments in the dark, locking victims in small spaces filled with rats, stopping elevators midway and filling them with water. They are not funny.","Инквизиторы — культовая банда, как и банды ненависти, объединённая общей идеологией — в их случае религиозной. Они считают киберимпланты богохульством и без колебаний вырывают их прямо из тела. По их мнению, так они «спасают» душу. Инквизиторы верят, что кибернетика — это «зло», и воюют со всеми остальными бандами города. Их ненавидят все.":"The Inquisitors are a cult gang; like the hate gangs, they center on a specific ideology, in this case, religious. The Inquisitors think cyberware is blasphemous, and think nothing of tearing it right out of your body. They consider this \"saving\" your soul. Not only do they believe that cybernetics are \"evil\", but they also have a war going on with every other gang in the city. Everyone hates these guys.","«Железные прицелы» — небольшая, но удивительно крепкая боевая банда почти киберпсихов. Раньше их финансировала Арасака, но после войны дела пошли плохо. Однако по Улице ходят слухи, что у них появился новый покровитель и они снова демонстрируют свои «потрошители».":"The Iron Sights are a relatively small, but surprisingly tough, combat gang of borderline cyberpsychos. Once funded by Arasaka, they fell on hard times after the War. But word on The Street is that they have a new benefactor and are once more flexing their Rippers.","Эта боевая банда возникла из остатков «Металлических воинов», почти полностью уничтоженных Инквизиторами за одну ночь. Позже к ней примкнули участники «Красного хромового легиона» и «Железных прицелов», также питавшие к Инквизиторам личную ненависть. После войны Мальстрём завершил давнюю вражду с небольшой бандой киберпсихов и перенял часть их идеологии, презирающей плоть. В результате у его участников стало несравнимо больше заметных и радикальных имплантов. Это лишь усилило и участило бои между Мальстрёмом и Инквизиторами.":"This combat gang formed around the remnants of the old Metal Warriors; a gang virtually wiped out in one night by the Inquisitors. It later drafted members of the Red Chrome Legion and lron Sights who also had violent personal grudges against the Inquisitors. Post-War, Maelstrom settled another long running feud with a smaller gang of cyberpsychos and began to adopt some of their old rival's meat-hating philosophies, leading to an almost exponential increase in visible and extreme cyberware among gang members. This, in turn, has only increased the number and intensity of the battles between Maelstrom and the Inquisitors.","Вампиры — банда шутников. Несколько десятилетий назад пятеро её участников в смокингах, плащах и вампирских клыках поднялись на тросах за оркестром Найт-Сити в ночь Хэллоуина. Так их прозвали «Филармоническими вампирами». Они артисты, хулиганы или социальные критики? Клыки — часть костюма? Кто знает.":"The Vamps are a prankster gang who were dubbed the \"Philharmonic Vampyres\" a few decades ago when five members clad in tuxedos, capes, and vampire teeth flew up on wires behind the Night City Symphony on Halloween night. Are they artists, hoodlums, or social commentators? Are those teeth part of the costume or not? Who knows?","«Пираньи» — типичная тусовочная банда. Они постоянно гуляют, пьют «Смэш», употребляют и продают наркотики, грабят прохожих — просто потому, что могут. Для них главное в жизни — вечеринка.":"The Piranhas are a typical party gang. They party, drink Smash, take and deal drugs, and mug people, all as part of a \"just because\" lifestyle. To these guys, the Party is everything.","«Игроки прайм-тайма» — банда позёров, которые с помощью биоскульптинга становятся похожими на героев старых ситкомов и телешоу. Это большая семейная банда: она защищает свой район и тоскует по ушедшим временам. Игроки делятся на фракции по мотивам разных передач, ревностно охраняют свою территорию и своих людей.":"The Players are a poser gang who use biosculpting to look like members of old sitcoms and TV shows from bygone eras. They are an extended family gang which protects their neighborhood and longs for a bygone time. The Players are broken up into a number of different factions based on various shows. They are territorial and fiercely protective of their members.","«Воздаятели» — один из апокалиптических культов, появившихся после войны. Они бродят по улицам, пророчат грядущую Жатву душ, вербуют бездомных и собирают пожертвования — нередко обирая вас без сознания. Некоторые из них всерьёз хотят приблизить конец света кровью и взрывчаткой C4.":"The Reckoners are one of several apocalyptic cults that sprung up after the War. They roam the streets, preaching the coming Harvest of Souls, recruiting from the homeless, and looking for donations, often taken from your unconscious body. A few are serious crazies who want to evoke the End Times right now with blood and C4.","Скэвверы — скорее не банда, а отчаявшиеся бездомные, обитающие среди руин городских зон, оставленных войной. Они прочёсывают опасные завалы в поисках вещей на продажу: меди, платины, старой техники и даже брошенного оружия. Многие погибают. За последние семнадцать лет эти городские поля боя уже почти полностью обыскали, и скэвверам приходится всё глубже забираться в опасные места ради любой ценности.":"Scavengers aren't a gang per se, but the desperate homeless who squat in the ruined City Zones left behind by the War. They scour the treacherous debris for salable items such as copper, platinum, old tech, and even abandoned weapons. Many die doing so. Not least of all because these urban battlegrounds have been pretty picked over in the last seventeen years, and scavvers are constantly forced to dig deeper and deeper into unsafe terrain for anything of value.","Кочевой пак из Салинаса. Их разношёрстные колонны ходят по прибрежному шоссе от агропосёлков Санта-Круза до южных городов. Они принимают любого умелого, надёжного человека, который выдержит их темп. Это смышлёные и сравнительно честные кочевники; они снабжают несколько групп реклеймеров в Найт-Сити.":"A Nomad pack out of Salinas, their ragtag convoys make the coastal highway run from the Santa Cruz agriplots to the southern cities. They take in anyone who displays skill, dependability, and who can keep up. Smart and relatively honest, they have supply deals with several Reclaimer groups in Night City.","Когда-то Тигриные когти подчинялись Арасаке, но затем вырвались из-под её контроля и стали опасной бандой-защитницей азиатского сообщества Найт-Сити. После Четвёртой корпоративной войны они сыграли важную роль в восстановлении Японского квартала. Их знают по быстрым мотоциклам, усиленным рефлексам и смертоносным боевым искусствам.":"Once under the thumb of Arasaka, the Tyger Claws have broken away and become a dangerous protector gang for the Asian community of Night City. They have had a significant role in rebuilding the sections of Japan Town after the 4th Corporate War. The Tyger Claws are known for their fast bikes, enhanced reflexes, and killer martial arts.","Вудуисты могли начаться с крупных криминальных связей во Флориде и Карибском бассейне. Это террористическая банда с налётом ритуальной магии; её участники удовлетворяют свои странные вкусы, торгуя преимущественно натуральными наркотиками. В последнее время всё меняется: в район переезжают настоящие гаитяне и другие беженцы из разрушенной Доминиканской Республики. Иммигрантов возмущает название «Вудуисты», и они выражают недовольство, калеча жертв и расчленяя мачете тела погибших, оставляя части как предупреждение. Продолжение следует.":"Major crime contacts in Florida and the Caribbean may have been the beginning of the Voodoo Boys, a terrorist gang with ritual magic overtones, feeding their bizarre tastes by dealing primarily non-synthetic drugs. But that's been changing recently, as real Haitians and other refugees from the decimated Dominican Republic have started to move into the area. These immigrants have taken offense at the so-called Voodoo Boys and have taken to expressing their displeasure by maiming victims and dissecting the dead with machetes, leaving body parts as warnings. Stay tuned."};
  var EN_REVERSE_LIST = Object.keys(EN_REVERSE).map(function (ru) {
    return [ru, EN_REVERSE[ru]];
  });

  if (lang === 'en') {
    document.documentElement.lang = 'en';
    document.title = 'Cyberpunk Red Companion';
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', 'Companion for the Cyberpunk Red tabletop role-playing game.');
    var loadingImage = document.querySelector('#loading img');
    if (loadingImage) loadingImage.setAttribute('alt', 'Loading…');
  }

  // Developer-only local entitlement, controlled from Settings > About.
  var devKey = 'cpr.ru.devPremium';
  var devPremium = false;
  try {
    devPremium = window.localStorage.getItem(devKey) === '1';
  } catch (e) {}
  window.__RU_DEV_PREMIUM__ = devPremium;

  var STORE_CATEGORY = {
    vehicles: 'новый транспорт',
    vehicle: 'новый транспорт',
    weapons: 'новое оружие',
    weapon: 'новое оружие',
    armor: 'новую броню',
    cyberware: 'новые киберимпланты',
    gear: 'новое снаряжение',
    ammo: 'новые боеприпасы',
    clothing: 'новую одежду',
    programs: 'новые программы'
  };
  var FASHION_NAMES = {
    'Asia Pop': 'Азиатский поп',
    'Bag Lady Chic': 'Стиль бродяжки',
    'Bohemian': 'Богемный',
    'Businesswear': 'Деловая одежда',
    'Gang Colors': 'Цвета банды',
    'Generic Chic': 'Универсальный шик',
    'High Fashion': 'Высокая мода',
    'Leisurewear': 'Одежда для отдыха',
    'Nomad Leathers': 'Кожа кочевников',
    'Urban Flash': 'Городской шик'
  };
  var CLOTHING_ITEMS = {
    'Bottoms': 'брюки', 'Tops': 'верх', 'Jacket': 'куртка', 'Footwear': 'обувь',
    'Jewelry': 'украшения', 'Mirrorshades': 'зеркальные очки', 'Glasses': 'очки',
    'Contact Lenses': 'контактные линзы', 'ContactLenses': 'контактные линзы',
    'Hats': 'головные уборы', 'Gloves': 'перчатки'
  };

  // Dynamic strings that are assembled at runtime. Patterns are matched against
  // the trimmed string; $1..$n are substituted with the captured groups.
  var RULES = [
    [/^Tech Level\s+(\d+)$/i, 'Технологический уровень $1'],
    [/^Quickhack\s+\(DV\s*(\d+)\)$/i, 'Квикхак (СЛ$1)'],
    [/^DV\s*\/\s*Time$/i, 'СЛ/Время'],
    [/^(\d+)\s+Humanity$/i, 'Человечность: $1'],
    [/^(\d+)\s+Reputation$/i, 'Репутация: $1'],
    [/^(\d+)\s+LUCK$/i, 'Удача: $1'],
    [/^Netrunner Level (\d+)$/i, 'Нетраннер, уровень $1'],
    [/^(\d+)\s+Slots Remaining$/i, 'Осталось $1 слотов'],
    [/^Version ([\d.]+)$/i, 'Версия $1'],
    [/^NET Actions Per Turn:\s*(\d+)$/i, 'Сетевых действий за ход: $1'],
    [/^Stopping Power:\s*(\d+)$/i, 'Останавливающая способность: $1'],
    [/^STOPPING POWER:\s*(\d+)$/i, 'ОСТАНАВЛИВАЮЩАЯ СПОСОБНОСТЬ: $1'],
    [/^SP:\s*(\d+)$/i, 'ОС: $1'],
    [/^(\d+)\s+SP$/i, '$1 ОС'],
    [/^Hit Points:\s*(\d+)$/i, 'Пункты здоровья: $1'],
    [/^HP:\s*(\d+)$/i, 'ПЗ: $1'],
    [/^(\d+)\s+HP$/i, '$1 ПЗ'],
    [/^Death Save Penalty:\s*(.+)$/i, 'Штраф к спасброску от смерти: $1'],
    [/^(\d+) \(Critical Roll\)\s*\n\+\s*(\d+) \(Interface\)$/i, '$1 (критический бросок)\n+ $2 (Интерфейс)'],
    [/^Turn (\d+)$/i, 'Ход $1'],
    [/^Round (\d+)$/i, 'Раунд $1'],
    [/^Day (\d+)$/i, 'День $1'],
    [/^(\d+)\s+IP$/i, '$1 ОУ'],
    [/^DV\s*(\d+)$/i, 'СЛ$1'],
    [/^(\d+)\s+XP$/i, '$1 ОП']
  ];

  function translate(s) {
    if (typeof s !== 'string' || s.length === 0) return s;

    var start = 0;
    var end = s.length;
    while (start < end && /\s/.test(s.charAt(start))) start++;
    while (end > start && /\s/.test(s.charAt(end - 1))) end--;
    if (start === end) return s;

    var core = s.slice(start, end);

    if (window.__RU_LANG__ === 'en') {
      var enHit = EN_REVERSE[core];
      if (enHit !== undefined) return s.slice(0, start) + enHit + s.slice(end);
      if (/[\u0400-\u04FF]/.test(core)) {
        for (var j = 0; j < EN_REVERSE_LIST.length; j++) {
          if (core.indexOf(EN_REVERSE_LIST[j][0]) !== -1) {
            return s.slice(0, start) + core.split(EN_REVERSE_LIST[j][0]).join(EN_REVERSE_LIST[j][1]) + s.slice(end);
          }
        }
      }
      return s;
    }

    var hit = dict[core];
    if (hit !== undefined) return s.slice(0, start) + hit + s.slice(end);

    var fashionItem = core.match(/^(Asia Pop|Bag Lady Chic|Bohemian|Businesswear|Gang Colors|Generic Chic|High Fashion|Leisurewear|Nomad Leathers|Urban Flash)\s+(Bottoms|Tops|Jacket|Footwear|Jewelry|Mirrorshades|Glasses|Contact Lenses|ContactLenses|Hats|Gloves)$/);
    if (fashionItem) {
      return s.slice(0, start) + FASHION_NAMES[fashionItem[1]] + ': ' + CLOTHING_ITEMS[fashionItem[2]] + s.slice(end);
    }
    var eurobucks = core.match(/^(\d+)\s+Eurobucks Remaining$/i);
    if (eurobucks) return s.slice(0, start) + 'Осталось евробаксов: ' + eurobucks[1] + s.slice(end);

    // The inventory empty state appends its category at runtime.
    var storePrompt = core.match(/^Press the Store button below to purchase new (.+)\.$/i);
    if (storePrompt) {
      var category = STORE_CATEGORY[storePrompt[1].toLowerCase()];
      if (category) {
        return s.slice(0, start) + 'Нажмите кнопку «Магазин» ниже, чтобы приобрести ' + category + '.' + s.slice(end);
      }
    }

    // Some labels contain a hard line break for layout; translate the flat
    // version and let the widget wrap the Russian text naturally.
    if (core.length <= 80 && core.indexOf('\n') !== -1) {
      var flat = core.replace(/\s+/g, ' ').trim();
      var flatHit = dict[flat];
      if (flatHit !== undefined) return s.slice(0, start) + flatHit + s.slice(end);
    }

    // "3d6 Handgun" / "4d6 Basic Ammo": keep the dice expression, translate
    // the trailing weapon/damage category.
    var dm = core.match(/^((?:\d+)?d\d+(?:\s*[+\-]\s*\d+)?)\s+(.+)$/i);
    if (dm) {
      var sub = dict[dm[2]];
      if (sub !== undefined) {
        sub = sub.charAt(0).toLowerCase() + sub.slice(1);
        return s.slice(0, start) + dm[1] + ' ' + sub + s.slice(end);
      }
    }

    for (var i = 0; i < RULES.length; i++) {
      var m = core.match(RULES[i][0]);
      if (m) {
        var out = RULES[i][1].replace(/\$(\d)/g, function (_, d) {
          return m[Number(d)] === undefined ? '' : m[Number(d)];
        });
        return s.slice(0, start) + out + s.slice(end);
      }
    }

    // Translate the skill name shown in parentheses, e.g. "+ 4 (Interface)".
    var pm = core.match(/^(.*?)\s*\(([^()]+)\)$/);
    if (pm) {
      var inner = dict[pm[2]];
      if (inner !== undefined) {
        return s.slice(0, start) + pm[1] + ' (' + inner + ')' + s.slice(end);
      }
    }

    if (window.__RU_COLLECT && /[A-Za-z]/.test(core) && core.length > 1) {
      try {
        if (window.__RU_MISS.size < 4000) window.__RU_MISS.add(core);
      } catch (e) {}
    }
    return s;
  }

  window.__RU_MISS = new Set();
  window.__RU_COLLECT = lang !== 'en';
  window.__tr = translate;

  var patched = false;
  function patch(ck) {
    if (patched || !ck) return;
    var PB = ck.ParagraphBuilder;
    if (!PB || !PB.prototype || typeof PB.prototype.addText !== 'function') return;
    patched = true;
    window.__ruPatched = true;

    var proto = PB.prototype;
    var orig = proto.addText;
    proto.addText = function (text) {
      try {
        return orig.call(this, translate(text));
      } catch (e) {
        return orig.call(this, text);
      }
    };
  }

  // Patch the moment the Flutter loader publishes the CanvasKit module, so
  // the very first frame is already translated.
  var ck;
  try {
    Object.defineProperty(window, 'flutterCanvasKit', {
      configurable: true,
      get: function () { return ck; },
      set: function (v) { ck = v; try { patch(v); } catch (e) {} }
    });
  } catch (e) {}

  var timer = setInterval(function () {
    var v = window.flutterCanvasKit;
    if (v) {
      patch(v);
      if (patched) clearInterval(timer);
    }
  }, 10);
})();
