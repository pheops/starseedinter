let img;
let i=1;

let pause = false;

var textures = [];
var totalTextures = 800;
var loading = true;
var counter = 0;

var preset = 1;
var rotateAmt = 0;

let bubbles = [];
let starseeds = [];

let angle = 0.0;
let angle2 = 0.0;

// function preload(){
//   for (let i = 1; i < 800; i++){
//     starseeds[i] = loadImage('starseeding/starseed-' + i +'.png')
//    // starseeds[i] = loadImage('starseeding/starseed1.png')
//   }
// }

function preload() {
  soundFile = loadSound("logo/modular.mp3");
  //iconPause = loadImage("logo/pause.png");
  //iconPlay = loadImage("logo/play.png");
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
      button1.style('background-color', 'coral');

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(10, 30);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 20);
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }
  

    }
  }
}

function displayButtons(){

  // button = createImg('logo/play.png');
  // // button.width = 5
  // // button.height = 5
  // button.style('float', 'right');
  // button.style('width', '50px');
  // button.style('padding', '5px');
  // button.mousePressed(toggleSong);

  // button2 = createImg('logo/pause.png');
  // button2.width = 5
  // button2.height = 5
  // button2.style('float', 'right');
  // button2.style('padding', '5px');
  // button2.style('width', '50px');
  // button2.mousePressed(toggleSong);

  // button3 = createImg('logo/reload.png');
  // button3.width = 5
  // button3.height = 5
  // button3.style('float', 'right');
  // button3.style('padding', '5px');
  // button3.style('width', '50px');
  // button3.mousePressed(reLoad);

  buttonSave = createImg('logo/save.png');
  buttonSave.width = 5
  buttonSave.height = 5
  buttonSave.style('float', 'right');
  buttonSave.style('padding', '5px');
  buttonSave.style('width', '50px');
  buttonSave.mousePressed(saveArt);

 

 


  button1 = createImg('logo/one.png');
  button1.width = 5
  button1.height = 5
  button1.style('float', 'left');
  button1.style('padding', '5px');
  button1.style('width', '50px');
  button1.mousePressed(rotateAmt = this.orbitspeed);
  button1.mousePressed(choosePreset1);
  console.log(preset)


  button2 = createImg('logo/two.png');
  button2.width = 5
  button2.height = 5
  button2.style('float', 'left');
  button2.style('padding', '5px');
  button2.style('width', '50px');
  button2.mousePressed(choosePreset2);
  console.log(preset)
 
  button3 = createImg('logo/three.png');
  button3.width = 5
  button3.height = 5
  button3.style('float', 'left');
  button3.style('padding', '5px');
  button3.style('width', '50px');
  button3.mousePressed(choosePreset3);
  console.log(preset)

  button4 = createImg('logo/four.png');
  button4.width = 5
  button4.height = 5
  button4.style('float', 'left');
  button4.style('padding', '5px');
  button4.style('width', '50px');
  button4.mousePressed(choosePreset4);
  console.log(preset)

   button5 = createImg('logo/five.png');
  button5.width = 5
  button5.height = 5
  button5.style('float', 'left');
  button5.style('padding', '5px');
  button5.style('width', '50px');
  button5.mousePressed(choosePreset5);
  console.log(preset)

   button6 = createImg('logo/six.png');
  button6.width = 5
  button6.height = 5
  button6.style('float', 'left');
  button6.style('padding', '5px');
  button6.style('width', '50px');
  button6.mousePressed(choosePreset6);
  console.log(preset)

   button7 = createImg('logo/seven.png');
  button7.width = 5
  button7.height = 5
  button7.style('float', 'left');
  button7.style('padding', '5px');
  button7.style('width', '50px');
  button7.mousePressed(choosePreset7);
  console.log(preset)

   button8 = createImg('logo/eight.png');
  button8.width = 5
  button8.height = 5
  button8.style('float', 'left');
  button8.style('padding', '5px');
  button8.style('width', '50px');
  button8.mousePressed(choosePreset8);
  console.log(preset)

   button9 = createImg('logo/nine.png');
  button9.width = 5
  button9.height = 5
  button9.style('float', 'left');
  button9.style('padding', '5px');
  button9.style('width', '50px');
  button9.mousePressed(choosePreset9);
  console.log(preset)

  button10 = createImg('logo/ten.png');
  button10.width = 5
  button10.height = 5
  button10.style('float', 'left');
  button10.style('padding', '5px');
  button10.style('width', '50px');
  button10.mousePressed(choosePreset10);
  console.log(preset)
}



function choosePreset1(){
preset = 1;
console.log(preset)

 background(0);


button1.style('background-color', 'coral');
button2.style('background-color', 'black');
button3.style('background-color', 'black');
button4.style('background-color', 'black');
button5.style('background-color', 'black');
button6.style('background-color', 'black');
button7.style('background-color', 'black');
button8.style('background-color', 'black');
button9.style('background-color', 'black');
button10.style('background-color', 'black');



  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(10, 30);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 20);
     // let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }

}


function choosePreset2(){
preset = 2;
console.log(preset)


button1.style('background-color', 'black');
button2.style('background-color', 'coral');
button3.style('background-color', 'black');
button4.style('background-color', 'black');
button5.style('background-color', 'black');
button6.style('background-color', 'black');
button7.style('background-color', 'black');
button8.style('background-color', 'black');
button9.style('background-color', 'black');
button10.style('background-color', 'black');

 background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(10, 15);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 20);
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}


function choosePreset3(){
preset = 3;
console.log(preset)

button1.style('background-color', 'black');
button2.style('background-color', 'black');
button3.style('background-color', 'coral');
button4.style('background-color', 'black');
button5.style('background-color', 'black');
button6.style('background-color', 'black');
button7.style('background-color', 'black');
button8.style('background-color', 'black');
button9.style('background-color', 'black');
button10.style('background-color', 'black');

 background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(5, 10);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = 0;
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}

function choosePreset4(){
preset = 4;
console.log(preset)

button1.style('background-color', 'black');
button2.style('background-color', 'black');
button3.style('background-color', 'black');
button4.style('background-color', 'coral');
button5.style('background-color', 'black');
button6.style('background-color', 'black');
button7.style('background-color', 'black');
button8.style('background-color', 'black');
button9.style('background-color', 'black');
button10.style('background-color', 'black');
 background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(5, 10);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 2);
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}


function choosePreset5(){
preset = 5;
console.log(preset)
button1.style('background-color', 'black');
button2.style('background-color', 'black');
button3.style('background-color', 'black');
button4.style('background-color', 'black');
button5.style('background-color', 'coral');
button6.style('background-color', 'black');
button7.style('background-color', 'black');
button8.style('background-color', 'black');
button9.style('background-color', 'black');
button10.style('background-color', 'black');
 background(0);

  for (let i = 0; i < 799; i++) {
    let x = i//random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(5, 10);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 1);
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}


function choosePreset6(){
preset = 6;
console.log(preset)
button1.style('background-color', 'black');
button2.style('background-color', 'black');
button3.style('background-color', 'black');
button4.style('background-color', 'black');
button5.style('background-color', 'black');
button6.style('background-color', 'coral');
button7.style('background-color', 'black');
button8.style('background-color', 'black');
button9.style('background-color', 'black');
button10.style('background-color', 'black');
 background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);//i/2 //random(-width/2,width/2);
    let y = random(-height/2,height/2);//i/2 - height/2//random(-height/2,height/2);
    let r = random(1, 5);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 50);
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}


function choosePreset7(){
preset = 7;
console.log(preset)
button1.style('background-color', 'black');
button2.style('background-color', 'black');
button3.style('background-color', 'black');
button4.style('background-color', 'black');
button5.style('background-color', 'black');
button6.style('background-color', 'black');
button7.style('background-color', 'coral');
button8.style('background-color', 'black');
button9.style('background-color', 'black');
button10.style('background-color', 'black');
 background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(5, 10);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 2);
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}


function choosePreset8(){
preset = 8;
console.log(preset)
button1.style('background-color', 'black');
button2.style('background-color', 'black');
button3.style('background-color', 'black');
button4.style('background-color', 'black');
button5.style('background-color', 'black');
button6.style('background-color', 'black');
button7.style('background-color', 'black');
button8.style('background-color', 'coral');
button9.style('background-color', 'black');
button10.style('background-color', 'black');
 background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(5, 10);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 2);
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}


function choosePreset9(){
preset = 9;
console.log(preset)
button1.style('background-color', 'black');
button2.style('background-color', 'black');
button3.style('background-color', 'black');
button4.style('background-color', 'black');
button5.style('background-color', 'black');
button6.style('background-color', 'black');
button7.style('background-color', 'black');
button8.style('background-color', 'black');
button9.style('background-color', 'coral');
button10.style('background-color', 'black');
 background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(5, 30);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 2);
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}


function choosePreset10(){
preset = 10;
console.log(preset)
button1.style('background-color', 'black');
button2.style('background-color', 'black');
button3.style('background-color', 'black');
button4.style('background-color', 'black');
button5.style('background-color', 'black');
button6.style('background-color', 'black');
button7.style('background-color', 'black');
button8.style('background-color', 'black');
button9.style('background-color', 'black');
button10.style('background-color', 'coral');
 background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(5, 10);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 50);
    //let rotateAmt = 0;
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed);
  }


}






function saveArt(){
  saveCanvas()
}

function reLoad(){
  background(0);

  for (let i = 0; i < 799; i++) {
    let x = random(-width/2,width/2);
    let y = random(-height/2,height/2);
    let r = random(10, 30);
    let starseed = textures[i+1];////random(starseeds);
    let orbitspeed = random(0, 20);
    bubbles[i] = new Bubble(x, y, r, starseed, orbitspeed, rotateAmt);
  }

}


function setup() {

  for (let i = 0; i < totalTextures; i++){
     Texture('starseeding/starseed-' + i +'.png');
      }

  let c;
  c = createCanvas(800, 800);
  angleMode(DEGREES);

  //s1 = createSlider(-width/2, width/2, 0, .1); //.position(120,900)
  //s2 = createSlider(-width/2, width/2, 0, .1); //.position(120,900)
}

function draw() {
  //background(0, 5);
  

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
   
//presetDraw(preset);

 translate(width/2, height/2);

  for (let b of bubbles) {
    b.show();
    b.move();


  }

}
  
 
}


// function presetDraw(preset){

// if (preset = 1){
//  translate(width/2, height/2);

//   for (let b of bubbles) {
//     b.show();
//     b.move();

//   }
// }

// if (preset = 2){
//  translate(width/2, height/2);

//   for (let b of bubbles) {
//     //b.show();
//     //b.move();

//   }
// }

// }



class Bubble {
  constructor(x, y, r, img, orbitspeed, ) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.starseed = img; 
    this.orbitspeed = orbitspeed
    //this.rotateAmt = rotateAmt;
  
  }

 
  move() {
    if (preset === 1){
    this.x = this.x + random(-2, 2) + this.orbitspeed //+ s1.value()*.01;;// sin(100)
    this.y =  this.y + random(-20, 20) + this.orbitspeed //+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
    rotate(random(0,this.orbitspeed))
    this.orbitspeed = this.orbitspeed + .002;

  } else
    if (preset === 2){
    this.x = this.x + random(-2, 2) + this.orbitspeed //+ s1.value()*.01;;// sin(100)
    this.y =  this.y + random(-20, 20) + this.orbitspeed //+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
    this.orbitspeed = this.orbitspeed + .002;

   } else
    if (preset === 3){
      this.x = this.x  + sin(this.orbitspeed);//this.orbitspeed //+ s1.value()*.01;;// sin(100)
      this.y =  this.y + random(-2, 2) + cos(this.orbitspeed) //+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
      this.orbitspeed = this.orbitspeed + .002;
  
   }

   else
    if (preset === 4){
      this.x = this.x  - this.orbitspeed;//this.orbitspeed //+ s1.value()*.01;;// sin(100)
      this.y =  this.y + cos(this.orbitspeed) //+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
      this.orbitspeed = this.orbitspeed - .002;
    
  
   }

      else
    if (preset === 5){
      this.x = this.x  - this.orbitspeed;//this.orbitspeed //+ s1.value()*.01;;// sin(100)
      this.y =  this.y - cos(this.orbitspeed) //+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
      this.orbitspeed = this.orbitspeed - .002;
    
  
   }

      else
    if (preset === 6){

      this.x = this.x + sin(this.x / 2) ;//this.orbitspeed //+ s1.value()*.01;;// sin(100)
      this.y =  this.y + cos(this.y / 2) //+ random(-20, 20)//+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
      this.orbitspeed = this.orbitspeed + .002;
     
  
   }

      else
    if (preset === 7){
    this.x = this.x + sin(this.x / 4) ;//this.orbitspeed //+ s1.value()*.01;;// sin(100)
      this.y =  this.y + cos(this.y / 2) + random(-20, 20)//+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
      this.orbitspeed = this.orbitspeed + .002;
    
  
   }

      else
    if (preset === 8){
     
      this.x = this.x + noise(0,500) ;//this.orbitspeed //+ s1.value()*.01;;// sin(100)
      this.y =  this.y + sin(this.y / 2) + this.orbitspeed //+ random(-20, 20)//+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
      this.orbitspeed = this.orbitspeed + .002;
    
  
   }

      else
    if (preset === 9){
      this.x = this.x  + this.orbitspeed*2;//this.orbitspeed //+ s1.value()*.01;;// sin(100)
      this.y =  this.y + tan(this.orbitspeed) //+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
      this.orbitspeed = this.orbitspeed - .002;
    
  
   }

      else
    if (preset === 10){
       //this.r = this.r * cos(this.orbitspeed)
      this.x = this.x  * cos( this.orbitspeed);//this.orbitspeed //+ s1.value()*.01;;// sin(100)
      this.y =  this.y * - sin(this.orbitspeed) //+ s2.value()*.01//+ .002//this.y// + random(-20, 20);
      rotate(random(0,this.orbitspeed))
      this.orbitspeed = this.orbitspeed - .002;
   
  
   }

    // if (this.y > height){
    //   this.y = -height * 2;
    // }

    // if (this.x > width){
    //   this.x = -width * 2;
    // }

  }

  show() {

    //rotate(this.orbitspeed);
    //this.starseed.filter(ERODE);
    image(this.starseed, this.x, this.y, this.r, this.r)
   //this.orbitspeed = this.orbitspeed + .000002;
    //stroke(255);
    //strokeWeight(4);
    //fill(125);
    //ellipse(this.x, this.y, this.r * 2);
  }
}





function toggleSong() {
  if (soundFile.isPlaying()) {
    soundFile.pause();
    // button.style('background-color', 'black');
    // button2.style('background-color', 'coral');
pause=false;

  
  } else {
    soundFile.loop();
     // button.style('background-color', 'coral');
     // button2.style('background-color', 'black');
     pause = true;
     //addImg();
   
  }

}
