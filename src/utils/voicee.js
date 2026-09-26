import initialComplaints from "../data/complaints.json";
import { DEPARTMENTS } from "../data/departments.js";

const STORAGE_KEY = "voicee_complaints";

// ─────────────────────────────────────────────
// Complaints storage
// ─────────────────────────────────────────────

export function getComplaints() {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [...initialComplaints];
    }
  }

  return [...initialComplaints];
}

export function saveComplaint(complaint) {
  const all = getComplaints();

  all.unshift(complaint);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));

  return complaint;
}

export function getComplaintById(id) {
  return getComplaints().find((c) => c.id === id) || null;
}

// ─────────────────────────────────────────────
// Generate complaint reference number
// ─────────────────────────────────────────────

export function generateId() {
  const year = new Date().getFullYear();
  const num = String(Math.floor(Math.random() * 900000) + 100000);

  return `VOI-${year}-${num}`;
}

// ─────────────────────────────────────────────
// Date formatting
// ─────────────────────────────────────────────

export function formatDate(dateStr) {
  const date = new Date(dateStr + "T00:00:00");

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─────────────────────────────────────────────
// Category value → label (matches the Category <select> in SubmitComplaint)
// ─────────────────────────────────────────────

export const CATEGORY_TO_LABEL = {
  water: "Water & Sanitation",
  roads: "Roads & Transport",
  infrastructure: "Housing & Public Works",
  health: "Healthcare Services",
  security: "Security & Administration",
  power: "Energy & Electricity",
  environment: "Environment & Forestry",
};

// ─────────────────────────────────────────────
// County value → label (matches the County <select> in SubmitComplaint)
// ─────────────────────────────────────────────

export const COUNTY_LABELS = {
  baringo: "Baringo",
  bomet: "Bomet",
  bungoma: "Bungoma",
  busia: "Busia",
  elgeyo_marakwet: "Elgeyo-Marakwet",
  embu: "Embu",
  garissa: "Garissa",
  homa_bay: "Homa Bay",
  isiolo: "Isiolo",
  kajiado: "Kajiado",
  kakamega: "Kakamega",
  kericho: "Kericho",
  kiambu: "Kiambu",
  kilifi: "Kilifi",
  kirinyaga: "Kirinyaga",
  kisii: "Kisii",
  kisumu: "Kisumu",
  kitui: "Kitui",
  kwale: "Kwale",
  laikipia: "Laikipia",
  lamu: "Lamu",
  machakos: "Machakos",
  makueni: "Makueni",
  mandera: "Mandera",
  marsabit: "Marsabit",
  meru: "Meru",
  migori: "Migori",
  mombasa: "Mombasa",
  muranga: "Murang'a",
  nairobi: "Nairobi",
  nakuru: "Nakuru",
  nandi: "Nandi",
  narok: "Narok",
  nyamira: "Nyamira",
  nyandarua: "Nyandarua",
  nyeri: "Nyeri",
  samburu: "Samburu",
  siaya: "Siaya",
  taita_taveta: "Taita-Taveta",
  tana_river: "Tana River",
  tharaka_nithi: "Tharaka-Nithi",
  trans_nzoia: "Trans Nzoia",
  turkana: "Turkana",
  uasin_gishu: "Uasin Gishu",
  vihiga: "Vihiga",
  wajir: "Wajir",
  west_pokot: "West Pokot",
};

// ─────────────────────────────────────────────
// Department picker
// ─────────────────────────────────────────────

function pickDepartment(category, county) {
  const byCategory = DEPARTMENTS.filter((department) =>
    department.categories.includes(category)
  );

  if (byCategory.length === 0) {
    return DEPARTMENTS[0];
  }

  // 1. Try to find a department that handles
  // both this category and this county.
  const countyExact = byCategory.filter((department) =>
    department.counties.includes(county)
  );

  if (countyExact.length > 0) {
    return countyExact[0];
  }

  // 2. If there is a county-level department
  // for this category, use it.
  const countyLevel = byCategory.filter(
    (department) => department.level === "County"
  );

  if (countyLevel.length > 0) {
    return countyLevel[0];
  }

  // 3. Otherwise use the first matching department.
  return byCategory[0];
}

// ─────────────────────────────────────────────
// Rule-based complaint analysis
// ─────────────────────────────────────────────

export function analyzeComplaint(formData) {
  const text = (
    (formData.title || "") +
    " " +
    (formData.description || "")
  ).toLowerCase();

  let category = "Public Services";

  // Roads
  if (
    /road|highway|pothole|tarmac|bridge|construction|traffic|street/.test(
      text
    )
  ) {
    category = "Roads & Infrastructure";
  }

  // Water
  else if (
    /water|sanitation|sewage|pipe|drain|borehole|dam/.test(text)
  ) {
    category = "Water & Sanitation";
  }

  // Healthcare
  else if (
    /hospital|health|doctor|clinic|medicine|nurse|ambulance|pharmacy/.test(
      text
    )
  ) {
    category = "Healthcare";
  }

  // Education
  else if (
    /school|education|teacher|class|student|exam|university|college/.test(
      text
    )
  ) {
    category = "Education";
  }

  // Electricity
  else if (
    /electricity|power|lights|streetlight|kplc|blackout|transformer/.test(
      text
    )
  ) {
    category = "Utilities & Electricity";
  }

  // Land and housing
  else if (
    /land|plot|title deed|housing|eviction|rent|property/.test(text)
  ) {
    category = "Land & Housing";
  }

  // Security
  else if (
    /police|security|crime|theft|assault|corruption|bribe/.test(text)
  ) {
    category = "Security & Police";
  }

  const department = pickDepartment(
    category,
    formData.county
  );

  return {
    category: category,

    department: department.name,

    departmentEmail: department.email,

    level: department.level,

    county: formData.county || "Nairobi",

    reasons: [
      `The complaint contains information related to ${category.toLowerCase()}.`,

      `${department.name} handles this type of service at the ${department.level} level.`,

      `The selected county was considered when choosing the department.`,
    ],

    summary:
      formData.description.length > 200
        ? formData.description.substring(0, 200) + "..."
        : formData.description,
  };
}

// ─────────────────────────────────────────────
// Suggest department
// ─────────────────────────────────────────────

export function suggestDepartment(category) {
  const department = pickDepartment(category, "");

  return department.value || department.id || "";
}

// ─────────────────────────────────────────────
// Department labels
// ─────────────────────────────────────────────

export const DEPT_VALUE_TO_LABEL = {
  "water-sanitation": "Water & Sanitation",
  "transport-roads": "Transport & Roads",
  "lands-housing": "Lands & Housing",
  health: "Health",
  interior: "Interior & Security",
  "energy-petroleum": "Energy & Petroleum",
  environment: "Environment",
  education: "Education",
  county: "County Government",
};