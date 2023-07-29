/**
 * Daily Tips Alert demo
 * Written by Vincent.
 * - July 28, 2023 -
 */
var dateNow = new Date() ;
var Year = dateNow.getFullYear() ;
var Month = dateNow.getMonth() + 1 ;
var Day = dateNow.getDate() ;
var Weeks = [ "星期日",
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六"];
var Week = Weeks[dateNow.getDay()]
var dateToday = Year + "年" + Month + "月" + Day + "日 " + Week ;
var MonthDay = Month + "-" + Day ;
var LunarMonthDay = calendar.getLunarMonthDay() ;

var BirthdayTips = "生日快乐哦!<br>Happy ♪ヾ|｡・∀・｡|ﾉ Birthday♪ ";
if(LunarMonthDay == "正月初七")
    {
        alert(BirthdayTips);
    }

var HolidayTips1 ;
var HolidayTips2 ;
switch(MonthDay)    //判断公历节日
    {
        case "1-1":
            HolidayTips1 = "新年快乐!!!";
            alert(HolidayTips1);
            break;
        case "5-1":
            HolidayTips1 = "劳动节快乐!";
            alert(HolidayTips1);
            break;
        case "6-1":
            HolidayTips1 = "儿童节快乐~ (*≧▽≦*)";
            alert(HolidayTips1);
            break;
        case "10-1":
            HolidayTips1 = "国庆快乐!!";
            alert(HolidayTips1);
            break;
        case "12-24":
            HolidayTips1 = "平安夜快乐哦~";
            alert(HolidayTips1);
            break;
        case "12-25":
            HolidayTips1 = "圣诞快乐!";
            alert(HolidayTips1);
            break;
        default: HolidayTips1 = "";
    }

switch(LunarMonthDay)    //判断农历节日
    {
        case "正月初一":
            HolidayTips2 = "新春快乐!!!!!";
            alert(HolidayTips2);
            break;
        case "正月十五":
            HolidayTips2 = "元宵节快乐~~";
            alert(HolidayTips2);
            break;
        case "五月初五":
            HolidayTips2 = "端午安康";
            alert(HolidayTips2);
            break;
        case "八月十五":
            HolidayTips2 = "中秋节快乐!";
            alert(HolidayTips2);
            break;
        case "腊月初八":
            HolidayTips2 = "腊八节快乐!";
            alert(HolidayTips2);
            break;
        case "腊月廿三":
            HolidayTips2 = "北方小年快乐~";
            alert(HolidayTips2);
            break;
        case "腊月廿四":
            HolidayTips2 = "南方小年快乐~";
            alert(HolidayTips2);
            break;
        default: HolidayTips2 = "";
    }
