const func = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 3000);
  });
  return promise;
};

func()
  .then(() => {
    console.log('done');
  })
  .catch(() => {
    console.log('error');
  });