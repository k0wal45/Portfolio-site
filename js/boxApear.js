const firstButton = document.getElementById('firstBoxBtn');

const FirstBox = document.getElementById('firstBox')


firstButton.onclick = function FirstBoxF() {
    
    if( FirstBox.classList.contains('hide')) {
    
        FirstBox.classList.remove('hide')

        FirstBox.classList.add('slide')

        setTimeout(function() {
            FirstBox.classList.remove('slide')

            FirstBox.classList.add('active')
          }, 1);

        
        
    
    } else if (FirstBox.classList.contains('active')) {
    
        FirstBox.classList.remove('active')

        FirstBox.classList.add('slide')
        
        setTimeout(function() {
            FirstBox.classList.remove('slide')

            FirstBox.classList.add('hide')
          }, 300);

        
       
    
    }
}



const secondButton = document.getElementById('secondBoxBtn');

const secondBox = document.getElementById('secondBox')


secondButton.onclick = function secondBoxF() {
    
    if( secondBox.classList.contains('hide')) {
    
        secondBox.classList.remove('hide')

        secondBox.classList.add('slide')

        setTimeout(function() {
            secondBox.classList.remove('slide')

            secondBox.classList.add('active')
          }, 1);

        
        
    
    } else if (secondBox.classList.contains('active')) {
    
        secondBox.classList.remove('active')

        secondBox.classList.add('slide')
        
        setTimeout(function() {
            secondBox.classList.remove('slide')

            secondBox.classList.add('hide')
          }, 300);

        
       
    
    }
}


const thirdButton = document.getElementById('thirdBoxBtn');

const thirdBox = document.getElementById('thirdBox')


thirdButton.onclick = function thirdBoxF() {
    
    if( thirdBox.classList.contains('hide')) {
    
        thirdBox.classList.remove('hide')

        thirdBox.classList.add('slide')

        setTimeout(function() {
            thirdBox.classList.remove('slide')

            thirdBox.classList.add('active')
          }, 1);

        
        
    
    } else if (thirdBox.classList.contains('active')) {
    
        thirdBox.classList.remove('active')

        thirdBox.classList.add('slide')
        
        setTimeout(function() {
            thirdBox.classList.remove('slide')

            thirdBox.classList.add('hide')
          }, 300);

        
       
    
    }
}



