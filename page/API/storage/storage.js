Page({
  data: {
    key: '',
    data: '',
    keySync: '',
    dataSync: '',
  },

  keyChange(e) {
    console.log(e);
    this.setData({
      key: e.detail.value,
    });
  },

  dataChange(e) {
    this.setData({
      data: e.detail.value,
    });
  },

  keyChangeSync(e) {
    console.log(e);
    this.setData({
      keySync: e.detail.value,
    });
  },

  dataChangeSync(e) {
    this.setData({
      dataSync: e.detail.value,
    });
  },

  getStorage() {
    var key = this.data.key;
    var data = this.data.data;
    console.log('data: ', this.data);
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });

      dd.alert({
        title: '读取数据失败',
        content: 'key 不能为空',
      });
    } else {
      let that = this;
      dd.getStorage({
        key,
        success(res) {
          dd.alert({
            title: '读取数据成功',
            content: "data: '" + JSON.stringify(res.data) + "'",
          });
        },
      });
      console.log('读取数据成功', dd.getStorageSync({ key }).data);
    }
  },

  setStorage() {
    var key = this.data.key;
    var data = this.data.data;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });

      dd.alert({
        title: '保存数据失败',
        content: 'key 不能为空',
      });
    } else {
      let that = this;
      dd.setStorage({
        key: key,
        data: data,
        success() {
          that.setData({
            key: key,
            data: data,
          });

          dd.alert({
            title: '存储数据成功',
            content: `${key}: ${data}`,
          });
        },
      });
    }
  },

  removeStorage() {
    let that = this;
    dd.removeStorage({
      key: that.data.key,
      success() {
        that.setData({
          key: '',
          data: '',
        });

        dd.alert({
          title: '删除数据成功',
          content: '',
        });
      },
    });
  },

  getStorageSync() {
    var key = this.data.keySync;
    var data = this.data.dataSync;
    console.log('data: ', this.data);
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data,
      });

      dd.alert({
        title: '同步读取数据失败',
        content: 'key 不能为空',
      });
    } else {
      let res = dd.getStorageSync({ key: key });
      if (!res.error) {
        dd.alert({
          title: '同步读取数据成功',
          content: "data: '" + JSON.stringify(res.data) + "'",
        });
      }
    }
  },

  setStorageSync() {
    var key = this.data.keySync;
    var data = this.data.dataSync;
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data,
      });

      dd.alert({
        title: '同步保存数据失败',
        content: 'key 不能为空',
      });
    } else {
      let res = dd.setStorageSync({ key: key, data: data });
      if (!res.error) {
        this.setData({
          keySync: key,
          dataSync: data,
        });

        dd.alert({
          title: '同步存储数据成功',
          content: `${key}: ${data}`,
        });
      }
    }
  },

  removeStorageSync() {
    let res = dd.removeStorageSync({ key: this.data.keySync });
    if (!res.error) {
      this.setData({
        keySync: '',
        dataSync: '',
      });

      dd.alert({
        title: '同步删除数据成功',
        content: '',
      });
    }
  },
});
