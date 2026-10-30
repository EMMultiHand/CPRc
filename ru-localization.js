/* Russian runtime localization for the Cyberpunk Red Companion web build. */
(function () {
  'use strict';

  var dict = window.__RU_DICT || {};

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
    [/^DV\s*\/\s*Time$/i, 'СЛ/Время'],
    [/^(\d+)\s+Humanity$/i, 'Человечность: $1'],
    [/^(\d+)\s+Reputation$/i, 'Репутация: $1'],
    [/^(\d+)\s+LUCK$/i, 'Удача: $1'],
    [/^Netrunner Level (\d+)$/i, 'Нетраннер, уровень $1'],
    [/^(\d+)\s+Slots Remaining$/i, 'Осталось $1 слотов'],
    [/^Version ([\d.]+)$/i, 'Версия $1'],
    [/^NET Actions Per Turn:\s*(\d+)$/i, 'Сетевых действий за ход: $1'],
    [/^Stopping Power:\s*(\d+)$/i, 'Останавливающая сила: $1'],
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
    var hit = dict[core];
    if (hit !== undefined) return s.slice(0, start) + hit + s.slice(end);

    var fashionItem = core.match(/^(Asia Pop|Bag Lady Chic|Bohemian|Businesswear|Gang Colors|Generic Chic|High Fashion|Leisurewear|Nomad Leathers|Urban Flash)s+(Bottoms|Tops|Jacket|Footwear|Jewelry|Mirrorshades|Glasses|Contact Lenses|ContactLenses|Hats|Gloves)$/);
    if (fashionItem) {
      return s.slice(0, start) + FASHION_NAMES[fashionItem[1]] + ': ' + CLOTHING_ITEMS[fashionItem[2]] + s.slice(end);
    }
    var eurobucks = core.match(/^(d+)s+Eurobucks Remaining$/i);
    if (eurobucks) return s.slice(0, start) + 'Осталось евро-баксов: ' + eurobucks[1] + s.slice(end);

    // The inventory empty state appends its category at runtime.
    var storePrompt = core.match(/^Press the Store button below to purchase new (.+).$/i);
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
  window.__RU_COLLECT = true;
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
