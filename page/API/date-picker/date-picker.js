Page({
  datePicker() {
    dd.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        dd.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerHMS() {
    dd.datePicker({
      format: 'HH:mm:ss',
      currentDate: '12:12:12',
      startDate: '11:11:11',
      endDate: '13:13:13',
      success: (res) => {
        dd.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerYMDHMS() {
    dd.datePicker({
      format: 'yyyy-MM-dd HH:mm:ss',
      currentDate: '2012-01-09 11:11:11',
      startDate: '2012-01-01 11:11:11',
      endDate: '2012-01-10 11:11:11',
      success: (res) => {
        dd.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
});
