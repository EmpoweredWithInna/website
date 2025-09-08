/**
 * Utility function to download the 7-Day Gut Brain Reset Meal Plan PDF
 */
export const downloadMealPlanGuide = () => {
  const link = document.createElement('a');
  link.href = '/7_Day_Gut_Brain_Reset_Meal_Plan.pdf';
  link.download = '7_Day_Gut_Brain_Reset_Meal_Plan.pdf';
  link.target = '_blank';
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Alternative function that opens the PDF in a new tab
 */
export const openMealPlanGuide = () => {
  window.open('/7_Day_Gut_Brain_Reset_Meal_Plan.pdf', '_blank');
};
