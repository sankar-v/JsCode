Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1,
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)), // 2
]).then((res)=>console.log(res));