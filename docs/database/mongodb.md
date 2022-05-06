# MongoDB

## 知识篇

### Document

MongoDB 基本存储单元类型为Document，是以BSON为格式存储的。

一个数据库有多个collection，每个collection中有多个document

document的格式：

```
{
	field: value
}
```

_id 代表ObjectId，是唯一的、12字节长度、生成的标识

- a 4-byte *timestamp value*, representing the ObjectId's creation, measured in seconds since the Unix epoch
- a 5-byte *random value* generated once per process. This random value is unique to the machine and process.
- a 3-byte *incrementing counter*, initialized to a random value

ObjectId有两个很有意思的地方，因为它用到了时间戳，但是粒度是一秒。因此一秒内生成的多个ObjectId是先后不定的。而且，由于是Client生成，也会受到系统时间的影响。

在document的键名中，不能用_id。

当然，由于类似json的特性，_id是允许有子document的，子键名不能以$开头。

- The field name `_id` is reserved for use as a primary key; its value must be unique in the collection, is immutable, and may be of any type other than an array. If the `_id` contains subfields, the subfield names cannot begin with a (`$`) symbol.

- Field names **cannot** contain the `null` character.
- The server permits storage of field names that contain dots (`.`) and dollar signs (`$`).
- MongodB 5.0 adds improved support for the use of (`$`) and (`.`) in field names. There are some restrictions. See [Field Name Considerations](https://docs.mongodb.com/manual/core/dot-dollar-considerations/#std-label-crud-concepts-dot-dollar-considerations) for more details.

```
{
   ...
   name: { first: "Alan", last: "Turing" },
   contact: { phone: { type: "cell", number: "111-222-3333" } },
   ...
}
```

如果要获取到 Alan的number, 用'.'来表示子document:`contact.phone.number`

BSON Document最大不超过**16MB**，如果超过这个大小就需要用GridFS [mongofiles](https://docs.mongodb.com/database-tools/mongofiles/#mongodb-binary-bin.mongofiles).

和JSON不同的是，BSON文件中的键值对是有序的。

## 安装篇

### Mac

macOS Monterey:

使用brew安装，非常方便。

```
brew tap mongodb/brew
brew install mongodb-community@4.4
brew services start mongodb-community@4.4
```

三句话就可以了。

## 使用篇

通常默认端口为27017。连接时不需要用户名密码

### TypeORM

参考[README](https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md)

```
@Entity()
export class User {
    
    @ObjectIdColumn()
    id: ObjectID;
    
    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
}
```

如果要和Mysql兼容，可以将ObjectID的标识名改为UserId，不影响，实际存储时键名依然为_id.

@ObjectIdColumn()
    UserId: ObjectID;

自己用的时候，127连不上，0.0.0.0就可以连。

