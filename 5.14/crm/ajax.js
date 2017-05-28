~function () {
    // 创建ajax对象兼容写法
    function getXhr() {
        let xhr = null;
        let ary = [function () {
            return new XMLHttpRequest();
        }, function () {
            return new ActiveXObject('Microsoft.XMLHTTP');
        }, function () {
            return new ActiveXObject('Msxml2.XMLHTTP');
        }, function () {
            return new ActiveXObject('Msxml3.XMLHTTP');
        }];

        for(let i = 0; i < ary.length; i++) {
            let curFn = ary[i];
            try{
                xhr = curFn();
                getXhr = curFn;
                break;
            }catch (e) {}
        }

        if(!xhr) {
            throw Error('浏览器版本太低 请升级~');
        }
        return xhr;
    }
    function ajax(options) {
        let _defaultOptions = {
            url: null,
            type: 'GET',
            async: true,
            cache: true,
            dataType: 'text',
            data: null,
            timeout: null,
            success: null,
            error: null
        };
        // 默认参数进行合并
        for(let attr in options) {
            if(options.hasOwnProperty(attr)) {
                _defaultOptions[attr] = options[attr];
            }
        }

        // get 缓存问题
        if(_defaultOptions.type.toUpperCase() === 'GET') {// 判断是get请求
            // 解决缓存 拼接前判断当前url需不需要拼接'?' cache 为 false 说明 不需要缓存

            // if(!_defaultOptions.cache) {
            //     if(_defaultOptions.url.indexOf('?') > -1) {
            //         _defaultOptions.url += '_='+ new Date().getTime();
            //     } else {
            //         _defaultOptions.url += '?_='+ new Date().getTime();
            //     }
            // }

            // 需不需要缓存  如果需要缓存 并且 需不需要 拼接'?'
            if(!_defaultOptions.cache && _defaultOptions.url.indexOf('?') > -1) {
                _defaultOptions.url += '_='+ new Date().getTime();
            } else if(!_defaultOptions.cache) {
                _defaultOptions.url += '?_='+ new Date().getTime();
            }

           // get请求中 数据传输问题 需要将数据以 url?name=liwenli&id=1
           //  console.log(_defaultOptions.data); // {id: 24, name: "lwl"}
            let data = _defaultOptions.data;
            if(_defaultOptions.data) {
               for(let attr in data) {
                   if(_defaultOptions.url.indexOf('?') > -1) {
                       _defaultOptions.url += '&' + attr + '=' + data[attr];
                   } else {
                       _defaultOptions.url += '?' + attr + '=' + data[attr];
                   }

               }
            }
        }

        // 创建ajax 对象
        let xhr = getXhr();
        xhr.responseType = _defaultOptions.dataType; // 设置响应内容解析类型

        xhr.open(_defaultOptions.type, _defaultOptions.url, _defaultOptions.async);

        // 超时设置
        xhr.timeout = _defaultOptions.timeout;
        xhr.ontimeout = _defaultOptions.error;

        xhr.onreadystatechange = function () {
            if(this.readyState === 4 && /^2\d{2}$/.test(this.status)) {
                if(typeof _defaultOptions.success === 'function') {
                    _defaultOptions.success.call(_defaultOptions,this.response);
                }
            }
        };

        xhr.send(JSON.stringify(_defaultOptions.data)); // post 请求需要通过 请求体向后台传输数据
        console.log(_defaultOptions);

    }
   window.$ = {ajax};
}();
