function myFunction() {
  let calender = CalendarApp.getCalendarById("*****＠gmail.com");  // ****は自分のgoogleアカウント
  let sheet = SpreadsheetApp.getActiveSheet();
  let lastRow = sheet.getLastRow();
  let datas = sheet.getRange(`A3:G${lastRow}`).getValues();  //A3セルからGセルまでを取得範囲に指定している

  Logger.log(datas);

    // 年月日を取得して文字列に変換してまとめる
    datas.forEach(function(data){
    let year = data[0];
    let stringYear = String(year);
    let month = data[1];
    let stringMonth = String(month)
    let day = data[2];
    let stringDay = String(day); 
    let YMD = String(stringYear+'/'+stringMonth+'/'+stringDay);

    // 数字で書かれている開始時刻・終了時刻を、「時刻」形式に変換する
    let YMDstartTime;
    let YMDendTime;
    
    let startTime = data[3];
    let startTime1 = String(startTime);
    let startTime2;
    if(startTime<1000){
      let a = startTime1.slice(0,1);
      let b = ":";
      let c = startTime1.slice(-2);
      let startTime2 = a+b+c;
      let stringYMDstartTime = YMD+' '+startTime2;
      YMDstartTime = new Date(stringYMDstartTime);
    }else{
      let a = startTime1.slice(0,2);
      let b = ":";
      let c = startTime1.slice(-2);
      let startTime2 = a+b+c;
      let stringYMDstartTime = YMD+' '+startTime2;
      YMDstartTime = new Date(stringYMDstartTime);
    }

    let endTime = data[4];
    let endTime1 = String(endTime);
    let endTime2;
    if(endTime<1000){
      let a = endTime1.slice(0,1);
      let b = ":";
      let c = endTime1.slice(-2);
      let endTime2 = a+b+c;
      let stringYMDendTime = YMD+' '+endTime2;
      YMDendTime = new Date(stringYMDendTime);
    }
    else{
    let a = endTime1.slice(0,2);
    let b = ":";
    let c = endTime1.slice(-2);
    let endTime2 = a+b+c;
    let stringYMDendTime = YMD+' '+endTime2;
    YMDendTime = new Date(stringYMDendTime);
    }


    let location = data[5];
    let title = data[6];

    // カレンダーのオプションに追加するもの 
    let options = {
      location:location
    }

    let event = calender.createEvent(title,YMDstartTime,YMDendTime,options);
    event.setColor(CalendarApp.EventColor.YELLOW);

  });

}



