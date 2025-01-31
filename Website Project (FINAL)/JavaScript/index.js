
// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});


if(navigator.geolocation){

    navigator.geolocation.watchPosition(function(pos){
        console.log("Latitude" + pos.coords.latitude + "Longitutde " + pos.coords.longitude)
      document.getElementById('d').innerHTML='<a href="https://www.google.com/maps/search/?api=1&query=' + pos.coords.latitude + ',' + pos.coords.longitude + '">Location</a>'
    })
}

document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.accordion-button');

    accordions.forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.toggle('active');
            var content = button.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
            }
        });
    });
});
        
document.getElementsByClassName('kg-h')[0].style.display='none'
    document.getElementById('bt').addEventListener('click', function(){
      document.getElementsByClassName('kg-h')[0].style.display='block'

      document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'
       document.getElementsByClassName('x')[3].style.display = 'none'
      document.getElementsByClassName('x')[0].style.display = 'none'
      document.getElementsByClassName('x')[2].style.display = 'none'
      document.getElementsByClassName('x')[1].style.display = 'none'
      document.getElementsByClassName('kg-i-ml')[0].style.display = 'none'
      document.getElementsByClassName('y')[0].style.display = 'none'
      document.getElementsByClassName('y')[1].style.display = 'none'
      document.getElementsByClassName('y')[2].style.display = 'none'
      document.getElementsByClassName('y')[3].style.display = 'none'
      
      document.getElementsByClassName('q')[0].style.display = 'none'
      document.getElementsByClassName('q')[1].style.display = 'none'
      document.getElementsByClassName('q')[2].style.display = 'none'
      document.getElementsByClassName('q')[3].style.display = 'none'
      document.getElementsByClassName('l')[0].style.display = 'none'
      document.getElementsByClassName('l')[1].style.display = 'none'
      document.getElementsByClassName('l')[2].style.display = 'none'
      document.getElementsByClassName('l')[3].style.display = 'none'
      document.getElementsByClassName('r')[0].style.display = 'none'
      document.getElementsByClassName('r')[1].style.display = 'none'
      document.getElementsByClassName('r')[2].style.display = 'none'
      document.getElementsByClassName('r')[3].style.display = 'none'
      document.getElementsByClassName('s')[0].style.display = 'none'
      document.getElementsByClassName('s')[1].style.display = 'none'
      document.getElementsByClassName('s')[2].style.display = 'none'
      document.getElementsByClassName('s')[3].style.display = 'none'
      document.getElementsByClassName('u')[0].style.display = 'none'
      document.getElementsByClassName('u')[1].style.display = 'none'
      document.getElementsByClassName('u')[2].style.display = 'none'
      document.getElementsByClassName('u')[3].style.display = 'none'

    })
    document.getElementById('btk').addEventListener('click', function(){
    document.getElementsByClassName('z')[0].style.display='block'
    document.getElementsByClassName('z')[1].style.display='none'
    document.getElementsByClassName('z')[2].style.display='none'
    document.getElementsByClassName('z')[3].style.display='none'
    
    })
    document.getElementById('btk2').addEventListener('click', function(){
    document.getElementsByClassName('z')[1].style.display='block'
    document.getElementsByClassName('z')[0].style.display='none'
    document.getElementsByClassName('z')[2].style.display='none'
    document.getElementsByClassName('z')[3].style.display='none'
    })
    document.getElementById('btk3').addEventListener('click', function(){
    document.getElementsByClassName('z')[2].style.display='block'
    document.getElementsByClassName('z')[0].style.display='none'
    document.getElementsByClassName('z')[1].style.display='none'
    document.getElementsByClassName('z')[3].style.display='none'
    })
    document.getElementById('btk4').addEventListener('click', function(){
    document.getElementsByClassName('z')[3].style.display='block'
    document.getElementsByClassName('z')[0].style.display='none'
    document.getElementsByClassName('z')[2].style.display='none'
    document.getElementsByClassName('z')[1].style.display='none'
    })

// indoor Games Cards
// INDOOR kids
document.getElementsByClassName('kg-h')[0].style.display = 'none'
document.getElementById('bt').addEventListener('click', function () {
  document.getElementsByClassName('kg-h')[0].style.display = 'block'
  document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'


})
document.getElementById('btk').addEventListener('click', function () {
  document.getElementsByClassName('z')[0].style.display = 'block'
  document.getElementsByClassName('z')[1].style.display = 'none'
  document.getElementsByClassName('z')[2].style.display = 'none'
  document.getElementsByClassName('z')[3].style.display = 'none'

})
document.getElementById('btk2').addEventListener('click', function () {
  document.getElementsByClassName('z')[1].style.display = 'block'
  document.getElementsByClassName('z')[0].style.display = 'none'
  document.getElementsByClassName('z')[2].style.display = 'none'
  document.getElementsByClassName('z')[3].style.display = 'none'
})
document.getElementById('btk3').addEventListener('click', function () {
  document.getElementsByClassName('z')[2].style.display = 'block'
  document.getElementsByClassName('z')[0].style.display = 'none'
  document.getElementsByClassName('z')[1].style.display = 'none'
  document.getElementsByClassName('z')[3].style.display = 'none'
})
document.getElementById('btk4').addEventListener('click', function () {
  document.getElementsByClassName('z')[3].style.display = 'block'
  document.getElementsByClassName('z')[0].style.display = 'none'
  document.getElementsByClassName('z')[2].style.display = 'none'
  document.getElementsByClassName('z')[1].style.display = 'none'
})



// INDOOR Females
document.getElementsByClassName('x')[3].style.display = 'none'
document.getElementsByClassName('x')[0].style.display = 'none'
document.getElementsByClassName('x')[2].style.display = 'none'
document.getElementsByClassName('x')[1].style.display = 'none'

document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'
document.getElementById('bt-fl').addEventListener('click', function () {
document.getElementsByClassName('kg-i-fl')[0].style.display = 'block'
document.getElementsByClassName('kg-h')[0].style.display = 'none'
document.getElementsByClassName('z')[3].style.display = 'none'
  document.getElementsByClassName('z')[0].style.display = 'none'
  document.getElementsByClassName('z')[2].style.display = 'none'
  document.getElementsByClassName('z')[1].style.display = 'none'
  
  document.getElementsByClassName('kg-i-ml')[0].style.display = 'none'
  document.getElementsByClassName('y')[0].style.display = 'none'
  document.getElementsByClassName('y')[1].style.display = 'none'
  document.getElementsByClassName('y')[2].style.display = 'none'
  document.getElementsByClassName('y')[3].style.display = 'none'

  document.getElementsByClassName('q')[0].style.display = 'none'
  document.getElementsByClassName('q')[1].style.display = 'none'
  document.getElementsByClassName('q')[2].style.display = 'none'
  document.getElementsByClassName('q')[3].style.display = 'none'
  document.getElementsByClassName('l')[0].style.display = 'none'
  document.getElementsByClassName('l')[1].style.display = 'none'
  document.getElementsByClassName('l')[2].style.display = 'none'
  document.getElementsByClassName('l')[3].style.display = 'none'
  document.getElementsByClassName('r')[0].style.display = 'none'
  document.getElementsByClassName('r')[1].style.display = 'none'
  document.getElementsByClassName('r')[2].style.display = 'none'
  document.getElementsByClassName('r')[3].style.display = 'none'
  document.getElementsByClassName('s')[0].style.display = 'none'
  document.getElementsByClassName('s')[1].style.display = 'none'
  document.getElementsByClassName('s')[2].style.display = 'none'
  document.getElementsByClassName('s')[3].style.display = 'none'
  document.getElementsByClassName('u')[0].style.display = 'none'
  document.getElementsByClassName('u')[1].style.display = 'none'
  document.getElementsByClassName('u')[2].style.display = 'none'
  document.getElementsByClassName('u')[3].style.display = 'none'
  

})
document.getElementById('btk-i-fl-1').addEventListener('click', function () {
document.getElementsByClassName('x')[0].style.display = 'block'
document.getElementsByClassName('x')[1].style.display = 'none'
document.getElementsByClassName('x')[2].style.display = 'none'
document.getElementsByClassName('x')[3].style.display = 'none'
})
  document.getElementById('btk-fl-2').addEventListener('click', function () {
  document.getElementsByClassName('x')[1].style.display = 'block'
  document.getElementsByClassName('x')[0].style.display = 'none'
  document.getElementsByClassName('x')[2].style.display = 'none'
  document.getElementsByClassName('x')[3].style.display = 'none'
})
document.getElementById('btk-fl-3').addEventListener('click', function () {
  document.getElementsByClassName('x')[2].style.display = 'block'
  document.getElementsByClassName('x')[0].style.display = 'none'
  document.getElementsByClassName('x')[1].style.display = 'none'
  document.getElementsByClassName('x')[3].style.display = 'none'
})
document.getElementById('btk-fl-4').addEventListener('click', function () {
  document.getElementsByClassName('x')[3].style.display = 'block'
  document.getElementsByClassName('x')[0].style.display = 'none'
  document.getElementsByClassName('x')[2].style.display = 'none'
  document.getElementsByClassName('x')[1].style.display = 'none'
})


// INDOOR males kg-i-ml 
document.getElementsByClassName('y')[3].style.display = 'none'
document.getElementsByClassName('y')[0].style.display = 'none'
document.getElementsByClassName('y')[2].style.display = 'none'
document.getElementsByClassName('y')[1].style.display = 'none'


document.getElementsByClassName('kg-i-ml')[0].style.display = 'none'
document.getElementById('bt-ml').addEventListener('click', function () {
  document.getElementsByClassName('kg-i-ml')[0].style.display = 'block'
  document.getElementsByClassName('kg-h')[0].style.display = 'none'
  document.getElementsByClassName('z')[3].style.display = 'none'
  document.getElementsByClassName('z')[0].style.display = 'none'
  document.getElementsByClassName('z')[2].style.display = 'none'
  document.getElementsByClassName('z')[1].style.display = 'none'
  document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'
  document.getElementsByClassName('x')[3].style.display = 'none'
  document.getElementsByClassName('x')[0].style.display = 'none'
  document.getElementsByClassName('x')[2].style.display = 'none'
  document.getElementsByClassName('x')[1].style.display = 'none'


  document.getElementsByClassName('q')[0].style.display = 'none'
  document.getElementsByClassName('q')[1].style.display = 'none'
  document.getElementsByClassName('q')[2].style.display = 'none'
  document.getElementsByClassName('q')[3].style.display = 'none'
  document.getElementsByClassName('l')[0].style.display = 'none'
  document.getElementsByClassName('l')[1].style.display = 'none'
  document.getElementsByClassName('l')[2].style.display = 'none'
  document.getElementsByClassName('l')[3].style.display = 'none'
  document.getElementsByClassName('r')[0].style.display = 'none'
  document.getElementsByClassName('r')[1].style.display = 'none'
  document.getElementsByClassName('r')[2].style.display = 'none'
  document.getElementsByClassName('r')[3].style.display = 'none'
  document.getElementsByClassName('s')[0].style.display = 'none'
  document.getElementsByClassName('s')[1].style.display = 'none'
  document.getElementsByClassName('s')[2].style.display = 'none'
  document.getElementsByClassName('s')[3].style.display = 'none'
  document.getElementsByClassName('u')[0].style.display = 'none'
  document.getElementsByClassName('u')[1].style.display = 'none'
  document.getElementsByClassName('u')[2].style.display = 'none'
  document.getElementsByClassName('u')[3].style.display = 'none'



})
document.getElementById('btk-ml-1').addEventListener('click', function () {
  document.getElementsByClassName('y')[0].style.display = 'block'
  document.getElementsByClassName('y')[1].style.display = 'none'
  document.getElementsByClassName('y')[2].style.display = 'none'
  document.getElementsByClassName('y')[3].style.display = 'none'

})
document.getElementById('btk-ml-2').addEventListener('click', function () {
  document.getElementsByClassName('y')[1].style.display = 'block'
  document.getElementsByClassName('y')[0].style.display = 'none'
  document.getElementsByClassName('y')[2].style.display = 'none'
  document.getElementsByClassName('y')[3].style.display = 'none'
})
document.getElementById('btk-ml-3').addEventListener('click', function () {
  document.getElementsByClassName('y')[2].style.display = 'block'
  document.getElementsByClassName('y')[0].style.display = 'none'
  document.getElementsByClassName('y')[1].style.display = 'none'
  document.getElementsByClassName('y')[3].style.display = 'none'
})
document.getElementById('btk-ml-4').addEventListener('click', function () {
  document.getElementsByClassName('y')[3].style.display = 'block'
  document.getElementsByClassName('y')[0].style.display = 'none'
  document.getElementsByClassName('y')[2].style.display = 'none'
  document.getElementsByClassName('y')[1].style.display = 'none'
})

// INDOOR Family kg-i-fy 
document.getElementsByClassName('q')[3].style.display = 'none'
document.getElementsByClassName('q')[0].style.display = 'none'
document.getElementsByClassName('q')[2].style.display = 'none'
document.getElementsByClassName('q')[1].style.display = 'none'


document.getElementsByClassName('kg-i-fy')[0].style.display = 'none'
document.getElementById('bt-fy').addEventListener('click', function () {
document.getElementsByClassName('kg-i-fy')[0].style.display = 'block'

document.getElementsByClassName('kg-h')[0].style.display = 'none'
document.getElementsByClassName('z')[3].style.display = 'none'
  document.getElementsByClassName('z')[0].style.display = 'none'
  document.getElementsByClassName('z')[2].style.display = 'none'
  document.getElementsByClassName('z')[1].style.display = 'none'
document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'
document.getElementsByClassName('x')[3].style.display = 'none'
document.getElementsByClassName('x')[0].style.display = 'none'
document.getElementsByClassName('x')[2].style.display = 'none'
document.getElementsByClassName('x')[1].style.display = 'none'
document.getElementsByClassName('kg-i-ml')[0].style.display = 'none'
document.getElementsByClassName('y')[0].style.display = 'none'
document.getElementsByClassName('y')[1].style.display = 'none'
document.getElementsByClassName('y')[2].style.display = 'none'
document.getElementsByClassName('y')[3].style.display = 'none'



document.getElementsByClassName('l')[0].style.display = 'none'
document.getElementsByClassName('l')[1].style.display = 'none'
document.getElementsByClassName('l')[2].style.display = 'none'
document.getElementsByClassName('l')[3].style.display = 'none'
document.getElementsByClassName('r')[0].style.display = 'none'
document.getElementsByClassName('r')[1].style.display = 'none'
document.getElementsByClassName('r')[2].style.display = 'none'
document.getElementsByClassName('r')[3].style.display = 'none'
document.getElementsByClassName('s')[0].style.display = 'none'
document.getElementsByClassName('s')[1].style.display = 'none'
document.getElementsByClassName('s')[2].style.display = 'none'
document.getElementsByClassName('s')[3].style.display = 'none'
document.getElementsByClassName('u')[0].style.display = 'none'
document.getElementsByClassName('u')[1].style.display = 'none'
document.getElementsByClassName('u')[2].style.display = 'none'
document.getElementsByClassName('u')[3].style.display = 'none'
})
document.getElementById('btk-i-fy-1').addEventListener('click', function () {
  document.getElementsByClassName('q')[0].style.display = 'block'
  document.getElementsByClassName('q')[1].style.display = 'none'
  document.getElementsByClassName('q')[2].style.display = 'none'
  document.getElementsByClassName('q')[3].style.display = 'none'
})
document.getElementById('btk-fy-2').addEventListener('click', function () {
  document.getElementsByClassName('q')[1].style.display = 'block'
  document.getElementsByClassName('q')[0].style.display = 'none'
  document.getElementsByClassName('q')[2].style.display = 'none'
  document.getElementsByClassName('q')[3].style.display = 'none'
})
document.getElementById('btk-fy-3').addEventListener('click', function () {
  document.getElementsByClassName('q')[2].style.display = 'block'
  document.getElementsByClassName('q')[0].style.display = 'none'
  document.getElementsByClassName('q')[1].style.display = 'none'
  document.getElementsByClassName('q')[3].style.display = 'none'
})
document.getElementById('btk-fy-4').addEventListener('click', function () {
  document.getElementsByClassName('q')[3].style.display = 'block'
  document.getElementsByClassName('q')[0].style.display = 'none'
  document.getElementsByClassName('q')[2].style.display = 'none'
  document.getElementsByClassName('q')[1].style.display = 'none'
})




// Outdoor Games Cards
// kids  : kg-o-k
    // female: kg-o-fl
    // male: kg-o-ml
    // family: kg-o-fy 
     // Outdoor Kids Games
    
    // OutDOOR kids    
    document.getElementsByClassName('kg-o-k')[0].style.display = 'none'
    document.getElementById('bt-o').addEventListener('click', function () {
    document.getElementsByClassName('kg-o-k')[0].style.display = 'block'
    // document.getElementsByClassName('kg-o-k')[0].style.display = 'none'

    document.getElementsByClassName('kg-h')[0].style.display = 'none'
document.getElementsByClassName('z')[3].style.display = 'none'
  document.getElementsByClassName('z')[0].style.display = 'none'
  document.getElementsByClassName('z')[2].style.display = 'none'
  document.getElementsByClassName('z')[1].style.display = 'none'
document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'
document.getElementsByClassName('x')[3].style.display = 'none'
document.getElementsByClassName('x')[0].style.display = 'none'
document.getElementsByClassName('x')[2].style.display = 'none'
document.getElementsByClassName('x')[1].style.display = 'none'
document.getElementsByClassName('kg-i-ml')[0].style.display = 'none'
document.getElementsByClassName('y')[0].style.display = 'none'
document.getElementsByClassName('y')[1].style.display = 'none'
document.getElementsByClassName('y')[2].style.display = 'none'
document.getElementsByClassName('y')[3].style.display = 'none'

    document.getElementsByClassName('q')[0].style.display = 'none'
    document.getElementsByClassName('q')[1].style.display = 'none'
    document.getElementsByClassName('q')[2].style.display = 'none'
    document.getElementsByClassName('q')[3].style.display = 'none'
  
    document.getElementsByClassName('r')[0].style.display = 'none'
    document.getElementsByClassName('r')[1].style.display = 'none'
    document.getElementsByClassName('r')[2].style.display = 'none'
    document.getElementsByClassName('r')[3].style.display = 'none'
    document.getElementsByClassName('s')[0].style.display = 'none'
    document.getElementsByClassName('s')[1].style.display = 'none'
    document.getElementsByClassName('s')[2].style.display = 'none'
    document.getElementsByClassName('s')[3].style.display = 'none'
    document.getElementsByClassName('u')[0].style.display = 'none'
    document.getElementsByClassName('u')[1].style.display = 'none'
    document.getElementsByClassName('u')[2].style.display = 'none'
    document.getElementsByClassName('u')[3].style.display = 'none'

    })
    document.getElementsByClassName('l')[3].style.display = 'none'
document.getElementsByClassName('l')[0].style.display = 'none'
document.getElementsByClassName('l')[2].style.display = 'none'
document.getElementsByClassName('l')[1].style.display = 'none'
    document.getElementById('btkk').addEventListener('click', function () {
    document.getElementsByClassName('l')[0].style.display = 'block'
    document.getElementsByClassName('l')[1].style.display = 'none'
    document.getElementsByClassName('l')[2].style.display = 'none'
    document.getElementsByClassName('l')[3].style.display = 'none'
    })
    document.getElementById('btkk2').addEventListener('click', function () {
    document.getElementsByClassName('l')[1].style.display = 'block'
    document.getElementsByClassName('l')[0].style.display = 'none'
    document.getElementsByClassName('l')[2].style.display = 'none'
    document.getElementsByClassName('l')[3].style.display = 'none'
    })
    document.getElementById('btkk3').addEventListener('click', function () {
    document.getElementsByClassName('l')[2].style.display = 'block'
    document.getElementsByClassName('l')[0].style.display = 'none'
    document.getElementsByClassName('l')[1].style.display = 'none'
    document.getElementsByClassName('l')[3].style.display = 'none'
    })
    document.getElementById('btkk4').addEventListener('click', function () {
    document.getElementsByClassName('l')[3].style.display = 'block'
    document.getElementsByClassName('l')[0].style.display = 'none'
    document.getElementsByClassName('l')[2].style.display = 'none'
    document.getElementsByClassName('l')[1].style.display = 'none'
    })

    // female: kg-o-fl
    // OUTDOOR Females
    document.getElementsByClassName('r')[3].style.display = 'none'
    document.getElementsByClassName('r')[0].style.display = 'none'
    document.getElementsByClassName('r')[2].style.display = 'none'
    document.getElementsByClassName('r')[1].style.display = 'none'

    document.getElementsByClassName('kg-o-fl')[0].style.display = 'none'
    document.getElementById('bto').addEventListener('click', function () {
    document.getElementsByClassName('kg-o-fl')[0].style.display = 'block'

    document.getElementsByClassName('kg-h')[0].style.display = 'none'
document.getElementsByClassName('z')[3].style.display = 'none'
  document.getElementsByClassName('z')[0].style.display = 'none'
  document.getElementsByClassName('z')[2].style.display = 'none'
  document.getElementsByClassName('z')[1].style.display = 'none'
document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'
document.getElementsByClassName('x')[3].style.display = 'none'
document.getElementsByClassName('x')[0].style.display = 'none'
document.getElementsByClassName('x')[2].style.display = 'none'
document.getElementsByClassName('x')[1].style.display = 'none'
document.getElementsByClassName('kg-i-ml')[0].style.display = 'none'
document.getElementsByClassName('y')[0].style.display = 'none'
document.getElementsByClassName('y')[1].style.display = 'none'
document.getElementsByClassName('y')[2].style.display = 'none'
document.getElementsByClassName('y')[3].style.display = 'none'

    document.getElementsByClassName('kg-h')[0].style.display = 'none'
    document.getElementsByClassName('q')[0].style.display = 'none'
    document.getElementsByClassName('q')[1].style.display = 'none'
    document.getElementsByClassName('q')[2].style.display = 'none'
    document.getElementsByClassName('q')[3].style.display = 'none'
    document.getElementsByClassName('l')[0].style.display = 'none'
    document.getElementsByClassName('l')[1].style.display = 'none'
    document.getElementsByClassName('l')[2].style.display = 'none'
    document.getElementsByClassName('l')[3].style.display = 'none'
   
    document.getElementsByClassName('s')[0].style.display = 'none'
    document.getElementsByClassName('s')[1].style.display = 'none'
    document.getElementsByClassName('s')[2].style.display = 'none'
    document.getElementsByClassName('s')[3].style.display = 'none'
    document.getElementsByClassName('u')[0].style.display = 'none'
    document.getElementsByClassName('u')[1].style.display = 'none'
    document.getElementsByClassName('u')[2].style.display = 'none'
    document.getElementsByClassName('u')[3].style.display = 'none'
    })
    document.getElementById('btk-o-fl-1').addEventListener('click', function () {
    document.getElementsByClassName('r')[0].style.display = 'block'
    document.getElementsByClassName('r')[1].style.display = 'none'
    document.getElementsByClassName('r')[2].style.display = 'none'    
    document.getElementsByClassName('r')[3].style.display = 'none'
    })
    document.getElementById('btkk-fl-2').addEventListener('click', function () {
    document.getElementsByClassName('r')[1].style.display = 'block'
    document.getElementsByClassName('r')[0].style.display = 'none'
    document.getElementsByClassName('r')[2].style.display = 'none'
    document.getElementsByClassName('r')[3].style.display = 'none'
    })
    document.getElementById('btkk-fl-3').addEventListener('click', function () {
    document.getElementsByClassName('r')[2].style.display = 'block'
    document.getElementsByClassName('r')[0].style.display = 'none'
    document.getElementsByClassName('r')[1].style.display = 'none'
    document.getElementsByClassName('r')[3].style.display = 'none'
    })
    document.getElementById('btkk-fl-4').addEventListener('click', function () {
    document.getElementsByClassName('r')[3].style.display = 'block'
    document.getElementsByClassName('r')[0].style.display = 'none'
    document.getElementsByClassName('r')[2].style.display = 'none'
    document.getElementsByClassName('r')[1].style.display = 'none'
    })

     // male: kg-o-ml  
    // OUTDOOR males 
    document.getElementsByClassName('s')[3].style.display = 'none'
    document.getElementsByClassName('s')[0].style.display = 'none'
    document.getElementsByClassName('s')[2].style.display = 'none'
    document.getElementsByClassName('s')[1].style.display = 'none'


    document.getElementsByClassName('kg-o-ml')[0].style.display = 'none'
    document.getElementById('btom').addEventListener('click', function () {
    document.getElementsByClassName('kg-o-ml')[0].style.display = 'block'

    document.getElementsByClassName('kg-h')[0].style.display = 'none'
    document.getElementsByClassName('z')[3].style.display = 'none'
      document.getElementsByClassName('z')[0].style.display = 'none'
      document.getElementsByClassName('z')[2].style.display = 'none'
      document.getElementsByClassName('z')[1].style.display = 'none'
    document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'
    document.getElementsByClassName('x')[3].style.display = 'none'
    document.getElementsByClassName('x')[0].style.display = 'none'
    document.getElementsByClassName('x')[2].style.display = 'none'
    document.getElementsByClassName('x')[1].style.display = 'none'
    document.getElementsByClassName('kg-i-ml')[0].style.display = 'none'
    document.getElementsByClassName('y')[0].style.display = 'none'
    document.getElementsByClassName('y')[1].style.display = 'none'
    document.getElementsByClassName('y')[2].style.display = 'none'
    document.getElementsByClassName('y')[3].style.display = 'none'


    document.getElementsByClassName('kg-h')[0].style.display = 'none'
    document.getElementsByClassName('q')[0].style.display = 'none'
    document.getElementsByClassName('q')[1].style.display = 'none'
    document.getElementsByClassName('q')[2].style.display = 'none'
    document.getElementsByClassName('q')[3].style.display = 'none'
    document.getElementsByClassName('l')[0].style.display = 'none'
    document.getElementsByClassName('l')[1].style.display = 'none'
    document.getElementsByClassName('l')[2].style.display = 'none'
    document.getElementsByClassName('l')[3].style.display = 'none'
    document.getElementsByClassName('r')[0].style.display = 'none'
    document.getElementsByClassName('r')[1].style.display = 'none'
    document.getElementsByClassName('r')[2].style.display = 'none'
    document.getElementsByClassName('r')[3].style.display = 'none'
 
    document.getElementsByClassName('u')[0].style.display = 'none'
    document.getElementsByClassName('u')[1].style.display = 'none'
    document.getElementsByClassName('u')[2].style.display = 'none'
    document.getElementsByClassName('u')[3].style.display = 'none'
    })
    document.getElementById('btk-o-ml-1').addEventListener('click', function () {
    document.getElementsByClassName('s')[0].style.display = 'block'
    document.getElementsByClassName('s')[1].style.display = 'none'
    document.getElementsByClassName('s')[2].style.display = 'none'
    document.getElementsByClassName('s')[3].style.display = 'none'
    })
    document.getElementById('btkk-ml-2').addEventListener('click', function () {
    document.getElementsByClassName('s')[1].style.display = 'block'
    document.getElementsByClassName('s')[0].style.display = 'none'
    document.getElementsByClassName('s')[2].style.display = 'none'
    document.getElementsByClassName('s')[3].style.display = 'none'
    })
    document.getElementById('btkk-ml-3').addEventListener('click', function () {
    document.getElementsByClassName('s')[2].style.display = 'block'
    document.getElementsByClassName('s')[0].style.display = 'none'
    document.getElementsByClassName('s')[1].style.display = 'none'
    document.getElementsByClassName('s')[3].style.display = 'none'
    })
    document.getElementById('btkk-ml-4').addEventListener('click', function () {
    document.getElementsByClassName('s')[3].style.display = 'block'
    document.getElementsByClassName('s')[0].style.display = 'none'
    document.getElementsByClassName('s')[2].style.display = 'none'
    document.getElementsByClassName('s')[1].style.display = 'none'
    })

// OUTDOOR Family kg-o-fy 
   document.getElementsByClassName('u')[3].style.display = 'none'
   document.getElementsByClassName('u')[0].style.display = 'none'
   document.getElementsByClassName('u')[2].style.display = 'none'
   document.getElementsByClassName('u')[1].style.display = 'none'


   document.getElementsByClassName('kg-o-fy')[0].style.display = 'none'
   document.getElementById('btof').addEventListener('click', function () {
   document.getElementsByClassName('kg-o-fy')[0].style.display = 'block'

   document.getElementsByClassName('kg-h')[0].style.display = 'none'
   document.getElementsByClassName('z')[3].style.display = 'none'
     document.getElementsByClassName('z')[0].style.display = 'none'
     document.getElementsByClassName('z')[2].style.display = 'none'
     document.getElementsByClassName('z')[1].style.display = 'none'
   document.getElementsByClassName('kg-i-fl')[0].style.display = 'none'
   document.getElementsByClassName('x')[3].style.display = 'none'
   document.getElementsByClassName('x')[0].style.display = 'none'
   document.getElementsByClassName('x')[2].style.display = 'none'
   document.getElementsByClassName('x')[1].style.display = 'none'
   document.getElementsByClassName('kg-i-ml')[0].style.display = 'none'
   document.getElementsByClassName('y')[0].style.display = 'none'
   document.getElementsByClassName('y')[1].style.display = 'none'
   document.getElementsByClassName('y')[2].style.display = 'none'
   document.getElementsByClassName('y')[3].style.display = 'none'

   document.getElementsByClassName('kg-h')[0].style.display = 'none'
   document.getElementsByClassName('q')[0].style.display = 'none'
   document.getElementsByClassName('q')[1].style.display = 'none'
   document.getElementsByClassName('q')[2].style.display = 'none'
   document.getElementsByClassName('q')[3].style.display = 'none'
   document.getElementsByClassName('l')[0].style.display = 'none'
   document.getElementsByClassName('l')[1].style.display = 'none'
   document.getElementsByClassName('l')[2].style.display = 'none'
   document.getElementsByClassName('l')[3].style.display = 'none'
   document.getElementsByClassName('r')[0].style.display = 'none'
   document.getElementsByClassName('r')[1].style.display = 'none'
   document.getElementsByClassName('r')[2].style.display = 'none'
   document.getElementsByClassName('r')[3].style.display = 'none'
   document.getElementsByClassName('s')[0].style.display = 'none'
   document.getElementsByClassName('s')[1].style.display = 'none'
   document.getElementsByClassName('s')[2].style.display = 'none'
   document.getElementsByClassName('s')[3].style.display = 'none'
   document.getElementsByClassName('u')[0].style.display = 'none'
   document.getElementsByClassName('u')[1].style.display = 'none'
   document.getElementsByClassName('u')[2].style.display = 'none'
   document.getElementsByClassName('u')[3].style.display = 'none'
    })
   document.getElementById('btk-o-fy-1').addEventListener('click', function () {
   document.getElementsByClassName('u')[0].style.display = 'block'
   document.getElementsByClassName('u')[1].style.display = 'none'
   document.getElementsByClassName('u')[2].style.display = 'none'
   document.getElementsByClassName('u')[3].style.display = 'none'
   })
   document.getElementById('btkk-fy-2').addEventListener('click', function () {
   document.getElementsByClassName('u')[1].style.display = 'block'
   document.getElementsByClassName('u')[0].style.display = 'none'
   document.getElementsByClassName('u')[2].style.display = 'none'
   document.getElementsByClassName('u')[3].style.display = 'none'
    })
   document.getElementById('btkk-fy-3').addEventListener('click', function () {
   document.getElementsByClassName('u')[2].style.display = 'block'
   document.getElementsByClassName('u')[0].style.display = 'none'
   document.getElementsByClassName('u')[1].style.display = 'none'
   document.getElementsByClassName('u')[3].style.display = 'none'
    })
   document.getElementById('btkk-fy-4').addEventListener('click', function () {
   document.getElementsByClassName('u')[3].style.display = 'block'
   document.getElementsByClassName('u')[0].style.display = 'none'
   document.getElementsByClassName('u')[2].style.display = 'none'
   document.getElementsByClassName('u')[1].style.display = 'none'
   })
 
