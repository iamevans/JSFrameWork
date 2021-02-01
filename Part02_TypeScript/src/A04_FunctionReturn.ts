
namespace A04FunctionReturn {

    function onAdd(x, y){
        console.log(`${x} + ${y} = ${x + y}`);
    }

    function infiniteLoop() {
        while(true){
        }
    };

    function showError(msg) {
        throw new Error(msg);
    }

    function checkValue(x) {
        if(x < 10) showError('10보다 작습니다');
        return x;
    }

    
    onAdd(10, 20);
    let value = checkValue(3);
    console.log(value);

}