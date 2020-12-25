class constraints{
   constructor(bodyA,bodyB,offsetX,offsetY){
       this.offsetX = offsetX;
       this.offsetY = offsetY;
       
    var chain1 = {
          bodyA: bodyA,
          bodyB: bodyB, 
          length: 400,
          pointB:{x:this.offsetX,y:this.offsetY}
          
       }
       this.chain2 = Constraint.create(chain1);
       World.add(world,this.chain2)

   }
   display(){
  strokeWeight(3);
  line(this.chain2.bodyA.position.x,this.chain2.bodyA.position.y,this.chain2.bodyB.position.x,this.chain2.bodyB.position.y)


  
   
   }
}