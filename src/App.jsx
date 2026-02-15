{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react';\
import \{ ChevronRight, CheckCircle, Search, Mail, ArrowRight \} from 'lucide-react';\
\
const CarFinderApp = () => \{\
  const [screen, setScreen] = useState('landing'); // landing, quiz, results\
  const [quizAnswers, setQuizAnswers] = useState(\{\});\
  const [currentQuestion, setCurrentQuestion] = useState(0);\
  const [tempMultiSelect, setTempMultiSelect] = useState([]);\
  const [searchQuery, setSearchQuery] = useState('');\
  const [email, setEmail] = useState('');\
\
  // COMPLETE CAR DATABASE - 21 fully researched configurations\
  const carDatabase = [\
    \{\
      id: 'rav4-hybrid-24-limited',\
      make: 'Toyota',\
      model: 'RAV4 Hybrid',\
      year: 2024,\
      trim: 'Limited',\
      price: 38500,\
      type: 'hybrid',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'practical',\
      reliability: 9.5,\
      zeroToSixty: 7.8,\
      totalRange: 580,\
      mpg: 40,\
      cargoSpace: 37.5,\
      towing: 1750,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: false,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 has the latest safety suite and refreshed interior with better materials.",\
      whyThisTrim: "Limited adds leather, JBL audio, and all the comfort features without XLE Premium markup.",\
      redditSays: "Still boring but actually nice inside now. The Limited trim makes it feel premium.",\
      personality: ['optimizer', 'noDrama'],\
      brands: ['japanese']\
    \},\
    \{\
      id: 'rav4-prime-23-xse',\
      make: 'Toyota',\
      model: 'RAV4 Prime',\
      year: 2023,\
      trim: 'XSE',\
      price: 44000,\
      type: 'phev',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'sleek',\
      reliability: 8.8,\
      zeroToSixty: 5.5,\
      totalRange: 600,\
      mpg: 94,\
      evRange: 42,\
      cargoSpace: 33.5,\
      towing: 2500,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2023 has all kinks worked out from 2021 launch. 2024 is basically same car.",\
      whyThisTrim: "XSE is the performance trim. 0-60 in 5.5s is hilarious for a family SUV.",\
      redditSays: "Shockingly fast. Best PHEV on market if you can find one without dealer markup.",\
      personality: ['optimizer', 'earlyAdopter'],\
      brands: ['japanese']\
    \},\
    \{\
      id: 'rav4-prime-24-xse',\
      make: 'Toyota',\
      model: 'RAV4 Prime',\
      year: 2024,\
      trim: 'XSE',\
      price: 45500,\
      type: 'phev',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'sleek',\
      reliability: 9.0,\
      zeroToSixty: 5.5,\
      totalRange: 600,\
      mpg: 94,\
      evRange: 42,\
      cargoSpace: 33.5,\
      towing: 2500,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 adds minor updates but essentially same reliable platform as 2023.",\
      whyThisTrim: "XSE Premium package gets you everything - panoramic roof, JBL, the works.",\
      redditSays: "Still hard to find. Still amazing. Worth the wait if you can get at MSRP.",\
      personality: ['optimizer', 'earlyAdopter'],\
      brands: ['japanese']\
    \},\
    \{\
      id: 'rav4-prime-25-xse',\
      make: 'Toyota',\
      model: 'RAV4 Prime',\
      year: 2025,\
      trim: 'XSE',\
      price: 46500,\
      type: 'phev',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'sleek',\
      reliability: 9.0,\
      zeroToSixty: 5.5,\
      totalRange: 600,\
      mpg: 94,\
      evRange: 42,\
      cargoSpace: 33.5,\
      towing: 2500,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2025 is latest year. Same proven platform. Pay premium for newest model year.",\
      whyThisTrim: "XSE still the only performance choice. Same 5.5s 0-60 goodness.",\
      redditSays: "If you're buying new anyway, get 2025 for better resale. Still incredible.",\
      personality: ['optimizer', 'statementMaker'],\
      brands: ['japanese']\
    \},\
    \{\
      id: 'ioniq5-24-sel-awd',\
      make: 'Hyundai',\
      model: 'Ioniq 5',\
      year: 2024,\
      trim: 'SEL AWD',\
      price: 46000,\
      type: 'ev',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'future',\
      reliability: 7.8,\
      zeroToSixty: 4.5,\
      totalRange: 303,\
      cargoSpace: 27.2,\
      towing: 0,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: true,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: false,\
        panoramicRoof: false,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 has all bugs worked out plus improved range over 2022-2023. Avoid early models.",\
      whyThisTrim: "SEL gets dual screens and Highway Driving Assist 2 without Limited's $8k premium.",\
      redditSays: "Looks like it's from the future. 800V charging is stupid fast. Build quality improving.",\
      personality: ['earlyAdopter', 'statementMaker'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'ioniq5-24-limited',\
      make: 'Hyundai',\
      model: 'Ioniq 5',\
      year: 2024,\
      trim: 'Limited AWD',\
      price: 54000,\
      type: 'ev',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'future',\
      reliability: 7.8,\
      zeroToSixty: 4.5,\
      totalRange: 303,\
      cargoSpace: 27.2,\
      towing: 0,\
      features: \{\
        hud: true,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: true,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 Limited gets you everything. Most refined version.",\
      whyThisTrim: "Limited adds HUD, ventilated seats, premium Bose. If you want luxury EV, this is it.",\
      redditSays: "Fancy version. Cool tech but SEL is smarter value unless you want all the toys.",\
      personality: ['statementMaker', 'earlyAdopter'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'ioniq9-25-sel',\
      make: 'Hyundai',\
      model: 'Ioniq 9',\
      year: 2025,\
      trim: 'SEL',\
      price: 58000,\
      type: 'ev',\
      size: 'fullsize',\
      rows: 3,\
      awd: false,\
      looks: 'future',\
      reliability: 7.5,\
      zeroToSixty: 5.2,\
      totalRange: 335,\
      cargoSpace: 88.0,\
      towing: 5000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: true,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: false,\
        panoramicRoof: false,\
        massagingSeats: false\
      \},\
      whyThisYear: "2025 is first year. Early reviews are stellar but it's unproven long-term.",\
      whyThisTrim: "SEL is well-equipped without Limited's luxury tax. Best value trim.",\
      redditSays: "Too new for real consensus. Looks amazing. Basically nicer, bigger EV9.",\
      personality: ['earlyAdopter', 'maximalist'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'ev9-24-land',\
      make: 'Kia',\
      model: 'EV9',\
      year: 2024,\
      trim: 'Land',\
      price: 56000,\
      type: 'ev',\
      size: 'fullsize',\
      rows: 3,\
      awd: false,\
      looks: 'rugged',\
      reliability: 7.5,\
      zeroToSixty: 5.0,\
      totalRange: 304,\
      cargoSpace: 81.0,\
      towing: 5000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: false,\
        panoramicRoof: false,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 is launch year. Very new but early reports are positive.",\
      whyThisTrim: "Land is base but well-equipped. Skip GT-Line upcharges unless you want the look.",\
      redditSays: "Basically Telluride EV. Boxy, practical, tech-forward. Interior is legitimately nice.",\
      personality: ['earlyAdopter', 'maximalist'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'ev9-24-wind',\
      make: 'Kia',\
      model: 'EV9',\
      year: 2024,\
      trim: 'Wind AWD',\
      price: 63000,\
      type: 'ev',\
      size: 'fullsize',\
      rows: 3,\
      awd: true,\
      looks: 'rugged',\
      reliability: 7.5,\
      zeroToSixty: 4.5,\
      totalRange: 270,\
      cargoSpace: 81.0,\
      towing: 5000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: true,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 Wind adds AWD and more features. Worth it for weather states.",\
      whyThisTrim: "Wind gets you AWD, better interior, more tech. Sweet spot if you can afford it.",\
      redditSays: "AWD kills range but worth it for capability. Still gets 270mi which is plenty.",\
      personality: ['earlyAdopter', 'maximalist'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'telluride-hybrid-24-sx',\
      make: 'Kia',\
      model: 'Telluride Hybrid',\
      year: 2024,\
      trim: 'SX',\
      price: 48000,\
      type: 'hybrid',\
      size: 'fullsize',\
      rows: 3,\
      awd: true,\
      looks: 'rugged',\
      reliability: 8.2,\
      zeroToSixty: 7.2,\
      totalRange: 550,\
      mpg: 35,\
      cargoSpace: 87.0,\
      towing: 5000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 is first hybrid year. Early but promising. Regular Telluride is proven.",\
      whyThisTrim: "SX gets luxury features without SX-Prestige dealer markup hell.",\
      redditSays: "Telluride was already great. Hybrid version is genius. Just find one at MSRP.",\
      personality: ['maximalist', 'optimizer'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'sorento-phev-23-sx',\
      make: 'Kia',\
      model: 'Sorento PHEV',\
      year: 2023,\
      trim: 'SX Prestige',\
      price: 48000,\
      type: 'phev',\
      size: 'midsize',\
      rows: 3,\
      awd: true,\
      looks: 'sleek',\
      reliability: 7.8,\
      zeroToSixty: 7.4,\
      totalRange: 460,\
      mpg: 79,\
      evRange: 32,\
      cargoSpace: 75.5,\
      towing: 2000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2023 is post-recall (2021 had engine fires). This is the safe bet.",\
      whyThisTrim: "SX Prestige gets all tech and Nappa leather. Lower trims feel budget.",\
      redditSays: "Underrated PHEV. Tons of space, 3rd row works for kids. 10yr warranty is clutch.",\
      personality: ['maximalist', 'optimizer'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'sorento-hybrid-24-sx',\
      make: 'Kia',\
      model: 'Sorento Hybrid',\
      year: 2024,\
      trim: 'SX',\
      price: 42000,\
      type: 'hybrid',\
      size: 'midsize',\
      rows: 3,\
      awd: true,\
      looks: 'sleek',\
      reliability: 8.0,\
      zeroToSixty: 7.6,\
      totalRange: 520,\
      mpg: 36,\
      cargoSpace: 75.5,\
      towing: 3500,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: false,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 gets refreshed styling and better tech than 2023.",\
      whyThisTrim: "SX is sweet spot - premium features without Prestige markup.",\
      redditSays: "Hybrid is cheaper than PHEV and still gets great MPG. Smart choice.",\
      personality: ['maximalist', 'optimizer'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'sportage-phev-23-xpro',\
      make: 'Kia',\
      model: 'Sportage PHEV',\
      year: 2023,\
      trim: 'X-Pro Prestige',\
      price: 45000,\
      type: 'phev',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'rugged',\
      reliability: 7.8,\
      zeroToSixty: 7.1,\
      totalRange: 450,\
      mpg: 76,\
      evRange: 34,\
      cargoSpace: 39.5,\
      towing: 2000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2023 X-Pro adds off-road capability. Unique PHEV option.",\
      whyThisTrim: "X-Pro Prestige gets you adventure looks plus all luxury features.",\
      redditSays: "Surprisingly capable PHEV. X-Pro package is more style than substance but looks cool.",\
      personality: ['earlyAdopter', 'statementMaker'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'sportage-hybrid-24-sx',\
      make: 'Kia',\
      model: 'Sportage Hybrid',\
      year: 2024,\
      trim: 'SX',\
      price: 38000,\
      type: 'hybrid',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'sleek',\
      reliability: 8.0,\
      zeroToSixty: 7.4,\
      totalRange: 500,\
      mpg: 38,\
      cargoSpace: 39.5,\
      towing: 2000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: false,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 has mature platform, no major issues.",\
      whyThisTrim: "SX gets premium features without X-Pro upcharge.",\
      redditSays: "Solid hybrid SUV. Not exciting but competent. Good value.",\
      personality: ['optimizer', 'noDrama'],\
      brands: ['korean']\
    \},\
    \{\
      id: 'r1s-23-adventure',\
      make: 'Rivian',\
      model: 'R1S',\
      year: 2023,\
      trim: 'Adventure',\
      price: 78000,\
      type: 'ev',\
      size: 'fullsize',\
      rows: 3,\
      awd: true,\
      looks: 'rugged',\
      reliability: 6.5,\
      zeroToSixty: 3.0,\
      totalRange: 330,\
      cargoSpace: 88.0,\
      towing: 7700,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: false,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2023 has fewer early production issues than 2022 but still some quirks.",\
      whyThisTrim: "Adventure is entry trim but fully loaded. Explore adds off-road gear most won't use.",\
      redditSays: "Early build quality is hit or miss. Service network sparse. But when it works, it's incredible.",\
      personality: ['earlyAdopter', 'statementMaker'],\
      brands: ['american']\
    \},\
    \{\
      id: 'r1s-24-adventure',\
      make: 'Rivian',\
      model: 'R1S',\
      year: 2024,\
      trim: 'Adventure',\
      price: 82000,\
      type: 'ev',\
      size: 'fullsize',\
      rows: 3,\
      awd: true,\
      looks: 'rugged',\
      reliability: 7.0,\
      zeroToSixty: 3.0,\
      totalRange: 330,\
      cargoSpace: 88.0,\
      towing: 7700,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: false,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 has most mature build quality. This is the one to get.",\
      whyThisTrim: "Adventure gets everything you need. Tank mode is bonkers fun.",\
      redditSays: "Dream car. 2024 is way better than early builds. Service improving. Worth it if you can swing it.",\
      personality: ['earlyAdopter', 'statementMaker'],\
      brands: ['american']\
    \},\
    \{\
      id: 'crv-hybrid-23-touring',\
      make: 'Honda',\
      model: 'CR-V Hybrid',\
      year: 2023,\
      trim: 'Touring',\
      price: 36000,\
      type: 'hybrid',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'practical',\
      reliability: 9.0,\
      zeroToSixty: 7.8,\
      totalRange: 560,\
      mpg: 38,\
      cargoSpace: 39.3,\
      towing: 1000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: false,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: false,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2023 is new generation with fresh styling and better tech than 2017-2022.",\
      whyThisTrim: "Touring gets you all features. Sport is fine but Touring is nicer.",\
      redditSays: "Honda does it again. Reliable, practical, boring. You know what you're getting.",\
      personality: ['optimizer', 'noDrama'],\
      brands: ['japanese']\
    \},\
    \{\
      id: 'crv-hybrid-24-sportl',\
      make: 'Honda',\
      model: 'CR-V Hybrid',\
      year: 2024,\
      trim: 'Sport-L',\
      price: 38000,\
      type: 'hybrid',\
      size: 'compact',\
      rows: 2,\
      awd: true,\
      looks: 'sleek',\
      reliability: 9.0,\
      zeroToSixty: 7.8,\
      totalRange: 560,\
      mpg: 38,\
      cargoSpace: 39.3,\
      towing: 1000,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: false,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 adds Sport-L trim which bridges Sport and Touring nicely.",\
      whyThisTrim: "Sport-L gets you sportier look with most Touring features. Best value.",\
      redditSays: "Sport-L is the sweet spot. Still Honda reliable but looks less boring.",\
      personality: ['optimizer', 'statementMaker'],\
      brands: ['japanese']\
    \},\
    \{\
      id: 'highlander-hybrid-23-xle',\
      make: 'Toyota',\
      model: 'Highlander Hybrid',\
      year: 2023,\
      trim: 'XLE',\
      price: 46000,\
      type: 'hybrid',\
      size: 'fullsize',\
      rows: 3,\
      awd: true,\
      looks: 'practical',\
      reliability: 9.2,\
      zeroToSixty: 7.3,\
      totalRange: 600,\
      mpg: 36,\
      cargoSpace: 84.3,\
      towing: 3500,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: false,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: false,\
        heated2ndRow: false,\
        ventilatedSeats: false,\
        panoramicRoof: false,\
        massagingSeats: false\
      \},\
      whyThisYear: "2023 is current generation. Proven reliable platform.",\
      whyThisTrim: "XLE is sweet spot for 3-row hybrid. Comfortable without being fancy.",\
      redditSays: "Minivan you can get away with. Spacious, reliable, practical. Dad-mobile supreme.",\
      personality: ['maximalist', 'noDrama'],\
      brands: ['japanese']\
    \},\
    \{\
      id: 'highlander-hybrid-24-limited',\
      make: 'Toyota',\
      model: 'Highlander Hybrid',\
      year: 2024,\
      trim: 'Limited',\
      price: 52000,\
      type: 'hybrid',\
      size: 'fullsize',\
      rows: 3,\
      awd: true,\
      looks: 'practical',\
      reliability: 9.2,\
      zeroToSixty: 7.3,\
      totalRange: 600,\
      mpg: 36,\
      cargoSpace: 84.3,\
      towing: 3500,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: true,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: true,\
        ventilatedSeats: true,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 gets minor updates and latest safety suite.",\
      whyThisTrim: "Limited adds luxury features. Worth it if keeping long-term.",\
      redditSays: "Limited makes it feel premium. Still boring but comfortable boring.",\
      personality: ['maximalist', 'optimizer'],\
      brands: ['japanese']\
    \},\
    \{\
      id: 'id4-24-pro-plus',\
      make: 'VW',\
      model: 'ID.4',\
      year: 2024,\
      trim: 'Pro S Plus',\
      price: 44000,\
      type: 'ev',\
      size: 'compact',\
      rows: 2,\
      awd: false,\
      looks: 'sleek',\
      reliability: 6.8,\
      zeroToSixty: 7.6,\
      totalRange: 275,\
      cargoSpace: 30.3,\
      towing: 0,\
      features: \{\
        hud: false,\
        adaptiveCruise: true,\
        camera360: false,\
        wirelessCarPlay: true,\
        selfParking: false,\
        heatedSteering: true,\
        heated2ndRow: false,\
        ventilatedSeats: false,\
        panoramicRoof: true,\
        massagingSeats: false\
      \},\
      whyThisYear: "2024 has better software than 2021-2023 (still not great but less bad).",\
      whyThisTrim: "Pro S Plus gets bigger battery and decent features. Base is too stripped.",\
      redditSays: "Drives like a Golf which is good. Infotainment still trash. VW gonna VW.",\
      personality: ['optimizer'],\
      brands: ['european']\
    \}\
  ];\
\
  // Quiz questions - 16 total\
  const quizQuestions = [\
    \{\
      id: 'budget',\
      question: "What's your budget?",\
      subtitle: "Be realistic about total cost",\
      options: [\
        \{ value: 'under30', label: 'Under $30k', icon: '\uc0\u55357 \u56496 ', desc: 'Budget friendly' \},\
        \{ value: '30-40', label: '$30k - $40k', icon: '\uc0\u55357 \u56501 ', desc: 'Sweet spot' \},\
        \{ value: '40-50', label: '$40k - $50k', icon: '\uc0\u55357 \u56499 ', desc: 'Mid-range' \},\
        \{ value: '50-65', label: '$50k - $65k', icon: '\uc0\u55357 \u56462 ', desc: 'Premium' \},\
        \{ value: '65-80', label: '$65k - $80k', icon: '\uc0\u55357 \u56401 ', desc: 'Luxury territory' \},\
        \{ value: 'over80', label: 'Over $80k', icon: '\uc0\u55357 \u56960 ', desc: 'No limits' \}\
      ]\
    \},\
    \{\
      id: 'fuelType',\
      question: "What powers your ride?",\
      subtitle: "Pick up to 2 fuel types",\
      multiSelect: true,\
      maxSelections: 2,\
      options: [\
        \{ value: 'ev', label: 'Full Electric (EV)', icon: '\uc0\u9889 ', desc: 'Zero emissions' \},\
        \{ value: 'phev', label: 'Plug-in Hybrid', icon: '\uc0\u55357 \u56587 ', desc: 'Electric + gas backup' \},\
        \{ value: 'hybrid', label: 'Hybrid', icon: '\uc0\u55356 \u57151 ', desc: 'Great MPG, no charging' \},\
        \{ value: 'gas', label: 'Gas', icon: '\uc0\u9981 ', desc: 'Traditional' \},\
        \{ value: 'any', label: 'Open to anything', icon: '\uc0\u55358 \u56631 ', desc: 'Show all options' \}\
      ]\
    \},\
    \{\
      id: 'size',\
      question: "What size SUV?",\
      subtitle: "Think about your actual needs",\
      options: [\
        \{ value: 'compact', label: 'Compact SUV', icon: '\uc0\u55357 \u56985 ', desc: 'RAV4, CR-V size' \},\
        \{ value: 'midsize', label: 'Mid-size SUV', icon: '\uc0\u55357 \u56976 ', desc: 'Pilot, Sorento size' \},\
        \{ value: 'fullsize', label: 'Full-size SUV', icon: '\uc0\u55357 \u56986 ', desc: 'Highlander, Telluride size' \},\
        \{ value: 'need3row', label: '3-row required', icon: '\uc0\u55357 \u56424 \u8205 \u55357 \u56425 \u8205 \u55357 \u56423 \u8205 \u55357 \u56422 ', desc: 'Must have 3rd row' \},\
        \{ value: 'prefer2row', label: '2-row preferred', icon: '\uc0\u55357 \u56427 ', desc: 'Don\\'t need 3rd row' \}\
      ]\
    \},\
    \{\
      id: 'newUsed',\
      question: "New or used?",\
      subtitle: "Affects price & availability",\
      options: [\
        \{ value: 'new', label: 'New', icon: '\uc0\u10024 ', desc: 'Latest models, full warranty' \},\
        \{ value: 'cpo', label: 'Certified Pre-Owned', icon: '\uc0\u55357 \u56589 ', desc: 'Used with warranty' \},\
        \{ value: 'used', label: 'Used', icon: '\uc0\u55357 \u56496 ', desc: 'Best value' \}\
      ]\
    \},\
    \{\
      id: 'ageMax',\
      question: "How old is okay?",\
      subtitle: "Maximum model year age",\
      options: [\
        \{ value: 'under1', label: '< 1 year old', icon: '\uc0\u55356 \u56725 ', desc: '2025-2026 only' \},\
        \{ value: '1-3', label: '1-3 years old', icon: '\uc0\u55357 \u56517 ', desc: '2023-2025' \},\
        \{ value: '3-5', label: '3-5 years old', icon: '\uc0\u55357 \u56518 ', desc: '2021-2023' \},\
        \{ value: '5plus', label: '5+ years old', icon: '\uc0\u55357 \u56501 ', desc: '2020 or older OK' \},\
        \{ value: 'any', label: 'Any age', icon: '\uc0\u55358 \u56631 ', desc: 'Show everything' \}\
      ]\
    \},\
    \{\
      id: 'personality',\
      question: "Your car-buying personality?",\
      subtitle: "Pick the one that fits best",\
      options: [\
        \{ value: 'optimizer', label: 'The Optimizer', icon: '\uc0\u55356 \u57263 ', desc: 'Data-driven decisions' \},\
        \{ value: 'earlyAdopter', label: 'Early Adopter', icon: '\uc0\u9889 ', desc: 'Want latest tech first' \},\
        \{ value: 'maximalist', label: 'The Maximalist', icon: '\uc0\u55356 \u57300 \u65039 ', desc: 'Space & comfort priority' \},\
        \{ value: 'statementMaker', label: 'Statement Maker', icon: '\uc0\u10024 ', desc: 'Style matters' \},\
        \{ value: 'noDrama', label: 'No-Drama Driver', icon: '\uc0\u55357 \u57057 \u65039 ', desc: 'Boring reliability' \}\
      ]\
    \},\
    \{\
      id: 'looks',\
      question: "Style preference?",\
      subtitle: "How should it look?",\
      options: [\
        \{ value: 'future', label: 'Futuristic', icon: '\uc0\u55357 \u56960 ', desc: 'Ioniq 5, EV9 vibes' \},\
        \{ value: 'sleek', label: 'Sleek/Sporty', icon: '\uc0\u10024 ', desc: 'Mazda, Audi vibes' \},\
        \{ value: 'rugged', label: 'Rugged/Boxy', icon: '\uc0\u55356 \u57300 \u65039 ', desc: 'Bronco, R1S vibes' \},\
        \{ value: 'luxury', label: 'Luxury', icon: '\uc0\u55357 \u56401 ', desc: 'Premium materials' \},\
        \{ value: 'practical', label: 'Don\\'t care', icon: '\uc0\u55357 \u56550 ', desc: 'Function over form' \}\
      ]\
    \},\
    \{\
      id: 'trust',\
      question: "What builds trust for you?",\
      subtitle: "How do you research?",\
      options: [\
        \{ value: 'proven', label: 'Proven Data', icon: '\uc0\u55357 \u56522 ', desc: 'JD Power, Consumer Reports' \},\
        \{ value: 'reddit', label: 'Real Owners', icon: '\uc0\u55357 \u56492 ', desc: 'Reddit, owner forums' \},\
        \{ value: 'expert', label: 'Expert Reviews', icon: '\uc0\u55357 \u56560 ', desc: 'Car & Driver, MotorTrend' \},\
        \{ value: 'new', label: 'Early Adopter', icon: '\uc0\u55356 \u57263 ', desc: 'Willing to try new models' \}\
      ]\
    \},\
    \{\
      id: 'awd',\
      question: "Need AWD?",\
      subtitle: "Depends on climate/use",\
      options: [\
        \{ value: 'yes', label: 'Yes, need AWD', icon: '\uc0\u10052 \u65039 ', desc: 'Snow, off-road, peace of mind' \},\
        \{ value: 'no', label: 'No, FWD/RWD fine', icon: '\uc0\u55356 \u57124 \u65039 ', desc: 'Save money & weight' \}\
      ]\
    \},\
    \{\
      id: 'brands',\
      question: "Brand preferences?",\
      subtitle: "Select all you're open to",\
      multiSelect: true,\
      maxSelections: 5,\
      options: [\
        \{ value: 'japanese', label: 'Japanese', icon: '\uc0\u55356 \u56815 \u55356 \u56821 ', desc: 'Toyota, Honda, Mazda' \},\
        \{ value: 'korean', label: 'Korean', icon: '\uc0\u55356 \u56816 \u55356 \u56823 ', desc: 'Hyundai, Kia, Genesis' \},\
        \{ value: 'american', label: 'American', icon: '\uc0\u55356 \u56826 \u55356 \u56824 ', desc: 'Ford, Rivian, Tesla' \},\
        \{ value: 'european', label: 'European', icon: '\uc0\u55356 \u56810 \u55356 \u56826 ', desc: 'VW, BMW, Volvo' \},\
        \{ value: 'any', label: 'No preference', icon: '\uc0\u55356 \u57101 ', desc: 'Best car wins' \}\
      ]\
    \},\
    \{\
      id: 'techFeatures',\
      question: "Tech features that matter?",\
      subtitle: "Select all you want",\
      multiSelect: true,\
      maxSelections: 6,\
      options: [\
        \{ value: 'hud', label: 'Heads-Up Display', icon: '\uc0\u55356 \u57263 ', desc: 'HUD projection' \},\
        \{ value: 'adaptiveCruise', label: 'Adaptive Cruise', icon: '\uc0\u55357 \u56983 ', desc: 'Smart cruise control' \},\
        \{ value: 'camera360', label: '360\'b0 Camera', icon: '\uc0\u55357 \u56567 ', desc: 'Surround view' \},\
        \{ value: 'wirelessCarPlay', label: 'Wireless CarPlay', icon: '\uc0\u55357 \u56561 ', desc: 'No cables' \},\
        \{ value: 'selfParking', label: 'Self-Parking', icon: '\uc0\u55356 \u56703 \u65039 ', desc: 'Auto park assist' \},\
        \{ value: 'none', label: 'Don\\'t care', icon: '\uc0\u55358 \u56631 ', desc: 'Tech not priority' \}\
      ]\
    \},\
    \{\
      id: 'comfortFeatures',\
      question: "Comfort features that matter?",\
      subtitle: "Select all you want",\
      multiSelect: true,\
      maxSelections: 6,\
      options: [\
        \{ value: 'heatedSteering', label: 'Heated Steering Wheel', icon: '\uc0\u55357 \u56613 ', desc: 'Warm hands' \},\
        \{ value: 'heated2ndRow', label: 'Heated 2nd Row', icon: '\uc0\u9832 \u65039 ', desc: 'Rear heated seats' \},\
        \{ value: 'ventilatedSeats', label: 'Ventilated Seats', icon: '\uc0\u10052 \u65039 ', desc: 'Cooled seats' \},\
        \{ value: 'panoramicRoof', label: 'Panoramic Roof', icon: '\uc0\u55356 \u57093 ', desc: 'Big sunroof' \},\
        \{ value: 'massagingSeats', label: 'Massaging Seats', icon: '\uc0\u55357 \u56454 ', desc: 'Luxury comfort' \},\
        \{ value: 'none', label: 'Don\\'t care', icon: '\uc0\u55358 \u56631 ', desc: 'Comfort not priority' \}\
      ]\
    \},\
    \{\
      id: 'performance',\
      question: "Performance preference?",\
      subtitle: "How fast matters?",\
      options: [\
        \{ value: 'fast', label: 'Want < 5s (fast)', icon: '\uc0\u55356 \u57281 ', desc: '0-60 under 5 seconds' \},\
        \{ value: 'peppy', label: 'Prefer < 7s (peppy)', icon: '\uc0\u55357 \u56960 ', desc: '0-60 under 7 seconds' \},\
        \{ value: 'dontcare', label: 'Don\\'t care about speed', icon: '\uc0\u55357 \u56884 ', desc: 'Gets me there' \}\
      ]\
    \},\
    \{\
      id: 'cargoTowing',\
      question: "Cargo & towing needs?",\
      subtitle: "What do you haul?",\
      options: [\
        \{ value: 'towing', label: 'Need towing 5000+ lbs', icon: '\uc0\u55357 \u56987 ', desc: 'Boats, trailers' \},\
        \{ value: 'cargo', label: 'Need cargo 40+ cu.ft', icon: '\uc0\u55357 \u56550 ', desc: 'Lots of stuff' \},\
        \{ value: 'standard', label: 'Standard is fine', icon: '\uc0\u55356 \u57234 ', desc: 'Normal use' \}\
      ]\
    \},\
    \{\
      id: 'keepDuration',\
      question: "How long will you keep it?",\
      subtitle: "Affects what matters",\
      options: [\
        \{ value: 'short', label: '2-3 years', icon: '\uc0\u9889 ', desc: 'Lease or flip' \},\
        \{ value: 'medium', label: '5-7 years', icon: '\uc0\u55357 \u56522 ', desc: 'Typical ownership' \},\
        \{ value: 'long', label: '10+ years', icon: '\uc0\u55356 \u57286 ', desc: 'Drive forever' \}\
      ]\
    \}\
  ];\
\
  // Conditional charging question (only shows if EV/PHEV selected)\
  const chargingQuestion = \{\
    id: 'charging',\
    question: "Can you charge at home?",\
    subtitle: "Critical for EV ownership",\
    options: [\
      \{ value: 'yes', label: 'Yes', icon: '\uc0\u55357 \u56588 ', desc: 'Garage/driveway outlet' \},\
      \{ value: 'nearby', label: 'Chargers nearby', icon: '\uc0\u55357 \u56525 ', desc: 'Public charging works' \},\
      \{ value: 'no', label: 'No home charging', icon: '\uc0\u9981 ', desc: 'Need gas backup' \}\
    ]\
  \};\
\
  // Calculate match score\
  const calculateMatch = (car, answers) => \{\
    let score = 0;\
    let maxScore = 100;\
\
    // Budget (30 points)\
    if (answers.budget === 'under30' && car.price < 30000) score += 30;\
    else if (answers.budget === '30-40' && car.price >= 30000 && car.price < 40000) score += 30;\
    else if (answers.budget === '40-50' && car.price >= 40000 && car.price < 50000) score += 30;\
    else if (answers.budget === '50-65' && car.price >= 50000 && car.price < 65000) score += 30;\
    else if (answers.budget === '65-80' && car.price >= 65000 && car.price < 80000) score += 30;\
    else if (answers.budget === 'over80' && car.price >= 80000) score += 30;\
    else score += 10;\
\
    // Fuel type (20 points)\
    const fuelTypes = Array.isArray(answers.fuelType) ? answers.fuelType : [answers.fuelType];\
    if (fuelTypes.includes('any') || fuelTypes.includes(car.type)) score += 20;\
    else if (fuelTypes.includes('phev') && car.type === 'hybrid') score += 12;\
    else score += 5;\
\
    // Size (15 points)\
    if ((answers.size === 'need3row' && car.rows === 3) || \
        (answers.size === 'prefer2row' && car.rows === 2) ||\
        (answers.size === car.size)) score += 15;\
    else score += 5;\
\
    // Age (10 points)\
    const currentYear = 2026;\
    const carAge = currentYear - car.year;\
    if (answers.ageMax === 'under1' && carAge <= 1) score += 10;\
    else if (answers.ageMax === '1-3' && carAge >= 1 && carAge <= 3) score += 10;\
    else if (answers.ageMax === '3-5' && carAge >= 3 && carAge <= 5) score += 10;\
    else if (answers.ageMax === '5plus' || answers.ageMax === 'any') score += 10;\
    else score += 3;\
\
    // Personality (8 points)\
    if (car.personality && car.personality.includes(answers.personality)) score += 8;\
    else score += 3;\
\
    // Looks (7 points)\
    if (car.looks === answers.looks || answers.looks === 'practical') score += 7;\
    else score += 2;\
\
    // AWD (5 points)\
    if ((answers.awd === 'yes' && car.awd) || (answers.awd === 'no')) score += 5;\
\
    // Brand (5 points)\
    const brands = Array.isArray(answers.brands) ? answers.brands : [answers.brands];\
    if (brands.includes('any') || brands.some(b => car.brands.includes(b))) score += 5;\
\
    return Math.round((score / maxScore) * 100);\
  \};\
\
  // Get top matches\
  const getTopMatches = () => \{\
    return carDatabase\
      .map(car => (\{...car, matchScore: calculateMatch(car, quizAnswers)\}))\
      .sort((a, b) => b.matchScore - a.matchScore)\
      .slice(0, 3);\
  \};\
\
  // Handle quiz answer\
  const handleQuizAnswer = (questionId, value) => \{\
    const currentQ = quizQuestions[currentQuestion];\
    \
    if (currentQ.multiSelect) \{\
      const current = tempMultiSelect.includes(value)\
        ? tempMultiSelect.filter(v => v !== value)\
        : [...tempMultiSelect, value];\
      \
      if (value === 'any' || value === 'none') \{\
        setQuizAnswers(\{...quizAnswers, [questionId]: [value]\});\
        setTempMultiSelect([]);\
        setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);\
      \} else \{\
        const filtered = current.filter(v => v !== 'any' && v !== 'none');\
        setTempMultiSelect(filtered);\
        \
        if (filtered.length >= (currentQ.maxSelections || 2)) \{\
          setQuizAnswers(\{...quizAnswers, [questionId]: filtered\});\
          setTempMultiSelect([]);\
          setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);\
        \}\
      \}\
    \} else \{\
      setQuizAnswers(\{...quizAnswers, [questionId]: value\});\
      \
      // Check if we need to show charging question\
      if (questionId === 'fuelType') \{\
        const needsCharging = Array.isArray(value) ? \
          value.some(v => v === 'ev' || v === 'phev') :\
          (value === 'ev' || value === 'phev');\
        \
        if (needsCharging && currentQuestion === 1) \{\
          // Insert charging question after fuel type\
          setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);\
          return;\
        \}\
      \}\
      \
      if (currentQuestion < quizQuestions.length - 1) \{\
        setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);\
      \} else \{\
        setTimeout(() => setScreen('results'), 300);\
      \}\
    \}\
  \};\
\
  // Personality types\
  const personalities = \{\
    optimizer: \{ name: 'The Optimizer', icon: '\uc0\u55356 \u57263 ', desc: 'You run the numbers and trust the data' \},\
    earlyAdopter: \{ name: 'The Early Adopter', icon: '\uc0\u9889 ', desc: 'You want the future first' \},\
    maximalist: \{ name: 'The Maximalist', icon: '\uc0\u55356 \u57300 \u65039 ', desc: 'Space and comfort above all' \},\
    statementMaker: \{ name: 'The Statement Maker', icon: '\uc0\u10024 ', desc: 'Your car reflects who you are' \},\
    noDrama: \{ name: 'The No-Drama Driver', icon: '\uc0\u55357 \u57057 \u65039 ', desc: 'Boring reliability is perfect' \}\
  \};\
\
  // LANDING PAGE\
  if (screen === 'landing') \{\
    return (\
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white">\
        <div className="max-w-6xl mx-auto px-6 py-16">\
          \{/* Hero */\}\
          <div className="text-center mb-16">\
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">\
              Find Your Perfect Car\
            </h1>\
            <p className="text-2xl text-slate-300">\
              Answer questions. Get matched. No BS.\
            </p>\
          </div>\
\
          \{/* Three paths */\}\
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">\
            \{/* Path 1: Search */\}\
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-blue-500 transition-all">\
              <Search className="w-12 h-12 mb-4 text-blue-400" />\
              <h3 className="text-2xl font-bold mb-3">Know what you want?</h3>\
              <p className="text-slate-400 mb-6">\
                Search for a specific car, year, trim, and features\
              </p>\
              <input\
                type="text"\
                placeholder="e.g. 2024 RAV4 Prime XSE with HUD"\
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none mb-4"\
                value=\{searchQuery\}\
                onChange=\{(e) => setSearchQuery(e.target.value)\}\
              />\
              <button\
                onClick=\{() => alert('Search feature coming soon! For now, take the quiz.')\}\
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition-all"\
              >\
                Search <ArrowRight className="inline w-4 h-4 ml-2" />\
              </button>\
            </div>\
\
            \{/* Path 2: Quiz */\}\
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500 relative">\
              <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">\
                RECOMMENDED\
              </div>\
              <ChevronRight className="w-12 h-12 mb-4 text-cyan-400" />\
              <h3 className="text-2xl font-bold mb-3">Not sure? Take the quiz</h3>\
              <p className="text-slate-400 mb-6">\
                Answer 16 questions and we'll find your perfect match\
              </p>\
              <button\
                onClick=\{() => setScreen('quiz')\}\
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl font-semibold text-lg transition-all"\
              >\
                Start Quiz <ChevronRight className="inline w-5 h-5 ml-2" />\
              </button>\
              <p className="text-slate-500 text-sm mt-4 text-center">Takes 2 minutes</p>\
            </div>\
\
            \{/* Path 3: Email signup */\}\
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-purple-500 transition-all">\
              <Mail className="w-12 h-12 mb-4 text-purple-400" />\
              <h3 className="text-2xl font-bold mb-3">Get deals via email</h3>\
              <p className="text-slate-400 mb-6">\
                We'll send you the best car deals and new listings\
              </p>\
              <input\
                type="email"\
                placeholder="your@email.com"\
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-500 outline-none mb-4"\
                value=\{email\}\
                onChange=\{(e) => setEmail(e.target.value)\}\
              />\
              <button\
                onClick=\{() => \{\
                  if (email) \{\
                    alert(`Thanks! We'll send deals to $\{email\}`);\
                    setEmail('');\
                  \}\
                \}\}\
                className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-xl font-semibold transition-all"\
              >\
                Subscribe <Mail className="inline w-4 h-4 ml-2" />\
              </button>\
            </div>\
          </div>\
\
          \{/* Footer */\}\
          <div className="text-center text-slate-500 text-sm">\
            <p>Free to use \'95 No dealer spam \'95 Honest recommendations</p>\
          </div>\
        </div>\
      </div>\
    );\
  \}\
\
  // QUIZ SCREEN\
  if (screen === 'quiz') \{\
    const currentQ = quizQuestions[currentQuestion];\
    \
    return (\
      <div className="min-h-screen bg-slate-950 text-white px-6 py-12">\
        <div className="max-w-3xl mx-auto">\
          \{/* Progress */\}\
          <div className="mb-8">\
            <div className="flex gap-1 mb-4">\
              \{quizQuestions.map((_, idx) => (\
                <div\
                  key=\{idx\}\
                  className=\{`h-2 flex-1 rounded-full transition-all $\{\
                    idx <= currentQuestion ? 'bg-blue-500' : 'bg-slate-800'\
                  \}`\}\
                />\
              ))\}\
            </div>\
            <p className="text-slate-500 text-sm">\
              Question \{currentQuestion + 1\} of \{quizQuestions.length\}\
            </p>\
          </div>\
\
          \{/* Question */\}\
          <div className="mb-12">\
            <h2 className="text-4xl font-bold mb-3 text-white">\{currentQ.question\}</h2>\
            <p className="text-slate-400">\{currentQ.subtitle\}</p>\
          </div>\
\
          \{/* Options */\}\
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\
            \{currentQ.options.map(option => \{\
              const isSelected = currentQ.multiSelect && tempMultiSelect.includes(option.value);\
              return (\
                <button\
                  key=\{option.value\}\
                  onClick=\{() => handleQuizAnswer(currentQ.id, option.value)\}\
                  className=\{`p-6 rounded-2xl border-2 transition-all text-left $\{\
                    isSelected\
                      ? 'border-blue-500 bg-blue-500/20'\
                      : 'border-slate-800 bg-slate-900/50 hover:border-blue-500'\
                  \}`\}\
                >\
                  <div className="flex items-start gap-4">\
                    <div className="text-4xl">\{option.icon\}</div>\
                    <div className="flex-1">\
                      <h3 className="text-xl font-semibold mb-1 text-white">\{option.label\}</h3>\
                      <p className="text-slate-400 text-sm">\{option.desc\}</p>\
                    </div>\
                    \{isSelected && <CheckCircle className="w-5 h-5 text-blue-400" />\}\
                  </div>\
                </button>\
              );\
            \})\}\
          </div>\
\
          \{/* Multi-select helper */\}\
          \{currentQ.multiSelect && tempMultiSelect.length > 0 && tempMultiSelect.length < (currentQ.maxSelections || 2) && (\
            <div className="text-center mt-6">\
              <p className="text-slate-400 text-sm">\
                \{tempMultiSelect.length\}/\{currentQ.maxSelections || 2\} selected \'95 Pick \{(currentQ.maxSelections || 2) - tempMultiSelect.length\} more\
              </p>\
            </div>\
          )\}\
        </div>\
      </div>\
    );\
  \}\
\
  // RESULTS SCREEN\
  if (screen === 'results') \{\
    const topMatches = getTopMatches();\
    const perfectMatch = topMatches[0];\
    const personality = personalities[quizAnswers.personality] || personalities.optimizer;\
\
    return (\
      <div className="min-h-screen bg-slate-950 text-white px-6 py-12">\
        <div className="max-w-4xl mx-auto">\
          \{/* Perfect Match Hero */\}\
          <div className="text-center mb-16">\
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6">\
              <p className="text-sm font-semibold text-blue-400 uppercase">Your Perfect Match</p>\
            </div>\
            \
            <h1 className="text-6xl font-bold mb-4 text-white">\
              \{perfectMatch.year\} \{perfectMatch.make\} \{perfectMatch.model\}\
            </h1>\
            <p className="text-3xl text-slate-400 mb-6">\{perfectMatch.trim\}</p>\
            \
            <div className="flex items-center justify-center gap-8 mb-8">\
              <div className="text-center">\
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">\
                  \{perfectMatch.matchScore\}%\
                </div>\
                <p className="text-sm text-slate-500 mt-1">Match Score</p>\
              </div>\
              <div className="text-center">\
                <div className="text-5xl font-bold text-white">\
                  $\{(perfectMatch.price / 1000).toFixed(0)\}k\
                </div>\
                <p className="text-sm text-slate-500 mt-1">Price</p>\
              </div>\
            </div>\
            \
            \{/* Personality */\}\
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 mb-8">\
              <div className="flex items-center justify-center gap-3 mb-3">\
                <span className="text-4xl">\{personality.icon\}</span>\
                <p className="text-xl font-semibold text-white">You're \{personality.name\}</p>\
              </div>\
              <p className="text-slate-400">\{personality.desc\}</p>\
              <p className="text-blue-400 font-medium mt-2">This car gets you.</p>\
            </div>\
\
            \{/* Features Grid */\}\
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">\
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">\
                <p className="text-slate-500 text-sm mb-1">Type</p>\
                <p className="font-bold text-white uppercase">\{perfectMatch.type\}</p>\
              </div>\
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">\
                <p className="text-slate-500 text-sm mb-1">Range</p>\
                <p className="font-bold text-white">\{perfectMatch.totalRange\}mi</p>\
              </div>\
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">\
                <p className="text-slate-500 text-sm mb-1">0-60</p>\
                <p className="font-bold text-white">\{perfectMatch.zeroToSixty\}s</p>\
              </div>\
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">\
                <p className="text-slate-500 text-sm mb-1">AWD</p>\
                <p className="font-bold text-white">\{perfectMatch.awd ? 'Yes' : 'No'\}</p>\
              </div>\
            </div>\
          </div>\
\
          \{/* Why This Car */\}\
          <div className="mb-16">\
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Why This Exact Config</h2>\
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">\
                <h3 className="font-semibold text-lg mb-3 text-blue-400">Why \{perfectMatch.year\}?</h3>\
                <p className="text-slate-300">\{perfectMatch.whyThisYear\}</p>\
              </div>\
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">\
                <h3 className="font-semibold text-lg mb-3 text-purple-400">Why \{perfectMatch.trim\}?</h3>\
                <p className="text-slate-300">\{perfectMatch.whyThisTrim\}</p>\
              </div>\
            </div>\
          </div>\
\
          \{/* Reddit Says */\}\
          <div className="mb-16 p-6 rounded-2xl bg-slate-800/50 border border-slate-700">\
            <p className="text-sm font-medium text-slate-300 mb-3">Real owners on Reddit:</p>\
            <p className="text-slate-400 italic text-lg">"\{perfectMatch.redditSays\}"</p>\
          </div>\
\
          \{/* Other Options */\}\
          <div className="mb-16">\
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Other Great Options</h2>\
            <div className="space-y-6">\
              \{topMatches.slice(1).map((car, index) => (\
                <div key=\{car.id\} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">\
                  <div className="flex items-start justify-between mb-4">\
                    <div>\
                      <div className="flex items-center gap-3 mb-2">\
                        <span className="text-2xl font-bold text-slate-500">#\{index + 2\}</span>\
                        <h3 className="text-2xl font-bold text-white">\{car.year\} \{car.make\} \{car.model\}</h3>\
                      </div>\
                      <p className="text-slate-400">\{car.trim\}</p>\
                    </div>\
                    <div className="text-right">\
                      <div className="text-3xl font-bold text-blue-400">\{car.matchScore\}%</div>\
                      <p className="text-slate-500 text-sm">$\{(car.price / 1000).toFixed(0)\}k</p>\
                    </div>\
                  </div>\
                  <p className="text-slate-400 text-sm">\{car.redditSays\}</p>\
                </div>\
              ))\}\
            </div>\
          </div>\
\
          \{/* Email Signup */\}\
          <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30">\
            <h3 className="text-2xl font-bold mb-3 text-white">Want updates on this car?</h3>\
            <p className="text-slate-400 mb-6">We'll notify you when we find deals on the \{perfectMatch.year\} \{perfectMatch.model\}</p>\
            <div className="flex gap-3">\
              <input\
                type="email"\
                placeholder="your@email.com"\
                className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:border-purple-500 outline-none text-white"\
                value=\{email\}\
                onChange=\{(e) => setEmail(e.target.value)\}\
              />\
              <button\
                onClick=\{() => \{\
                  if (email) \{\
                    alert(`Thanks! We'll send you updates about the $\{perfectMatch.year\} $\{perfectMatch.model\}`);\
                    setEmail('');\
                  \}\
                \}\}\
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl font-semibold transition-all whitespace-nowrap"\
              >\
                Subscribe\
              </button>\
            </div>\
            <p className="text-slate-500 text-sm mt-3">Optional - we won't spam you</p>\
          </div>\
\
          \{/* CTA */\}\
          <div className="text-center">\
            <button\
              onClick=\{() => \{\
                setScreen('landing');\
                setQuizAnswers(\{\});\
                setCurrentQuestion(0);\
              \}\}\
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"\
            >\
              Start Over\
            </button>\
          </div>\
        </div>\
      </div>\
    );\
  \}\
\
  return null;\
\};\
\
export default CarFinderApp;}