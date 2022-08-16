import modals from "./modules/modal";
import slides from "./modules/slides";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";


window.addEventListener('DOMContentLoaded', () => {
  "use strict";
modals();
slides('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
slides('.main-slider-item', 'vertical');
forms();
mask('[name="phone"]');
checkTextInputs('[name="name"]');
checkTextInputs('[name="message"]');
// showMoreStyles('.button-styles', '.styles-2');
showMoreStyles('.button-styles', '#styles .row');


});