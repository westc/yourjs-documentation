// requires getDateExtremes()
function isInDateRange(measure, date1, date2) {
  var args = arguments;
  if (args.length < 3) {
    return function() {
      return isInDateRange.apply(this, slice(args).concat(slice(arguments)));
    };
  }
  
  var extremes = getDateExtremes(measure, date1);
  return extremes[0] <= date2 && date2 <= extremes[1];
}

function getDateExtremes(measure, date) {
  if (!date) {
    return function(date) {
      return getDateExtremes(measure, date);
    };
  }

  measure = measure.replace(/^DATE$/i, 'DAY');
  var measures = ['YEAR', 'MONTH', 'DAY', 'HOUR', 'MINUTE', 'SECOND'];
  var measureFuncNames = ['Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds'];
  var maxes = [11, 31, 23, 59, 59, 999];
  var matchWeek = /^WEEK([0-6]?)$/i.exec(measure);
  var measureIndex = matchWeek ? 2 : measures.indexOf(measure.toUpperCase());
  if (measureIndex < 0) {
    throw new Error('Unknown date measure:\t' + measure);
  }
  
  for (var fnName, date1 = new Date(date), date2 = new Date(date); measureIndex < 6;) {
    fnName = 'set' + measureFuncNames[measureIndex];
    date1[fnName](measureIndex === 1 ? 1 : 0);
    date2[fnName](maxes[measureIndex++]);
    if (measureIndex === 1 && date2.getDate() < 9) {
      date2.setDate(0);
    }
  }
  if (matchWeek) {
    matchWeek = +(matchWeek[1] || 0);
    date1.setDate(date1.getDate() - (((date1.getDay() - matchWeek) % 7 + 7) % 7));
    date2.setDate(date2.getDate() - (((date2.getDay() - matchWeek) % 7 + 7) % 7) + 6);
  }
  return [date1, date2];
}

function dow(date, opt_offset) {
  return ((date.getDay() - (opt_offset || 0)) % 7 + 7) % 7;
}
