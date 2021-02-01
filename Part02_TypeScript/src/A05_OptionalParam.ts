

namespace A05OptionalParam {
    
    function calcTaxOne(amount, tax): number {
        if(tax) return amount * tax;
        else return amount * 0.08
    }
    
    // console.log(calcTaxOne(1000));
    console.log(calcTaxOne(1000, 0.05));
    console.log('');

    
    function calcTaxTwo(amount, tax = 0.08): number {
        return amount * tax;
    }

    console.log(calcTaxTwo(1000));
    console.log(calcTaxTwo(1000, 0.05));
    console.log('');


    function objParam(arg: {label: string}): void {
        console.log(arg.label)
    }

    objParam({label: 'middle'});

}
