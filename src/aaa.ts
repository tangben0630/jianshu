



//装饰器 本身是一个函数,    他是用来美化一个类 或者是其他  类似于化妆
//装饰器 使用 @ 来运行


function nihao() {
  return function <T extends new (...args: any[]) => {}>(c: T) {
    return class extends c {
      name = 'xiaoming'
    }
  }
}


const Aaa = nihao()(class {
  name: string = 'name'
  get() {
    return this.name
  }
})



const a = new Aaa()

console.log(a.name, '999', a.get());






















export default a

