setYear=document.getElementById("year-select");
setMouth=document.getElementById("month-select");
setDay=document.getElementById("day-select");
setHour=document.getElementById("hour-select");
setMinite=document.getElementById("minite-select");
setSecond=document.getElementById("second-select");
p=document.getElementById("result-wrapper");
// 获取select对应的option值
function getOptionValue(obj){
    index=obj.selectedIndex;
    return obj.options[index].value;
}
// 检查闰年
function leapYear(){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}
// 检验日历的有效性，并对option做出控制；
function checkCal(){
    setDay.options[29].style.display="block";
    setDay.options[30].style.display="block";
    setDay.options[31].style.display="block";
    switch(mouth){
        case "1":
            break;
        case "2":
            if(leapYear()){
                setDay.options[30].style.display="none";
                setDay.options[31].style.display="none";
            }
            else{   
                setDay.options[29].style.display="none";
                setDay.options[30].style.display="none";
                setDay.options[31].style.display="none";
            }
        case "3":
            break;
        case "4":
            setDay.options[31].style.display="none";
        case "5":
            break;
        case "6":
            setDay.options[31].style.display="none";
        case "7":
            break;
        case "8":
            break;
        case "9":
            setDay.options[31].style.display="none";
        case "10":
            break;
        case "11":
            setDay.options[31].style.display="none";
        case "12":
            break;
    }
}
function main(){
    year=getOptionValue(setYear);
    mouth=getOptionValue(setMouth);
    day=getOptionValue(setDay);
    hour=getOptionValue(setHour);
    minite=getOptionValue(setMinite);
    second=getOptionValue(setSecond);
    checkCal();
    now=new Date();
    set=new Date(year,mouth-1,day,hour,minite,second);
    if(set>now){
        p.innerHTML="现在距离"+year+"年"+mouth+"月"+day+"日"
    }
    console.log(set-now);
}
