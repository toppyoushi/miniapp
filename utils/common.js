function myCheckSession() {
  try {
    return false
    var session = wx.getStorageSync("session")
    wx.request({
      url: 'checksession',
      data: session,
      success: function(res) {
        console.log(res)
        if (res.code == 'success') {
          console.code('session not expired')
          return true
        }
        return false
      }
    })
  } catch (e) {
    console.log('get storage error')
    console.log(e)
  }
}

function calculateInterval(start, end) {
  var month_extent = [31, {
    normal: 28,
    special: 29
  }, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  var syear = Number(start.split('-')[0])
  var syear_leap = (((syear % 4 == 0) && (syear % 100 != 0)) || (syear % 400 == 0)) ? true : false
  var smonth = Number(start.split('-')[1])
  var sdate = Number(start.split('-')[2])
  var eyear = Number(end.split('-')[0])
  var eyear_leap = (((eyear % 4 == 0) && (eyear % 100 != 0)) || (eyear % 400 == 0)) ? true : false
  var emonth = Number(end.split('-')[1])
  var edate = Number(end.split('-')[2])
  var temp = 0
  console.log(syear)
  console.log(syear_leap)
  console.log(smonth)
  console.log(sdate)
  console.log(eyear)
  console.log(eyear_leap)
  console.log(emonth)
  console.log(edate)
  if (syear == eyear) {
    if (smonth == emonth) {
      temp += edate - sdate
    } else {
      for (var j = smonth + 1; j < emonth; ++j) {
        if (j == 2) {
          if (syear_leap) {
            temp += month_extent[j - 1].special
          } else {
            temp += month_extent[j - 1].normal
          }
        } else {
          temp += month_extent[j - 1]
        }
      }
      if (smonth == 2) {
        if (syear_leap) {
          temp += month_extent[smonth - 1].special - sdate
        } else {
          temp += month_extent[smonth - 1].normal - sdate
        }
      } else {
        temp += month_extent[smonth - 1] - sdate
      }
      temp += edate
    }
  } else {
    for (var i = syear + 1; i < eyear; ++i) {
      if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
        temp += 366
      } else {
        temp += 365
      }
    }
    for (var j = smonth + 1; j < 13; ++j) {
      if (j == 2) {
        if (syear_leap) {
          temp += month_extent[j - 1].special
        } else {
          temp += month_extent[j - 1].normal
        }
      } else {
        temp += month_extent[j - 1]
      }
    }
    for (var j = 1; j < emonth; ++j) {
      if (j == 2) {
        if (eyear_leap) {
          temp += month_extent[j - 1].special
        } else {
          temp += month_extent[j - 1].normal
        }
      } else {
        temp += month_extent[j - 1]
      }
    }
    if (smonth == 2) {
      if (syear_leap) {
        temp += month_extent[smonth - 1].special - sdate
      } else {
        temp += month_extent[smonth - 1].normal - sdate
      }
    } else {
      temp += month_extent[smonth - 1] - sdate
    }
    temp += edate
  }
  return temp
}

function isLeapYear(year){
  return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? true : false
}
// function calculateDate(date, interval) {
//   var year = Number(date.split('-')[0])
//   var month = Number(start.split('-')[1])
//   var date = Number(start.split('-')[2])
//   var eyear=year
//   var emonth=month
//   var edate=date
//   do{
//     if(isLeapYear(eyear))
//   }
// }
module.exports.calculateInterval = calculateInterval
module.exports.myCheckSession = myCheckSession