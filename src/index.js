setTimeout(() => {
    console.log('A');
  }, 0);
  var obj = {
    func: function() {
      setTimeout(function() {
        console.log('B');
      }, 0);
      return new Promise(function(resolve) {
        console.log('C');
        resolve();
      });
    },
  };
  obj.func().then(function() {
    console.log('D');
  });
  console.log('E');

  // 宏任务队列  A  B  压入
  // 微任务队列  D
  // 主流程  C E
  // 执行顺序   主流程 =》 微任务 =》 宏任务 C E  D  A   B