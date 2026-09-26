// Kenya Government Departments — National, County, Sub-County and Ward (MCA) Level
// Covers all 47 counties across all service categories.

const COUNTY_LIST = [
  'Nairobi', 'Mombasa', 'Kwale', 'Kilifi', 'Tana River', 'Lamu', 'Taita Taveta',
  'Garissa', 'Wajir', 'Mandera', 'Marsabit', 'Isiolo', 'Meru', 'Tharaka Nithi',
  'Embu', 'Kitui', 'Machakos', 'Makueni', 'Nyandarua', 'Nyeri', 'Kirinyaga',
  "Murang'a", 'Kiambu', 'Turkana', 'West Pokot', 'Samburu', 'Trans Nzoia',
  'Uasin Gishu', 'Elgeyo-Marakwet', 'Nandi', 'Baringo', 'Laikipia', 'Nakuru',
  'Narok', 'Kajiado', 'Kericho', 'Bomet', 'Kakamega', 'Vihiga', 'Bungoma',
  'Busia', 'Siaya', 'Kisumu', 'Homa Bay', 'Migori', 'Kisii', 'Nyamira',
]

function slug(county) {
  return county.toLowerCase().replace(/[^a-z0-9]/g, '')
}

// Generate county-level departments for all 47 counties
function countyDepts() {
  const depts = []
  for (const county of COUNTY_LIST) {
    const s = slug(county)
    depts.push(
      // Governor's Office
      {
        name: `${county} County Government – Governor's Office`,
        email: `governor@${s}.go.ke`,
        categories: ['Public Services'],
        counties: [county],
        level: 'County',
      },
      // County Assembly (MCA level complaints go here)
      {
        name: `${county} County Assembly – Speaker's Office`,
        email: `speaker@${s}assembly.go.ke`,
        categories: ['Public Services'],
        counties: [county],
        level: 'Ward/MCA',
      },
      // Roads
      {
        name: `${county} County Roads, Transport & Public Works`,
        email: `roads@${s}.go.ke`,
        categories: ['Roads & Infrastructure'],
        counties: [county],
        level: 'County',
      },
      // Water
      {
        name: `${county} County Water & Sanitation Department`,
        email: `water@${s}.go.ke`,
        categories: ['Water & Sanitation'],
        counties: [county],
        level: 'County',
      },
      // Health
      {
        name: `${county} County Health Services Department`,
        email: `health@${s}.go.ke`,
        categories: ['Healthcare'],
        counties: [county],
        level: 'County',
      },
      // Education
      {
        name: `${county} County Education Department`,
        email: `education@${s}.go.ke`,
        categories: ['Education'],
        counties: [county],
        level: 'County',
      },
      // Land
      {
        name: `${county} County Lands, Housing & Physical Planning`,
        email: `lands@${s}.go.ke`,
        categories: ['Land & Housing'],
        counties: [county],
        level: 'County',
      },
      // Agriculture
      {
        name: `${county} County Agriculture, Livestock & Fisheries`,
        email: `agriculture@${s}.go.ke`,
        categories: ['Public Services'],
        counties: [county],
        level: 'County',
      },
      // Environment
      {
        name: `${county} County Environment & Natural Resources`,
        email: `environment@${s}.go.ke`,
        categories: ['Water & Sanitation', 'Land & Housing'],
        counties: [county],
        level: 'County',
      },
      // Trade
      {
        name: `${county} County Trade, Industry & Cooperative Development`,
        email: `trade@${s}.go.ke`,
        categories: ['Public Services'],
        counties: [county],
        level: 'County',
      },
      // Finance
      {
        name: `${county} County Finance & Economic Planning`,
        email: `finance@${s}.go.ke`,
        categories: ['Public Services'],
        counties: [county],
        level: 'County',
      },
      // ICT
      {
        name: `${county} County ICT & E-Government Services`,
        email: `ict@${s}.go.ke`,
        categories: ['Public Services', 'Utilities & Electricity'],
        counties: [county],
        level: 'County',
      },
    )
  }
  return depts
}

const NATIONAL_DEPARTMENTS = [
  // ── NATIONAL MINISTRIES ──────────────────────────────────────────
  {
    name: 'The Presidency & Cabinet Affairs',
    email: 'info@statehouse.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Interior & National Administration',
    email: 'info@interior.go.ke',
    categories: ['Public Services', 'Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Foreign & Diaspora Affairs',
    email: 'info@mfa.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Defence',
    email: 'info@mod.go.ke',
    categories: ['Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'National Treasury & Economic Planning',
    email: 'info@treasury.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Health',
    email: 'info@health.go.ke',
    categories: ['Healthcare'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Education',
    email: 'info@education.go.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Higher Education, Research & Innovation',
    email: 'info@highereducation.go.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Roads & Transport',
    email: 'info@roads.go.ke',
    categories: ['Roads & Infrastructure'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Public Works, Housing & Urban Development',
    email: 'info@publicworks.go.ke',
    categories: ['Roads & Infrastructure', 'Land & Housing'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Lands & Physical Planning',
    email: 'info@lands.go.ke',
    categories: ['Land & Housing'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Agriculture & Livestock Development',
    email: 'info@kilimo.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Water, Sanitation & Irrigation',
    email: 'info@water.go.ke',
    categories: ['Water & Sanitation'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Environment, Climate Change & Forestry',
    email: 'info@environment.go.ke',
    categories: ['Water & Sanitation', 'Land & Housing'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Mining, Blue Economy & Maritime Affairs',
    email: 'info@mining.go.ke',
    categories: ['Public Services', 'Water & Sanitation'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Energy & Petroleum',
    email: 'info@energy.go.ke',
    categories: ['Utilities & Electricity'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of ICT & Digital Economy',
    email: 'info@ict.go.ke',
    categories: ['Public Services', 'Utilities & Electricity'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Labour & Social Protection',
    email: 'info@labour.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Gender, Culture, Arts & Heritage',
    email: 'info@gender.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Youth Affairs, Creative Economy & Sports',
    email: 'info@youth.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Trade, Industry & Cooperatives',
    email: 'info@trade.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Tourism & Wildlife',
    email: 'info@tourism.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of Public Service & Human Capital Development',
    email: 'info@publicservice.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ministry of East African Community, ASALs & Regional Development',
    email: 'info@asal.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },

  // ── ROADS & INFRASTRUCTURE SAGAs ─────────────────────────────────
  {
    name: 'Kenya National Highways Authority (KeNHA)',
    email: 'info@kenha.co.ke',
    categories: ['Roads & Infrastructure'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Urban Roads Authority (KURA)',
    email: 'info@kura.go.ke',
    categories: ['Roads & Infrastructure'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Rural Roads Authority (KeRRA)',
    email: 'info@kerra.go.ke',
    categories: ['Roads & Infrastructure'],
    counties: [],
    level: 'National',
  },
  {
    name: 'National Construction Authority (NCA)',
    email: 'info@nca.go.ke',
    categories: ['Roads & Infrastructure', 'Land & Housing'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya National Shipping Line (KNSL)',
    email: 'info@knsl.co.ke',
    categories: ['Roads & Infrastructure'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Airports Authority (KAA)',
    email: 'info@kaa.go.ke',
    categories: ['Roads & Infrastructure'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Railways Corporation',
    email: 'info@kenya-railways.go.ke',
    categories: ['Roads & Infrastructure'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Ports Authority (KPA)',
    email: 'info@kpa.co.ke',
    categories: ['Roads & Infrastructure'],
    counties: [],
    level: 'National',
  },
  {
    name: 'National Transport & Safety Authority (NTSA)',
    email: 'info@ntsa.go.ke',
    categories: ['Roads & Infrastructure', 'Public Services'],
    counties: [],
    level: 'National',
  },

  // ── WATER & SANITATION SAGAs ──────────────────────────────────────
  {
    name: 'Water Resources Authority (WRA)',
    email: 'info@wra.go.ke',
    categories: ['Water & Sanitation'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Water Sector Trust Fund (WSTF)',
    email: 'info@wstf.go.ke',
    categories: ['Water & Sanitation'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Water Services Regulatory Board (WASREB)',
    email: 'info@wasreb.go.ke',
    categories: ['Water & Sanitation'],
    counties: [],
    level: 'National',
  },
  {
    name: 'National Irrigation Authority (NIA)',
    email: 'info@irrigation.go.ke',
    categories: ['Water & Sanitation'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Nairobi City Water & Sewerage Company',
    email: 'info@nairobiwater.co.ke',
    categories: ['Water & Sanitation'],
    counties: ['Nairobi'],
    level: 'County',
  },
  {
    name: 'Mombasa Water & Sewerage Company',
    email: 'info@mombasawater.co.ke',
    categories: ['Water & Sanitation'],
    counties: ['Mombasa'],
    level: 'County',
  },
  {
    name: 'Kisumu Water & Sewerage Company (KIWASCO)',
    email: 'info@kiwasco.co.ke',
    categories: ['Water & Sanitation'],
    counties: ['Kisumu'],
    level: 'County',
  },
  {
    name: 'Nakuru Water & Sanitation Services (NAWASSCO)',
    email: 'info@nawassco.co.ke',
    categories: ['Water & Sanitation'],
    counties: ['Nakuru'],
    level: 'County',
  },
  {
    name: 'Eldoret Water & Sanitation Company (ELDOWAS)',
    email: 'info@eldowas.co.ke',
    categories: ['Water & Sanitation'],
    counties: ['Uasin Gishu'],
    level: 'County',
  },
  {
    name: 'Nyeri Water & Sanitation Company (NYEWASCO)',
    email: 'info@nyewasco.co.ke',
    categories: ['Water & Sanitation'],
    counties: ['Nyeri'],
    level: 'County',
  },
  {
    name: 'Meru Water & Sewerage Services (MEWASS)',
    email: 'info@mewass.co.ke',
    categories: ['Water & Sanitation'],
    counties: ['Meru'],
    level: 'County',
  },

  // ── UTILITIES & ELECTRICITY SAGAs ─────────────────────────────────
  {
    name: 'Kenya Power & Lighting Company (KPLC)',
    email: 'customercare@kplc.co.ke',
    categories: ['Utilities & Electricity'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Electricity Generating Company (KenGen)',
    email: 'info@kengen.co.ke',
    categories: ['Utilities & Electricity'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Electricity Transmission Company (KETRACO)',
    email: 'info@ketraco.co.ke',
    categories: ['Utilities & Electricity'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Energy & Petroleum Regulatory Authority (EPRA)',
    email: 'info@epra.go.ke',
    categories: ['Utilities & Electricity'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Rural Electrification & Renewable Energy Corporation (REREC)',
    email: 'info@rerec.co.ke',
    categories: ['Utilities & Electricity'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Communications Authority of Kenya (CA)',
    email: 'info@ca.go.ke',
    categories: ['Utilities & Electricity', 'Public Services'],
    counties: [],
    level: 'National',
  },

  // ── HEALTHCARE SAGAs ──────────────────────────────────────────────
  {
    name: 'Kenyatta National Hospital (KNH)',
    email: 'info@knh.or.ke',
    categories: ['Healthcare'],
    counties: ['Nairobi'],
    level: 'National',
  },
  {
    name: 'Moi Teaching & Referral Hospital (MTRH)',
    email: 'info@mtrh.go.ke',
    categories: ['Healthcare'],
    counties: ['Uasin Gishu'],
    level: 'National',
  },
  {
    name: 'Coast General Teaching & Referral Hospital',
    email: 'info@coastgeneral.go.ke',
    categories: ['Healthcare'],
    counties: ['Mombasa'],
    level: 'National',
  },
  {
    name: 'Kisumu County Referral Hospital (JOOTRH)',
    email: 'info@jootrh.go.ke',
    categories: ['Healthcare'],
    counties: ['Kisumu'],
    level: 'County',
  },
  {
    name: 'Nakuru Level 5 Hospital',
    email: 'info@nakuruhospital.go.ke',
    categories: ['Healthcare'],
    counties: ['Nakuru'],
    level: 'County',
  },
  {
    name: 'Kenya Medical Supplies Authority (KEMSA)',
    email: 'info@kemsa.go.ke',
    categories: ['Healthcare'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Pharmacy & Poisons Board (PPB)',
    email: 'info@pharmacyboardkenya.go.ke',
    categories: ['Healthcare'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Social Health Authority (SHA) – formerly NHIF',
    email: 'info@sha.go.ke',
    categories: ['Healthcare'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Medical Research Institute (KEMRI)',
    email: 'info@kemri.go.ke',
    categories: ['Healthcare'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Medical Practitioners & Dentists Council (KMPDC)',
    email: 'info@kmpdc.go.ke',
    categories: ['Healthcare'],
    counties: [],
    level: 'National',
  },

  // ── EDUCATION SAGAs ───────────────────────────────────────────────
  {
    name: 'Teachers Service Commission (TSC)',
    email: 'info@tsc.go.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya National Examinations Council (KNEC)',
    email: 'info@knec.ac.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Institute of Curriculum Development (KICD)',
    email: 'info@kicd.ac.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Higher Education Loans Board (HELB)',
    email: 'info@helb.co.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Commission for University Education (CUE)',
    email: 'info@cue.or.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Technical & Vocational Education & Training Authority (TVETA)',
    email: 'info@tveta.go.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Universities & Colleges Central Placement Service (KUCCPS)',
    email: 'info@kuccps.ac.ke',
    categories: ['Education'],
    counties: [],
    level: 'National',
  },

  // ── LAND & HOUSING SAGAs ──────────────────────────────────────────
  {
    name: 'National Land Commission (NLC)',
    email: 'info@nlc.go.ke',
    categories: ['Land & Housing'],
    counties: [],
    level: 'National',
  },
  {
    name: 'National Environment Management Authority (NEMA)',
    email: 'info@nema.go.ke',
    categories: ['Land & Housing', 'Water & Sanitation'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Forest Service (KFS)',
    email: 'info@kenyaforestservice.org',
    categories: ['Land & Housing', 'Water & Sanitation'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Physical & Land Use Planning Liaison Committee',
    email: 'info@physicalplanning.go.ke',
    categories: ['Land & Housing'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Housing Finance Corporation of Kenya',
    email: 'info@housing.co.ke',
    categories: ['Land & Housing'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Nairobi Metropolitan Services (NMS) – Lands',
    email: 'info@nms.go.ke',
    categories: ['Land & Housing', 'Roads & Infrastructure'],
    counties: ['Nairobi'],
    level: 'County',
  },

  // ── SECURITY & POLICE ─────────────────────────────────────────────
  {
    name: 'National Police Service (NPS)',
    email: 'info@police.go.ke',
    categories: ['Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Independent Policing Oversight Authority (IPOA)',
    email: 'info@ipoa.go.ke',
    categories: ['Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Directorate of Criminal Investigations (DCI)',
    email: 'info@dci.go.ke',
    categories: ['Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Prisons Service',
    email: 'info@prisons.go.ke',
    categories: ['Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'National Police Service Commission (NPSC)',
    email: 'info@npsc.go.ke',
    categories: ['Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Defence Forces (KDF)',
    email: 'info@kdf.go.ke',
    categories: ['Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'National Youth Service (NYS)',
    email: 'info@nys.go.ke',
    categories: ['Security & Police', 'Public Services'],
    counties: [],
    level: 'National',
  },

  // ── PUBLIC SERVICES SAGAs ─────────────────────────────────────────
  {
    name: 'National Registration Bureau (NRB)',
    email: 'info@registrationservices.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Civil Registration Services (CRS)',
    email: 'info@crs.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Revenue Authority (KRA)',
    email: 'callcentre@kra.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Huduma Kenya Secretariat',
    email: 'info@hudumakenya.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Department of Immigration Services',
    email: 'info@immigration.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Citizens & Foreign Nationals Management Service (KCFNMS)',
    email: 'info@kcfnms.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Commission on Administrative Justice (Ombudsman)',
    email: 'info@ombudsman.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya National Bureau of Statistics (KNBS)',
    email: 'info@knbs.or.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Public Procurement Regulatory Authority (PPRA)',
    email: 'info@ppra.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Ethics & Anti-Corruption Commission (EACC)',
    email: 'eacc@integrity.go.ke',
    categories: ['Public Services', 'Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya National Human Rights Commission (KNCHR)',
    email: 'info@knchr.org',
    categories: ['Public Services', 'Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Transition Authority',
    email: 'info@transition.go.ke',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Office of the Director of Public Prosecutions (ODPP)',
    email: 'info@odpp.go.ke',
    categories: ['Security & Police'],
    counties: [],
    level: 'National',
  },
  {
    name: 'Kenya Bureau of Standards (KEBS)',
    email: 'info@kebs.org',
    categories: ['Public Services'],
    counties: [],
    level: 'National',
  },
]

export const DEPARTMENTS = [...NATIONAL_DEPARTMENTS, ...countyDepts()]
