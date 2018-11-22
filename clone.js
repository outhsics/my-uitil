
var item = {
    name: '1',
    age:2,
    item2: {
        name:'2',
        age:2,
        cc:3
    }
}

var a = Object.keys(item.item2).reduce((res,key)=>{
    // if(key !== 'age') {

    //     return {...obj,[key]:item[key]}
    // }
    // debugger
    // return obj;
    if(key === 'item2') {
        res[key] = true;
    } else {
        res[key] = item.item2[key]
    }
},{});


var type = obj => {
    var toString = Object.prototype.toString;
    var map = {
        '[object Array]':'array',
        '[object object]':'object',
    };
    return map[toString.call(obj)];
};

var deepClone = data => {
    var t = type(data);
    var o;
    var i ;
    var length;
    if(t === 'array') {
        o = [];
    }
    else if(t === 'object') {
        0={}
    }
    else {
        return data;
    }
    // ar
    if(t === 'array') {
        for (let i = 0; i < data.length; i++) {
            o.push(data[i]);
            return deepClone(data[i]);
        }
        return o;
    }
    if(t === 'object') {
        for (const key in data) {
            o[i] = deepClone(data[i]);
        }
        return o;
    }
    

}