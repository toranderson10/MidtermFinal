class Sand {
  constructor(sax, say, sar) {
    this.x = sax;
    this.y = say;
    this.r = sar;
    this.brightness = 0;
  }

  clicked(zx, zy) {
    let d = dist(zx, zy, this.x, this.y);
    if (d < this.r) {
      this.brightness = color(188,143,143);
    }
  }
   move() {
    this.x = this.x + random(2, 2);
    this.y = this.y + random(-1, 2);
  }
  display() {
    stroke(100);
    //strokeWeight(4);
    fill(this.brightness, 255);
    ellipse(this.x, this.y, this.r, 35);
  }
}
