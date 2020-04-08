
const dataArray = [
  {principal: 2500, time: 1.8},
  {principal: 1000, time: 5},
  {principal: 3000, time: 1},
  {principal: 2000, time: 3},
  ];
  var interestData = [{}];
  var rate;
  var interest;
  function interestCalculator(data) { 
    for (let i=0; i < data.length; i++ ) ;
    {
      if 
      (data[i].principal >= 2500 && (data[i].time < 3 && data[i].time > 1) ) {
        data[i].rate = 3;
        }   else if
          (data[i].principal >= 2500 && data[i].time >=3) {
          data[i].rate = 4;
          } else if 
          (data[i].principal < 2500 || data[i].time <= 1) {
            rate = 2;
          }else {
            data[i].rate = 1;
          }
          {
          data[i].interest = (data[i].principal * data[i].time * data[i].rate)/100
          interestData.push(i);
          console.log(interestData);
          interestCalculation(data);
          }
    }   
  }
console.log(interest);