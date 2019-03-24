let pen=canvas1.getContext("2d");

function MyPlane(x, y) {
    this.x=x;
    this.y=y;
    this.hp=100;
    this.speed=10;
    this.colorr="red";
    this.diekiensangtrai=function () {
        return this.x > 10;
    };
    this.dieukiensangphai=function () {
        return this.x<380
    }
    this.dieukienxuongduoi=function () {
        return this.y< 550;
    }
    this.dieukienlentren=function () {
        return this.y>0;
    };
    this.drawplane=function () {
        pen.fillStyle = this.colorr;
        pen.fillRect(this.x, this.y, 10, 50)
        pen.fillRect(this.x-15,this.y+10,40,5)
        pen.fillRect(this.x-5,this.y+43,20,5)

    };
    this.clearmyplane = function () {
        pen.clearRect(this.x, this.y, 10, 50)
        pen.clearRect(this.x-15,this.y+10,40,5)
        pen.clearRect(this.x-5,this.y+43,20,5)
    }
    this.moveleft=function () {
        this.x-=this.speed
    }
    this.moveright=function () {
        this.x+=this.speed
    }
    this.moveup=function () {
        this.y-=this.speed
    }
    this.movedow=function () {
        this.y+=this.speed
    }

}
let myPlane=new MyPlane(200,500)
myPlane.drawplane();


function Controls2(event) {

    if(event.code==="KeyQ"&&myPlane.diekiensangtrai()&&myPlane.dieukienlentren()){ // CTRL+SHIFT+A
        myPlane.clearmyplane();
        myPlane.moveleft();
        myPlane.moveup();
        myPlane.drawplane();
    }else if(event.code==="KeyE"&&myPlane.dieukiensangphai()&&myPlane.dieukienlentren()){ // CTRL+SHIFT+A
        myPlane.clearmyplane();
        myPlane.moveright();
        myPlane.moveup();
        myPlane.drawplane();
        map=[];
    }else if(event.code==="KeyZ" &&myPlane.dieukienxuongduoi()&&myPlane.diekiensangtrai()){ // CTRL+SHIFT+C
        myPlane.clearmyplane();
        myPlane.moveleft();
        myPlane.movedow();
        myPlane.drawplane();
        map=[];
    }else if(event.code==="KeyX"&&myPlane.dieukienxuongduoi()&&myPlane.dieukiensangphai()){
        myPlane.clearmyplane();
        myPlane.moveright();
        myPlane.movedow();
        myPlane.drawplane();
        map=[];
    }else if(event.code==="KeyW"&&myPlane.dieukienlentren()){
        myPlane.clearmyplane();
        myPlane.moveup();
        myPlane.drawplane();
        map=[];
    }else if(event.code==="KeyA"&&myPlane.diekiensangtrai()){
        myPlane.clearmyplane();
        myPlane.moveleft();
        myPlane.drawplane();
        map=[];
    }else if(event.code==="KeyS"&&myPlane.dieukienxuongduoi()){
        myPlane.clearmyplane();
        myPlane.movedow();
        myPlane.drawplane();
        map=[];
    }else if(event.code==="KeyD"&&myPlane.dieukiensangphai()){
        myPlane.clearmyplane();
        myPlane.moveright();
        myPlane.drawplane();
        map=[];
    }

}

document.addEventListener("keypress", Controls2);
function Bullet(x,y) {
    this.x=x;
    this.y=y;
    this.speed=-3;
    this.color="yellow";
    this.dieukienxoa=function () {
        return this.y<-40
    };
    this.creatbullet=function () {
        pen.fillStyle = this.color;
        pen.fillRect(this.x, this.y, 3, 25);
        pen.strokeRect(this.x+0.5,this.y+0.5,2,23)
        pen.fillRect(this.x+16,this.y,3,25)
        pen.strokeRect(this.x+16+0.5,this.y+0.5,2,24)
    };
    this.clearbullet=function () {
        pen.clearRect(this.x, this.y, 3, 25)
        pen.clearRect(this.x+16, this.y, 3, 25)
    };

    this.movebullet=function () {
        this.y+=this.speed;
    }
}
let bullet=[];
let enermy=[1];
let enermybullet=[];
let count=0;
let diem=0;
let speed_of_enermybullet=5;

function run() {
    if (myPlane.hp > 0) {
        count++

        pen.clearRect(0, 0, 400, 600)
        myPlane.drawplane();
        if (count % 20 === 0) {
            bullet.push(new Bullet(myPlane.x - 4, myPlane.y - 9))
        }
        for (let i = 0; i < bullet.length; i++) {
            if (bullet[i].dieukienxoa()) {
                bullet.splice(i, 1)
            }
            bullet[i].movebullet();
            bullet[i].creatbullet();
        }
        if (count % 150 === 0 && count % 600 !== 0) {
            enermy.push(new Enermyplane(Math.floor(Math.random() * 300 + 50), 0))
        }
        for (let i = 1; i < enermy.length; i++) {
            if (enermy[i].dieukienxoa()) {
                enermy.splice(i, 1)
            }
            if (enermy[i].x < 0 || enermy[i].x > 375) {
                enermy[i].speedx = -enermy[i].speedx
            }
            if (Math.abs(enermy[i].x - myPlane.x) < 15 && Math.abs(enermy[i].y - myPlane.y) < 40) { // game over
                myPlane.hp--;
                myPlane.clearmyplane();

            }
            enermy[i].moveright();
            enermy[i].movedown();
            enermy[i].drawplane();

        }
        if (count % 600 === 0 && enermy[0] === 1) {
            enermy[0] = new Enermyplane(Math.floor(Math.random() * 300 + 50),0);
            enermy[0].colorr = "blue"
        }
        if (enermy[0] !== 1) {
            if (enermy[0].x < 0 || enermy[0].x > 375) {
                enermy[0].speedx = -enermy[0].speedx
            }
            if (count % 100 === 0) {
                enermybullet.push(new Enermybullet(enermy[0].x, enermy[0].y,speed_of_enermybullet))
            }
            enermy[0].moveright();
            enermy[0].movedown();
            enermy[0].drawplane();
            if (enermy[0].dieukienxoa()) {
                enermy[0] = 1
            }
        }
        for (let i = 0; i < enermybullet.length; i++) {
            enermybullet[i].movedow();
            enermybullet[i].draw();
            if (enermybullet[i].dieukienxoa()) {
                enermybullet.splice(i, 1)
            }
            if (Math.abs(enermybullet[i].x - myPlane.x) < 15 && Math.abs(enermybullet[i].y - myPlane.y) < 40) { // game over
                myPlane.hp--;
                myPlane.clearmyplane();

            }

        }
        for (let i=0; i<bullet.length;i++){
            for( let j=1; j<enermy.length; j++){
                if(Math.abs(bullet[i].x-enermy[j].x)<20&& bullet[i].y-enermy[j].y<20 && bullet[i].y-enermy[j].y>0){
                    bullet.splice(i, 1);
                    enermy.splice(j, 1);
                    diem+=1;
                    speed_of_enermybullet-=0.01

                }
            }
            if(enermy[0]!==1){
            if(Math.abs(bullet[i].x-enermy[0].x)<20&& bullet[i].y-enermy[0].y<20 && bullet[i].y-enermy[0].y>0){
                bullet.splice(i, 1);
                enermy[0]=1;
                diem+=5;
               if(speed_of_enermybullet<1) {speed_of_enermybullet-=0.1}else speed_of_enermybullet-=0.01

            }
            }
        }
        if(count>=10000) count=0;
        document.getElementById("gameover").innerHTML ='<h1>'+" HP: "+ myPlane.hp+'<br/>'+"Score:"+diem+'<h1/>'
    }else (document.write("game over"))
}
setInterval(run,10)


