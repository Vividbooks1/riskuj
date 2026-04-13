/**
 * Databáze her Matematické riskuj (ZŠ).
 * Vygenerováno / upraveno v riskuj-editor.html — zkontroluj úlohy před hrou.
 */
window.RISKUJ_MENU_ORDER = [
  "desetinne",
  "delitelnost",
  "jednotky",
  "obsah1",
  "zlomky1",
  "pomery",
  "zlomky",
  "zaporna",
  "procenta"
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
    "title": "Zlomky 2",
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
            "q": "Najdi největší společný dělitel čísel 12 a 18.",
            "a": "6"
          },
          "4": {
            "q": "NSD (48, 72) =",
            "a": "24"
          },
          "6": {
            "q": "NSD (84, 126) =",
            "a": "42"
          }
        }
      },
      {
        "id": "d4",
        "label": "nsn",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Najdi nejmenší společný násobek čísel 4 a 6.",
            "a": "12"
          },
          "4": {
            "q": "nsn (6, 20) =",
            "a": "60"
          },
          "6": {
            "q": "nsn (24, 20) =",
            "a": "120"
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
  },
  "zlomky1": {
    "title": "Zlomky 1",
    "subtitle": "Rozšiřování, krácení, základní tvar a převody s desetinnými čísly",
    "cardBlurb": "Rozšiřování a krácení, základní tvar, zlomek a desetinné číslo.",
    "topics": [
      {
        "id": "zk1",
        "label": "Rozšiřování a krácení",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Zlomek 18/24 zkrať číslem 6.",
            "a": "3/8"
          },
          "4": {
            "q": "Zapiš zlomek 2/3 tak, aby měl ve jmenovateli číslo 15.",
            "a": "10/15"
          },
          "6": {
            "q": "Doplň číslo za otazník tak, aby platila rovnost: 8/18 = 28/?",
            "a": "63"
          }
        }
      },
      {
        "id": "zk2",
        "label": "Úprava na základní tvar",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Uprav zlomek 6/9 na základní tvar.",
            "a": "2/3"
          },
          "4": {
            "q": "Uprav zlomek 36/48 na základní tvar.",
            "a": "3/4"
          },
          "6": {
            "q": "Uprav zlomek 72/108 na základní tvar.",
            "a": "2/3"
          }
        }
      },
      {
        "id": "zk3",
        "label": "Zlomek na desetinné číslo",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Zapiš zlomek 1/5 jako desetinné číslo.",
            "a": "0,2"
          },
          "4": {
            "q": "Zapiš zlomek 11/20 jako desetinné číslo.",
            "a": "0,55"
          },
          "6": {
            "q": "Zapiš zlomek 3/8 jako desetinné číslo.",
            "a": "0,375"
          }
        }
      },
      {
        "id": "zk4",
        "label": "Desetinné číslo na zlomek",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Zapiš číslo 0,4 jako zlomek v základním tvaru.",
            "a": "2/5"
          },
          "4": {
            "q": "Zapiš číslo 0,04 jako zlomek v základním tvaru.",
            "a": "1/25"
          },
          "6": {
            "q": "Zapiš číslo 2,4 jako zlomek v základním tvaru.",
            "a": "12/5"
          }
        }
      }
    ],
    "grade": 6
  },
  "obsah1": {
    "title": "Obvod a obsah 1",
    "grade": 6,
    "cardBlurb": "Obvod a obsah čtverce a obdélníku",
    "topics": [
      {
        "id": "t1",
        "label": "Obvod čtverce",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Vypočítej obvod čtverce s délkou strany 1,2 m.",
            "a": "4,8 m nebo například 48 dm"
          },
          "4": {
            "q": "Vypočítej obvod čtverce s délkou strany 2,3 m.",
            "a": "9,2 m nebo například 92 dm"
          },
          "6": {
            "q": "Čtverec má obvod 1 m. Vypočítej délku jeho strany.",
            "a": "0,25 m nebo například 25 cm"
          }
        }
      },
      {
        "id": "t2",
        "label": "Obsah čtverce",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Vypočítej obsah čtverce s délkou strany 4 cm.",
            "a": "16 cm^2"
          },
          "4": {
            "q": "Vypočítej obsah čtverce s délkou strany 0,3 cm.",
            "a": "0,09 cm^2 nebo například 9 mm^2"
          },
          "6": {
            "q": "Obvod čtverce je 1,6 m. Kolik m^2 má obsah tohoto čtverce?",
            "a": "0,16 m^2"
          }
        }
      },
      {
        "id": "t3",
        "label": "Obvod obdélníku",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Obdélník má strany o délkách 4 dm a 5 dm. Vypočítej jeho obvod.",
            "a": "18 dm"
          },
          "4": {
            "q": "Obdélník má strany o délkách 2,2 dm a 0,8 dm. Vypočítej jeho obvod.",
            "a": "6 dm nebo například 60 cm"
          },
          "6": {
            "q": "Obdélník má obvod 12 cm a zároveň platí, že jedna z jeho stran je o 1 cm delší než druhá. Vypočítej délky jeho stran.",
            "a": "5,5 cm a 6,5 cm"
          }
        }
      },
      {
        "id": "t4",
        "label": "Obsah obdélníku",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Obdélník má strany o délkách 6 cm a 8 cm. Vypočítej jeho obsah.",
            "a": "48 cm^2"
          },
          "4": {
            "q": "Obdélník má strany o délkách 0,24 m a 2 cm. Vypočítej jeho obsah.",
            "a": "48 cm^2 nebo například 0,48 dm^2"
          },
          "6": {
            "q": "Obdélník má obsah 16 cm^2 a pro délky jeho stran platí, že jedna z jeho stran je o 6 cm delší než druhá. Vypočítej délky jeho stran.",
            "a": "2 cm a 8 cm"
          }
        }
      },
      {
        "id": "t5",
        "label": "Extra",
        "bonus": true,
        "tasks": {
          "2": {
            "q": "Napiš rozměry 2 obdélníků se stejným obsahem, ale různým obvodem.",
            "a": "Například obdélník 6 cm a 1 cm a obdélník 2 cm a 3 cm."
          },
          "4": {
            "q": "Napiš rozměry čtverce nebo obdélníku, který má obsah 16 cm^2 a nejmenší možný obvod.",
            "a": "Je to čtverec s délkou strany 4 cm."
          },
          "6": {
            "q": "Obdélník má obvod 24 cm a délky jeho stran se dají zapsat pomocí celého počtu centimetrů. Jaký minimální obsah může obdélník mít?",
            "a": "11 cm^2"
          }
        }
      }
    ]
  },
  "zaporna": {
    "title": "Záporná čísla",
    "cardBlurb": "Porovnávání, početní operace, obtížnější úlohy i s desetinnými čísly a zlomky.",
    "grade": 7,
    "topics": [
      {
        "id": "zn1",
        "label": "Porovnávání",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Seřaď čísla od nejmenšího po největší: −5; 0; −2.",
            "a": "−5 < −2 < 0"
          },
          "4": {
            "q": "Napiš jedno číslo, které je větší než –4 a menší než –7.",
            "a": "Takové číslo neexistuje."
          },
          "6": {
            "q": "Napiš jedno číslo, které je větší než –6,2 a menší než –6,1.",
            "a": "například –6,15"
          }
        }
      },
      {
        "id": "zn2",
        "label": "Sčítání a odčítání",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "−8 + 3 =",
            "a": "−5"
          },
          "4": {
            "q": "−1,6 − (−2,9) =",
            "a": "1,3"
          },
          "6": {
            "q": "−3/4 + 1/2 − (–1)/8 =",
            "a": "−1/8"
          }
        }
      },
      {
        "id": "zn3",
        "label": "Násobení a dělení",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "(−4) · 3 =",
            "a": "−12"
          },
          "4": {
            "q": "(−1,5) · (−0,4) =",
            "a": "0,6"
          },
          "6": {
            "q": "(−5/6) : (2/3) =",
            "a": "−5/4"
          }
        }
      },
      {
        "id": "zn4",
        "label": "Kombinace početních operací",
        "bonus": true,
        "tasks": {
          "2": {
            "q": "−1 + 2 · (−3) =",
            "a": "−7"
          },
          "4": {
            "q": "(−2/3 + 1) · (−6) =",
            "a": "−2"
          },
          "6": {
            "q": "−0,5 · ((−2) · (−2) − 6) – (–1) =",
            "a": "2"
          }
        }
      }
    ]
  },
  "procenta": {
    "title": "Procenta",
    "cardBlurb": "Převody, část celku, podíl v % a základ ze zadané části.",
    "grade": 7,
    "topics": [
      {
        "id": "pr1",
        "label": "Procenta, zlomky a desetinná čísla",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "Zapiš 40 % jako desetinné číslo.",
            "a": "0,4"
          },
          "4": {
            "q": "Zapiš 3/4 pomocí procent.",
            "a": "75 %"
          },
          "6": {
            "q": "Zapiš 0,2 % jako zlomek v základním tvaru.",
            "a": "1/500"
          }
        }
      },
      {
        "id": "pr2",
        "label": "Výpočet části celku",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "10 % z 900 =",
            "a": "90"
          },
          "4": {
            "q": "35 % z 200 =",
            "a": "70"
          },
          "6": {
            "q": "7,5 % z 80 =",
            "a": "6"
          }
        }
      },
      {
        "id": "pr3",
        "label": "Výpočet počtu procent",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "200 z 800 = ? %",
            "a": "25 %"
          },
          "4": {
            "q": "27 z 180 = ? %",
            "a": "15 %"
          },
          "6": {
            "q": "14 z 35 = ? %",
            "a": "40 %"
          }
        }
      },
      {
        "id": "pr4",
        "label": "Určení základu",
        "bonus": false,
        "tasks": {
          "2": {
            "q": "5 % z celku je 20. Kolik je celek?",
            "a": "400"
          },
          "4": {
            "q": "12 % z celku je 360. Kolik je celek?",
            "a": "3 000"
          },
          "6": {
            "q": "150 % z celku je 6. Kolik je celek?",
            "a": "4"
          }
        }
      }
    ]
  }
};
