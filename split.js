function splitCheck(bill){
    var bill = parseInt(document.getElementById(bill).value);
    console.log(bill);
    var split = document.getElementById('splitCheck');
    var pp = document.getElementById('perPerson');
    console.log(bill);
    console.log(split);
    console.log(pp);
    
    
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