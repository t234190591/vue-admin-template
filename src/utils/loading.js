import { Loading } from 'element-ui';

export default {
  loading: null,
  count: 0,

  start() {
    if (!this.loading) {
      this.loading = Loading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      })
    }

    this.count++
  },

  close() {
    if (!this.loading) return false;
    this.count--
    if (this.count <= 0) {
      this.loading.close();
      this.loading = null
      this.count = 0
    }
  }
}