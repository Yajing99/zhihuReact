这是一个仿照知乎网站编写了部分功能代码，包括登录、注册、首页、个人首页、写文章页等。
这个网站使用React框架的create-react-app编写，网站内组件无class组件，全部采用hooks中给的
各种钩子编写以及编写了一个useInterval，使用Redux管理公用数据，借用react-redux中的useSelector、useDispatch访问store并且修改，还使用了react-router-dom、axios、immutable、wangeditor等第三方库。

目前只有登录注册连接上服务器可以使用（密码是六到十二位的任意数字字母），首页的文章列表借用模拟
的json文件获得，首页右侧还设置了轮播图以及供玩乐的拖拽块。

下面演示较为完整的首页演示图：
![image](https://github.com/Yajing99/zhihuReact/blob/master/img/home.gif)
