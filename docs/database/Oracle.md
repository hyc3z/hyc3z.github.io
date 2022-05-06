## Oracle 数据库

文档链接：

### [分片](https://docs.oracle.com/en/database/oracle/oracle-database/21/shard/overview-oracle-sharding1.html#GUID-82BA92CE-67B3-4A0F-B6A4-8FE30587CB99)

### [基础DML](https://docs.oracle.com/en/database/oracle/oracle-database/21/tdddg/creating-managing-schema-objects.html#GUID-A951A80F-7774-4620-8497-12E7DFFB663E)

#### 给某一列添加限制：

```sql
ALTER TABLE PERFORMANCE_PARTS
MODIFY WEIGHT NOT NULL;
```



### [SQL标准](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/History-of-SQL.html#GUID-4DD5E1B6-BEC7-4E9B-B369-1466F93ACA28)

#### [集合运算符]([The Set Operators (oracle.com)](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/The-UNION-ALL-INTERSECT-MINUS-Operators.html#GUID-B64FE747-586E-4513-945F-80CB197125EE))

`UNION`：合并查询结果，去除重复结果、

`UNION ALL`：合并查询结果，不去除重复结果、

`INTERSECT`：只取查询结果的交集、

`MINUS`：只在第一个查询结果，不在第二个结果、

`EXCEPT`：和MINUS一样

### [PL/SQL](https://docs.oracle.com/en/database/oracle/oracle-database/21/lnpls/overview.html#GUID-EAC28BE9-598B-4FF1-B0EA-C1AD0884634B)

#### 块

在PL/SQL中，一个“块”是一个基本单元，由`DECLARE`, `BEGIN`, `EXCEPTION`,  `END`定义。如：

```plsql
<< label >> (optional)
DECLARE    -- Declarative part (optional)
  -- Declarations of local types, variables, & subprograms

BEGIN      -- Executable part (required)
  -- Statements (which can use items declared in declarative part)

[EXCEPTION -- Exception-handling part (optional)
  -- Exception handlers for exceptions (errors) raised in executable part]
END;
```

#### 子程序

一个子程序就是可重复执行的语句块。

除此之外，PL/SQL还可以调用其他语言写的外部子程序。

#### 赋值

```plsql
DECLARE
  valid_id       BOOLEAN;
BEGIN 
  valid_id := TRUE;
END;
```

#### SELECT INTO

```plsql
DECLARE
  bonus   NUMBER(8,2);
BEGIN
  SELECT salary * 0.10 INTO bonus
  FROM employees
  WHERE employee_id = 100;
END;

DBMS_OUTPUT.PUT_LINE('bonus = ' || TO_CHAR(bonus));
/
```

#### Row Locks

A transaction acquires a row lock for each row modified by one of the following statements: `INSERT`, `UPDATE`, `DELETE`, `MERGE`, and `SELECT` ... `FOR` `UPDATE`. The row lock exists until the transaction commits or rolls back.

#### Table Locks

A transaction automatically acquires a table lock (**TM lock**) when a table is modified with the following statements: `INSERT`, `UPDATE`, `DELETE`, `MERGE`, and `SELECT` ... `FOR` `UPDATE`. These DML operations require table locks to reserve DML access to the table on behalf of a transaction and to prevent DDL operations that would conflict with the transaction. You can explicitly obtain a table lock using the `LOCK` `TABLE` statement, as described in "[Manual Data Locking](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Manual-Data-Locking.html#GUID-B1DE7D59-7FD1-4971-B98D-B69529DF7688)".

| SQL Statement                                         | Row Locks | Table Lock Mode | RS                                                           | RX                                                           | S    | SRX  | X    |
| :---------------------------------------------------- | :-------- | :-------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :--- | :--- | :--- |
| `SELECT` ... `FROM` *`table`*`...`                    | —         | none            | Y                                                            | Y                                                            | Y    | Y    | Y    |
| `INSERT` `INTO` *`table`* ...                         | Yes       | SX              | Y                                                            | Y                                                            | N    | N    | N    |
| `UPDATE` *`table`* ...                                | Yes       | SX              | Y[Foot 1](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#GUID-3D57596F-8B73-4C80-8F4D-79A12F781EFD__BABHAJFD) | Y[Foot 1](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e474) | N    | N    | N    |
| `MERGE` `INTO` *`table`* ...                          | Yes       | SX              | Y                                                            | Y                                                            | N    | N    | N    |
| `DELETE` `FROM` *`table`* ...                         | Yes       | SX              | Y[Foot 1](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e541) | Y[Foot 1](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e546) | N    | N    | N    |
| `SELECT` ... `FROM` *`table`* `FOR` `UPDATE` `OF` ... | Yes       | SX              | Y[Foot 1](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e588) | Y[Foot 1](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e593) | N    | N    | N    |
| `LOCK` `TABLE` *`table`* `IN` ...                     | —         |                 |                                                              |                                                              |      |      |      |
| `ROW` `SHARE` `MODE`                                  |           | SS              | Y                                                            | Y                                                            | Y    | Y    | N    |
| `ROW` `EXCLUSIVE` `MODE`                              |           | SX              | Y                                                            | Y                                                            | N    | N    | N    |
| `SHARE` `MODE`                                        |           | S               | Y                                                            | N                                                            | Y    | N    | N    |
| `SHARE` `ROW` `EXCLUSIVE` `MODE`                      |           | SSX             | Y                                                            | N                                                            | N    | N    | N    |
| `EXCLUSIVE` `MODE`                                    |           | X               | N                                                            | N                                                            | N    | N    | N    |

##### 查看锁表进程

```plsql
select * from v$session t1, v$locked_object t2 where t1.sid = t2.SESSION_ID; 
```

#### MERGE INTO

```plsql
MERGE INTO schema. table alias
USING { schema. table | views | query} alias
ON {(condition) }
WHEN MATCHED THEN
  UPDATE SET {clause}
WHEN NOT MATCHED THEN
  INSERT VALUES {clause};

```

INTO 子句
用于指定你所update或者Insert目的表。
USING 子句
用于指定你要update或者Insert的记录的来源，它可能是一个表，视图，子查询。
ON Clause
用于目的表和源表（视图，子查询）的关联，如果匹配（或存在），则更新，否则插入。
merge_update_clause 
用于写update语句
merge_insert_clause
用于写insert语句


#### WHILE...LOOP...END LOOP

```plsql
DECLARE
  done    BOOLEAN;              -- Initial value is NULL by default
  counter NUMBER := 0;
BEGIN
  done := FALSE;                -- Assign literal value
  WHILE done != TRUE            -- Compare to literal value
    LOOP
      counter := counter + 1;
      done := (counter > 500);  -- Assign value of BOOLEAN expression
    END LOOP;
END;
/
```

#### 字符串连接符 ||

```plsql
DECLARE
  x VARCHAR2(4) := 'suit';
  y VARCHAR2(4) := 'case';
BEGIN
  DBMS_OUTPUT.PUT_LINE (x || y);
END;
/
```

输出结果：

```plsql
suitcase
```

字符串连接符会无视NULL，如

```plsql
BEGIN
  DBMS_OUTPUT.PUT_LINE ('apple' || NULL || NULL || 'sauce');
END;
/
```

输出

```
applesauce
```

#### 逻辑与或非

| x       | y       | x AND y | x OR y  | NOT x   |
| ------- | ------- | ------- | ------- | ------- |
| `TRUE`  | `TRUE`  | `TRUE`  | `TRUE`  | `FALSE` |
| `TRUE`  | `FALSE` | `FALSE` | `TRUE`  | `FALSE` |
| `TRUE`  | `NULL`  | `NULL`  | `TRUE`  | `FALSE` |
| `FALSE` | `TRUE`  | `FALSE` | `TRUE`  | `TRUE`  |
| `FALSE` | `FALSE` | `FALSE` | `FALSE` | `TRUE`  |
| `FALSE` | `NULL`  | `FALSE` | `NULL`  | `TRUE`  |
| `NULL`  | `TRUE`  | `NULL`  | `TRUE`  | `NULL`  |
| `NULL`  | `FALSE` | `FALSE` | `NULL`  | `NULL`  |
| `NULL`  | `NULL`  | `NULL`  | `NULL`  | `NULL`  |

#### 逻辑运算符

| Operator                | Meaning                  |
| ----------------------- | :----------------------- |
| `=`                     | equal to                 |
| `<>`, `!=`, `~=`, ` ^=` | not equal to             |
| `<`                     | less than                |
| `>`                     | greater than             |
| `<=`                    | less than or equal to    |
| `>=`                    | greater than or equal to |

几个坑：

`TRUE`是大于`FALSE`的

字符串比的是二进制

日期，越往后越大

#### LIKE

下划线`_`匹配一个字符

百分号`%`匹配0或多个字符

#### BETWEEN

```plsql
BEGIN
  print_boolean ('2 BETWEEN 1 AND 3', 2 BETWEEN 1 AND 3);
  print_boolean ('2 BETWEEN 2 AND 3', 2 BETWEEN 2 AND 3);
  print_boolean ('2 BETWEEN 1 AND 2', 2 BETWEEN 1 AND 2);
  print_boolean ('2 BETWEEN 3 AND 4', 2 BETWEEN 3 AND 4);
END;
/
```

结果

```
2 BETWEEN 1 AND 3 = TRUE
2 BETWEEN 2 AND 3 = TRUE
2 BETWEEN 1 AND 2 = TRUE
2 BETWEEN 3 AND 4 = FALSE
```

| Data Type    | Maximum Size in PL/SQL | Maximum Size in SQL                |
| ------------ | ---------------------- | ---------------------------------- |
| `CHAR`       | 32,767 bytes           | 2,000 bytes                        |
| `NCHAR`      | 32,767 bytes           | 2,000 bytes                        |
| `RAW`        | 32,767 bytes           | 2,000 bytes                        |
| `VARCHAR2`   | 32,767 bytes           | 4,000 bytes                        |
| `NVARCHAR2`  | 32,767 bytes           | 4,000 bytes                        |
| `LONG`       | 32,760 bytes           | 2 gigabytes (GB) - 1               |
| `LONG` `RAW` | 32,760 bytes           | 2 GB                               |
| `BLOB`       | 128 terabytes (TB)     | (4 GB - 1) * `database_block_size` |
| `CLOB`       | 128 TB                 | (4 GB - 1) * `database_block_size` |
| `NCLOB`      | 128 TB                 | (4 GB - 1) * `database_block_size` |

varchar放不下的，可以用clob

#### Blank-padding

```plsql
DECLARE
  first_name  CHAR(10 CHAR);
  last_name   VARCHAR2(10 CHAR);
BEGIN
  first_name := 'John ';
  last_name  := 'Chen ';
 
  DBMS_OUTPUT.PUT_LINE('*' || first_name || '*');
  DBMS_OUTPUT.PUT_LINE('*' || last_name || '*');
END;
/
```

输出

```
*John      *
*Chen *
```

VARCHAR2 不会自动补齐空格，CHAR会给字符串末尾补齐空格。

#### 注释

单行注释

```plsql
-- Begin processing
```

多行注释

```plsql
/*
  IF 2 + 2 = 4 THEN
    some_condition := TRUE;
  /* We expect this THEN to always be performed */
  END IF;
*/
```

#### Table, Array, 用户自定义类型TYPE

```plsql
DECLARE
  -- Associative array indexed by string:
  
  TYPE population IS TABLE OF NUMBER  -- Associative array type
    INDEX BY VARCHAR2(64);            --  indexed by string
  
  city_population  population;        -- Associative array variable
  i  VARCHAR2(64);                    -- Scalar variable
  
BEGIN
  -- Add elements (key-value pairs) to associative array:
 
  city_population('Smallville')  := 2000;
  city_population('Midland')     := 750000;
  city_population('Megalopolis') := 1000000;
 
  -- Change value associated with key 'Smallville':
 
  city_population('Smallville') := 2001;
 
  -- Print associative array:
 
  i := city_population.FIRST;  -- Get first element of array
 
  WHILE i IS NOT NULL LOOP
    DBMS_Output.PUT_LINE
      ('Population of ' || i || ' is ' || city_population(i));
    i := city_population.NEXT(i);  -- Get next element of array
  END LOOP;
END;
/
```



### SQL练习

表1: Person

+-------------+---------+
| 列名         | 类型     |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId 是上表主键

表2: Address

+-------------+---------+
| 列名         | 类型    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId 是上表主键

 

编写一个 SQL 查询，满足条件：无论 person 是否有地址信息，都需要基于上述两表提供 person 的以下信息

```
FirstName, LastName, City, State
```


https://leetcode-cn.com/problems/combine-two-tables


标准解法：

```plsql
select FirstName, LastName, City, State
from Person left join Address
on Person.PersonId = Address.PersonId
```

左外连接，如果右表没有数据，就为空。

