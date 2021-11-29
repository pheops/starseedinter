//create a global img variable
let img;
let i=1;

let pause = false;

var textures = [];

var totalTextures = 400;
var loading = true;
var counter = 0;

//sets duration in milliseconds
let t=100;


function preload() {
  soundFile = loadSound("logo/modular.mp3");
  iconPause = loadImage("logo/pause.png");
  iconPlay = loadImage("logo/play.png");
}


function Texture(filename) {
  loadImage(filename, texLoaded);
  //loadSound('logo/modular.mp3');
  function texLoaded(tex) {
    //console.log(filename);
    textures.push(tex);
    //textures[index] = sound;
    counter++;
    if (counter == totalTextures) {

      loading = false;
      background(0);
      displayButtons();
      button2.style('background-color', 'coral');

  

    }
  }
}


function displayButtons(){

  button = createImg('logo/play.png');
  // button.width = 5
  // button.height = 5
  button.style('float', 'right');
  button.style('width', '20px');
  button.style('padding', '5px');
  button.mousePressed(toggleSong);

  button2 = createImg('logo/pause.png');
  button2.width = 5
  button2.height = 5
  button2.style('float', 'right');
  button2.style('padding', '5px');
  button2.style('width', '20px');
  
  button2.mousePressed(toggleSong);
 

}
function toggleSong() {
  if (soundFile.isPlaying()) {
    soundFile.pause();
    button.style('background-color', 'black');
    button2.style('background-color', 'coral');
pause=false;

  
  } else {
    soundFile.loop();
     button.style('background-color', 'coral');
     button2.style('background-color', 'black');
     pause = true;
     addImg();
   
  }

}


function setup() {

for (let i = 0; i < totalTextures; i++){
     Texture('data1/starseed-' + i +'.png');
      }
 

let canvas = createCanvas(400, 400);
background(0);
 
  
}

function addImg() {
		if (pause != false){
  	//create an if statement
   	// if i is less than 3, add 1 to the value of i
  	// if it's more than that, set the value of i to equal 1
		if (i<399){
      i++;
    }else{
      i=0;
    }

  
    img = textures[i];
   //img.filter(GRAY);
    image(img, 0, 0);
  

    //remove the image, specify duration using t, declared at top
    //setTimeout(imgRemove, t);

    //keep cycling every second, specify duration using t, declared at top
    setTimeout(addImg, t);
  	print(i);
  }
 }

function imgRemove() {

  //removes image
  //img.remove();
  //img.updatePixels();

   //background(0);
}

function draw() {
 //background(0);

 ///loading animation
    if (loading) {
    stroke(255);
    noFill();
     rectMode(CENTER);
    rect(width/2, height/2, 200, 20);
   //rectMode(CENTER);
     //rect(width/2, height/2,590, 590);

    noStroke();
    fill(255);
    var w = (200 * counter) / totalTextures;
    rect(width/2, height/2,w, 20);

    //translate(width / 2, height / 2);
    //rotate(angle);
    //strokeWeight(4);
    //stroke(255);
    //line(0, 0, 100, 0);
    //angle += 0.1;
  } else {
 //background(0,5);
  }
}