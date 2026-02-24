Hooks.once("init", () => {
  console.log("Beli Currency Loaded");

  CONFIG.DND5E.currencies = {
    cp: "Beli"
  };

  CONFIG.DND5E.currencyConversion = {
    cp: 1
  };
});