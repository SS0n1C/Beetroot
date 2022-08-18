class localStorageCRUD{
    constructor(){
    }
        create(key, value){
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        read(key){
            window.localStorage.getItem(key)
        }
        update(key, value){

        }
        delete(key){
            window.localStorage.removeItem(key)
        }
}
const crud = new localStorageCRUD()
const str = 'testing'
const num = 123
const arr = ['one', 'two', ' three']
const bool = false
const obj = { name: "Name", lastName:"Lastneymenko", child: {name: "maybe"}}
const arrObj = [{name:'name1'}, {name1:'name2'}]

crud.create('str', str)
crud.create('num', num)
crud.create('arr', arr)
crud.create('bool', bool)
crud.create('obj', obj)
crud.create('arrObj', arrObj)

console.log('str', crud.read('str'))
crud.read('str') === str? console.log('str true'): console.log('str false')
parseInt(crud.read('num')) ===  num? console.log('num true'): console.log('num false')
crud.read('arr') ==  arr? console.log('arr true'): console.log('arr false')
crud.read('bool') === bool? console.log('bool true'): console.log('bool false')
crud.read('obj') == obj? console.log('obj true'): console.log('obj false')
crud.read('arrObj') == arrObj? console.log('arrObj true'): console.log('arrObj false')
