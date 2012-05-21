/*Connect with just one line*/
var sqlite = require("sqlite").connect('myaddon.sqlite');

exports.main = function(options, callbacks){
    sqlite.execute("create table features(id integer primary key autoincrement, name text);");
    /*dataToInsert = new Array('easy','fast','quick','rapid','slow');
    for(var i=0; i<dataToInsert.length; i++){
        sqlite.execute('insert into features(name) values("'+dataToInsert[i]+'");');
    }*/
    sqlite.execute("select * from features;",function(result,response){
        for(var i=0;i<result.rows;i++){
            for(var j=0;j<result.cols;j++){
                console.log(result.data[i][j]);
            }
        }
    });
    
    let query = sqlite.connection.createStatement('select * from features where id = :id');
    query.params.id = '1';
    query.executeAsync({
        handleResult:function(resultSet){
            /*Here we convert the result in a very simple matrix of data*/
            for(var row=resultSet.getNextRow();row;row=resultSet.getNextRow()){
                sqrObject.cols = row.numEntries;
                let dataRow = new Array(sqrObject.cols);
                for(var i=0;i<sqrObject.cols;i++){
                    dataRow[i] = row.getResultByIndex(i);
                }
                sqrObject.data[sqrObject.rows] = dataRow;
                sqrObject.rows++;
            }
        },
        handleError:function(error){
            success(null,error);
        },
        handleCompletion:function(reason){
            success(sqrObject,reason);
        }
    });
}