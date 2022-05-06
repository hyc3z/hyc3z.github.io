2022/2/5

今天开发自己的日记平台，搞了好久，被坑了好久。

#### Axios 传数组、对象参数

Axios的get：当你一定要将数组在params里传递时，用qs库：

```typescript
Axios.interceptors.request.use(function (config) {
    config.paramsSerializer = params => {
        return qs.stringify(params, { indices: false })
    }
    return config;
});
```

这一段可以配在index.tsx里面，作为Axios的全局配置。

当然，最好的方法：用Post，将数据附带在data里面

服务端：

我用的是routing-controller（也是个大坑），就可以用

```typescript
 @Body({ type: 'string' }) rawData: { data: TConfig },
 ...
 const { data } = rawData
 
```

这样的形式取出来。

#### 批量替换

大坑！慎用批量替换，注意有没有引号

#### TypeORM(巨坑)

##### Json 存储

typeorm的Entity中支持一种simple-json类型，可以在不支持json的数据库里也能存储对象。[官方的文档](https://github.com/typeorm/typeorm/blob/master/docs/entities.md#simple-json-column-type)

对于mongo，直接用json就好了。

```typescript
 @Column('json', {name: 'config', default: () => DEFAULT_CONFIG})
  config: TConfig

```

##### FindOne, Entity中的@ObjectIdColumn()

最让我想不明白的是findOne：

```
    const user = await getConnection().getRepository(SmebUser).findOne({ userId: uid})
```

这样写就是undefined.

我tm查了半天逻辑，发现：

```
const user = await getConnection().getRepository(SmebUser).findOne(uid)
```

这样写就好了。

简直离了个大谱，typeorm属实是天坑了。

由于mongo第一列都是ObjectId，默认是_id，只要你的Entity里这一列变量名不是\_id,都要注意咯……

##### Save()

在Mysql/mariadb中，如果你要更新某行数据，就把那个Record取出来（如：User），修改User.name, User.xxx，然后再save(User)。

但是，这个方法在Mongo里会直接新增一条数据！恐怕跟前一条的_id也有关系，因为输出是这样的：

```json
{ "_id" : ObjectId("61fea8d2f5798dfedb74ec1f"), "userName" : "admin", "userPwd" : "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", "isAdmin" : true, "createTime" : ISODate("2022-02-05T16:41:54.810Z"), "config" : { "diaryRoot" : "/Users/huyichong/mnt/smeb", "testConfig" : "ok" } }
{ "_id" : ObjectId("61fea8d2f5798dfedb74ec20"), "userName" : "user", "userPwd" : "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92", "createTime" : ISODate("2022-02-05T16:41:54.817Z") }
{ "_id" : ObjectId("61fea8dcf5798dfedb74ec21"), "userId" : ObjectId("61fea8d2f5798dfedb74ec1f"), "config" : { "diaryRoot" : "/Users/huyichong/mnt/smeb", "testConfig" : "ok", "diarypath" : "123" } }
```

注意第三个对象的"userId"，是我写在entity里的ObjectId变量名。

所以，我查了n多资料，才发现得这么写：

```typescript
    await getMongoRepository(SmebUser).updateOne({_id: user._id}, { $set: {config: tempConfig}});
```

甚至前面的查询条件换成user都不行，百思不得其解。如此和Mysql大相径庭的写法，我不知道要Orm有什么用？我还不如自己手撸一个mongo layer呢。

2022/2/6

#### Ant Form getFieldDecorator 初始值不更新

getFieldDecorator initialValue第一次设置初始值之后初始值再改变失效

initialValue仅限挂载后值才会对应改变，state改变只触发render，form并没有重置

```typescript
form.resetFields();
```

#### Ant Tab 设置为点击不切换

最近想优化下之前做的文件管理，发现根本没必要做3个TabPane底下3个FileBrowser，只要做个TabPane，用户点击Tab不真正切换，只重新Request数据更新FileBrowser就行。

```react
<Tabs
activeKey="1"
onTabClick={(key: string) => {
console.log(key);
updateFiles(key);
}}
>
```

activeKey确保了Tab始终在key="1"的TabPane上，用户点击Tab会返回那个Tab的Key，但并不真正切换。说白了，把Tab Navigator当按钮用了。这样可以节省内存开销。

当然，这样做得缺点，就是每次都要Request。如果本地保存Cache，就可以节省Request，但时效性会有影响（用户要手动Update）。看实际情况吧，不知道怎么权衡，先这样搞。

#### TypeScript Enum 作key

```typescript
export enum EDirectoryType {
    DIARY = 'DIARY',
    NOTES = 'NOTES'
}

export const DEFAULT_DIRECTORY_PATH_CONFIG_KEY = {
    [EDirectoryType.DIARY]: 'diaryRoot',
    [EDirectoryType.NOTES]: 'notesRoot',
}
```

加个[]就好了

#### React i18n 

[参考](https://zhuanlan.zhihu.com/p/94788672)

