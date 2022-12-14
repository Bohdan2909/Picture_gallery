const accordion = (triggersSelector, itemsSelector) => {  
  const btns = document.querySelectorAll(triggersSelector);
  //Accordion with css style
  // const blocks = document.querySelectorAll(itemsSelector);


        // blocks.forEach(block => {
        //   block.classList.add('animated', 'fadeIn');
        // });
        // btns.forEach(btn => {
        //   btn.addEventListener('click', function(){
        //     if(!this.classList.contains('active')){
        //         btns.forEach(btn => {
        //             btn.classList.remove('active', 'active-style');
        //         });
        //         this.classList.add('active', 'active-style');
        //     }
        //   });
        // });
// Accordion with js animation
btns.forEach(btn =>  {
  btn.addEventListener('click', function(){
    if (!this.classList.contains('active-style')){
      btns.forEach(item => {
        item.classList.remove('active-style');
        item.nextElementSibling.classList.remove('active-content');
        item.nextElementSibling.style.maxHeight = '0px';

      });
    this.classList.add('active-style');
    this.nextElementSibling.classList.add('active-content');
    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';

    }else{
      this.classList.remove('active-style');
      this.nextElementSibling.classList.remove('active-content');
      this.nextElementSibling.style.maxHeight = '0px';

    }
  });

});
//second 
    // btns.forEach(btn => {
    //   btn.addEventListener('click', function () {
    //     this.classList.toggle('active-style');
    //     this.nextElementSibling.classList.toggle('active-content');

    //     if (this.classList.contains('active-style')) {
    //       this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
    //     } else {
    //       this.nextElementSibling.style.maxHeight = '0px';
    //     }
    //   });
    // });

};


export default accordion;