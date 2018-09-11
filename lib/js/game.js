function boBing() {
  var arr = [];
  var num = [0, 0, 0, 0, 0, 0, 0, 0];
  var str = '';
  for(var i = 0; i < 6; i++) {
  var temp = Math.floor(Math.random()*6 + 1);
    num[temp]++;
  }
  if(num[4] === 6) {
    str = '恭喜博到六杯红 加150积分';
  } else if(num[4] === 5) {
    str = '恭喜博到五王 加130积分';
  }else if(num[4] === 4 && num[1] === 2) {
    str = '恭喜博到状元插金花 加200积分';
  } else if(num[4] === 4) {
    str = '恭喜博到状元 加50积分';
  } else if(num[4] === 3) {
    str = '恭喜博到三红 加20积分';
  } else if(num[4] === 2) {
    str = '恭喜博到二举 加10积分';
  } else if(num[1] === 1 && num[2] === 1 && num[3] === 1 &&
            num[4] === 1 && num[5] === 1 && num[6] === 1){
    str = '恭喜博到对堂 加30分';
  } else if(num[4] === 1 && (num[1] === 5 || num[2] === 5 || num[3] === 5 || 
            num[5] === 5 || num[6] === 5)){
    str = '恭喜博到五子带一秀 加80分';
  } else if(num[4] === 1) {
    str = '恭喜博到一秀 加5积分'
  } else if(num[1] === 6 || num[2] === 6 || num[3] === 6 ||
            num[5] === 6 || num[6] === 6) {
    str = '恭喜博到六杯黑 加130积分';          
  } else if(num[1] === 5 || num[2] === 5 || num[3] === 5 ||
            num[5] === 5 || num[6] === 5) {
    str = '恭喜博到五子登科 加60积分';            
  } else if(num[1] === 4 || num[2] === 4 || num[3] === 4 ||
            num[5] === 4 || num[6] === 4) {
    str = '恭喜博到四进 加15积分';  
  } else {
    str = '对不起，什么都没有博到';
  }
  for(var i = 1; i <= 6; i++) {
    for(var j = 0; j < num[i]; j++) {
      arr.push(i);
    }
  }
  return {
    data: {
      'chinese': str,
      'arr': arr
    }  
  }
}