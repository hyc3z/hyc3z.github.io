

##### [编译链接过程](https://zhuanlan.zhihu.com/p/88255667)

[编译过程](https://zhuanlan.zhihu.com/p/242872536)

预处理：

```shell
$ gcc -E
```

把所有引用的头文件的内容替换到目标文件（只包括头文件中的定义）

编译：

```
$ gcc -S -I./inc test.c -o test.s
```

##### [CMake](https://www.zhihu.com/question/58949190)

[CMake 官方教程](https://cmake.org/cmake/help/v3.22/guide/tutorial/A%20Basic%20Starting%20Point.html)

[CMake examples](https://github.com/ttroy50/cmake-examples/)

#### 

##### main 函数

返回类型：int

argc: 参数的数量

argv: char** argv[0]到argv[argc-1] 传入参数



##### #include 尖括号和引号

\#include< >编译程序会先到标准函数库中调用文件。

\#include“ ”编译程序会先从[当前目录](https://www.baidu.com/s?wd=当前目录&tn=SE_PcZhidaonwhc_ngpagmjz&rsv_dl=gh_pc_zhidao)中调用文件。



\#include< >指示预处理程序到预定义的缺省路径下寻找文件。

\#include“ ”指示预处理程序先到[当前目录](https://www.baidu.com/s?wd=当前目录&tn=SE_PcZhidaonwhc_ngpagmjz&rsv_dl=gh_pc_zhidao)下寻找文件，再到预定义的缺省路径下寻找文件。  

##### Namespace

namespace N {
int i = 4;
extern int j;
}
int i = 2;
int N::j = i; // N::j == 4

##### Decltype

decltype()和引用的组合。

-------------如果变量不是一个普通的表达式，那么decltype()返回的是对应结果的数据类型。

-------------如果表达式里有解引用符，那么decltype()的结果将是引用类型。

-------------如果表达式在一层或多层括号()内，那么decltype()的结果将是引用类型。

例如：

int i = 10, *p = &i, &r = i;

decltype(r + 0) b;-----------加法的结果是int, b是int 类型。

decltype(*p) c = 20;--------c是int&。因为表达式里有解引用符。

decltype((i)) d = 10;---------d的数据类型是整型引用int&。

一句话概括，当你需要某个表达式的返回值类型而又不想实际执行它时用decltype。

例如：

int  a=8, b=3;

auto c=a+b;  //运行时需要实际执行a+b，哪怕编译时就能推导出类型

decltype(a+b)  d;  //编译期类型推导

不可以用auto  c; 直接声明变量，必须同时初始化。

##### Extern

```
//是说这个变量是存在，但是不在(可能)当前的编译单元，后续链接时会在哪里发现 
//大家共用这个全局变量
//如果在链接的时候，没有在任何地方发现这个变量的定义 
//即没有不带 extern 的 int x，报链接错误 
extern int x;  

//是说这个变量是存在，且只存在当前编译单元，也可以叫它本地全局变量``。 
//可能多个编译单元都会有这个定义，比如这句写在一个 header 文件中 
//多个 source 文件 include 了这个 header 文件 
//那么每个 source 文件中都可以使用 x，但是每个 x 是独立存在 
//即在 a.cpp 的 x 就是 a_x，在 b.cpp 的 x 就是 b_x。相互不会影响。 
static int x; 
```

------ 如果需要一个全局变量在多个源文件中共用，用 extern

extern.h

```text
extern int x;
```

然后在某一个源文件中 externX.cpp，定义 x

```text
#include "extern.h" //这个 include 不要也行
int x = 1;
```

------ 如果需要每个源文件中单独使用一个全局变量，用 static

static.h

```
static int x;
然后在所有源文件中 staticX.cpp，自由使用 x
#include "static.h" //use x，只属于每个 cpp 独立的全局变量 x
```

##### Bit-field

“位域“ 或 “[位段](https://www.zhihu.com/search?q=位段&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A354232756})“(Bit field)为一种数据结构，可以把数据以位的形式紧凑的储存，并允许程序员对此结构的位进行操作。这种[数据结构](https://www.zhihu.com/search?q=数据结构&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A354232756})的一个好处是它可以使[数据单元](https://www.zhihu.com/search?q=数据单元&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A354232756})节省储存空间，当程序需要成千上万个数据单元时，这种方法就显得尤为重要。第二个好处是位段可以很方便的访问一个整数值的部分内容从而可以简化程序源代码。而这种数据结构的缺点在于，位段实现依赖于具体的机器和系统，在不同的平台可能有不同的结果，这导致了位段在本质上是不可移植的。

位域的声明:

位域使用以下的结构声明 , 该结构声明为每个位域成员设置名称，并决定其宽度

```cpp
struct bit_field_name
{
 type member_name : width;
};
```

|                |                    |
| -------------- | ------------------ |
| bit_field_name | 位域结构名         |
|                |                    |
| member_name    | 位域成员名         |
| width          | 规定成员所占的位数 |

例如声明如下一个位域:

```cpp
struct _PRCODE
{
 unsigned int code1: 2;
 unsigned int cdde2: 2;
 unsigned int code3: 8;
};
struct _PRCODE prcode;
```

该定义使 `prcode`包含 2 个 2 Bits 位域和 1 个 8 Bits 位域，我们可以使用结构体的成员运算符对其进行赋值

```cpp
prcode.code1 = 0;
prcode.code2 = 3;
procde.code3 = 102;
```

tips:

赋值时要注意值的大小不能超过位域成员的容量，例如 prcode.code3 为 8 Bits 的位域成员，其容量为 2^8 = 256，即赋值范围应为 [0,255]。

**位域的大小和对齐**

**位域的大小**

例如以下位域：

```cpp
struct box 
{
 unsigned int a: 1;
 unsigned int  : 3;
 unsigned int b: 4;
};
```

该位域结构体中间有一个未命名的位域，占据 3  Bits，仅起填充作用，并无实际意义。 填充使得该结构总共使用了 8 Bits。但 C 语言使用 unsigned int  作为位域的基本单位，即使一个结构的唯一成员为 1 Bit 的位域，该结构大小也和一个 unsigned int 大小相同。  有些系统中，unsigned int 为 16 Bits，在 x86 系统中为 32 Bits。文章以下均默认 unsigned int 为  32 Bits。

**位域的对齐**

一个位域成员不允许跨越两个 unsigned int 的边界，如果成员声明的总位数超过了一个 unsigned int 的大小， 那么编辑器会自动移位位域成员，使其按照 [unsigned int](https://www.zhihu.com/search?q=unsigned+int&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A354232756})

 的[边界对齐](https://www.zhihu.com/search?q=边界对齐&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A354232756})

。

例如：

```cpp
struct stuff 
{
 unsigned int field1: 30;
 unsigned int field2: 4;
 unsigned int field3: 3;
};
```

field1 + field2 = 34 Bits，超出  32 Bits, 编译器会将field2移位至下一个 unsigned int 单元存放， stuff.field1 和  stuff.field2 之间会留下一个 2 Bits 的空隙， stuff.field3 紧跟在 stuff.field2  之后，该结构现在大小为 2 * 32 = 64 Bits。

这个空洞可以用之前提到的未命名的位域成员填充，我们也可以使用一个宽度为 0 的未命名位域成员令下一位域成员与下一个整数对齐。

例如:

```cpp
struct stuff 
{
 unsigned int field1: 30;
 unsigned int       : 2;
 unsigned int field2: 4;
 unsigned int       : 0;
 unsigned int field3: 3; 
};
```

这里 stuff.field1 与 stuff.field2 之间有一个 2 Bits 的空隙，stuff.field3 则存储在下一个 unsigned int 中，该结构现在大小为 3 * 32 = 96 Bits。

**位域的初始化和位的重映射**

**初始化**

位域的初始化与普通结构体初始化的方法相同，这里列举两种，如下:

```cpp
struct stuff s1= {20,8,6};
```

或者直接为位域成员赋值

```cpp
struct stuff s1;
s1.field1 = 20;
s1.field2 = 8;
s1.field3 = 4;
```

**位域的重映射 (Re-mapping)**

声明一个 大小为 32 Bits 的位域

```cpp
struct box {
 unsigned int ready:     2;
 unsigned int error:     2;
 unsigned int command:   4;
 unsigned int sector_no: 24;
}b1;
```

利用重映射将位域归零

```cpp
int* p = (int *) &b1;  // 将 "位域结构体的地址" 映射至 "整形（int*) 的地址" 
*p = 0;                // 清除 s1，将各成员归零
```

利用联合 (union) 将 32 Bits 位域 重映射至 unsigned int 型

先简单介绍一下联合

>   “联合” 是一种特殊的类，也是一种构造类型的数据结构。在一个 “联合” 内可以定义多种不同的数据类型， 一个被说明为该 “联合” 类型的变量中，允许装入该 “联合” 所定义的任何一种数据，这些数据共享同一段内存，以达到节省空间的目的

“联合” 与 “结构” 有一些相似之处。但两者有本质上的不同。在结构中各成员有各自的[内存空间](https://www.zhihu.com/search?q=内存空间&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A354232756})

， 一个结构变量的总长度是各成员长度之和（空结构除外，同时不考虑边界调整）。而在 “联合” 中，各成员共享一段内存空间，  一个联合变量的长度等于各成员中最长的长度。应该说明的是， 这里所谓的共享不是指把多个成员同时装入一个联合变量内，  而是指该联合变量可被赋予任一成员值，但每次只能赋一种值， 赋入新值则冲去旧值。

我们可以声明以下联合:

```cpp
union u_box {
  struct box st_box;     
  unsigned int ui_box;
};
```

x86 系统中 unsigned int 和 box 都为 32 Bits, 通过该联合使 st_box 和 ui_box 共享一块内存。具体位域中哪一位与 unsigned int 哪一位相对应，取决于编译器和硬件。 利用联合将位域归零，代码如下：

```cpp
union u_box u;
u.ui_box = 0;
```