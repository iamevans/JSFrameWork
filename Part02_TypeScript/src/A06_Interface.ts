
namespace A06Interface {


    // 타입을 직접 정의하는 경우
    let onPlus = function(x: number, y: number): number {
        return x + y;
    }

    let onMin = function(x: number, y: number): number {
        return x - y;
    }

    console.log(onPlus(10, 20));
    console.log(onMin(10, 20));
    

    let calcTaxOne = function(amount: number, tax?: number): number {
        if(tax) return amount * tax;
        else return amount * 0.08
    }
    
    console.log(calcTaxOne(1000));
    console.log(calcTaxOne(1000, 0.05));
    
    
    let calcTaxTwo = function(amount: number, tax: number = 0.08): number {
        return amount * tax;
    }

    console.log(calcTaxTwo(1000));
    console.log(calcTaxTwo(1000, 0.05));

    let objParam = function(arg: {label: string}): void {
        console.log(arg.label)
    }
    
}