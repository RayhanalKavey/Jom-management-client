/*=====================
  COMMON LINK CSS CLASS
  *====================*/
export const commonLinkClass =
  "duration-300 justify-center items-center flex text-accent dark:text-secondary  hover:scale-105 px-3 py-2 text-sm font-semibold";
export const activeButtonClass =
  "duration-300 text-accent dark:text-secondary px-3 py-2  border-b-2 border-accent dark:border-secondary text-sm font-semibold";
export const activeButtonDashboard =
  "duration-300 px-3 py-2 text-accent dark:text-secondary  border-r-2 border-accent dark:border-secondary text-sm font-semibold";

/*=================
  Home page button
  *================*/

export const homeButton =
  "text-secondary  duration-500 bg-primary py-3 px-6 rounded-lg  font-bold shadow-md uppercase tracking-wider hover:bg-warning";
/*====================================
   Apply short list and details button
   ===================================*/

export const outlinedButton =
  "duration-[600ms]  text-xs uppercase font-semibold px-2 py-1 text-accent hover:text-secondary bg-base-100 border  rounded hover:bg-warning";

export const buttonClass =
  " duration-500  text-xs uppercase font-semibold  px-2 py-1 text-secondary bg-primary border rounded hover:bg-warning";
/*==============
  Applied button
  ==============*/
export const buttonApplied =
  " duration-500  text-xs uppercase font-semibold  px-2 py-1 text-secondary  border rounded bg-warning";
/*============
  Login button
  ============*/
export const googleButton =
  "duration-500 flex items-center justify-center w-full duration-500  text-xs uppercase font-semibold px-2 py-3 text-accent hover:text-secondary bg-base-100 border  rounded hover:bg-warning";

export const submitButtonClass =
  "duration-500 w-full  hover:scale-40 transition-all text-xs uppercase font-semibold  px-2 py-2 text-secondary bg-primary border rounded hover:bg-warning";

export const disabledButton = "";
/*=====================
  Scaling of the button
  =====================*/

export const scaleButtonClass =
  "duration-500 transform  hover:scale-125 transition-all";
/*=================
  Dashboard buttons
  =================*/
export const commonDashboardClass =
  "bg-secondary dark:bg-accent text-accent dark:text-secondary dark:border-gray-600 ";
export const dashboardDrawerButton =
  "  text-xs uppercase font-semibold  px-2 py-1 bg-primary text-secondary border rounded fixed bottom-4 right-4  ";
export const dashboardLinkStyle = "duration-500  hover:text-primary uppercase";
/*=============
  Delete button
  =============*/
export const deleteButtonClass =
  " duration-500  text-xs uppercase font-semibold  px-2 py-1 text-secondary bg-error border rounded hover:bg-red-600";
/*===========
  Badge class
  ===========*/
export const badgeClass =
  "bg-[#f1d9c9] px-[.32rem] py-[.08rem] rounded-full border uppercase text-xs";
/*===============
  Flex all center
  ===============*/
export const flexCenter = "flex justify-center items-center ";
/*===============
    Date formate
  ===============*/
export const dateFormate = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};
/* 
{new Date(job?.currentDate).toLocaleDateString(en-US",dateFormate)} */
/*============================
  Icon button with dark button
  ============================*/
export const iconButton =
  " text-accent dark:text-secondary hover:bg-success hover:dark:bg-gray-600 px-3 py-2 rounded-full text-sm font-medium border-[.5px] border-accent dark:border-info";
/*=============
  Bottom border
  =============*/
export const bottomBorder = "border-b-[.5px]  dark:border-gray-600";
export const topBorder = "border-t-[.5px]  dark:border-gray-600";

/*======================
  Job details list style
  ======================*/
export const jobDetailsListStyle = "ml-4 mb-5 text-sm";

/*======================
    form label and input field
    ======================*/
export const formLabel = "block mb-2 text-lg font-medium";
export const formInput =
  "appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-primary";
