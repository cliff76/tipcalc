function splitCheck(){
    var bill = parseInt(document.getElementById('bill').value);
   // alert(bill);
    var split = document.getElementById('splitCheck').value;
   //alert(split);
 
    var pp = document.getElementById('perPerson');
    
    
    
     if (bill == null || bill == '') { //entering nothing never gets this message, just zero gets it.
    pp.innerHTML = 'Please enter an amount';
    return false;
  }
  if(isNaN(bill)) {
    pp.innerHTML = 'Please enter a number';
    return false;
  }
    
    if (split == 1 || split >=2) {
       
     pp.innerHTML ='$' + (bill  / split).toFixed(2);
        
    }
    
    
  }


