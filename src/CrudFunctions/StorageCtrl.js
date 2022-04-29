const StorageCtrl = (function () {
  // Public methods
  return {
    storeItem: function (item) {
      let items;

      // Check if any items in localStorage
      if (localStorage.getItem("items") === null) {
        // no items in localStorage
        items = [];
        // Push new item
        items.push(item);
        // Set localStorage
        localStorage.setItem("items", JSON.stringify(items));
      } else {
        // Get what is already in localStorage
        items = JSON.parse(localStorage.getItem("items"));
        // Push new item
        items.push(item);
        // Reset localStorage
        localStorage.setItem("items", JSON.stringify(items));
      }
    },

    getItemsFromStorage: function () {
      let items;

      if (localStorage.getItem("items") === null) {
        // Nothing in localStorage
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem("items"));
      }

      return items;
    },

    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem("items"));

      items.forEach(function (item, index) {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });

      localStorage.setItem("items", JSON.stringify(items));
    },

    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem("items"));

      items.forEach(function (item, index) {
        if (id === item.id) {
          items.splice(index, 1);
        }
      });

      localStorage.setItem("items", JSON.stringify(items));
    },

    clearItemsFromStorage: function () {
      localStorage.removeItem("items");
    },
  };
})();

export default StorageCtrl;
