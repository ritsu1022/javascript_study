const func = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return promise;
};

func()
  .then(() => {
    console.log('done');
  });