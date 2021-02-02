

namespace A02Type {

    // Type
    let name : string = 'NolBu';
    let age : number = 30;
    let check : boolean = true;

    console.log(`${name}, ${age}, ${check}`);

    
    // any type
    let noType = 10;
    // noType = 'Hungbu';
    // noType = true;
    console.log(noType);


    // null, undefined type
    let nullType: null = null;
    let unType: undefined = undefined;

    // let num: number = null;      // "strictNullChecks": false 가능


    // union type
    let address = null;
    let strNum = 'HungBu';

    
    console.log(`${address}, ${strNum}`);

}
