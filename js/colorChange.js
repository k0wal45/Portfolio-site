

// display settings bar

  // color bar

const displayColorButton = document.getElementById('color-bar-btn')

const ColorBar = document.getElementById('color-bar')


// hide/show function


displayColorButton.onclick = function ColorbarChange() {


  if (ColorBar.classList.contains('hidden')) {
    
    
      ColorBar.classList.remove('hidden')

      ColorBar.classList.add('appear')
    

    

  } else if (ColorBar.classList.contains('appear')) {

   
      ColorBar.classList.remove('appear')

      ColorBar.classList.add('hidden')
    

    }
  }
    

// color change script

  // taking root element
const r = document.querySelector(':root');


// first color

const colorChange1 = document.getElementById('color-1')

colorChange1.onclick = function myFunction_set1() {

  r.style.setProperty('--primary-color', 'rgb(255, 0, 120)');
  r.style.setProperty('--secondary-color', 'rgb(110, 0, 255)');
}

// second color

const colorChange2 = document.getElementById('color-2')

colorChange2.onclick = function myFunction_set2() {

  r.style.setProperty('--primary-color', 'rgba(0,255,6,1)');
  r.style.setProperty('--secondary-color', 'rgb(0, 102, 255)');
}

// third color

const colorChange3 = document.getElementById('color-3')

colorChange3.onclick = function myFunction_set3() {

  r.style.setProperty('--primary-color', 'rgba(255,25,25,1)');
  r.style.setProperty('--secondary-color', 'rgba(247,255,0,1)');
}

// fourth color

const colorChange4 = document.getElementById('color-4')

colorChange4.onclick = function myFunction_set4() {

  r.style.setProperty('--primary-color', 'rgba(246,255,13,1)');
  r.style.setProperty('--secondary-color', 'rgba(255,0,221,1)');
}

// fifth color

const colorChange5 = document.getElementById('color-5')

colorChange5.onclick = function myFunction_set5() {

  r.style.setProperty('--primary-color', 'rgb(255, 187, 0)');
  r.style.setProperty('--secondary-color', 'rgb(81, 81, 81)');
}

// black and white 

const colorChangeWB = document.getElementById('black-and-white')

let ifStatement = 'b'

colorChangeWB.onclick = function myFunction_setWB() {

  

  if (ifStatement == 'b') {

    ifStatement = 'w'

    r.style.setProperty('--dark-color', 'rgba(255,255,255,1)');
    r.style.setProperty('--light-color', 'rgba(15,15,15,1)');

  } else if (ifStatement == 'w') {

    ifStatement = 'b'

    r.style.setProperty('--dark-color', 'rgba(15,15,15,1)');
    r.style.setProperty('--light-color', 'rgba(255,255,255,1)');

  }

  
}

