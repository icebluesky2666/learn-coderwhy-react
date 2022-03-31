class Query {
  constructor(arr) {
    // 数据初始化
    this.arr = arr
    // 需要执行的函数
    this.queryFunc = []
  }

  // 传入查询条件
  where(func) {
    const fn = () => (this.arr = this.arr.filter(func))
    this.queryFunc.push(fn)
    // 后面需要继续调用其它内部函数,将当前类返回
    return this
  }

  // 列表排序: 默认 -1 1:升序 -1:降序
  orderBy(key, rev = -1) {
    // 过滤下异常参数
    if ([1, -1].includes(rev)) {
      const fn = () => this.arr.sort((a, b) => (a[key] > b[key] ? rev * 1 : rev * -1))
      this.queryFunc.push(fn)
    }
    return this
  }

  // 按照 key 值分组
  groupBy(key) {
    // 通过Map映射的方式,如果找到一样key的对象,push进去,否则先创建对象
    const map = {}
    const fn = () => {
      let len = this.arr.length
      for (let i = 0; i < len; i++) {
        const item = this.arr[i]
        const keyVal = item[key]
        // 处理下异常key: 没找到直接退出循环
        if (!keyVal) {
          break
        }
        const mapArr = map[keyVal]
        mapArr ? mapArr.push(item) : (map[keyVal] = [item])
      }
      // 用户需要的是 [[],...] 形式的分组,那就直接可以拿map的value然后合并成一个列表
      // 注意: 如果map没有属性值的情况下,需要返回原来的 this.arr 防止其它函数处理时出现异常
      const resList = Object.values(map)
      this.arr = resList.length ? resList : this.arr
    }
    this.queryFunc.push(fn)
    return this
  }

  // 返回结果: 循环处理每一个需要执行的函数,并将结果返回
  execute() {
    // const len = this.queryFunc.length
    // 先进先出
    // for (let i = 0; i < len; i++) {
    //   this.queryFunc[i]()
    // }
    while (this.queryFunc.length) {
      this.queryFunc.pop()()
    }
    return this.arr
  }
}

const data = [
  { name: 'foo', age: 16, city: 'shanghai' },
  { name: 'bar', age: 24, city: 'hangzhou' },
  { name: 'fiz', age: 22, city: 'shanghai' },
  { name: 'baz', age: 19, city: 'hangzhou' }
]

const query = new Query(data)

// const res = query.where((item) => item.age > 16).execute()
// const res = query.orderBy('age', 2).execute()
// const res = query.groupBy('city').execute()
const res = query
  .groupBy('test')
  .where((item) => item.age > 20)
  .execute()

console.log(res)
