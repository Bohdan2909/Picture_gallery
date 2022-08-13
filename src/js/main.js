import modals from "./modules/modal";
import slides from "./modules/slides";
import forms from "./modules/forms";

window.addEventListener('click', () => {
"use strict";
modals();
slides('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
slides('.main-slider-item', 'vertical');
forms();

});