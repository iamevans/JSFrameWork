
namespace A03ReferenceType {

    // array
    let numAry = [10, 11, 100];
    let strAry = ['A', 'B', 'C'];
    console.log(`Array=> ${numAry} / ${numAry[0]}`);
    console.log(`strAry=> ${strAry} / ${strAry[0]}`);


    // tuple
    let nolbuTp = ['NolBu', 30];
    console.log(`tuple=> ${nolbuTp} / ${nolbuTp[0]}`);


    // enum
    


    // Object
    let obj = {
        name: 'Hong',
        age: 20,
        toString: function() {
            return `${this.name} / ${this.age}`
        }
    }
    console.log(obj.toString());

}