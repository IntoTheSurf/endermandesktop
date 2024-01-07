let navCount = 0;
function showEnder() {
  if (navCount == 0) {
    const html = `
    <div class="dropdown" id ="ender">
            <button class="endermen"> <a href="./endermen.html">Endermen</a>
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            </div>
    </div>`;
    const two = document.querySelector('.navbar #advanced');

    // Using insertAdjacentHTML to add the HTML before the two element
    two.insertAdjacentHTML('afterend', html);

    navCount++;
  }
  else {
    console.log("Navigation element already exists!");
  }

}

var slideIndex = 1;

// Open the Modal
function openModal() {
  document.getElementById("gallery").style.display = "block";
}

function openAbout() {
  document.getElementById("about").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("slide" + slideIndex).style.display = "none";

  document.getElementById("thumb" + slideIndex).className = "demo";

  slideIndex = 1;
  document.getElementById("slide" + slideIndex).style.display = "block";



  const three = document.querySelector('.column #thumb1');
  three.className += " active";

  document.getElementById("gallery").style.display = "none";
}

function minimizeModal() {
  let i = 0;

  for (i = 1; i < 13; i++) {
    var popup = document.getElementById("slide" + i);

    // Get the computed style, that is the combination of styles 
    // resulting from your CSS classlist, etc
    var computedStyle = window.getComputedStyle(popup, null);

    // Get visibility value from computed styles
    var visiblityValue = computedStyle.getPropertyValue("display")

    if (visiblityValue == "block") {
      slideIndex = i;// Correct this from "close" to "show"
      document.getElementById("gallery").style.display = "none";
      return;
    }
  }
}


showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption2");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

document.getElementsByClassName("tablink")[0].click();

function openCity(evt, cityName) {
  var i, x, abtTabs;
  x = document.getElementsByClassName("selectTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  abtTabs = document.getElementsByClassName("abtTabs");
  for (i = 0; i < x.length; i++) {
    abtTabs[i].style.backgroundColor = "#222222";
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.style.backgroundColor = "#835285";
}

function closeCity(evt, cityName) {
  var i, x, abtTabs;
  x = document.getElementsByClassName("selectTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  abtTabs = document.getElementsByClassName("abtTabs");
  for (i = 0; i < x.length; i++) {
    abtTabs[i].style.backgroundColor = "#222222";
  }
  document.getElementById(cityName).style.display = "flex";
  document.getElementById('firstTab').style.backgroundColor = "#835285";
}


// Get the modal
var modal = document.getElementById("biomeModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

function openBiomeImg(x) {

  var img = document.getElementById("biome" + x);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBiome")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

function play(x) {
  var audio = document.getElementById(x);
  audio.play();
}


function activatePlayer(i, x) {

  var elm = document.getElementById('sfx' + x);
  var audio = document.getElementById('audioPlay' + i);

  var srcAud = elm.getAttribute("src");
  var source = document.getElementById('audioSource' + i);
  source.src = srcAud;

  audio.load();
  audio.play();
};

function stopAudio(i) {
  var audio = document.getElementById('audioPlay' + i);
  audio.pause();
  audio.currentTime = 0;
}


/*TRIVIA*/

document.getElementsByClassName("tablink")[0].click();

function chooseOption(evt, cityName, tabName) {
  var i, x, trivTabs;
  x = document.getElementsByClassName("selectTrivia");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  trivTabs = document.getElementsByClassName("trivTabs");
  for (i = 0; i < x.length + 1; i++) {

    trivTabs[i].style.display = "none";
    trivTabs[i].style.backgroundColor = "#222222";
  }

  document.getElementById('backHome').style.display = "inline-block";

  if (cityName == 'triviaChoose') {
    document.getElementById('backHome').style.display = "none";


    document.getElementById('homeTab').style.color = "#222222";
  }
  else {
    document.getElementById('backHome').style.display = "inline-block";
    document.getElementById('backHome').style.color = "whitesmoke";


    document.getElementById('homeTab').style.color = "whitesmoke";
  }

  document.getElementById(tabName).style.display = "inline-block";
  document.getElementById('homeTab').style.display = "inline-block";
  document.getElementById(cityName).style.display = "flex";
  document.getElementById(tabName).style.backgroundColor = "#835285";
}

let a = 0, g = 0, t = 0;
function openTask(i) {
  /*var container = document.getElementById('tasksContainer');*/
  const container = document.querySelector('#tasksContainer');

  // Using insertAdjacentHTML to add the HTML before the two element

  if (i == 0) {
    if (a == 0) {
      const task = `
    <div id="aboutTask" onclick="document.getElementById('aboutTask').style.backgroundColor = 'rgb(174, 99, 243)';">
      <div class="taskOpen" id="" onclick="document.getElementById('about').style.display='block'; switchTasks(0); document.getElementById('aboutTask').style.backgroundColor = 'rgb(174, 99, 243)';">
          <img src="./images/icons/enderAbout.webp" class="taskIcon" alt="icon">
          <p class="taskName">About</p>
      </div>
    </div>`;


      container.insertAdjacentHTML('beforeend', task);
      a++;
      switchTasks(i);
      document.getElementById('aboutTask').style.backgroundColor = 'rgb(174, 99, 243)';
    }
  }
  else if (i == 1) {
    if (g == 0) {
      const task = `
    <div id="galleryTask" onclick="document.getElementById('galleryTask').style.backgroundColor = 'rgb(174, 99, 243)';">
      <div class="taskOpen" onclick="openModal(); switchTasks(1); document.getElementById('galleryTask').style.backgroundColor = 'rgb(174, 99, 243)';">
        <img src="./images/icons/enderGallery.webp" class="taskIcon" alt="icon">
        <p class="taskName">Gallery</p>
      </div>
    </div>`
      container.insertAdjacentHTML('beforeend', task);
      g++;
      switchTasks(i);
      document.getElementById('galleryTask').style.backgroundColor = 'rgb(174, 99, 243)';
    }
  }
  else if (i == 2) {
    if (t == 0) {
      const task = `
    <div id="triviaTask" onclick="document.getElementById('triviaTask').style.backgroundColor = 'rgb(174, 99, 243)';">
      <div class="taskOpen" onclick="document.getElementById('trivia').style.display='block'; switchTasks(2); document.getElementById('triviaTask').style.backgroundColor = 'rgb(174, 99, 243)';">
        <img src="./images/icons/enderTrivia.webp" class="taskIcon" alt="icon">
        <p class="taskName">Trivia</p>
      </div>
    </div>`
      container.insertAdjacentHTML('beforeend', task);
      t++;
      switchTasks(i);
      document.getElementById('triviaTask').style.backgroundColor = 'rgb(174, 99, 243)';
    }
  }

}

function closeTask(i) {
  const element = document.getElementById(i);
  if (i == 'aboutTask') {
    a--;
    document.getElementById(i).style.backgroundColor = 'blueviolet';
  }
  else if (i == 'galleryTask') {
    g--;
    document.getElementById(i).style.backgroundColor = 'blueviolet';
  }
  if (i == 'triviaTask') {
    t--;
    document.getElementById(i).style.backgroundColor = 'blueviolet';
  }
  element.remove();
}

function switchTasks(i) {
  if (i == 0) {
    var abTask = document.getElementById("aboutTask");
    if (abTask) {
      document.getElementById('aboutTask').style.backgroundColor = 'rgb(174, 99, 243)';
      document.getElementById('about').style.zIndex = 3;
    }
    var gTask = document.getElementById("galleryTask");
    if (gTask) {
      document.getElementById('galleryTask').style.backgroundColor = 'blueviolet';
      document.getElementById('gallery').style.zIndex = 2;
    }
    var trTask = document.getElementById("triviaTask");
    if (trTask) {
      document.getElementById('triviaTask').style.backgroundColor = 'blueviolet';
      document.getElementById('trivia').style.zIndex = 2;
    }

  }
  else if (i == 1) {
    var abTask = document.getElementById("aboutTask");
    if (abTask) {
      document.getElementById('aboutTask').style.backgroundColor = 'blueviolet';
      document.getElementById('about').style.zIndex = 2;
    }
    var gTask = document.getElementById("galleryTask");
    if (gTask) {
      document.getElementById('galleryTask').style.backgroundColor = 'rgb(174, 99, 243)';
      document.getElementById('gallery').style.zIndex = 3;
    }
    var trTask = document.getElementById("triviaTask");
    if (trTask) {
      document.getElementById('triviaTask').style.backgroundColor = 'blueviolet';
      document.getElementById('trivia').style.zIndex = 2;
    }
  }
  else if (i == 2) {
    var abTask = document.getElementById("aboutTask");
    if (abTask) {
      document.getElementById('aboutTask').style.backgroundColor = 'blueviolet';
      document.getElementById('about').style.zIndex = 2;
    }
    var gTask = document.getElementById("galleryTask");
    if (gTask) {
      document.getElementById('galleryTask').style.backgroundColor = 'blueviolet';
      document.getElementById('gallery').style.zIndex = 2;
    }
    var trTask = document.getElementById("triviaTask");
    if (trTask) {
      document.getElementById('triviaTask').style.backgroundColor = 'rgb(174, 99, 243)';
      document.getElementById('trivia').style.zIndex = 3;
    }
  }
}

var startVar = 0;

function closeStart() {
  startVar = 0;
  document.getElementById('start').style.display = 'none';
  document.getElementById('homeContainer').style.backgroundColor = 'blueviolet';

}


function outsideClick() {

  let icons = document.getElementsByClassName("icon");
  let abtTask = document.getElementById("aboutTask");
  let gaTask = document.getElementById("galleryTask");
  let triTask = document.getElementById("triviaTask");

  for (i = 0; i < icons.length; i++) {
    icons[i].style.backgroundColor = 'rgba(139, 139, 139, 0.001)';
  }


  if (abtTask) {
    document.getElementById('aboutTask').style.backgroundColor = 'blueviolet';
  }

  if (gaTask) {
    document.getElementById('galleryTask').style.backgroundColor = 'blueviolet';
  }

  if (triTask) {
    document.getElementById('triviaTask').style.backgroundColor = 'blueviolet';
  }
}


function insideClick(i) {
  let triTask = document.getElementById("triviaTask");
  if (triTask) {
    document.getElementById('triviaTask').style.backgroundColor = 'rgb(174, 99, 243)';
  }
  
}


document.addEventListener('click', function (event) {

  var specifiedElement = document.getElementById('triviaModal');
  var isClickInside = specifiedElement.contains(event.target);
  if (isClickInside) {
    document.getElementById('triviaTask').style.backgroundColor = 'rgb(174, 99, 243)';
  } else {
    let trTask = document.getElementById("triviaTask");
    if (trTask) {
      document.getElementById('triviaTask').style.backgroundColor = 'blueviolet';
    }

  }

  if (document.getElementById("trivia").style.display == "none") {
    let trTask = document.getElementById("triviaTask");
    if (trTask) {
      document.getElementById('triviaTask').style.backgroundColor = 'blueviolet';
    }

  }

  specifiedElement = document.getElementById('aboutModal');
  isClickInside = specifiedElement.contains(event.target);
  if (isClickInside) {
    document.getElementById('aboutTask').style.backgroundColor = 'rgb(174, 99, 243)';
  } else {
    let trTask = document.getElementById("aboutTask");
    if (trTask) {
      document.getElementById('aboutTask').style.backgroundColor = 'blueviolet';
    }
  }

  if (document.getElementById("about").style.display == "none") {
    let trTask = document.getElementById("aboutTask");
    if (trTask) {
      document.getElementById('aboutTask').style.backgroundColor = 'blueviolet';
    }

  }

  specifiedElement = document.getElementById('galleryModal');
  isClickInside = specifiedElement.contains(event.target);
  if (isClickInside) {
    document.getElementById('galleryTask').style.backgroundColor = 'rgb(174, 99, 243)';

  } else {
    let trTask = document.getElementById("galleryTask");
    if (trTask) {
      document.getElementById('galleryTask').style.backgroundColor = 'blueviolet';
    }

  }
  if (document.getElementById("gallery").style.display == "none") {
    let trTask = document.getElementById("galleryTask");
    if (trTask) {
      document.getElementById('galleryTask').style.backgroundColor = 'blueviolet';
    }

  }

  let task1 = document.getElementById("aboutTask");
  if (task1) {
    specifiedElement = document.getElementById('aboutTask');
    isClickInside = specifiedElement.contains(event.target);
    if (isClickInside) {
      document.getElementById('aboutTask').style.backgroundColor = 'rgb(174, 99, 243)';

    }
  }

  let task2 = document.getElementById("galleryTask");
  if (task2) {
    specifiedElement = document.getElementById('galleryTask');
    isClickInside = specifiedElement.contains(event.target);
    if (isClickInside) {
      document.getElementById('galleryTask').style.backgroundColor = 'rgb(174, 99, 243)';

    }
  }

  let task3 = document.getElementById("triviaTask");
  if (task3) {
    specifiedElement = document.getElementById('triviaTask');
    isClickInside = specifiedElement.contains(event.target);
    if (isClickInside) {
      document.getElementById('triviaTask').style.backgroundColor = 'rgb(174, 99, 243)';

    }
  }

  var icons = document.getElementsByClassName("icon");

  for (i = 0; i < icons.length; i++) {
    specifiedElement = icons[i];
    isClickInside = specifiedElement.contains(event.target);
    if (isClickInside) {
      icons[i].style.backgroundColor = 'rgba(139, 139, 139, 0.171)';
    } else {
      icons[i].style.backgroundColor = 'rgba(139, 139, 139, 0.001)';
    }

  }



  specifiedElement = document.getElementById('homeContainer');
  isClickInside = specifiedElement.contains(event.target);
  var specifiedElement2 = document.getElementById('start');
  var isClickInside2 = specifiedElement2.contains(event.target);

  if (!isClickInside && !isClickInside2) {
    let home = document.getElementById("start");
    if (home.style.display == 'block') {

      document.getElementById('start').style.display = 'none';
      document.getElementById('homeContainer').style.backgroundColor = 'blueviolet';
      startVar = 0;

    }
  } else if (isClickInside) {
    if (startVar == 0) {
      document.getElementById('start').style.display = 'block';
      document.getElementById('homeContainer').style.backgroundColor = 'rgb(160, 75, 240)';
      startVar++;
    }
    else {
      document.getElementById('start').style.display = 'none';
      document.getElementById('homeContainer').style.backgroundColor = 'blueviolet';
      startVar--;
    }

  }

});

function minimizeEverything(){
  document.getElementById('about').style.display='none';
  minimizeModal();
  document.getElementById('trivia').style.display='none';
}

/*TECHNOBLADE*/

function changeTechno(){
  document.getElementById('technoImg').src="./images/technoblade/technoblade-sit-min-d5ar_780x.webp";
  document.getElementById('technoImg').style.width='50px';
}