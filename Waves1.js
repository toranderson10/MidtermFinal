// referenced this dan shiffman video, https://www.youtube.com/watch?v=ikwNrFvnL3g&t=498s
class Waves {
	constructor(tempo, c) {
	this.tempo = 0;
  this.horizon=height/2;
  this.waveLength = 450;
	this.c = [176, 224, 230];
}

create(){
	beginShape();
	fill(this.c);
	stroke(70,130,180);

let xoff = -0.7;
for (let x = 0; x < width; x += 7) {
	let y = map(noise(xoff, yoff), 0, 1, 0, this.waveLength);

vertex(x,(height-350)+y);
xoff += 0.01;
}
// increment y dimension for noise
yoff += 0.01;
vertex(width, this.horizon);
vertex(0, this.horizon);
//translate(0, 200);
endShape(CLOSE);
}
}

class Waves2 extends Waves {
  constructor(tempo, c) {
  super(tempo, c);
	this.tempo = 0;
  this.waveLength= 450;
  this.horizon=height/2;
	this.c = [0, 206, 209];
}

create(){
	beginShape();
	fill(this.c);
	stroke(70,130,180);

let xoff = 0;
for (let x = 0; x < width; x += 7) {
	let y = map(noise(xoff, yoff), 0, 1, 0, this.waveLength);

	vertex(x,(height/2)+y);
	xoff += 0.01;
}
// increment y dimension for noise
yoff += 0.001;
vertex(width, this.horizon);
// push();
// translate(0, 200);
// pop();
vertex(0, this.horizon);
endShape(CLOSE);

}
}

















//   constructor(tempo, c){
//   super(tempo, c);
// 	this.tempo = 0;
// 	this.c= [0,206,209];
// }
// 		create(){
// 				beginShape();
// 				fill(this.c);
// 				stroke(70,130,180);
// 					let xoff = 0;
// 						for (let x = 0; x < width; x += 7) {
// 							let y = map(noise(xoff, yoff), 0, 1, 700/2*this.tempo, 100);
// 							vertex(x, y*2);
// 							xoff += 0.05;
// 																								}
// 							yoff += 0.001;
// 							vertex(height*2, 0);
// 							vertex(0, 2);
// 							//translate(0, 200);
// 							endShape(CLOSE);
// 						}
// }
