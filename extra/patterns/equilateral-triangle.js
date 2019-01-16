console.log('This is  new Equilateral triangle');
function triangle(n){
    let k,i,j;
    let pattern='';
    for(i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
         pattern +=' ';
        }
            for(k=1;k<=i;k++){
                pattern +='* ';}
        console.log(pattern);
        pattern='';
            console.log('');
            }
        }
    

triangle(5);