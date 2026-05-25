Mongosh is a MongoDB shell from which we manipulate the database it like cli version of compass
first we need to login in MongoDB Atlas and create a cluster then connect to it with 
```bash
~ ❯ mongosh "mongodb+srv://cluster0.aezekiq.mongodb.net/"   --username <username>   --tls   --tlsAllowInvalidCertificates
```

We can create new db with `use <DBname>` in mongosh shell

| Commands        | Detail                           |
| --------------- | -------------------------------- |
| `use <db_name>` | create a new database in cluster |
| `db`            |                                  |
