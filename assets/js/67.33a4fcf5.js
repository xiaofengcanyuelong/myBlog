(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{399:function(n,s,e){"use strict";e.r(s);var t=e(4),l=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"slave-io-running-connecting-slave-sql-running-yes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slave-io-running-connecting-slave-sql-running-yes"}},[n._v("#")]),n._v(" Slave_IO_Running：Connecting； Slave_SQL_Running：Yes")]),n._v(" "),s("p",[s("strong",[n._v("一")]),n._v("、问题描述:\n在做主从mysql例子时，出现Slave_IO_Running：Connecting； Slave_SQL_Running：Yes问题。")]),n._v(" "),s("p",[s("strong",[n._v("二")]),n._v("、解决：\n先在从服务器上执行"),s("code",[n._v("mysql -uslave -pslave -h192.168.233.128")]),n._v("，来验证是否可以使用在主服务器上预留的账号slave来登陆数据库，")]),n._v(" "),s("p",[n._v("运行结果如下：\n"),s("code",[n._v("mysql: [Warning] Using a password on the command line interface can be insecure. ERROR 1045 (28000): Access denied for user 'slave'@'192.168.233.1' (using password: YES)")])]),n._v(" "),s("p",[n._v("在主服务器上查看mysql的配置文件，"),s("code",[n._v("sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf")]),n._v("\n找到"),s("code",[n._v("bind-address = 127.0.0.1")]),n._v("这一行，使用#符号将其注释，最后重启mysql服务"),s("code",[n._v("sudo service mysql restart")])]),n._v(" "),s("p",[n._v("最后测试成功~")]),n._v(" "),s("p",[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/hwj0123/BlogPictureRepository/blog/20200714215548386.png",alt:""}})])])}),[],!1,null,null,null);s.default=l.exports}}]);