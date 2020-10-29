
class ImageObject {
	constructor(oneImg,tX,tY, oneDimX , oneDimY){
		this.img = oneImg;
		this.x = tX;
		this.y = tY;
		this.dimX = oneDimX;
		this.dimY = oneDimY;
		this.imageScaler = 1.0;

	}

	display(){
		image(this.img,this.x,this.y,this.dimX,this.dimY);
	}
}
//this was code we learned in class from Alex
class Seagull extends ImageObject {
	constructor(oneImg, oneImg2,tX,tY, oneDimX, oneDimY){
			super(oneImg,tX,tY,oneDimX,oneDimY);
			this.img2 = oneImg2;
			this.nX = 0.0;
			this.nY = 0;
			this.t = 0.0;
			this.inc= 0.005;
			this.oldNX = 0;
		}

	display(){
		this.noise();
		if (this.oldNX>this.nX){
			image(this.img2,width*this.nX,(height/2)*this.nY,this.dimX,this.dimY);
		} else {
			image(this.img,width*this.nX,(height/2)*this.nY,this.dimX,this.dimY);
		}
		this.oldNX = this.nX;

	}

	noise(){
		this.nX = noise(this.t);
		this.nY = noise(this.t + 5);
		this.t+= this.inc;
	}
}

class Stars extends ImageObject {
	constructor(oneImg, oneImg2,tX,tY, oneDimX, oneDimY){
			super(oneImg, oneImg2,tX,tY, oneDimX, oneDimY)
			this.img2 = oneImg2;
			this.nX = 0.0;
			this.nY = 0;
			this.t = 0.0;
			this.inc= 0.005;
			this.oldNX = 0;
		}

	display(){
		this.noise();
		if (this.oldNX>this.nX){
			image(this.img3,width*this.nX,height*this.nY,this.dimX,this.dimY);
		} else {
			image(this.img4,width*this.nX,height*this.nY,this.dimX,this.dimY);
		}
		this.oldNX = this.nX;

	}

	noise(){
		this.nX = noise(this.t);
		this.nY = noise(this.t + 5);
		this.t+= this.inc;
	}
}
