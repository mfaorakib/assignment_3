//https://github.com/mfaorakib/assignment_3

// Start convert kilometer to meter 
  
  function kilometerToMeter(kilometer) {
      if(kilometer<0)
      {
          return console.log('Distance can not be negetive');
      }
      else{
         return (kilometer*1000);
     }
               
 }
  //console.log (kilometerToMeter(5));
 //End convert kilometer to meter 

 //Start budgetCalculator 

function budgetCalculator(clock, mobile, laptop) 

{
     if(clock<0 || mobile<0 || laptop<0)
    {
        return console.log ("Input Invalid");
    }

    else{
    clockPrice = clock*50 ;
    mobilePrice = mobile*100;
    laptopPrice = laptop*500;
    var total = clockPrice+mobilePrice+laptopPrice;
    return (total); 
        }
}
 //console.log(budgetCalculator(2, 4, 1));

 //End budgetCalculator

// Start hotelCost 
var cost, firstcost,secondcost, totalcost;   

function hotelCost(day) {
    if(day<0){
        totalcost = "Day cann't be Negetive";
       }  

    else if (day==0 && day<=10)
    {
      cost = day*100;
      totalcost = cost;
    }
    else if ( day==11 && day<=20 )
    {
       firstcost = 10*100;
       day = day - 10;
       var cost = day * 80;
       totalcost = firstcost+cost; 
    }
    else 
     {
      firstcost = 10*100;
      secondcost = 10*80;
      day = day-20;
      cost = day*50;
      totalcost = firstcost+secondcost+cost;
     } 
     return totalcost;   
}
//console.log(hotelCost(12));

//End hotelCost 

//Start MegaFriend 
function megaFriend(arr){
    var longest = arr[0];
    for (i=0; i<arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    } 
    return longest;
}
//var longestName = megaFriend(arr=['ronjit','faisal', 'faisal','Rahim']) ;
//console.log(longestName);

//Endmegafriend
