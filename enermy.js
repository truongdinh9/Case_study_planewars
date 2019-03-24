function Enermyplane(x, y) {
    this.x = x;
    this.y = y;
    this.speedx = 0.8*Math.floor(Math.random()*3-1)
    this.speedy=0.8;
    this.colorr = "green";
    this.drawplane=function () {
        pen.fillStyle = this.colorr;
        pen.fillRect(this.x, this.y, 10, 50)
        pen.fillRect(this.x-15,this.y+35,40,5)
        pen.fillRect(this.x-5,this.y+2,20,5)

    };
    this.clearplane = function () {
        pen.clearRect(this.x, this.y, 10, 50)
        pen.clearRect(this.x-15,this.y+35,40,5)
        pen.clearRect(this.x-5,this.y+2,20,5)
    };
    this.dieukienxoa=function () {
        return this.y>700

    }
    // this.moveleft=function () {
    //     this.x+=this.speed
    // }
    this.moveright=function () {
        this.x+=this.speedx
    }
    // this.moveup=function () {
    //     this.y+=this.speed
    // }
    this.movedown=function () {
        this.y+=this.speedy
    }

}
function Enermybullet(x,y,speed) {
    this.x=x;
    this.y=y;
    this.color="black";
    this.speed=speed;
    this.movedow=function () {
        this.y+=this.speed
    }
    this.dieukienxoa=function () {
        return this.y>600

    }
    this.draw=function () {
        pen.beginPath();
        pen.arc(this.x,this.y,5,0,2*Math.PI,true)
        pen.fillStyle = this.color;
        pen.fill();

    }


}