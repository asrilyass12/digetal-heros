function content(i){
    let table = new Array("كيفاش","علاش","شنو الهدف");

    let z = 1;
    let q;
    
    while(z <= 3){
        if((z-i) == 0){
            q = z;
        }
        document.getElementById(z).style.color ="#fff";
        document.getElementById(z).style.backgroundColor ="#6222CC";
        z++;
    }
    document.getElementById(q).style.color ="#fba504";
    document.getElementById(q).style.backgroundColor ="#fff";
    document.getElementById("head").innerHTML = table[q - 1];
    
    
    
}

(function($) {
    showSwal = function(type) {
    'use strict';
    if (type === 'success-message') {
    swal({
    title: 'Congratulations!',
    text: 'You entered the correct answer',
    type: 'success',
    button: {
    text: "Continue",
    value: true,
    visible: true,
    className: "btn btn-primary"
    }
    })
    
    }else{
    swal("Error occured !");
    }
    }
    
    })(jQuery);