function splitCheck(){
    var bill = parseInt(document.getElementById('bill').value);
    alert(bill);
    var split = document.getElementById('splitCheck').value;
//    alert(value);
//    This is where it breaks. How do I get the value in from?
    var pp = document.getElementById('perPerson');
    
    
    
     if (bill == null || bill == '') {
    pp.innerHTML = 'Please enter an amount';
    return false;
  }
  if(isNaN(bill)) {
    pp.innerHTML = 'Please enter a number';
    return false;
  }
    if (split =='' || split >=2) {
     pp.innerHTML ='$' + ((bill * prcnt) / split).toFixed(2);
        
    }
    
  }


