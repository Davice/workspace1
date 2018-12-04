
function deepCopy (o, c){
    c = c || {}
    for (let i in o) {
      if (typeof o[i] === 'object') {
        // 需要深拷贝
        if (o[i].constructor === Array) {
          // 数组
          console.log('是数组')
          c[i] = []
        } else {
          // 对象
          console.log('是对象')
          c[i] = {}
        }
        this.deepCopy(o[i], c[i])
      } else {
        c[i] = o[i]
      }
    }
    return c
  }
  const obj1 = {
    name: 'mengft',
    family: ['父亲', '母亲', '妹妹']
}
  console.log(deepCopy(obj1, { school: '天津科技大学' }))

// let a=e=> new Promise((reslove,reject )=>{
// setTimeout(()=>{
  
//    if(e!=1)
//     reslove('success');
//     else
//     reject('fail');
// },2000);
// });

// a(0).then(e=>{
//     console.log(e);
// });


// //let [x,y,...z]=

// console.log(1);


// function* f() {
//     for (var i = 0; i < 4; i++) {
//         var reset = yield i;
//         if (reset) { i = -1; }
//     }
// }
// var g = f();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// //console.log(g.next(true));
// //console.log(g.next(1));
// //console.log(`1==true:${1==true}  1===true:${1===true}`)
// console.log(g.next());
// console.log(g.next());
//     //next() parameter =  previous yield result


// class Artist {
//     constructor(name) {
//         this.name = name;
//     }

//     perform() {
//         return this.name + " performs ";
//     }
// }

// class Singer extends Artist {

//     constructor(name, song) {
//         super(name);
//         this.song = song;
//     }

//     perform() {
//         return `${super.perform()}[ ${this.song} ]`;
//     }
// }

// let james = new Singer("Etta James", "At last");
// james instanceof Artist; // true
// james instanceof Singer; // true

// console.log(james.perform()); // "Etta James performs [At last]"
