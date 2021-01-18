//将对象转为url字符串参数
export function  convertObj(data:any) :string{
  var _result = [];
  for (var key in data as object ) {
    var value = data[key];
    if (value.constructor == Array) {
      value.forEach(function(_value) {
        _result.push(key + "=" + _value);
      });
    } else {
      _result.push(key + '=' + value);
    }
  }
  return _result.join('&');
}
