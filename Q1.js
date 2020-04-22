function solution(record){
    var answer = [];
    var splint = [];
  
    var status = new Object();
    var status = {"Enter":"Came in","Leave":"has left"};
  
    var namaUser = new Object();
    var namaUser = {}; 
  
    for(var i in record){
      var pesan = record[i].split(" ");
      splint.push(pesan);
      if(splint[i][2] != undefined){
        namaUser[splint[i][1]] = splint[i][2]; 
      }  
    }
  
    for(var key in splint){
      var a = namaUser[splint[key][1]];
      var b = status[splint[key][0]];
      if((a&&b) != undefined){
        answer.push(a + ' ' + b);
      }
    }
    
    return answer;
  }
  
  var record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
  
  console.log(solution(record));
  
  