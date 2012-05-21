Sqlite 3th party library for firefox addon sdk

usage:

var sql = require("sqlite")

sql.connect("jceb.sqlite");

sql.execute("create table features(id integer primary key autoincrement, name text);");

sql.execute('insert into features(name) values("hola");');

sql.execute("select * from features;",function(result,status){
  for(var i=0;i<result.rows;i++){
    for(var j=0;j<result.cols;j++){
      console.log(result.data[i][j]);
    }
  }
});

