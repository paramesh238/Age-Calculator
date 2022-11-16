var op1 = document.getElementById("msg1");
var op2 = document.getElementById("msg2");
// creating function for calculating age
function age_cal() {
    // collect date, month, year from input
    var ip_date = document.getElementById("ip_date").value;
    var ip_month = document.getElementById("ip_month").value;
    var ip_year = document.getElementById("ip_year").value;
    // collect name 
    var ip_name = document.getElementById("ip_name").value;
    ip_date = (ip_date < 1 || ip_date > 31) ? alert("Please enter valid date") : ip_date ;
    ip_month = (ip_month < 1 || ip_month > 12) ? alert("Please enter valid month") : ip_month ;
    ip_year = (ip_year < 1 ) ? alert("Please enter valid year") : ip_year ;
    var d1 = new Date();
    var cur_date = d1.getDate();
    var cur_month = d1.getMonth() + 1;
    var cur_year = d1.getFullYear();
    // get days
    if(ip_date > cur_date){
        cur_date = cur_date + 30;
        cur_month = cur_month - 1;
    }
    if(ip_month > cur_month){
        cur_month = cur_month + 12;
        cur_year = cur_year - 1;
    }
    var age_days = cur_date - ip_date;
    var age_month = cur_month - ip_month;
    var age_year = cur_year - ip_year;
    op1.innerHTML = "Hi " + ip_name ;
    op2.innerHTML = "Your age is " + age_days + " days " + age_month + " months " + age_year + " years";
}



