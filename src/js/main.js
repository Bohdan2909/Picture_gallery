import modals from "./modules/modal";
import slides from "./modules/slides";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";


window.addEventListener('click', () => {
modals();
slides('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
slides('.main-slider-item', 'vertical');
forms();
mask('[name="phone"]');
checkTextInputs('[name="name"]');
checkTextInputs('[name="message"]');


});