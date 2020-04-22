function solution(N,users) { 
    var answer = [];
    var tmp = [];
    var hasil;
    var a = 0;
    var b = 0;
    var map1 = new Map();
  
    for(i=1;i<=N;i++){
      
      for(j=0;j<users.length;j++){
        if(users[j] == i){
          a++;
        }
        if(users[j] >= i){
          b++;
        }
      }
      hasil = a/b;
  
      tmp.push(hasil);
      
      map1.set(i,hasil);
      a = 0;
      b = 0;
    }
    tmp.sort();
    tmp.reverse();/
    
    var key;
    for(k=0;k<tmp.length;k++){
      for(l=1;l<=N;l++){
        key = map1.get(l);
        if(tmp[k] == key && !answer.includes(l)){
          answer.push(l);
        }
      }
    }
    return answer;
  } 
  
  var user = [4,4,4,4,4];
  
  console.log(solution(4,user)); 
  
