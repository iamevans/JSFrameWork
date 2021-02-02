(function(){

    let obj = {
        name: 'NolBu',
        age: 30
    }

    let ary = ['A', 'B', 'C'];
    console.log(obj, ary);

    
    // Object
    let {name, age} = obj;
    console.log(`${name} / ${age}`);

    // let {name, age} = obj;
    // Array
    let [a, b, c, d = 9] = ary;
    console.log(`${a} / ${b} / ${c} / ${d}`);
    
})();
