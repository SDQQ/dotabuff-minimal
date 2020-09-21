 const heroes = [
  {
    "name": "Магине",
    "id": 1,
    "icon":'../img/hero/Anti-Mage_icon.png'
  },
  {
    "name": "Аксе",
    "id": 2,
    "icon":'../img/hero/Axe_icon.png'
  },
  {
    "name": "Бейне",
    "id": 3,
    "icon":'../img/hero/Bane_icon.png'
  },
  {
    "name": "Сикере",
    "id": 4,
    "icon":'../img/hero/Bloodseeker_icon.png'
  },
  {
    "name": "ЦМке",
    "id": 5,
    "icon":'../img/hero/Crystal_Maiden_icon.png'
  },
  {
    "name": "Дровке",
    "id": 6,
    "icon":'../img/hero/Drow_Ranger_icon.png'
  },
  {
    "name": "Шейкере",
    "id": 7,
    "icon":'../img/hero/Earthshaker_icon.png'
  },
  {
    "name": "Джагере",
    "id": 8,
    "icon":'../img/hero/Juggernaut_icon.png'
  },
  {
    "name": "Потьме",
    "id": 9,
    "icon":'../img/hero/Mirana_icon.png'
  },
  {
    "name": "СФе",
    "id": 11,
    "icon":'../img/hero/Shadow_Fiend_icon.png'
  },
  {
    "name": "Морфе",
    "id": 10,
    "icon":'../img/hero/Morphling_icon.png'
  },
  {
    "name": "Лансере",
    "id": 12,
    "icon":'../img/hero/Phantom_Lancer_icon.png'
  },
  {
    "name": "Паке",
    "id": 13,
    "icon":'../img/hero/Puck_icon.png'
  },
  {
    "name": "Падже",
    "id": 14,
    "icon":'../img/hero/Pudge_icon.png'
  },
  {
    "name": "Разоре",
    "id": 15,
    "icon":'../img/hero/Razor_icon.png'
  },
  {
    "name": "Сенд-кинге",
    "id": 16,
    "icon":'../img/hero/Sand_King_icon.png'
  },
  {
    "name": "Шторме",
    "id": 17,
    "icon":'../img/hero/Storm_Spirit_icon.png'
  },
  {
    "name": "Свене",
    "id": 18,
    "icon":'../img/hero/Sven_icon.png'
  },
  {
    "name": "Тинике",
    "id": 19,
    "icon":'../img/hero/Tiny_icon.png'
  },
  {
    "name": "Венге",
    "id": 20,
    "icon":'../img/hero/Vengeful_Spirit_icon.png'
  },
  {
    "name": "Врке",
    "id": 21,
    "icon":'../img/hero/Windranger_icon.png'
  },
  {
    "name": "Зевсе",
    "id": 22,
    "icon":'../img/hero/Zeus_icon.png'
  },
  {
    "name": "Кунке",
    "id": 23,
    "icon":'../img/hero/Kunkka_icon.png'
  },
  {
    "name": "Лине",
    "id": 25,
    "icon":'../img/hero/Lina_icon.png'
  },
  {
    "name": "Личе",
    "id": 31,
    "icon":'../img/hero/Lich_icon.png'
  },
  {
    "name": "Лионе",
    "id": 26,
    "icon":'../img/hero/Lion_icon.png'
  },
  {
    "name": "Шамане",
    "id": 27,
    "icon":'../img/hero/Shadow_Shaman_icon.png'
  },
  {
    "name": "Селедке",
    "id": 28,
    "icon":'../img/hero/Slardar_icon.png'
  },
  {
    "name": "Арбузе",
    "id": 29,
    "icon":'../img/hero/Tidehunter_icon.png'
  },
  {
    "name": "Вич-докторе",
    "id": 30,
    "icon":'../img/hero/Witch_Doctor_icon.png'
  },
  {
    "name": "Рики",
    "id": 32,
    "icon":'../img/hero/Riki_icon.png'
  },
  {
    "name": "Энигме",
    "id": 33,
    "icon":'../img/hero/Enigma_icon.png'
  },
  {
    "name": "Тинкере",
    "id": 34,
    "icon":'../img/hero/Tinker_icon.png'
  },
  {
    "name": "Снайпере",
    "id": 35,
    "icon":'../img/hero/Sniper_icon.png'
  },
  {
    "name": "Некрофосе",
    "id": 36,
    "icon":'../img/hero/Necrophos_icon.png'
  },
  {
    "name": "Варлоке",
    "id": 37,
    "icon":'../img/hero/Warlock_icon.png'
  },
  {
    "name": "Бистмастере",
    "id": 38,
    "icon":'../img/hero/Beastmaster_icon.png'
  },
  {
    "name": "Квопе",
    "id": 39,
    "icon":'../img/hero/Queen_of_Pain_icon.png'
  },
  {
    "name": "Венике",
    "id": 40,
    "icon":'../img/hero/Venomancer_icon.png'
  },
  {
    "name": "Войде",
    "id": 41,
    "icon":'../img/hero/Faceless_Void_icon.png'
  },
  {
    "name": "Папиче",
    "id": 42,
    "icon":'../img/hero/Wraith_King_icon.png'
  },
  {
    "name": "Профетке",
    "id": 43,
    "icon":'../img/hero/Death_Prophet_icon.png'
  },
  {
    "name": "Фантомке",
    "id": 44,
    "icon":'../img/hero/Phantom_Assassin_icon.png'
  },
  {
    "name": "Пугне",
    "id": 45,
    "icon":'../img/hero/Pugna_icon.png'
  },
  {
    "name": "Темпларке",
    "id": 46,
    "icon":'../img/hero/Templar_Assassin_icon.png'
  },
  {
    "name": "Вайпере",
    "id": 47,
    "icon":'../img/hero/Viper_icon.png'
  },
  {
    "name": "Луне",
    "id": 48,
    "icon":'../img/hero/Luna_icon.png'
  },
  {
    "name": "ДКе",
    "id": 49,
    "icon":'../img/hero/Dragon_Knight_icon.png'
  },
  {
    "name": "Дазле",
    "id": 50,
    "icon":'../img/hero/Dazzle_icon.png'
  },
  {
    "name": "npc_dota_hero_rattletrap",
    "id": 51,
    "icon":'../img/hero/'
  },
  {
    "name": "Лешраке",
    "id": 52,
    "icon":'../img/hero/Leshrac_icon.png'
  },
  {
    "name": "Фурионе",
    "id": 53,
    "icon":"../img/hero/Nature's_Prophet_icon.png"
  },
  {
    "name": "Гуле",
    "id": 54,
    "icon":'../img/hero/Lifestealer_icon.png'
  },
  {
    "name": "Дарксире",
    "id": 55,
    "icon":'../img/hero/Dark_Seer_icon.png'
  },
  {
    "name": "Клинкзе",
    "id": 56,
    "icon":'../img/hero/Clinkz_icon.png'
  },
  {
    "name": "Омнике",
    "id": 57,
    "icon":'../img/hero/Omniknight_icon.png'
  },
  {
    "name": "Энче",
    "id": 58,
    "icon":'../img/hero/Enchantress_icon.png'
  },
  {
    "name": "Хусике",
    "id": 59,
    "icon":'../img/hero/Huskar_icon.png'
  },
  {
    "name": "Сталкере",
    "id": 60,
    "icon":'../img/hero/Night_Stalker_icon.png'
  },
  {
    "name": "Бруде",
    "id": 61,
    "icon":'../img/hero/Broodmother_icon.png'
  },
  {
    "name": "БХе",
    "id": 62,
    "icon":'../img/hero/Bounty_Hunter_icon.png'
  },
  {
    "name": "Вивере",
    "id": 63,
    "icon":'../img/hero/Weaver_icon.png'
  },
  {
    "name": "Джакиросе",
    "id": 64,
    "icon":'../img/hero/Jakiro_icon.png'
  },
  {
    "name": "Бэтрайдере",
    "id": 65,
    "icon":'../img/hero/Batrider_icon.png'
  },
  {
    "name": "Чене",
    "id": 66,
    "icon":'../img/hero/Chen_icon.png'
  },
  {
    "name": "Спектре",
    "id": 67,
    "icon":'../img/hero/Spectre_icon.png'
  },
  {
    "name": "Думе",
    "id": 69,
    "icon":'../img/hero/Doom_icon.png'
  },
  {
    "name": "Апарате",
    "id": 68,
    "icon":'../img/hero/Ancient_Apparition_icon.png'
  },
  {
    "name": "Урсе",
    "id": 70,
    "icon":'../img/hero/Ursa_icon.png'
  },
  {
    "name": "Барыче",
    "id": 71,
    "icon":'../img/hero/Spirit_Breaker_icon.png'
  },
  {
    "name": "Гирыче",
    "id": 72,
    "icon":'../img/hero/Gyrocopter_icon.png'
  },
  {
    "name": "Алхимике",
    "id": 73,
    "icon":'../img/hero/Alchemist_icon.png'
  },
  {
    "name": "Инвокере",
    "id": 74,
    "icon":'../img/hero/Invoker_icon.png'
  },
  {
    "name": "Сайленсере",
    "id": 75,
    "icon":'../img/hero/Silencer_icon.png'
  },
  {
    "name": "Дестроере",
    "id": 76,
    "icon":'../img/hero/Outworld_Devourer_icon.png'
  },
  {
    "name": "Люкане",
    "id": 77,
    "icon":'../img/hero/Lycan_icon.png'
  },
  {
    "name": "Брюмастере",
    "id": 78,
    "icon":'../img/hero/Brewmaster_icon.png'
  },
  {
    "name": "Шадоу-демоне",
    "id": 79,
    "icon":'../img/hero/Shadow_Demon_icon.png'
  },
  {
    "name": "Лон-друиде",
    "id": 80,
    "icon":'../img/hero/Lone_Druid_icon.png'
  },
  {
    "name": "Хаос-найте",
    "id": 81,
    "icon":'../img/hero/Chaos_Knight_icon.png'
  },
  {
    "name": "Мепо",
    "id": 82,
    "icon":'../img/hero/Meepo_icon.png'
  },
  {
    "name": "Тренте",
    "id": 83,
    "icon":'../img/hero/Treant_Protector_icon.png'
  },
  {
    "name": "Огре",
    "id": 84,
    "icon":'../img/hero/Ogre_Magi_icon.png'
  },
  {
    "name": "Андаинге",
    "id": 85,
    "icon":'../img/hero/Undying_icon.png'
  },
  {
    "name": "Рубике",
    "id": 86,
    "icon":'../img/hero/Rubick_icon.png'
  },
  {
    "name": "Дизрапторе",
    "id": 87,
    "icon":'../img/hero/Disruptor_icon.png'
  },
  {
    "name": "Никсе",
    "id": 88,
    "icon":'../img/hero/Nyx_Assassin_icon.png'
  },
  {
    "name": "Наге",
    "id": 89,
    "icon":'../img/hero/Naga_Siren_icon.png'
  },
  {
    "name": "Котле",
    "id": 90,
    "icon":'../img/hero/Keeper_of_the_Light_icon.png'
  },
  {
    "name": "Виспе",
    "id": 91,
    "icon":'../img/hero/Io_icon.png'
  },
  {
    "name": "Визаже",
    "id": 92,
    "icon":'../img/hero/Visage_icon.png'
  },
  {
    "name": "Сларке",
    "id": 93,
    "icon":'../img/hero/Slark_icon.png'
  },
  {
    "name": "Медузе",
    "id": 94,
    "icon":'../img/hero/Medusa_icon.png'
  },
  {
    "name": "Троле",
    "id": 95,
    "icon":'../img/hero/Troll_Warlord_icon.png'
  },
  {
    "name": "Кенте",
    "id": 96,
    "icon":'../img/hero/Centaur_Warrunner_icon.png'
  },
  {
    "name": "Магнусе",
    "id": 97,
    "icon":'../img/hero/Magnus_icon.png'
  },
  {
    "name": "Тимбере",
    "id": 98,
    "icon":'../img/hero/Timbersaw_icon.png'
  },
  {
    "name": "Бристле",
    "id": 99,
    "icon":'../img/hero/Bristleback_icon.png'
  },
  {
    "name": "Тусике",
    "id": 100,
    "icon":'../img/hero/Tusk_icon.png'
  },
  {
    "name": "Андерлорде",
    "id": 108,
    "icon":'../img/hero/Underlord_icon.png'
  },
  {
    "name": "Скае",
    "id": 101,
    "icon":'../img/hero/Skywrath_Mage_icon.png'
  },
  {
    "name": "Абадоне",
    "id": 102,
    "icon":'../img/hero/Abaddon_icon.png'
  },
  {
    "name": "Титане",
    "id": 103,
    "icon":'../img/hero/Elder_Titan_icon.png'
  },
  {
    "name": "Легионке",
    "id": 104,
    "icon":'../img/hero/Legion_Commander_icon.png'
  },
  {
    "name": "Ембере",
    "id": 106,
    "icon":'../img/hero/Ember_Spirit_icon.png'
  },
  {
    "name": "Земеле",
    "id": 107,
    "icon":'../img/hero/Earth_Spirit_icon.png'
  },
  {
    "name": "Террорблейде",
    "id": 109,
    "icon":'../img/hero/Terrorblade_icon.png'
  },
  {
    "name": "Фениксе",
    "id": 110,
    "icon":'../img/hero/Phoenix_icon.png'
  },
  {
    "name": "Оракле",
    "id": 111,
    "icon":'../img/hero/Oracle_icon.png'
  },
  {
    "name": "Пидаре",
    "id": 105,
    "icon":'../img/hero/Techies_icon.png'
  },
  {
    "name": "Виверне",
    "id": 112,
    "icon":'../img/hero/Winter_Wyvern_icon.png'
  },
  {
    "name": "Арк-вардене",
    "id": 113,
    "icon":'../img/hero/Arc_Warden_icon.png'
  },
  {
    "name": "Мокаке",
    "id": 114,
    "icon":'../img/hero/Monkey_King_icon.png'
  },
  {
    "name": "Вилке",
    "id": 119,
    "icon":'../img/hero/Dark_Willow_icon.png'
  },
  {
    "name": "Бурундуке",
    "id": 120,
    "icon":'../img/hero/Pangolier_icon.png'
  },
  {
    "name": "Гриме",
    "id": 121,
    "icon":'../img/hero/Grimstroke_icon.png'
  },
  {
    "name": "Воидспирите",
    "id": 126,
    "icon":'../img/hero/Void_Spirit_icon.png'
  },
  {
    "name": "Бабке",
    "id": 128,
    "icon":'../img/hero/Snapfire_icon.png'
  },
  {
    "name": "Марсе",
    "id": 129,
    "icon":'../img/hero/Mars_icon.png'
  }
];


export default heroes;