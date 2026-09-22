import { GUIDE_FILE_NAME, GUIDE_PATH } from "../lib/site";

/** Utility function to download the 7-Day Gut-Hormones Reset Meal Plan PDF. */
export const downloadMealPlanGuide = () => {
  const link = document.createElement("a");
  link.href = GUIDE_PATH;
  link.download = GUIDE_FILE_NAME;
  link.target = "_blank";

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Alternative function that opens the PDF in a new tab
 */
export const openMealPlanGuide = () => {
  window.open(GUIDE_PATH, "_blank");
};
