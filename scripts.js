function tipCalculate (slider, bill){
	updateTip(slider, bill);
	document.getElementById('slider').value = slider;
}

function updateTip(slider, bill){    
    var tip = document.getElementById('tipamount');
    var total = document.getElementById('billAmount');
    var slideval = document.getElementById('slideval');
    var bill = parseInt(document.getElementById(bill).value);
   
    var prcnt = slider * .01;
 
  if (bill == null || bill == '') {
    tip.innerHTML = 'Please enter an amount';
    return false;
  }
  if(isNaN(bill)) {
    tip.innerHTML = 'Please enter a number';
    return false;
  }
    
        
  if(bill >= 0){
    tipToLeave = (bill * prcnt);
      tip.innerHTML = '$' + (bill * prcnt) .toFixed(2);
        slideval.innerHTML = slider + '%';
        total.innerHTML = '$' + (bill + tipToLeave).toFixed(2);
       var totalBill = (bill + tipToLeave).toFixed(2);
 
      localStorage.setItem = (totalBill);
      
  }
    
}




