const modals = () => {
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    trigger.forEach((item) => {
      item.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;

        if (destroy){
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;

      });
    });

    close.addEventListener('click', function () {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      modal.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        modal.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function showModalBytime(selector, time) {
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;

      }


    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function openByScroll (selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= 
        document.documentElement.scrollHeight)){
        document.querySelector(selector).click();
       
      }

    });
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  // showModalBytime('.popup-consultation', 60000);

};
export default modals;