var result = rs.initiate({
                 "_id" : "configReplSet",
                 "configsvr": true,
                 "members" : [
                     { "_id" : 1, "host" : "127.0.0.1:27019"},
                 ]});

if(result["ok"] == 0){
    print("Error: " + result["errmsg"]);
}
else{
    print("========> Init replica set [replset] success! <========");
}
print();
