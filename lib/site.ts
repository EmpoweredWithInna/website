export const SITE_URL = "https://www.empoweredwithinna.com";

export const CONSULTATION_URL =
  "https://calendly.com/inna-ntp/free-15-minute-wellness-clarity-call-via-phone";

export const RESTART_CONSULTATION_URL =
  "https://calendly.com/inna-ntp/restart-sugar-detox-5-week-program-info-call";

export const FULLSCRIPT_URL = "https://us.fullscript.com/welcome/inna";

export const GUIDE_FILE_NAME = "7_Day_Gut_Hormones_Reset_Meal_Plan.pdf";
export const GUIDE_PATH = `/${GUIDE_FILE_NAME}`;

export const PRACTITIONER_NAME = "Inna Benyukhis";
export const BUSINESS_NAME = "Empowered Wellness with Inna";

export const SERVICE_AREAS = [
  { name: "Buda", region: "TX" },
  { name: "Kyle", region: "TX" },
  { name: "Austin", region: "TX" },
  { name: "San Marcos", region: "TX" },
] as const;

export const LOCAL_SERVICE_PAGE = "/central-texas-functional-nutrition";

export const SERVICE_PAGE_PATHS = [
  "/functional-nutrition-consultations",
  "/gut-health-nutrition",
  "/perimenopause-nutrition-support",
  "/functional-lab-testing",
] as const;

export const SITE = {
  name: BUSINESS_NAME,
  origin: SITE_URL,
  description:
    "Virtual functional nutrition and personalized support for women in Buda, Kyle, Austin, San Marcos, and throughout Central Texas.",
  locale: "en_US",
  language: "en-US",
  practitioner: {
    name: PRACTITIONER_NAME,
    title: "Certified Nutritional Therapy Practitioner",
    path: "/about-inna-benyukhis",
  },
  phone: "+13124044675",
  email: "healthy@empoweredwithinna.com",
  bookingUrl: CONSULTATION_URL,
} as const;
