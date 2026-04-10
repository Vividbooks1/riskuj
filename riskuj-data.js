/**
 * Databáze her Matematické riskuj (ZŠ).
 * Vygenerováno / upraveno v riskuj-editor.html — zkontroluj úlohy před hrou.
 */
window.RISKUJ_MENU_ORDER = [
  "desetinne",
  "delitelnost",
  "jednotky",
  "pomery",
  "zlomky"
];

window.RISKUJ_GAMES = {
  "desetinne": {
    "title": "Desetinná čísla",
    "subtitle": "Početní operace s desetinnými čísly",
    "cardBlurb": "Početní operace s desetinnými čísly.",
    "topics": [
      {
        "id": "p",
        "label": "Porovnávání",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Seřaď čísla od nejmenšího po největší: 1,2 ; 1,02 ; 1,15.",
            "a": "1,02 < 1,15 < 1,2"
          },
          "4": {
            "q": "Najdi jedno číslo x takové, že platí: 0,5 < x < 0,55.",
            "a": "např. x = 0,52"
          },
          "6": {
            "q": "Najdi jedno číslo x takové, že platí: 0,3 < x < 0,31.",
            "a": "např. x = 0,52"
          }
        }
      },
      {
        "id": "so",
        "label": "Sčítání a odčítání",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "2,3 + 1,4 =",
            "a": "3,7"
          },
          "4": {
            "q": "5,67 − 2,8 =",
            "a": "2,87"
          },
          "6": {
            "q": "12,05 + 3,7 − 4,125 =",
            "a": "11,625"
          }
        }
      },
      {
        "id": "n",
        "label": "Násobení",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "0,3 · 4 =",
            "a": "1,2"
          },
          "4": {
            "q": "0,12 · 0,5 =",
            "a": "0,06"
          },
          "6": {
            "q": "0,25 · 16 · 0,1 =",
            "a": "0,4"
          }
        }
      },
      {
        "id": "d",
        "label": "Dělení",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "4,8 : 2 =",
            "a": "2,4"
          },
          "4": {
            "q": "0,9 : 0,3 =",
            "a": "3"
          },
          "6": {
            "q": "6,4 : 0,16 =",
            "a": "40"
          }
        }
      },
      {
        "id": "t5",
        "label": "Kombinace operací",
        "bonus": true,
        "tasks": {
          "2": {
            "q": "0,1 + 3 · 0,2 =",
            "a": "0,7"
          },
          "4": {
            "q": "4,2 – 1,2 : 0,3 + 0,1 =",
            "a": "0,3"
          },
          "6": {
            "q": "1 : (1,6 – 0,72 : 0,6) =",
            "a": "2,5"
          }
        }
      }
    ],
    "grade": 6
  },
  "zlomky": {
    "title": "Zlomky",
    "subtitle": "Početní operace se zlomky",
    "cardBlurb": "Početní operace se zlomky.",
    "topics": [
      {
        "id": "z1",
        "label": "Porovnávání zlomků",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Co je větší: 3/5 nebo 2/3?",
            "a": "2/3"
          },
          "4": {
            "q": "Seřaď čísla od nejmenšího po největší: 5/6, 3/4, 7/12.",
            "a": "7/12 < 3/4 < 5/6."
          },
          "6": {
            "q": "Najdi jedno číslo x takové, že platí: 2/5 < x < 3/5.",
            "a": "např. 1/2"
          }
        }
      },
      {
        "id": "z2",
        "label": "Zkrácení a rozšíření",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Zkráť 16/24 na základní tvar.",
            "a": "2/3"
          },
          "4": {
            "q": "Doplň za otazník číslo tak, aby platila rovnost: 6/15 = ?/45",
            "a": "18"
          },
          "6": {
            "q": "Uprav zlomek 4/6 tak, aby měl ve jmenovateli číslo 15.",
            "a": "10/15"
          }
        }
      },
      {
        "id": "z3",
        "label": "Sčítání a odčítání",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "1/7 + 3/7 =",
            "a": "4/7"
          },
          "4": {
            "q": "2/6 – 3/9 =",
            "a": "0"
          },
          "6": {
            "q": "3/2 − 2/5 + 4/15 =",
            "a": "7/5"
          }
        }
      },
      {
        "id": "z4",
        "label": "Násobení a dělení",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "1/2 · 2/3 = ?",
            "a": "1/3"
          },
          "4": {
            "q": "6/8 · 16/18 = ?",
            "a": "2/3"
          },
          "6": {
            "q": "15/14 : 20/21 = ?",
            "a": "9/8"
          }
        }
      }
    ],
    "grade": 7
  },
  "delitelnost": {
    "title": "Dělitelnost",
    "subtitle": "Pravidla dělení, prvočísla, NSD a NSN",
    "cardBlurb": "Dělitelnost, prvočísla, násobky a dělitelé.",
    "topics": [
      {
        "id": "d1",
        "label": "Dělitelnost 2, 5, 10",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Vyber, která z následujících čísel jsou dělitelná číslem 5: 3465; 4560; 5432; 8544",
            "a": "3465 a 4560"
          },
          "4": {
            "q": "Vyber, která z následujících čísel jsou dělitelná číslem 6: 3462; 6969; 1116; 3536",
            "a": "3462 a 1116"
          },
          "6": {
            "q": "Najdi trojciferné číslo, které je dělitelné číslem 4 a číslem 6, ale není dělitelné číslem 5.",
            "a": "například 312"
          }
        }
      },
      {
        "id": "d2",
        "label": "Prvočísla a rozklad",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Napiš všechna prvočísla menší než 10",
            "a": "2; 3; 5; 7"
          },
          "4": {
            "q": "Rozlož 30 na součin prvočísel.",
            "a": "2 · 3 · 5"
          },
          "6": {
            "q": "Rozlož 540 na součin prvočísel.",
            "a": "2 · 2 · 3 · 3 · 3 · 5"
          }
        }
      },
      {
        "id": "d3",
        "label": "NSD",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "NSD čísel 12 a 18.",
            "a": "6"
          },
          "4": {
            "q": "NSD(48, 72) =",
            "a": "24"
          },
          "6": {
            "q": "NSD(84,126) =",
            "a": "42"
          }
        }
      },
      {
        "id": "d4",
        "label": "NSN",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "NSN čísel 4 a 6.",
            "a": "12"
          },
          "4": {
            "q": "NSN(6, 8) = ?",
            "a": "24"
          },
          "6": {
            "q": "Dvě tramvaje jedou v okruhu 12 a 18 minut. Za kolik minut se poprvé znovu sejdou na konečné?",
            "a": "NSN(12,18) = 36 minut."
          }
        }
      }
    ],
    "grade": 6
  },
  "jednotky": {
    "title": "Jednotky a převody",
    "subtitle": "Délka, hmotnost, objem, čas",
    "cardBlurb": "Převody jednotek délky, hmotnosti, obsahu, objemu a času.",
    "topics": [
      {
        "id": "j1",
        "label": "Délka",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Kolik cm jsou 3 m?",
            "a": "300 cm"
          },
          "4": {
            "q": "5 km a 200 m = kolik metrů?",
            "a": "5200 m"
          },
          "6": {
            "q": "Obdélník má délku 2,4 m a šířku 500 mm. Urči jeho obvod v cm.",
            "a": "580 cm"
          }
        }
      },
      {
        "id": "j2",
        "label": "Hmotnost",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "2 kg = kolik g?",
            "a": "2000 g"
          },
          "4": {
            "q": "3500 mg = kolik g?",
            "a": "3,5 g"
          },
          "6": {
            "q": "683 dag = kolik kg?",
            "a": "6,83 kg"
          }
        }
      },
      {
        "id": "j3",
        "label": "Objem",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "1 m³ = kolik je litrů?",
            "a": "1000 l"
          },
          "4": {
            "q": "350 dl = kolik je dm³?",
            "a": "35 dm³"
          },
          "6": {
            "q": "0,045 hl = kolik m³?",
            "a": "0,0045 m³"
          }
        }
      },
      {
        "id": "j4",
        "label": "Čas",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Kolik minut je 2,5 hodiny?",
            "a": "150 min"
          },
          "4": {
            "q": "Kolik sekund je půl hodiny?",
            "a": "1 800 s"
          },
          "6": {
            "q": "Film trval od 8:43 do 11:13. Kolik hodin film má?",
            "a": "2,5 h"
          }
        }
      },
      {
        "id": "t5",
        "label": "Obsah",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Kolik dm^2 mají 2 m^2?",
            "a": "200 dm^2"
          },
          "4": {
            "q": "Kolik hektarů jsou 4 km^2?",
            "a": "400 ha"
          },
          "6": {
            "q": "Vypočítej, kolik cm^2 je 0,03 m^2 + 0,2 dm^2 – 450 mm^2.",
            "a": "315,5 cm^2"
          }
        }
      }
    ],
    "grade": 6
  },
  "pomery": {
    "title": "Poměr",
    "subtitle": "Zjednodušování a dělení podle poměru",
    "cardBlurb": "Výpočty s poměrem a měřítkem mapy.",
    "topics": [
      {
        "id": "p1",
        "label": "Úprava poměru",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Zjednoduš poměr 18 : 24 na základní tvar",
            "a": "3 : 4"
          },
          "4": {
            "q": "Doplnil číslo místo otazníku tak, aby byly oba poměry shodné.\n32 : 18 a ? : 27",
            "a": "48"
          },
          "6": {
            "q": "Uprav poměr 12/15 : 0,3 na základní tvar.",
            "a": "8 : 3"
          }
        }
      },
      {
        "id": "p2",
        "label": "Měřítko mapy",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Měřítko 1 : 100 — 1 cm na mapě = kolik metrů ve skutečnosti?",
            "a": "1 m"
          },
          "4": {
            "q": "Měřítko 1 : 200 000 — 8 cm na mapě = kolik kilometrů ve skutečnosti?",
            "a": "16 km"
          },
          "6": {
            "q": "Vzdálenost je ve skutečnosti 12 km. Kolik cm je to na mapě s měřítkem 1 : 500 000?",
            "a": "2,4 cm"
          }
        }
      },
      {
        "id": "p4",
        "label": "Dělení v poměru",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Rozděl číslo 300 v poměru 1 : 2.",
            "a": "100 a 200"
          },
          "4": {
            "q": "Rozděl číslo 450 v poměru 3 : 2.",
            "a": "270 a 180"
          },
          "6": {
            "q": "Rozděl číslo 140 v poměru 16 : 8 : 4.",
            "a": "80, 40 a 20"
          }
        }
      }
    ],
    "grade": 7
  }
};
