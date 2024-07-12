var slider = document.querySelector('.slider');
     
     var leftArrow = document.querySelector('.left');
     var rightArrow = document.querySelector('.right');
     var indicatorParents = document.querySelector('.controls ul');
     var productIndex = 0;
     
     function setIndex(){
       document.querySelector('.controls .selected').classList.remove('selected');
       slider.style.transform = 'translate(' + (productIndex) * -25 + '%)';
     }
     
     document.querySelectorAll('.controls li').forEach(function(indicator, ind){
       indicator.addEventListener('click', function(){
         productIndex = ind;
         setIndex();
       indicator.classList.add('selected');
     
       });
     });
     
     leftArrow.addEventListener('click', function(){
       productIndex =  (productIndex > 0) ? productIndex - 1 : 0;
       indicatorParents.children[productIndex].classList.add('selected');
       setIndex();
     });
     
     rightArrow.addEventListener('click', function(){
       productIndex =  (productIndex < 3) ? productIndex + 1 : 3;
       indicatorParents.children[productIndex].classList.add('selected');
       setIndex();
     });
       