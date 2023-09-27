let x = 150; //adjust the postion of the fish on the x - axis
let y = 150; //adjust the postion of the fish on the y - axis
let face_be_happy = 1; //if you make the number 1 or larger it makes the fish happy, anything less than 1 makes the fish sad, ONLY WORKS ON NOT EVIL FISH
let fin = 1; //this turns the main body fin on or off, 1 or anything more than 1 is on, anything less is off


function setup() {
  createCanvas(300, 300);
   
  angleMode(DEGREES)
}







function draw() {

  background(0) 

  // rotate(290)

  fishnotevil(x, y, face_be_happy, fin)

  // x++
  //  if(x > 300){
  //   x = -100
  //  }
  
}















function fishnotevil(x, y, face_be_happy, fin) { //the totally definitely not evil fish



  strokeWeight(0); //I dont want most of the fish to have an outline

  fill(54, 79, 110); // setting the fill to that nice blue

  triangle(x - 70, y + 4, x - 90, y - 20, x - 87, y - 6); //top tail fin

  triangle(x - 70, y + 3, x - 87, y - 7, x - 90, y + 8); //bottom tail fin

  arc(x, y, 150, 60, 0, 180, CHORD); //body


  triangle(x - 50, y + .5, x - 44, y - 6, x - 42, y + .5); //read top body fin

  fill(0); //black fill for the eye
  circle(x + 55, y + 5, 5); //eye

  fill(54, 79, 110); //reseting the fill to the blue

  stroke(229, 216, 189); //setting th stroke color to a off white

  strokeWeight(1.5); //so that you can see the fin, mouth, and body line

  arc(x, y + 13, 98, 10, 0, 180); //body line

  arc(x + 73, y + 5, 15, 5, 100, 170); //happy mouth

  push()

  fill(229, 216, 189) //white

  stroke(54, 79, 110) //blue
  arc(x + 74, y + 4, 15, 12, 100, 170);
  // arc(x + 74, y + 4, 20, 16, 100, 170); // mouth 2
  // arc(x + 74, y + 4, 20, 20, 100, 170); // mouth 3
  pop()


  strokeWeight(1);
  triangle(x + 50, y + 10, x + 48, y + 15, x + 30, y + 18); //body fin



  //everything below is the hat


  noFill(); //no fill for the brim of the hat
  strokeWeight(2); //setting the stroke weight so the brim as some weight to it
  stroke(255, 72, 165); //pink color for the hat 

  arc(x + 52, y - 7, 15, 15, 35, 140); //brim of the hat

  fill(255, 72, 165); //pink color for the hat 

  triangle(x + 50, y - .5, x + 52, y - 8, x + 54, y - .5); //tringle of the hat

}
