# iine

# 実行
```
$ node index
```

# 機能
## iineの一覧
Request  
GET http://localhost:394/iine

Response
```
[
{
"from": "a",
"to": "b",
"date": "2021-11-10T02:52:30.252Z",
"_id": "gLu0OYw4Q9yv4Zlm"
},
{
"from": "a",
"to": "b",
"date": "2021-11-10T02:52:29.985Z",
"_id": "tlYQ3ZSDb5uRfpMQ"
}
]
```

## iineの追加
Request  
POST http://localhost:394/iine  
body
```
{"from":"d", "to":"a"}
```

Response  
202 or 400

## iine数確認
Request  
GET http://localhost:394/leaderboard

Response  
```
{
"b": 2,
"a": 1,
"c": 1
}
```