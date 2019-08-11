function isInDateRange(date1, measure, date2) {
  measure = measure.replace(/^DATE$/i, 'DAY');
  var measures = ['YEAR', 'MONTH', 'DAY', 'HOUR', 'MINUTE', 'SECOND'];
  var measureFuncNames = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds'];
  var matchWeek = /^WEEK([0-6]?)$/i.exec(measure);
  var measureIndex = matchWeek ? 1 : measures.indexOf(measure.toUpperCase());
  if (measureIndex < 0) {
    throw new Error('Unknown date measure:\t' + measure);
  }
  
  for (var fnName; measureIndex + 1; measureIndex--) {
    fnName = 'get' + measureFuncNames[measureIndex];
    if (date1[fnName]() !== date2[fnName]()) {
      return false;
    }
  }
  if (matchWeek) {
    matchWeek = +(matchWeek[1] || 0);
    date1 = new Date(date1);
    date1.setDate(date1.getDate() - (((date1.getDay() - matchWeek) % 7 + 7) % 7));
    date2 = new Date(date2);
    date2.setDate(date2.getDate() - (((date2.getDay() - matchWeek) % 7 + 7) % 7));
    return date1.getDate() === date2.getDate();
  }
  return true;
}

function dow(date, opt_offset) {
  return ((date.getDay() - (opt_offset || 0)) % 7 + 7) % 7;
}
