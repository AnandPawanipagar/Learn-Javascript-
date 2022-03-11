let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;
for (x1; x1 < 20; x1 = x1 + v1) {
  x1=x1+v1;
  x2=x2+v2;
  if(x1=x2){
    console.log('yes' ,x1,x2)
  }
}
