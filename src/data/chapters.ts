import { 
  BookOpen, TrendingUp, Lightbulb, Dumbbell, Zap, 
  Heart, Shield, Calendar, ClipboardList, Apple,
  Brain, Users, FileText, Target, ArrowUpDown
} from "lucide-react";

export interface ChapterSection {
  id: string;
  title: string;
  content: string;
  tips?: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: typeof BookOpen;
  colorClass: string;
  sections: ChapterSection[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: "uvod",
    title: "UVOD U S&C TRENING ZA MLADE NOGOMETAŠE",
    shortTitle: "Uvod",
    description: "Svrha priručnika, LTAD model i filozofija rada s mladima",
    icon: BookOpen,
    colorClass: "chapter-intro",
    sections: [
      {
        id: "svrha",
        title: "Svrha priručnika",
        content: "Ovaj priručnik nastao je s ciljem pružanja znanstveno utemeljenih i praktično primjenjivih smjernica za S&C trening mladih nogometaša. Namijenjen je trenerima koji žele razumjeti specifičnosti rada s djecom i adolescentima.",
        bullets: [
          "Dugoročni razvoj sportaša (LTAD) kao temelj pristupa",
          "Integracija S&C-a u nogometni trening",
          "Prevencija ozljeda kroz pravilan pristup",
          "Razvoj atletskih temelja za cjeloživotno bavljenje sportom"
        ]
      },
      {
        id: "ltad",
        title: "LTAD Model",
        content: "Long-Term Athlete Development (LTAD) je okvir koji osigurava da se mladi sportaši razvijaju postupno i primjereno dobi. Model prepoznaje da djeca nisu 'mali odrasli' i zahtijevaju drugačiji pristup.",
        tips: [
          "Fokusirajte se na razvoj vještina, ne na rezultate",
          "Poštujte biološku dob, ne samo kronološku",
          "Zabava i igra moraju biti prisutni u svakom treningu"
        ],
        table: {
          headers: ["Faza", "Dob", "Fokus"],
          rows: [
            ["FUNdamentals", "6-9", "Osnove kretanja, igra, koordinacija"],
            ["Learning to Train", "9-12", "Razvoj vještina, fleksibilnost, agilnost"],
            ["Training to Train", "12-16", "Aerobna baza, snaga, brzina"],
            ["Training to Compete", "16-18", "Specifična priprema, volumen"],
            ["Training to Win", "18+", "Maksimizacija performansi"]
          ]
        }
      },
      {
        id: "ypd-model",
        title: "YPD Model (Youth Physical Development)",
        content: "Youth Physical Development (YPD) model je suvremeni, znanstveno utemeljen okvir za fizički razvoj mladih sportaša. Za razliku od tradicionalnih pristupa, YPD model naglašava da su SVE fizičke kvalitete trenabilne u svim fazama razvoja, ali s različitim prioritetima i pristupima ovisno o razvojnoj fazi.",
        bullets: [
          "YPD integrira rast, maturaciju i trenabilnost u jedinstven okvir",
          "Naglašava individualnu varijabilnost u razvoju",
          "Prepoznaje 'prozore prilagodbe' umjesto rigidnih 'kritičnih perioda'",
          "Fokusira se na dugoročni razvoj atletskih temelja"
        ],
        tips: [
          "YPD nije zamjena za LTAD, već njegova nadogradnja s većim fokusom na fizičku pripremu",
          "Uvijek prilagodite program biološkoj, ne kronološkoj dobi",
          "Pratite individualni tempo razvoja svakog sportaša"
        ]
      },
      {
        id: "ypd-principi",
        title: "Temeljni principi YPD modela",
        content: "YPD model počiva na 10 ključnih principa koji usmjeravaju rad s mladim sportašima kroz sve faze razvoja.",
        table: {
          headers: ["Princip", "Objašnjenje", "Praktična primjena"],
          rows: [
            ["1. Sve kvalitete su trenabilne", "Snaga, brzina, agilnost, izdržljivost razvijaju se u svim fazama", "Ne čekajte s treningom snage do puberteta"],
            ["2. Individualizacija je ključna", "Djeca istog uzrasta mogu biti 4-5 godina razlike u biološkoj zrelosti", "Pratite PHV, prilagodite programe individualno"],
            ["3. Tehnika prije opterećenja", "Kvaliteta pokreta temelj je za buduće napredovanje", "Savladajte obrasce bez opterećenja prije dodavanja težine"],
            ["4. Progresivno opterećenje", "Postupno povećanje zahtjeva osigurava sigurne adaptacije", "10% pravilo, mikrodoziranje novih podražaja"],
            ["5. Raznolikost stimulusa", "Više različitih sportova i aktivnosti gradi širi atletski temelj", "Višesportski pristup do U14, raznovrsne vježbe"],
            ["6. Neuromuskularni razvoj prioritet", "Neuralne adaptacije dominiraju prije puberteta", "Fokus na koordinaciju, ravnotežu, agilnost"],
            ["7. Integracija u specifični sport", "S&C mora nadopunjavati, ne zamijeniti sportski trening", "Koristite SSG, integrirajte fizičku pripremu u vještine"],
            ["8. Prevencija ozljeda", "NMT programi značajno smanjuju rizik od ozljeda", "FIFA 11+, nordics, ravnoteža - redovito i dosljedno"],
            ["9. Psihosocijalni razvoj", "Mentalno zdravlje i uživanje jednako važni kao fizički razvoj", "Zabava, autonomija, pozitivna okolina"],
            ["10. Dugoročna vizija", "Cilj je vrhunske performanse u seniorskoj dobi, ne u djetinjstvu", "Izbjegavajte ranu specijalizaciju i pretjerano natjecanje"]
          ]
        }
      },
      {
        id: "ypd-faze",
        title: "Faze YPD modela i prioriteti",
        content: "YPD model definira specifične prioritete za svaku razvojnu fazu, s naglaskom na biološku dob i individualni tempo maturacije.",
        table: {
          headers: ["Faza", "Biološka dob", "Primarni prioriteti", "Sekundarni prioriteti"],
          rows: [
            ["Pre-pubertet", "Pre-PHV (-3 do -1)", "FMS, koordinacija, agilnost, ravnoteža", "Aerobna baza kroz igru, bazična snaga"],
            ["Pubertet", "PHV (±1 godina)", "Fleksibilnost, tehnika, NMT", "Održavanje postojećih kvaliteta, smanjen volumen"],
            ["Post-pubertet", "Post-PHV (+1 do +3)", "Snaga, brzina, eksplozivnost", "Specifična izdržljivost, napredni NMT"],
            ["Kasni adolescent", "Post-PHV (+3+)", "Maksimalna snaga, sport-specifičnost", "Individualizacija prema poziciji i potrebama"]
          ]
        },
        tips: [
          "FMS (Fundamental Movement Skills) su temelj za sve buduće fizičke kvalitete",
          "Tijekom PHV-a fokus je na održavanju, ne na napredovanju",
          "Post-PHV otvara 'prozor' za značajan razvoj snage i eksplozivnosti"
        ]
      },
      {
        id: "ypd-trenabilnost",
        title: "Trenabilnost fizičkih kvaliteta kroz YPD",
        content: "YPD model napušta koncept rigidnih 'kritičnih perioda' i zamjenjuje ga konceptom 'prozora povećane prilagodbe' - perioda kada je razvoj određene kvalitete posebno učinkovit, ali ne i jedino moguć.",
        table: {
          headers: ["Kvaliteta", "Povećana prilagodba", "Napomena"],
          rows: [
            ["Fundamentalne vještine", "5-12 godina", "Kritično razdoblje - teže razvijati kasnije"],
            ["Agilnost", "Pre-PHV do PHV", "Neuralna komponenta dominira rano"],
            ["Brzina (neuralna)", "Pre-PHV", "Frekvencija koraka, koordinacija"],
            ["Brzina (strukturalna)", "Post-PHV", "Snaga, duljina koraka"],
            ["Aerobna izdržljivost", "Kontinuirano, pojačano post-PHV", "SSG pristup do PHV-a"],
            ["Mišićna snaga", "Kontinuirano, pojačano post-PHV", "Neuralna adaptacija prije, hipertrofija poslije"],
            ["Eksplozivna snaga", "Post-PHV (+12-18 mj)", "Zahtijeva bazu snage i tehnike"],
            ["Fleksibilnost", "Kontinuirano, kritično za PHV", "Aktivno održavati tijekom ubrzanog rasta"]
          ]
        },
        bullets: [
          "Sve kvalitete mogu se razvijati u svim fazama - razlikuje se samo optimalni pristup",
          "Propušteni 'prozori' ne znače propuštene mogućnosti, samo manju učinkovitost",
          "Individualni tempo maturacije određuje optimalni timing, ne kronološka dob"
        ]
      },
      {
        id: "filozofija",
        title: "Filozofija rada",
        content: "Središnja ideja ovog priručnika je da je svaki mladi sportaš individua s jedinstvenim potrebama. Trener mora prilagoditi pristup, ne očekivati da se igrač prilagodi programu.",
        bullets: [
          "Igrač uvijek na prvom mjestu",
          "Sigurnost iznad svega",
          "Razvoj karaktera jednako važan kao atletski razvoj",
          "Strpljenje - razvoj je maraton, ne sprint"
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "rast-razvoj",
    title: "RAST, RAZVOJ I MATURACIJA",
    shortTitle: "Rast i razvoj",
    description: "PHV, kronološka vs biološka dob, windows of opportunity",
    icon: TrendingUp,
    colorClass: "chapter-growth",
    sections: [
      {
        id: "phv",
        title: "Peak Height Velocity (PHV)",
        content: "PHV predstavlja period najbržeg rasta u visinu tijekom adolescencije. Identificiranje PHV-a ključno je za pravilno doziranje treninga jer tijelo prolazi kroz značajne strukturalne promjene.",
        tips: [
          "Pratite visinu mjesečno tijekom adolescencije",
          "Koristite PHV kalkulator za procjenu faze rasta",
          "Prilagodite volumen i intenzitet prema fazi"
        ],
        bullets: [
          "Pre-PHV: fokus na tehniku i koordinaciju",
          "PHV (±1 godina): smanjen volumen, fokus na fleksibilnost",
          "Post-PHV: postupno povećanje intenziteta"
        ]
      },
      {
        id: "bioloskadob",
        title: "Kronološka vs biološka dob",
        content: "Djeca istog kalendarske dobi mogu biti na potpuno različitim stupnjevima biološkog razvoja. Razlika može iznositi i do 4-5 godina u biološkoj zrelosti.",
        table: {
          headers: ["Maturacija", "Karakteristike", "Implikacije za trening"],
          rows: [
            ["Rani maturant", "Viši, jači, brži od vršnjaka", "Izbjegavati preopterećenje, raditi na tehnici"],
            ["Prosječni", "Razvoj u skladu s kronološkom dobi", "Standardni pristup prema dobi"],
            ["Kasni maturant", "Manji, slabiji od vršnjaka", "Strpljenje, fokus na vještine, psihološka podrška"]
          ]
        }
      },
      {
        id: "windows",
        title: "Prozori prilika",
        content: "Određene motoričke sposobnosti imaju optimalne periode za razvoj. Iako se mogu razvijati i izvan tih perioda, treniranje u pravo vrijeme daje najbolje rezultate.",
        table: {
          headers: ["Sposobnost", "Optimalni period", "Napomene"],
          rows: [
            ["Koordinacija", "5-12 godina", "Kritički period, teže razvijati kasnije"],
            ["Brzina", "Pre-PHV + Post-PHV", "Dva prozora: neuralni i strukturalni"],
            ["Fleksibilnost", "6-10 i PHV", "Održavati tijekom PHV-a"],
            ["Aerobna izdržljivost", "Post-PHV", "Prije PHV fokus na SSG"],
            ["Snaga", "12-18 mjeseci post-PHV", "Tek nakon temeljnog razvoja"]
          ]
        }
      }
    ]
  },
  {
    id: 3,
    slug: "principi",
    title: "TEMELJNI PRINCIPI S&C TRENINGA",
    shortTitle: "Principi",
    description: "Neuromuskularni razvoj, progresija i česti mitovi",
    icon: Lightbulb,
    colorClass: "chapter-principles",
    sections: [
      {
        id: "neuromuskularnirazvoj",
        title: "Neuromuskularni razvoj",
        content: "Kod mladih sportaša, adaptacije na trening su primarno neuralne prirode. To znači poboljšanje koordinacije, aktivacije mišića i tehnike izvođenja pokreta.",
        bullets: [
          "Neuralna adaptacija dominira prije puberteta",
          "Hipertrofija značajnija tek nakon PHV-a",
          "Kvaliteta pokreta važnija od količine opterećenja"
        ]
      },
      {
        id: "progresija",
        title: "Principi progresije",
        content: "Svaki program mora slijediti logičnu progresiju od jednostavnog prema složenom, od lakšeg prema težem. Žurba je najveći neprijatelj dugoročnog razvoja.",
        tips: [
          "10% pravilo: ne povećavajte opterećenje više od 10% tjedno",
          "Savladajte osnovne obrasce prije dodavanja opterećenja",
          "Regresija nije neuspjeh - to je prilagodba"
        ],
        table: {
          headers: ["Faza", "Fokus", "Primjer"],
          rows: [
            ["1. Stabilnost", "Kontrola tijela", "Statički plank, ravnoteža"],
            ["2. Pokretljivost", "Opseg pokreta", "Dinamičko istezanje"],
            ["3. Koordinacija", "Složeni obrasci", "Skip, lateralni pokreti"],
            ["4. Snaga", "Temeljni obrasci", "Čučanj, potisak, povlačenje"],
            ["5. Brzina/Eksplozivnost", "Brze kontrakcije", "Skokovi, sprintevi"]
          ]
        }
      },
      {
        id: "mitovi",
        title: "Česti mitovi o treningu mladih",
        content: "Brojni mitovi i dalje utječu na trenažnu praksu. Znanstvena istraživanja jasno pobijaju ove zablude.",
        table: {
          headers: ["Mit", "Istina"],
          rows: [
            ["Djeca ne smiju dizati utege", "Pravilno vođen trening snage je siguran i koristan"],
            ["Trening snage zaustavlja rast", "Nema dokaza - naprotiv, može poboljšati zdravlje kostiju"],
            ["Djeca trebaju samo igru", "Strukturirani S&C trening poboljšava atletski razvoj"],
            ["Isto kao trening odraslih, samo lakše", "Potreban je potpuno drugačiji pristup"],
            ["Istezanje sprječava ozljede", "Dinamičko zagrijavanje je učinkovitije"]
          ]
        }
      }
    ]
  },
  {
    id: 4,
    slug: "snaga",
    title: "TRENING SNAGE",
    shortTitle: "Snaga",
    description: "Smjernice po fazama razvoja i primjeri vježbi",
    icon: Dumbbell,
    colorClass: "chapter-strength",
    sections: [
      {
        id: "vaznost",
        title: "Važnost treninga snage",
        content: "Trening snage kod mladih poboljšava motoričke sposobnosti, smanjuje rizik od ozljeda i gradi temelje za buduće atletske performanse.",
        bullets: [
          "Poboljšava neuromuskularnu kontrolu",
          "Jača kosti, tetive i ligamente",
          "Povećava otpornost na ozljede",
          "Gradi samopouzdanje kroz postignuća"
        ]
      },
      {
        id: "smjernice",
        title: "Smjernice po dobi",
        content: "Pristup treningu snage mora se prilagoditi razvojnoj fazi sportaša. Evo općih smjernica:",
        table: {
          headers: ["Dob/Faza", "Fokus", "Metode", "Opterećenje"],
          rows: [
            ["U9-U12", "Obrasci pokreta", "Tjelesna težina, igre", "Vlastita težina"],
            ["U13-U15 Pre-PHV", "Tehnika i koordinacija", "Lagani otpori, elastike", "Lagano"],
            ["U13-U15 PHV", "Održavanje, fleksibilnost", "Smanjeni volumen", "Smanjeno"],
            ["U15-U17 Post-PHV", "Snaga i hipertrofija", "Slobodni utezi", "Umjereno do visoko"],
            ["U17-U19", "Maksimalna i eksplozivna snaga", "Kompleksni pokreti", "Visoko"]
          ]
        }
      },
      {
        id: "vjezbe",
        title: "Temeljne vježbe",
        content: "Fokusirajte se na višezglobne pokrete koji imitiraju zahtjeve nogometa.",
        bullets: [
          "Čučanj (goblet, prednji, stražnji)",
          "Hip hinge (rumunjski mrtvo dizanje, KB swing)",
          "Potisak (bench, military press)",
          "Povlačenje (veslanje, zgibovi)",
          "Unilateralni rad (iskoraci, split čučanj)",
          "Core stabilizacija (plank varijacije, Pallof press)"
        ],
        tips: [
          "Uvijek krenite s regresijom dok tehnika nije savršena",
          "3x8-12 ponavljanja je dobar početak",
          "Odmor 60-90 sekundi između setova"
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "brzina",
    title: "BRZINA I AKCELERACIJA",
    shortTitle: "Brzina",
    description: "Tehnika sprinta i drilovi prilagođeni uzrastu",
    icon: Zap,
    colorClass: "chapter-speed",
    sections: [
      {
        id: "komponente",
        title: "Komponente brzine u nogometu",
        content: "Brzina u nogometu je višedimenzionalna sposobnost koja uključuje vrijeme reakcije, akceleraciju, maksimalnu brzinu i agilnost.",
        bullets: [
          "Akceleracija (0-10m): najvažnija za nogomet",
          "Maksimalna brzina (30m+): rjeđe u igri",
          "Deceleracija: kritična za prevenciju ozljeda",
          "Promjena smjera: kombinacija svih komponenti"
        ]
      },
      {
        id: "tehnika",
        title: "Tehnika sprinta",
        content: "Pravilna tehnika sprinta je temelj za razvoj brzine. Fokusirajte se na:",
        tips: [
          "Nagib tijela prema naprijed tijekom akceleracije",
          "Visoki podizaj koljena (knee drive)",
          "Aktivan kontakt stopala sa podlogom",
          "Opuštena ramena i pravilna pozicija ruku"
        ],
        table: {
          headers: ["Faza sprinta", "Ključne točke", "Česte greške"],
          rows: [
            ["Start", "Eksplozivan prvi korak, nagib", "Uspravno tijelo, kratki koraci"],
            ["Akceleracija", "Postupno uspravlanje, push", "Prebrzo uspravlanje"],
            ["Max brzina", "Uspravno, visoki koraci", "Prekoračenje, napetost"],
            ["Deceleracija", "Snižavanje težišta, kontrola", "Prebrzo, loša kontrola"]
          ]
        }
      },
      {
        id: "drilovi",
        title: "Drilovi po uzrastu",
        content: "Progresija drilova za razvoj brzine prilagođena uzrastu:",
        table: {
          headers: ["Uzrast", "Drilovi", "Fokus"],
          rows: [
            ["U9-U12", "Štafete, lovice, reakcijske igre", "Zabava, osnovna tehnika"],
            ["U13-U15", "A-skip, B-skip, kratki sprintevi (10-20m)", "Tehnika, neuralna aktivacija"],
            ["U16-U19", "Resisted sprints, flying starts, COD", "Snaga-brzina, specifičnost"]
          ]
        }
      }
    ]
  },
  {
    id: 6,
    slug: "izdrzljivost",
    title: "IZDRŽLJIVOST",
    shortTitle: "Izdržljivost",
    description: "SSG, intervalni trening i aerobna baza",
    icon: Heart,
    colorClass: "chapter-endurance",
    sections: [
      {
        id: "vrste",
        title: "Vrste izdržljivosti u nogometu",
        content: "Nogomet zahtijeva mješavinu aerobnih i anaerobnih kapaciteta. Mladi igrači trebaju razviti aerobnu bazu prije specifičnog treninga.",
        bullets: [
          "Aerobna baza: temelj za oporavak i izdržljivost",
          "Intermitentna izdržljivost: simulira zahtjeve igre",
          "Anaerobna izdržljivost: sprinti, dueli, skokovi"
        ]
      },
      {
        id: "ssg",
        title: "Small-Sided Games (SSG)",
        content: "SSG su idealan način za razvoj izdržljivosti kod mladih jer kombiniraju tehničko-taktički rad s kondicijskim zahtjevima.",
        tips: [
          "Manji broj igrača = veći intenzitet",
          "Veće igralište = više trčanja",
          "Pravila modificirajte prema cilju treninga"
        ],
        table: {
          headers: ["Format", "Fokus", "Intenzitet"],
          rows: [
            ["3v3", "Tehnička brzina, agilnost", "Visok"],
            ["4v4", "Tranzicije, izdržljivost", "Visok"],
            ["6v6", "Taktičko razumijevanje", "Umjeren-visok"],
            ["8v8", "Pozicijska igra", "Umjeren"]
          ]
        }
      },
      {
        id: "intervalni",
        title: "Intervalni trening",
        content: "Za starije igrače (U16+), intervalni trening može nadopuniti SSG pristup.",
        table: {
          headers: ["Tip", "Rad:Odmor", "Ponavljanja", "Cilj"],
          rows: [
            ["HIIT kratak", "15s:15s", "2x8-10", "Anaerobna snaga"],
            ["HIIT srednji", "30s:30s", "2x6-8", "VO2max"],
            ["Extensive", "3-4min:2-3min", "3-4", "Aerobna izdržljivost"]
          ]
        }
      }
    ]
  },
  {
    id: 7,
    slug: "prevencija",
    title: "PREVENCIJA OZLJEDA I NMT",
    shortTitle: "Prevencija",
    description: "Neuromuskularni trening i struktura bloka prevencije",
    icon: Shield,
    colorClass: "chapter-injury",
    sections: [
      {
        id: "uzroci",
        title: "Najčešće ozljede mladih nogometaša",
        content: "Razumijevanje uzroka ozljeda pomaže u njihovoj prevenciji. Adolescenti su posebno ranjivi tijekom PHV-a.",
        table: {
          headers: ["Tip ozljede", "Uzrok", "Prevencija"],
          rows: [
            ["Istegnuće hamstringsa", "Slabost, disbalans, zamor", "Nordics, ekscentrični trening"],
            ["Ozljeda koljena (ACL)", "Valgus, loše doskok", "NMT, ravnoteža, tehnika"],
            ["Ozljede skočnog zgloba", "Slaba propriocepcija", "Ravnoteža, ojačanje"],
            ["Morbus Osgood-Schlatter", "PHV, preopterećenje", "Smanjeni volumen, istezanje"],
            ["Sever-ova bolest", "PHV, preopterećenje pete", "Modifikacija aktivnosti"]
          ]
        }
      },
      {
        id: "nmt",
        title: "Neuromuskularni trening (NMT)",
        content: "NMT programi poput FIFA 11+ dokazano smanjuju ozljede za 30-50%. Uključuju dinamičko zagrijavanje, ravnotežu, snagu i agilnost.",
        bullets: [
          "Provodite NMT 2-3x tjedno",
          "Trajanje: 15-20 minuta",
          "Najbolje na početku treninga",
          "Dosljednost je ključna za rezultate"
        ]
      },
      {
        id: "struktura",
        title: "Struktura preventivnog bloka",
        content: "Primjer 15-minutnog preventivnog bloka prije treninga:",
        table: {
          headers: ["Faza", "Trajanje", "Sadržaj"],
          rows: [
            ["Aktivacija", "3 min", "Laka vožnja, skip varijacije"],
            ["Dinamičko istezanje", "4 min", "Leg swings, hip circles, lunges"],
            ["Ravnoteža/Propriocepcija", "3 min", "Jednonožni stajanje, zatvorene oči"],
            ["Snaga/Stabilizacija", "3 min", "Plank, čučnjevi, nordics"],
            ["Agilnost", "2 min", "Kratki COD drilovi, reakcije"]
          ]
        },
        tips: [
          "Prilagodite intenzitet prema uzrastu",
          "Napravite rutinu - igrači će je zapamtiti",
          "Uključite zabavne elemente za mlađe uzraste"
        ]
      }
    ]
  },
  {
    id: 8,
    slug: "planiranje",
    title: "GODIŠNJE PLANIRANJE",
    shortTitle: "Planiranje",
    description: "Periodizacija: makro, mezo i mikro ciklusi",
    icon: Calendar,
    colorClass: "chapter-planning",
    sections: [
      {
        id: "periodizacija",
        title: "Osnove periodizacije",
        content: "Periodizacija osigurava sustavni razvoj uz pravilan balans opterećenja i odmora. Kod mladih je manje stroga nego kod seniora.",
        bullets: [
          "Makrociklus: godišnji plan (sezona)",
          "Mezociklus: mjesečni blokovi (4-6 tjedana)",
          "Mikrociklus: tjedni plan"
        ]
      },
      {
        id: "sezona",
        title: "Struktura sezone",
        content: "Tipična nogometna sezona s integriranim S&C komponentama:",
        table: {
          headers: ["Period", "Trajanje", "S&C Fokus"],
          rows: [
            ["Pripremni", "4-6 tjedana", "Bazična snaga, aerobna baza, hipertrofija"],
            ["Pred-natjecateljski", "2-3 tjedana", "Konverzija snage, brzina, specifičnost"],
            ["Natjecateljski", "30-40 tjedana", "Održavanje, prevencija, svježina"],
            ["Prijelazni", "2-4 tjedana", "Aktivni odmor, regeneracija, zabava"]
          ]
        }
      },
      {
        id: "mikrociklus",
        title: "Planiranje tjedna",
        content: "Primjer distribucije S&C sadržaja tijekom natjecateljskog tjedna (utakmica u subotu):",
        table: {
          headers: ["Dan", "Trening", "S&C Sadržaj"],
          rows: [
            ["Ponedjeljak", "Odmor/Regeneracija", "Lagano plivanje, mobilnost"],
            ["Utorak", "Taktički + S&C", "Snaga (70-80%), core"],
            ["Srijeda", "Tehnički", "Brzina, agilnost (kratko)"],
            ["Četvrtak", "Taktički intenzivan", "NMT, prevencija"],
            ["Petak", "Aktivacija", "Dinamičko zagrijavanje"],
            ["Subota", "UTAKMICA", "-"],
            ["Nedjelja", "Odmor", "Opcionalno: lagana aktivnost"]
          ]
        },
        tips: [
          "48-72h odmora između zahtjevnog S&C i utakmice",
          "Prilagodite prema broju utakmica tjedno",
          "U mladim uzrastima: manje volumen, više igre"
        ]
      }
    ]
  },
  {
    id: 9,
    slug: "testiranje",
    title: "TESTIRANJE I MONITORING",
    shortTitle: "Testiranje",
    description: "Testovi po uzrastima i organizacija testiranja",
    icon: ClipboardList,
    colorClass: "chapter-testing",
    sections: [
      {
        id: "svrha",
        title: "Svrha testiranja",
        content: "Testiranje omogućuje praćenje razvoja, identificiranje slabosti i prilagodbu programa. Kod mladih, primarni cilj je praćenje napretka, ne selekcija.",
        bullets: [
          "Praćenje individualnog napretka",
          "Identifikacija potreba za individualizacijom",
          "Motivacija igrača",
          "Evaluacija programa"
        ]
      },
      {
        id: "baterija",
        title: "Preporučena baterija testova",
        content: "Odabir testova ovisi o uzrastu i dostupnoj opremi:",
        table: {
          headers: ["Sposobnost", "Test", "Uzrast"],
          rows: [
            ["Brzina", "10m, 20m sprint", "Svi"],
            ["Agilnost", "505, Illinois", "U13+"],
            ["Eksplozivnost", "CMJ, SJ", "Svi"],
            ["Izdržljivost", "Yo-Yo IR1", "U13+ (IR2 za U17+)"],
            ["Snaga", "Isometrički čučanj (ako oprema)", "U15+"],
            ["Fleksibilnost", "Sit and reach", "Svi"],
            ["Ravnoteža", "Y-balance", "Svi"]
          ]
        }
      },
      {
        id: "organizacija",
        title: "Organizacija testiranja",
        content: "Praktične smjernice za efikasno testiranje:",
        tips: [
          "Testirajte 2-3x godišnje (priprema, sredina, kraj sezone)",
          "Osigurajte standardizirane uvjete",
          "Zagrijavanje mora biti identično svaki put",
          "Dokumentirajte rezultate digitalno",
          "Dajte povratnu informaciju igračima"
        ],
        bullets: [
          "Priprema: oprema, prostor, pomoćnici",
          "Zagrijavanje: 10-15 min standardizirano",
          "Redoslijed: tehnika → brzina → snaga → izdržljivost",
          "Odmor između testova: 3-5 minuta"
        ]
      }
    ]
  },
  {
    id: 10,
    slug: "prehrana",
    title: "PREHRANA I OPORAVAK",
    shortTitle: "Prehrana",
    description: "Osnovne smjernice za prehranu i regeneraciju mladih sportaša",
    icon: Apple,
    colorClass: "chapter-nutrition",
    sections: [
      {
        id: "principi",
        title: "Principi prehrane mladih sportaša",
        content: "Prehrana mladih nogometaša mora podržati rast, razvoj i atletske zahtjeve. Fokus je na kvaliteti, ne na restrikcijama.",
        bullets: [
          "Osigurati dovoljno kalorija za rast I trening",
          "Raznovrsna prehrana - svi makronutrijenti",
          "Hidratacija - 2-3L vode dnevno",
          "Izbjegavati stroge dijete ili restrikcije"
        ]
      },
      {
        id: "timing",
        title: "Timing obroka",
        content: "Pravilno vrijeme konzumacije hrane optimizira performanse i oporavak:",
        table: {
          headers: ["Vrijeme", "Što jesti", "Primjer"],
          rows: [
            ["2-3h prije treninga", "Kompleksni UH + proteini", "Tjestenina s piletinom"],
            ["1h prije", "Lagani snack", "Banana, žitna pločica"],
            ["Tijekom", "Voda (+ elektroliti ako >60min)", "-"],
            ["Unutar 30min nakon", "UH + proteini", "Čokoladno mlijeko, voće"],
            ["1-2h nakon", "Puni obrok", "Riba, riža, povrće"]
          ]
        }
      },
      {
        id: "oporavak",
        title: "Strategije oporavka",
        content: "Oporavak je jednako važan kao i trening. Mladi sportaši trebaju više sna od odraslih.",
        tips: [
          "San: 9-10 sati za adolescente, 10-12 za djecu",
          "Konzistentan raspored spavanja",
          "Izbjegavati ekrane 1h prije spavanja",
          "Lagano istezanje ili pjena valjak nakon treninga"
        ],
        table: {
          headers: ["Metoda", "Kada", "Napomene"],
          rows: [
            ["Aktivan oporavak", "Dan nakon utakmice", "Lagano trčanje, plivanje"],
            ["Istezanje", "Nakon svakog treninga", "10-15 min, svi glavni mišići"],
            ["Foam rolling", "Redovito", "2-3x tjedno, izbjegavati kosti"],
            ["Hlađenje/Zagrijavanje", "Opcionalno", "Kontrast tuširanje može pomoći"]
          ]
        }
      }
    ]
  },
  {
    id: 11,
    slug: "psihologija",
    title: "PSIHOLOŠKI ASPEKTI",
    shortTitle: "Psihologija",
    description: "Motivacija, komunikacija i mentalni razvoj",
    icon: Brain,
    colorClass: "chapter-psychology",
    sections: [
      {
        id: "motivacija",
        title: "Intrinzična motivacija",
        content: "Dugoročni uspjeh ovisi o unutarnjoj motivaciji - želji za učenjem i poboljšanjem zbog samog zadovoljstva, ne samo zbog nagrada.",
        bullets: [
          "Naglašavajte napredak, ne samo rezultate",
          "Dozvolite autonomiju u donošenju odluka",
          "Slavite trud, ne samo talent",
          "Postavite izazovne, ali dostižne ciljeve"
        ]
      },
      {
        id: "komunikacija",
        title: "Komunikacija s mladima",
        content: "Način komunikacije trenera značajno utječe na razvoj i samopouzdanje igrača.",
        tips: [
          "Koristi pozitivan jezik - što raditi, ne što NE raditi",
          "Daj specifične povratne informacije",
          "Pitaj pitanja umjesto da samo nareduješ",
          "Slušaj aktivno - daj prostora za izražavanje"
        ],
        table: {
          headers: ["Umjesto ovoga", "Reci ovako"],
          rows: [
            ["Ne žuri!", "Uzmi vremena, kontroliraj loptu"],
            ["To je bilo loše", "Sljedeći put probaj ovako..."],
            ["Moraš biti brži", "Radi na prvom koraku, bit ćeš brži"],
            ["Ne mogu vjerovati da si to promašio", "Dobra pozicija, nastavi pokušavati"]
          ]
        }
      },
      {
        id: "mentalni-razvoj",
        title: "Mentalni razvoj",
        content: "Razvoj mentalnih vještina jednako je važan kao i fizički razvoj.",
        bullets: [
          "Postavljanje ciljeva (kratkoročni i dugoročni)",
          "Vizualizacija - zamišljanje uspješne izvedbe",
          "Koncentracija - fokus na sadašnji trenutak",
          "Regulacija emocija - upravljanje stresom i pritiskom",
          "Resilijencija - vraćanje nakon neuspjeha"
        ]
      }
    ]
  },
  {
    id: 12,
    slug: "roditelji",
    title: "ULOGA RODITELJA",
    shortTitle: "Roditelji",
    description: "Podrška, česte pogreške i pozitivno okruženje",
    icon: Users,
    colorClass: "chapter-parents",
    sections: [
      {
        id: "podrska",
        title: "Pozitivna uloga roditelja",
        content: "Roditelji su ključni partneri u razvoju mladog sportaša. Njihova podrška može značajno utjecati na iskustvo i dugoročnu ljubav prema sportu.",
        bullets: [
          "Bezuvjetna podrška neovisno o rezultatima",
          "Osiguravanje logistike (prijevoz, oprema)",
          "Zdrava prehrana i rutina spavanja kod kuće",
          "Pozitivan primjer - aktivni životni stil"
        ]
      },
      {
        id: "greske",
        title: "Česte pogreške",
        content: "Neke roditeljske navike, iako možda dobronamjerne, mogu negativno utjecati na razvoj djeteta:",
        table: {
          headers: ["Pogreška", "Zašto je štetna", "Alternativa"],
          rows: [
            ["Vikanje s tribina", "Stvara pritisak i stres", "Tiho navijanje, osmijeh"],
            ["Kritiziranje nakon utakmice", "Smanjuje samopouzdanje", "Pitati: Jesi li uživao?"],
            ["Uspoređivanje s drugima", "Stvara nesigurnost", "Fokus na osobni napredak"],
            ["Pretjerana ambicija", "Djetetov sport, ne roditeljski", "Pustiti dijete da vodi"],
            ["Razgovor s trenerom tijekom treninga", "Ometa rad", "Dogovoriti sastanak"]
          ]
        }
      },
      {
        id: "komunikacija-roditelji",
        title: "Komunikacija trener-roditelji",
        content: "Jasna komunikacija između trenera i roditelja stvara povjerenje i zajednički cilj.",
        tips: [
          "Organizirajte roditeljski sastanak na početku sezone",
          "Objasnite filozofiju rada i očekivanja",
          "Budite dostupni za pitanja - ali postavite granice",
          "Dijelite resurse o razvoju mladih sportaša"
        ]
      }
    ]
  },
  {
    id: 13,
    slug: "primjeri-planova",
    title: "PRIMJERI S&C PLANOVA",
    shortTitle: "Primjeri",
    description: "Konkretni planovi za različite uzrasne skupine",
    icon: FileText,
    colorClass: "chapter-examples",
    sections: [
      {
        id: "u9-u12",
        title: "Plan: U9-U12",
        content: "Fokus: razvoj motoričkih vještina kroz igru i raznolike aktivnosti.",
        table: {
          headers: ["Komponenta", "Frekvencija", "Sadržaj"],
          rows: [
            ["Koordinacija", "Svaki trening", "Skip, ljestve, prepreke"],
            ["Ravnoteža", "2x tjedno", "Jednonožne igre, površine"],
            ["Snaga", "1-2x tjedno", "Životinjske kretnje, igre guranja"],
            ["Brzina", "2x tjedno", "Štafete, lovice, reakcije"],
            ["Fleksibilnost", "Svaki trening", "Dinamičko zagrijavanje"]
          ]
        },
        tips: [
          "Maksimalno 15-20 min strukturiranog S&C-a",
          "Integrirajte u igre - djeca ne trebaju znati da vježbaju",
          "Raznolikost je ključna - mijenjajte aktivnosti često"
        ]
      },
      {
        id: "u13-u15",
        title: "Plan: U13-U15",
        content: "Fokus: tehnika pokreta, uvod u strukturirani trening snage, praćenje PHV-a.",
        table: {
          headers: ["Komponenta", "Frekvencija", "Sadržaj"],
          rows: [
            ["Snaga", "2x tjedno", "Osnovni obrasci, lagani otpori"],
            ["Brzina", "2x tjedno", "Tehnika sprinta, akceleracija"],
            ["Agilnost", "1-2x tjedno", "COD, reakcijski drilovi"],
            ["Prevencija (NMT)", "2-3x tjedno", "FIFA 11+ prilagođen"],
            ["Fleksibilnost", "Svakodnevno", "Dinamičko + statičko"]
          ]
        },
        tips: [
          "Tijekom PHV-a smanjite volumen za 20-30%",
          "Fokus na fleksibilnost tijekom PHV-a",
          "Individualizirajte prema maturacijskom statusu"
        ]
      },
      {
        id: "u16-u19",
        title: "Plan: U16-U19",
        content: "Fokus: razvoj snage i brzine, specifična priprema za nogomet, individualizacija.",
        table: {
          headers: ["Komponenta", "Frekvencija", "Sadržaj"],
          rows: [
            ["Snaga (gym)", "2-3x tjedno", "Čučanj, mrtvo dizanje, potisak, veslanje"],
            ["Brzina/Eksplozivnost", "2x tjedno", "Sprintevi, pliometrija"],
            ["Agilnost", "1-2x tjedno", "Specifični nogometni COD"],
            ["Prevencija", "2x tjedno", "NMT, nordics, ekscentrični rad"],
            ["Izdržljivost", "1x tjedno (+SSG)", "Intervalni trening, tempo trčanja"]
          ]
        },
        tips: [
          "Periodizacija prema natjecateljskom kalendaru",
          "Individualni programi prema potrebama i poziciji",
          "Monitoring opterećenja (RPE, wellness)"
        ]
      }
    ]
  },
  {
    id: 14,
    slug: "primjena-testiranja",
    title: "PRIMJENA REZULTATA TESTIRANJA",
    shortTitle: "Primjena testova",
    description: "Interpretacija i individualizacija na temelju testova",
    icon: Target,
    colorClass: "chapter-application",
    sections: [
      {
        id: "interpretacija",
        title: "Interpretacija rezultata",
        content: "Rezultati testiranja imaju smisla samo kada se pravilno interpretiraju i primjenjuju.",
        bullets: [
          "Usporedite s prethodnim rezultatima istog igrača",
          "Koristite percentile za usporedbu s grupom",
          "Gledajte trendove, ne pojedinačne točke",
          "Kontekstualizirajte - dob, maturacija, pozicija"
        ]
      },
      {
        id: "individualizacija",
        title: "Individualizacija programa",
        content: "Rezultati testova pomažu u kreiranju individualiziranih programa:",
        table: {
          headers: ["Rezultat testa", "Interpretacija", "Akcija"],
          rows: [
            ["Nizak CMJ", "Slaba eksplozivna snaga", "Dodati pliometriju, unilateralni rad"],
            ["Loš 10m sprint", "Slaba akceleracija", "Rad na startu, snaga nogu"],
            ["Asimetrija Y-balance", "Rizik od ozljede", "Unilateralni rad, ravnoteža"],
            ["Nizak Yo-Yo", "Slaba aerobna baza", "SSG, intervalni trening"],
            ["Loša fleksibilnost", "Ograničen ROM", "Dnevno istezanje, mobilnost"]
          ]
        }
      },
      {
        id: "pracenje",
        title: "Praćenje napretka",
        content: "Sistematsko praćenje osigurava da program daje rezultate:",
        tips: [
          "Koristite jednostavne grafikone za vizualizaciju napretka",
          "Dijelite rezultate s igračima - motivira ih",
          "Revidirajte program ako nema napretka nakon 8-12 tjedana",
          "Dokumentirajte ozljede i korelaciju s rezultatima testova"
        ]
      }
    ]
  },
  {
    id: 15,
    slug: "progresije",
    title: "PROGRESIJE I REGRESIJE VJEŽBI",
    shortTitle: "Progresije",
    description: "Tablice progresija za sve temeljne obrasce pokreta",
    icon: ArrowUpDown,
    colorClass: "chapter-progressions",
    sections: [
      {
        id: "cucanj",
        title: "Progresija: Čučanj",
        content: "Od osnovnog obrasca do naprednih varijacija:",
        table: {
          headers: ["Razina", "Vježba", "Kriterij za napredak"],
          rows: [
            ["1", "Čučanj na kutiju", "10 kontroliranih ponavljanja"],
            ["2", "Goblet čučanj", "12 reps s pravilnom tehnikom"],
            ["3", "Prednji čučanj", "8 reps s kontrolom"],
            ["4", "Stražnji čučanj", "Omjer 1.0-1.5x tjelesne težine"],
            ["5", "Split čučanj, bugarski", "Napredne unilateralne varijacije"]
          ]
        }
      },
      {
        id: "hiphinge",
        title: "Progresija: Hip Hinge",
        content: "Razvoj stražnjeg lanca:",
        table: {
          headers: ["Razina", "Vježba", "Kriterij za napredak"],
          rows: [
            ["1", "Hip hinge uz zid", "Razumijevanje pokreta"],
            ["2", "KB deadlift", "12 reps s neutralnom kralježnicom"],
            ["3", "RDL s utezima", "10 reps, puni ROM"],
            ["4", "Jednonožni RDL", "8 reps svaka noga, ravnoteža"],
            ["5", "Konvencionalno mrtvo dizanje", "1.5-2.0x tjelesne težine"]
          ]
        }
      },
      {
        id: "potisak-povlacenje",
        title: "Progresija: Potisak i Povlačenje",
        content: "Razvoj gornjeg dijela tijela:",
        table: {
          headers: ["Pokret", "Razina 1", "Razina 2", "Razina 3"],
          rows: [
            ["Horizontalni potisak", "Push-up (na koljenima)", "Push-up", "Bench press"],
            ["Vertikalni potisak", "Pike push-up", "DB shoulder press", "Military press"],
            ["Horizontalno povlačenje", "TRX veslanje", "DB veslanje", "Barbell veslanje"],
            ["Vertikalno povlačenje", "Lat pulldown", "Asistirani zgibovi", "Zgibovi"]
          ]
        }
      },
      {
        id: "core-skok",
        title: "Progresija: Core i Skokovi",
        content: "Stabilizacija i eksplozivnost:",
        table: {
          headers: ["Pokret", "Razina 1", "Razina 2", "Razina 3"],
          rows: [
            ["Anti-ekstenzija", "Dead bug", "Plank", "Ab rollout"],
            ["Anti-rotacija", "Pallof hold", "Pallof press", "Chops/Lifts"],
            ["Anti-lateralna fleksija", "Side plank (koljena)", "Side plank", "Farmer's walk"],
            ["Skokovi", "Pogo skokovi", "Box jump (step down)", "CMJ, DJ"]
          ]
        },
        tips: [
          "Regresija nije korak unatrag - to je pametna prilagodba",
          "Ako tehnika pati, vratite se razinu niže",
          "Mlađi uzrasti trebaju dulje na svakoj razini",
          "Dokumentirajte na kojoj je razini svaki igrač"
        ]
      }
    ]
  }
];

export const getChapterBySlug = (slug: string): Chapter | undefined => {
  return chapters.find(ch => ch.slug === slug);
};

export const getChapterById = (id: number): Chapter | undefined => {
  return chapters.find(ch => ch.id === id);
};
