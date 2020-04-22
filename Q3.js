function solution(relation){
    var answer = 0;
    var pisah = [];
    var tmp = [];
      
    for(i=0; i<relation[0].length; i++){
        for(a in relation){
            pisah.push(relation[a][i]);
        }
        tmp.push(pisah);
        pisah = [];
    }
  
    var indexDistinct = [];
  
    for(a in tmp){
      var x = checkDistinct(tmp[a]);
      if(x == 0){
        answer++;
      }else{
        indexDistinct.push(a);
      }
    }
    
    var jumlah = 0;
    for(a in indexDistinct){
      for(b in indexDistinct){
        if(a<b){
          jumlah++;
        }
      }
    }
    
    com = new Array(jumlah);
   
    var index = 0;
    for(a in indexDistinct){
      for(b in indexDistinct){
        if(a<b){
          var x = indexDistinct[a];
          var y = indexDistinct[b];
          com[index] = new Array(tmp[0].length);
          for(key in tmp[0]){
            kom = tmp[x][key]+tmp[y][key];
            
            com[index][key] = kom;  
            
          }
          index++;
        }
      }
      
    }
    
    for(a in com){
      var x = checkDistinct(com[a]);
      if(x == 0){
        answer++;
      }
    }
  
  
    return answer;
  }
  
  function checkDistinct(arr){
    var count = 0;
    for(var i in arr){
      for(var j in arr){
        if(i!=j && arr[i]==arr[j]){
          count++;
        }
      }
    }
    return count;
  }
  
  var relation = [['100','ryan','music','2'],
              ['200','apeach','math','2'],
              ['300','tube','computer','3'],
              ['400','con','computer','4'],
              ['500','muzi','music','3'],
              ['600','apeach','music','2']];
  
  console.log(solution(relation));
  
