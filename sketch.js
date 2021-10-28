function setup() {
  // set the background size of our canvas
  createCanvas(600, 400);

  // erase the background with a "grey" color
  background(0);

  // set all content drawn from this point forward
  // so that it uses "white" (0 = black, 255 = white)
  stroke(255);
  for (let i = 0; i < 700; i++) 
  {
    let x = random(600);
    let y = random(400);
    point(x,y);
  } 
  fill(255);

  // write shhhh
  textSize(50);
  textStyle(ITALIC);
  stroke(123, 0, 0);
  strokeWeight(4);
  text("SHHHHHHH!", 150,375);

  // draw an ellipse at 200,200
  stroke(153, 0, 0);
  strokeWeight(4);
  fill(240, 196, 66)
  ellipse(300,175, 300, 300);

  fill(223, 108, 32)
  arc(300,175,300,300,radians(255),radians(285))
  arc(300,175,300,300,radians(315),radians(345))
  arc(300,175,300,300,radians(195),radians(225))
  arc(300,175,300,300,radians(135),radians(165))
  arc(300,175,300,300,radians(75),radians(105))
  arc(300,175,300,300,radians(15),radians(45))

  stroke(0);
  
  // draw the body of the imposter
  fill(153,0,0)
  beginShape();
  //   x    y  width height
  arc(300, 245, 195, 360, radians(180), radians(0));
  arc(300, 245, 195, 55, radians(0), radians(180));
  endShape();

  //eyes of the imposter
  strokeJoin(ROUND);
  fill(144, 195, 213)

  beginShape();
  // x1, y1, x2, y2, x3, y3, x4, y4
  quad(255, 100, 345, 100, 366, 155, 235, 155);

  //inner outline
  stroke(49, 108, 129);
  noFill();
  quad(258, 103, 342, 103, 362, 151, 239, 151);

  //inner eye
  noStroke();
  fill(49, 108, 129);
  ellipse(300, 127, 100, 31);
  fill(255);
  // circle(300, 127, 14);

  endShape();

  //hand of the imposter
  stroke(0);
  fill(153,0,0);

  beginShape();
  //index finger
  arc(285, 203, 20, 142, radians(180), radians(0));
  line(272, 217, 275, 200);

  //thumb arc
  arc(333, 210, 12, 30, radians(220), radians(360));

  //middle finger line 1
  line(310, 193, 270, 220);

  stroke(128, 0, 0);
  line(306, 207, 288, 219);
  stroke(0);

  //middle finger line 2
  line(310, 193, 332, 212);

  //fist edge line
  line(270, 220, 280, 260);


  stroke(128, 0, 0);
  line(287, 221, 290, 240);
  stroke(0);

  //end of hand line
  line(280, 260, 305, 258);
  //arc of fist
  arc(305, 238, 15, 40, radians(270), radians(95));
  //pinky line
  line(305, 218, 312, 218);
  //all fingers line
  line(332, 212, 325, 235);
  line(325, 235, 315, 239);
  //thumb line
  line(305, 258, 325, 253);

  arc(340, 253, 25, 60, radians(180), radians(257));

  line(339, 210, 333, 228);


  endShape();

  stroke(255);


}

