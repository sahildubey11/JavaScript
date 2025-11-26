let num=78
function Grade(num){
    if(num>90 && num<=100) return "Grade A";
    else if(num>80 && num<=90) return "Grade B";
    else if(num>70 && num<=60) return "Grade C";
    else if(num>60 && num<=50) return "Grade D";
    else return "Grade F";
}

Grade(num);