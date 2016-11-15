/**
 * Created by SUNMAOLIN on 2016/11/15.
 */
// conf/db.js
// MySQL数据库联接配置
module.exports = {
    mysql: {
        connectionLimit : 10,
        host: '10.4.71.74',
        user: 'newcdn_select',
        password: 'z!5@h#',
        database:'test99', // 前面建的user表位于这个数据库中
        port: 3306
    }
};
