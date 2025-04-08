export default {
  install(app) {
    app.config.globalProperties.$formatCurrency = (value) => {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    };
  },
};
