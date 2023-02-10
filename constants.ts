// Array.from(document.querySelectorAll('.greybox')).map(col => col.children).map(child => [...child]).flat().map(li => {
//   const a = li.firstChild
//   const regex = /topicid(\d+)/;
//   const match = regex.exec(a.href);
//   const topicid = match ? match[1] : null;
//   return {
//     name: a.textContent,
//     id: topicid,
//     subCategories: Array.from(li.children[1].querySelectorAll("a")).map(a => {
//        const match = regex.exec(a.href);
//   		const subTopicId = match ? match[1] : null;
      
//       return {
       
//       name: a.textContent,
//       id: subTopicId
//       }
//     })
//   }
// })

export const categories = [
  {
    "name": "Technology",
    "id": "210",
    "subCategories": [
      {
        "name": "Aerospace Equipment",
        "id": "212"
      },
      {
        "name": "Automation",
        "id": "211"
      },
      {
        "name": "Communication: Telecommunications",
        "id": "235"
      },
      {
        "name": "Communication",
        "id": "234"
      },
      {
        "name": "Construction",
        "id": "236"
      },
      {
        "name": "Construction: Cement Industry",
        "id": "241"
      },
      {
        "name": "Construction: Renovation and interior design: Saunas",
        "id": "240"
      },
      {
        "name": "Construction: Renovation and interior design",
        "id": "239"
      },
      {
        "name": "Construction: Ventilation and Air Conditioning",
        "id": "238"
      },
      {
        "name": "Electronics: Electronics",
        "id": "261"
      },
      {
        "name": "Electronics: Fiber Optics",
        "id": "252"
      },
      {
        "name": "Electronics: Hardware",
        "id": "251"
      },
      {
        "name": "Electronics: Home Electronics",
        "id": "253"
      },
      {
        "name": "Electronics: Microprocessor Technology",
        "id": "254"
      },
      {
        "name": "Electronics: Radio",
        "id": "256"
      },
      {
        "name": "Electronics: Robotics",
        "id": "257"
      },
      {
        "name": "Electronics: Signal Processing",
        "id": "255"
      },
      {
        "name": "Electronics: Telecommunications",
        "id": "260"
      },
      {
        "name": "Electronics: TV. Video",
        "id": "259"
      },
      {
        "name": "Electronics: VLSI",
        "id": "258"
      },
      {
        "name": "Electronics",
        "id": "250"
      },
      {
        "name": "Energy: Renewable Energy",
        "id": "263"
      },
      {
        "name": "Energy",
        "id": "262"
      },
      {
        "name": "Food Manufacturing",
        "id": "229"
      },
      {
        "name": "Fuel Technology",
        "id": "243"
      },
      {
        "name": "Heat",
        "id": "242"
      },
      {
        "name": "industrial equipment and technology",
        "id": "232"
      },
      {
        "name": "Industry: Metallurgy",
        "id": "231"
      },
      {
        "name": "Instrument",
        "id": "230"
      },
      {
        "name": "Light Industry",
        "id": "218"
      },
      {
        "name": "Materials",
        "id": "219"
      },
      {
        "name": "Mechanical Engineering",
        "id": "220"
      },
      {
        "name": "Metallurgy",
        "id": "221"
      },
      {
        "name": "Metrology",
        "id": "222"
      },
      {
        "name": "Military equipment: Weapon",
        "id": "215"
      },
      {
        "name": "Military equipment",
        "id": "214"
      },
      {
        "name": "Missiles",
        "id": "233"
      },
      {
        "name": "Nanotechnology",
        "id": "224"
      },
      {
        "name": "Oil and Gas Technologies: Pipelines",
        "id": "226"
      },
      {
        "name": "Oil and Gas Technologies",
        "id": "225"
      },
      {
        "name": "Patent Business. Ingenuity. Innovation",
        "id": "228"
      },
      {
        "name": "Publishing",
        "id": "216"
      },
      {
        "name": "Refrigeration",
        "id": "249"
      },
      {
        "name": "Regulatory Literature",
        "id": "227"
      },
      {
        "name": "Safety and Security",
        "id": "223"
      },
      {
        "name": "Space Science",
        "id": "217"
      },
      {
        "name": "Transport",
        "id": "244"
      },
      {
        "name": "Transportation: Aviation",
        "id": "245"
      },
      {
        "name": "Transportation: Cars, motorcycles",
        "id": "246"
      },
      {
        "name": "Transportation: Rail",
        "id": "247"
      },
      {
        "name": "Transportation: Ships",
        "id": "248"
      },
      {
        "name": "Water Treatment",
        "id": "213"
      }
    ]
  },
  {
    "name": "Art",
    "id": "57",
    "subCategories": [
      {
        "name": "Cinema",
        "id": "60"
      },
      {
        "name": "Design: Architecture",
        "id": "58"
      },
      {
        "name": "Graphic Arts",
        "id": "59"
      },
      {
        "name": "Music",
        "id": "61"
      },
      {
        "name": "Music: Guitar",
        "id": "62"
      },
      {
        "name": "Photo",
        "id": "63"
      }
    ]
  },
  {
    "name": "Biology",
    "id": "12",
    "subCategories": [
      {
        "name": "Anthropology",
        "id": "14"
      },
      {
        "name": "Anthropology: Evolution",
        "id": "15"
      },
      {
        "name": "Biostatistics",
        "id": "16"
      },
      {
        "name": "Biotechnology",
        "id": "17"
      },
      {
        "name": "Biophysics",
        "id": "18"
      },
      {
        "name": "Biochemistry",
        "id": "19"
      },
      {
        "name": "Biochemistry: enologist",
        "id": "20"
      },
      {
        "name": "Ecology",
        "id": "31"
      },
      {
        "name": "Estestvoznananie",
        "id": "13"
      },
      {
        "name": "Genetics",
        "id": "22"
      },
      {
        "name": "Microbiology",
        "id": "26"
      },
      {
        "name": "Molecular",
        "id": "27"
      },
      {
        "name": "Molecular: Bioinformatics",
        "id": "28"
      },
      {
        "name": "Plants: Agriculture and Forestry",
        "id": "30"
      },
      {
        "name": "Virology",
        "id": "21"
      },
      {
        "name": "Zoology",
        "id": "23"
      },
      {
        "name": "Zoology:Paleontology",
        "id": "24"
      },
      {
        "name": "Zoology: Fish",
        "id": "25"
      }
    ]
  },
  {
    "name": "Business",
    "id": "1",
    "subCategories": [
      {
        "name": "Accounting",
        "id": "2"
      },
      {
        "name": "E-Commerce",
        "id": "11"
      },
      {
        "name": "Logistics",
        "id": "3"
      },
      {
        "name": "Management",
        "id": "6"
      },
      {
        "name": "Marketing",
        "id": "4"
      },
      {
        "name": "Marketing: Advertising",
        "id": "5"
      },
      {
        "name": "Management: Project Management",
        "id": "7"
      },
      {
        "name": "MLM",
        "id": "8"
      },
      {
        "name": "Responsibility and Business Ethics",
        "id": "9"
      },
      {
        "name": "Trading",
        "id": "10"
      }
    ]
  },
  {
    "name": "Chemistry",
    "id": "296",
    "subCategories": [
      {
        "name": "Analytical Chemistry",
        "id": "297"
      },
      {
        "name": "Chemical",
        "id": "304"
      },
      {
        "name": "Inorganic Chemistry",
        "id": "299"
      },
      {
        "name": "Materials",
        "id": "298"
      },
      {
        "name": "Organic Chemistry",
        "id": "300"
      },
      {
        "name": "Pyrotechnics and explosives",
        "id": "301"
      },
      {
        "name": "Pharmacology",
        "id": "302"
      },
      {
        "name": "Physical Chemistry",
        "id": "303"
      }
    ]
  },
  {
    "name": "Computers",
    "id": "69",
    "subCategories": [
      {
        "name": "Algorithms and Data Structures",
        "id": "71"
      },
      {
        "name": "Algorithms and Data Structures: Cryptography",
        "id": "72"
      },
      {
        "name": "Algorithms and Data Structures: Image Processing",
        "id": "73"
      },
      {
        "name": "Algorithms and Data Structures: Pattern Recognition",
        "id": "74"
      },
      {
        "name": "Algorithms and Data Structures: Digital watermarks",
        "id": "75"
      },
      {
        "name": "Cybernetics",
        "id": "80"
      },
      {
        "name": "Cybernetics: ArtificialIntelligence",
        "id": "81"
      },
      {
        "name": "Cryptography",
        "id": "82"
      },
      {
        "name": "Databases",
        "id": "76"
      },
      {
        "name": "Information Systems",
        "id": "78"
      },
      {
        "name": "Information Systems: EC businesses",
        "id": "79"
      },
      {
        "name": "Lectures, monographs",
        "id": "83"
      },
      {
        "name": "Media",
        "id": "84"
      },
      {
        "name": "Networking",
        "id": "99"
      },
      {
        "name": "Networking: Internet",
        "id": "100"
      },
      {
        "name": "Operating Systems",
        "id": "85"
      },
      {
        "name": "Organization and Data Processing",
        "id": "86"
      },
      {
        "name": "Programming",
        "id": "87"
      },
      {
        "name": "Programming: Libraries API",
        "id": "88"
      },
      {
        "name": "Programming: Games",
        "id": "89"
      },
      {
        "name": "Programming: Compilers",
        "id": "90"
      },
      {
        "name": "Programming: Modeling languages",
        "id": "91"
      },
      {
        "name": "Programming: Programming Languages",
        "id": "92"
      },
      {
        "name": "Programs: TeX, LaTeX",
        "id": "93"
      },
      {
        "name": "Security",
        "id": "77"
      },
      {
        "name": "Software: Office software",
        "id": "94"
      },
      {
        "name": "Software: Adobe Products",
        "id": "95"
      },
      {
        "name": "Software: Macromedia Products",
        "id": "96"
      },
      {
        "name": "Software: CAD",
        "id": "97"
      },
      {
        "name": "Software: Systems: scientific computing",
        "id": "98"
      },
      {
        "name": "System Administration",
        "id": "101"
      },
      {
        "name": "Web-design",
        "id": "70"
      }
    ]
  },
  {
    "name": "Geography",
    "id": "32",
    "subCategories": [
      {
        "name": "Geodesy. Cartography",
        "id": "33"
      },
      {
        "name": "Local History",
        "id": "34"
      },
      {
        "name": "Local history: Tourism",
        "id": "35"
      },
      {
        "name": "Meteorology, Climatology",
        "id": "36"
      },
      {
        "name": "Russia",
        "id": "37"
      }
    ]
  },
  {
    "name": "Geology",
    "id": "38",
    "subCategories": [
      {
        "name": "Gidrogeology",
        "id": "39"
      },
      {
        "name": "Mining",
        "id": "40"
      }
    ]
  },
  {
    "name": "Economy",
    "id": "305",
    "subCategories": [
      {
        "name": "Econometrics",
        "id": "310"
      },
      {
        "name": "Investing",
        "id": "306"
      },
      {
        "name": "Markets",
        "id": "309"
      },
      {
        "name": "Mathematical Economics",
        "id": "307"
      },
      {
        "name": "Popular",
        "id": "308"
      }
    ]
  },
  {
    "name": "Education",
    "id": "183",
    "subCategories": [
      {
        "name": "Elementary",
        "id": "187"
      },
      {
        "name": "International Conferences and Symposiums",
        "id": "185"
      },
      {
        "name": "Self-help books",
        "id": "186"
      },
      {
        "name": "Theses abstracts",
        "id": "184"
      }
    ]
  },
  {
    "name": "Jurisprudence",
    "id": "324",
    "subCategories": [
      {
        "name": "Criminology, Forensic Science",
        "id": "311"
      },
      {
        "name": "Criminology: Court. examination",
        "id": "312"
      },
      {
        "name": "Law",
        "id": "313"
      }
    ]
  },
  {
    "name": "Housekeeping, leisure",
    "id": "41",
    "subCategories": [
      {
        "name": "Aquaria",
        "id": "42"
      },
      {
        "name": "Astrology",
        "id": "43"
      },
      {
        "name": "Beauty, image",
        "id": "48"
      },
      {
        "name": "Benefits Homebrew",
        "id": "52"
      },
      {
        "name": "Collecting",
        "id": "47"
      },
      {
        "name": "Cooking",
        "id": "49"
      },
      {
        "name": "Fashion, Jewelry",
        "id": "50"
      },
      {
        "name": "Games: Board Games",
        "id": "45"
      },
      {
        "name": "Games: Chess",
        "id": "46"
      },
      {
        "name": "Garden, garden",
        "id": "56"
      },
      {
        "name": "Handicraft",
        "id": "54"
      },
      {
        "name": "Handicraft: Cutting and Sewing",
        "id": "55"
      },
      {
        "name": "Hunting and Game Management",
        "id": "51"
      },
      {
        "name": "Pet",
        "id": "44"
      },
      {
        "name": "Professions and Trades",
        "id": "53"
      }
    ]
  },
  {
    "name": "History",
    "id": "64",
    "subCategories": [
      {
        "name": "American Studies",
        "id": "65"
      },
      {
        "name": "Archaeology",
        "id": "66"
      },
      {
        "name": "Military History",
        "id": "67"
      }
    ]
  },
  {
    "name": "Linguistics",
    "id": "314",
    "subCategories": [
      {
        "name": "Comparative Studies",
        "id": "318"
      },
      {
        "name": "Dictionaries",
        "id": "322"
      },
      {
        "name": "Foreign",
        "id": "315"
      },
      {
        "name": "Foreign: English",
        "id": "316"
      },
      {
        "name": "Foreign: French",
        "id": "317"
      },
      {
        "name": "Linguistics",
        "id": "319"
      },
      {
        "name": "Rhetoric",
        "id": "320"
      },
      {
        "name": "Russian Language",
        "id": "321"
      },
      {
        "name": "Stylistics",
        "id": "323"
      }
    ]
  },
  {
    "name": "Literature",
    "id": "102",
    "subCategories": [
      {
        "name": "Children",
        "id": "106"
      },
      {
        "name": "Comics",
        "id": "107"
      },
      {
        "name": "Detective",
        "id": "105"
      },
      {
        "name": "Fantasy",
        "id": "112"
      },
      {
        "name": "Fiction",
        "id": "103"
      },
      {
        "name": "Folklore",
        "id": "111"
      },
      {
        "name": "Library",
        "id": "104"
      },
      {
        "name": "Literary",
        "id": "108"
      },
      {
        "name": "Poetry",
        "id": "109"
      },
      {
        "name": "Prose",
        "id": "110"
      }
    ]
  },
  {
    "name": "Mathematics",
    "id": "113",
    "subCategories": [
      {
        "name": "Algebra",
        "id": "114"
      },
      {
        "name": "Algebra: Linear Algebra",
        "id": "115"
      },
      {
        "name": "Algorithms and Data Structures",
        "id": "116"
      },
      {
        "name": "Analysis",
        "id": "117"
      },
      {
        "name": "Applied Mathematics",
        "id": "137"
      },
      {
        "name": "Automatic Control Theory",
        "id": "139"
      },
      {
        "name": "Combinatorics",
        "id": "126"
      },
      {
        "name": "Computational Mathematics",
        "id": "120"
      },
      {
        "name": "Computer Algebra",
        "id": "128"
      },
      {
        "name": "Continued fractions",
        "id": "133"
      },
      {
        "name": "Differential Equations",
        "id": "125"
      },
      {
        "name": "Discrete Mathematics",
        "id": "124"
      },
      {
        "name": "Dynamical Systems",
        "id": "123"
      },
      {
        "name": "Elementary",
        "id": "146"
      },
      {
        "name": "Functional Analysis",
        "id": "144"
      },
      {
        "name": "Fuzzy Logic and Applications",
        "id": "134"
      },
      {
        "name": "Game Theory",
        "id": "141"
      },
      {
        "name": "Geometry and Topology",
        "id": "121"
      },
      {
        "name": "Graph Theory",
        "id": "140"
      },
      {
        "name": "Lectures",
        "id": "129"
      },
      {
        "name": "Logic",
        "id": "130"
      },
      {
        "name": "Mathematical Physics",
        "id": "132"
      },
      {
        "name": "Mathematical Statistics",
        "id": "131"
      },
      {
        "name": "Number Theory",
        "id": "143"
      },
      {
        "name": "Numerical Analysis",
        "id": "145"
      },
      {
        "name": "Operator Theory",
        "id": "142"
      },
      {
        "name": "Optimal control",
        "id": "135"
      },
      {
        "name": "Optimization. Operations Research.",
        "id": "136"
      },
      {
        "name": "Probability",
        "id": "119"
      },
      {
        "name": "Puzzle",
        "id": "122"
      },
      {
        "name": "Symmetry and group",
        "id": "138"
      },
      {
        "name": "The complex variable",
        "id": "127"
      },
      {
        "name": "Wavelets and signal processing",
        "id": "118"
      }
    ]
  },
  {
    "name": "Medicine",
    "id": "147",
    "subCategories": [
      {
        "name": "Anatomy and physiology",
        "id": "148"
      },
      {
        "name": "Anesthesiology and Intensive Care",
        "id": "149"
      },
      {
        "name": "Cardiology",
        "id": "159"
      },
      {
        "name": "Chinese Medicine",
        "id": "160"
      },
      {
        "name": "Clinical Medicine",
        "id": "161"
      },
      {
        "name": "Dentistry, Orthodontics",
        "id": "170"
      },
      {
        "name": "Diabetes",
        "id": "155"
      },
      {
        "name": "Diseases: Internal Medicine",
        "id": "151"
      },
      {
        "name": "Diseases",
        "id": "150"
      },
      {
        "name": "Endocrinology",
        "id": "176"
      },
      {
        "name": "ENT",
        "id": "167"
      },
      {
        "name": "Epidemiology",
        "id": "177"
      },
      {
        "name": "Feng Shui",
        "id": "174"
      },
      {
        "name": "Histology",
        "id": "152"
      },
      {
        "name": "Homeopathy",
        "id": "153"
      },
      {
        "name": "Immunology",
        "id": "156"
      },
      {
        "name": "Infectious diseases",
        "id": "157"
      },
      {
        "name": "Molecular Medicine",
        "id": "162"
      },
      {
        "name": "Natural Medicine",
        "id": "163"
      },
      {
        "name": "Neurology",
        "id": "165"
      },
      {
        "name": "Oncology",
        "id": "166"
      },
      {
        "name": "Ophthalmology",
        "id": "168"
      },
      {
        "name": "Pediatrics",
        "id": "169"
      },
      {
        "name": "Pharmacology",
        "id": "173"
      },
      {
        "name": "Popular scientific literature",
        "id": "164"
      },
      {
        "name": "Surgery, Orthopedics",
        "id": "175"
      },
      {
        "name": "Therapy",
        "id": "172"
      },
      {
        "name": "Trial",
        "id": "171"
      },
      {
        "name": "Yoga",
        "id": "158"
      }
    ]
  },
  {
    "name": "Other Social Sciences",
    "id": "189",
    "subCategories": [
      {
        "name": "Cultural",
        "id": "191"
      },
      {
        "name": "Ethnography",
        "id": "197"
      },
      {
        "name": "Journalism, Media",
        "id": "190"
      },
      {
        "name": "Politics",
        "id": "192"
      },
      {
        "name": "Politics: International Relations",
        "id": "193"
      },
      {
        "name": "Philosophy",
        "id": "195"
      },
      {
        "name": "Philosophy: Critical Thinking",
        "id": "196"
      },
      {
        "name": "Sociology",
        "id": "194"
      }
    ]
  },
  {
    "name": "Physics",
    "id": "264",
    "subCategories": [
      {
        "name": "Astronomy: Astrophysics",
        "id": "266"
      },
      {
        "name": "Astronomy",
        "id": "265"
      },
      {
        "name": "Crystal Physics",
        "id": "270"
      },
      {
        "name": "Electricity and Magnetism",
        "id": "287"
      },
      {
        "name": "Electrodynamics",
        "id": "288"
      },
      {
        "name": "General courses",
        "id": "278"
      },
      {
        "name": "Geophysics",
        "id": "267"
      },
      {
        "name": "Mechanics",
        "id": "271"
      },
      {
        "name": "Mechanics: Fluid Mechanics",
        "id": "274"
      },
      {
        "name": "Mechanics: Mechanics of deformable bodies",
        "id": "273"
      },
      {
        "name": "Mechanics: Nonlinear dynamics and chaos",
        "id": "275"
      },
      {
        "name": "Mechanics: Oscillations and Waves",
        "id": "272"
      },
      {
        "name": "Mechanics: Strength of Materials",
        "id": "276"
      },
      {
        "name": "Mechanics: Theory of Elasticity",
        "id": "277"
      },
      {
        "name": "Optics",
        "id": "279"
      },
      {
        "name": "Physics of lasers",
        "id": "284"
      },
      {
        "name": "Physics of the Atmosphere",
        "id": "283"
      },
      {
        "name": "Plasma Physics",
        "id": "285"
      },
      {
        "name": "Quantum Mechanics",
        "id": "268"
      },
      {
        "name": "Quantum Physics",
        "id": "269"
      },
      {
        "name": "Solid State Physics",
        "id": "286"
      },
      {
        "name": "Spectroscopy",
        "id": "280"
      },
      {
        "name": "Theory of Relativity and Gravitation",
        "id": "281"
      },
      {
        "name": "Thermodynamics and Statistical Mechanics",
        "id": "282"
      }
    ]
  },
  {
    "name": "Physical Educ. and Sport",
    "id": "289",
    "subCategories": [
      {
        "name": "Bodybuilding",
        "id": "290"
      },
      {
        "name": "Bike",
        "id": "292"
      },
      {
        "name": "Fencing",
        "id": "295"
      },
      {
        "name": "Martial Arts",
        "id": "291"
      },
      {
        "name": "Sport fishing",
        "id": "294"
      },
      {
        "name": "Survival",
        "id": "293"
      }
    ]
  },
  {
    "name": "Psychology",
    "id": "198",
    "subCategories": [
      {
        "name": "The art of communication",
        "id": "200"
      },
      {
        "name": "Creative Thinking",
        "id": "204"
      },
      {
        "name": "Hypnosis",
        "id": "199"
      },
      {
        "name": "Love, erotic",
        "id": "201"
      },
      {
        "name": "Neuro-Linguistic Programming",
        "id": "202"
      },
      {
        "name": "Pedagogy",
        "id": "203"
      }
    ]
  },
  {
    "name": "Religion",
    "id": "205",
    "subCategories": [
      {
        "name": "Buddhism",
        "id": "206"
      },
      {
        "name": "Esoteric, Mystery",
        "id": "209"
      },
      {
        "name": "Kabbalah",
        "id": "207"
      },
      {
        "name": "Orthodoxy",
        "id": "208"
      }
    ]
  },
  {
    "name": "Science (General)",
    "id": "178",
    "subCategories": [
      {
        "name": "International Conferences and Symposiums",
        "id": "179"
      },
      {
        "name": "Science of Science",
        "id": "180"
      },
      {
        "name": "Scientific-popular",
        "id": "181"
      },
      {
        "name": "Scientific and popular: Journalism",
        "id": "182"
      }
    ]
  }
]

