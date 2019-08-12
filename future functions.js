// Creates the following 56 functions:
// endOfYear, startOfYear, isSameYear, limitsOfYear, endOfMonth, startOfMonth, isSameMonth, limitsOfMonth, endOfDay, startOfDay, isSameDay, limitsOfDay, endOfHour, startOfHour, isSameHour, limitsOfHour, endOfMinute, startOfMinute, isSameMinute, limitsOfMinute, endOfSecond, startOfSecond, isSameSecond, limitsOfSecond, endOfWeek, startOfWeek, isSameWeek, limitsOfWeek, endOfSundayWeek, startOfSundayWeek, isSameSundayWeek, limitsOfSundayWeek, endOfMondayWeek, startOfMondayWeek, isSameMondayWeek, limitsOfMondayWeek, endOfTuesdayWeek, startOfTuesdayWeek, isSameTuesdayWeek, limitsOfTuesdayWeek, endOfWednesdayWeek, startOfWednesdayWeek, isSameWednesdayWeek, limitsOfWednesdayWeek, endOfThursdayWeek, startOfThursdayWeek, isSameThursdayWeek, limitsOfThursdayWeek, endOfFridayWeek, startOfFridayWeek, isSameFridayWeek, limitsOfFridayWeek, endOfSaturdayWeek, startOfSaturdayWeek, isSameSaturdayWeek, limitsOfSaturdayWeek
eval('Year Month Day Hour Minute Second Week Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ').map(
  function(unit, i) {
    var code = [
      'b.setMonth(0);a.setMonth(11)',
      'b.setDate(0);a.setDate(32);a.setDate(0)',
      'b.setHours(0);a.setHours(23)',
      'b.setMinutes(0);a.setMinutes(59)',
      'b.setSeconds(0);a.setSeconds(59)',
      'b.setMilliseconds(0);a.setMilliseconds(999)'
    ];
    if (i > 5) {
      var offset = i > 6 ? 14 - i : 7;
      code.push('b.setDate(b.getDate()-(b.getDay()+'
        + offset + ')%7);a.setDate(a.getDate()-(a.getDay()+'
        + offset + ')%7+6)');
      if (i > 6) {
        unit += 'Week';
      }
      i = 2;
    }
    code = 'function #(a){var b=new Date(a);a=new Date(a);@;return [b,a]}'.replace('@', code.slice(i).join(';'));
    return code.replace(/\bb\.set;|\[b,(a)\]/g, '$1').replace('#', 'endOf' + unit)
      + code.replace(/\ba\.set;|\[(b),a\]/g, '$1').replace('#', 'startOf' + unit)
      + code.replace('){', ',c){if(void 0===c)return function(c){return #(a,c)};').replace(/\ba\.set;/g, '').replace('[b,a]', 'b<=c&&c<=a').replace(/#/g, 'isSame' + unit)
      + code.replace('#', 'limitsOf' + unit);
  }
).join(''));

function dow(date, opt_offset) {
  return ((date.getDay() - (opt_offset || 0)) % 7 + 7) % 7;
}
