# MongoDB
 - Its a no SQL document database which store data in JSON like documents.
 - Documents are composed of **field** and its **value** `"{ name"="John" }`.
 
- Multiple document are store in collection
![[Pasted image 20260327012315.png]]
- Think of collection like folder which contain files → Documents. 

 - MongoDB allows **Multi-document transaction** which means MongoDB allow us to perform transaction as a single unit of work on one or more document. 
 - Transaction means sequence of operation as single unit.

 - MongoDB Guarantees **A.C.I.D** which stands for Atomic, Consistency, Isolation and Durability.
	1. **Atomicity** – Either all operations in the transaction succeed, or none do. If something fails, the database rolls back to its previous state.
	2. **Consistency** - Its means MongoDB will always consistently follow its rules so that the data is valid all the time
	3. **Isolation** - Its manages that transactions don't interfere with each other. If multiple people are doing transactions at the same time, they don’t mess each other up.
	4. **Durability** -Once the transaction is done, it’s permanent. Even if the server crashes, the data is safe.
```js
{               
	_id: ObjectId("5099803df3f4948bd2f98391"),
	name: { first: "Alan", last: "Turing" },
	birth: new Date('Jun 23, 1912'),
	death: new Date('Jun 07, 1954'),
	contribs: [ "WOW", "World", "Hello" ],
	views: Long(1250000)
}
```
 
 -  Its store date in **BJSON** Binary-JSON. It is a binary representation of JSON documents with additional data types.
	 1. `_id` holds an [ObjectId.](https://www.mongodb.com/docs/manual/reference/bson-types/#std-label-objectid)
	 2. `name` holds an _embedded document_ that contains the fields `first` and `last`
	 3. `birth` and `death` hold values of the _Date_ type    
	 4. `contribs` holds an _array of strings_.
	 5. `views` holds a value of the _NumberLong_ type.

- MongoDB uses the _dot notation_(`array.index`) to access array elements and embedded document field. Example from above if we want to select `Hello` from `contribs` array we can will use `contribs.2`

- For embedded document we use this `embeddedDocument.field` . For example if we want to select last name from embedded document name we will do `name.last`

- the maximum size of single document can only be 16.5 MB (16 Mib) so that it takes less RAM

- `{a: 1, b: 1}` is equal to `{a: 1, b: 1}`
- `{a: 1, b: 1}` is not equal to `{b: 1, a: 1}`
- The `_id` field is always the first field in the document.
- In MongoDB, each document stored in a standard collection requires a uniqueid field that acts as a primary key.
- `_id` subfield names cannot begin with a (`$`) symbol.