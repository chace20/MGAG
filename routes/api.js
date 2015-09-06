/*api route*/

var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var $conf = require('../conf/db');
var $util = require('../utils/util');
var $sql = {
    postResult: 'insert into game (type) values (?)',
    getAllAmount: 'select count(id) as count from game',
    getTypeAmount: 'select type, count(id) count from game group by type'
};

var pool = mysql.createPool($util.extend({}, $conf.mysql));

router.post('/postResult', function(req, res, next){
    pool.getConnection(function(err, connection) {
        var param = req.body;
        if(param.type == null){
            $util.json(res, undefined);
            return;
        }
        connection.query($sql.postResult, [param.type], function(err, result){
            if(result){
                result = {
                    code: 200,
                    msg: 'submit success'
                };
            }
            $util.json(res, result);
            connection.release();
        });
    });
});

router.get('/getAllAmount', function(req, res, next){
    pool.getConnection(function(err, connection){
        connection.query($sql.getAllAmount, function(err, result){
            $util.json(res, result[0]);
            connection.release();
        });
    });
});

router.get('/getTypeAmount', function(req, res, next){
    pool.getConnection(function(err, connection){
        connection.query($sql.getTypeAmount, function(err, result){
            $util.json(res, result);
            connection.release();
        });
    });
});

module.exports = router;