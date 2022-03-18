const saveToLocalStore = (key, value) => {
  try {
    const localStorageItem = JSON.stringify(value);
    localStorage.setItem(key, localStorageItem);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const loadLocalStore = (key) => {
  try {
    const localStorageItem = localStorage.getItem(key);
    return localStorageItem === null ? undefined : JSON.parse(localStorageItem);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

if (loadLocalStore("CONTACTS") === undefined) {
  saveToLocalStore("CONTACTS", []);
}

const initialContacts = loadLocalStore("CONTACTS");
export { saveToLocalStore, loadLocalStore, initialContacts };
