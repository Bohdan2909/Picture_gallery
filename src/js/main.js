import modals from "./modules/modal";
import slides from "./modules/slides";

window.addEventListener('click', () => {
"use strict";
modals();
slides('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
slides('.main-slider-item', 'vertical');

});