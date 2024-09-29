import {Accordions} from './accordions';
let accordions;
const breakpointTablet = window.matchMedia('(min-width:1023px)');
const breakpointMobile = window.matchMedia('(max-width:768px)');

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;

  const breakpointChecker = () => {
    if (!breakpointTablet.matches&&!breakpointMobile.matches) {
      accordions = null;
    }
  };

  breakpointTablet.addListener(breakpointChecker);
  breakpointMobile.addListener(breakpointChecker);
  breakpointChecker();
};

export {initAccordions, accordions};
