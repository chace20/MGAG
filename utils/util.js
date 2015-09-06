var util = {
    json: function (res, result) {
     if(typeof result === 'undefined') {
            res.json({
                code: 1,
                msg: 'failed'
            });
        } else {
            res.json(result);
        }
    },
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    }
};

module.exports = util;