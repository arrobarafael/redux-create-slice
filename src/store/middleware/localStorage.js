const localStorage = (store) => (next) => (action) => {
  const response = next(action);
  const {meta} = action;
  console.log(action);
  if(meta && meta.localStorage){
    console.log(meta);
    const {key, value} = meta.localStorage;
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return response;
}

export default localStorage;