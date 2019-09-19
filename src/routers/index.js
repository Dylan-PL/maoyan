//一级路由
import BootomNav from "../views/BootomNav"
import Login from "../views/login/Longin"
import City from "../views/common/City"
import Details from '../views/movie/children/duan/MovieDetails'
import Head from '../views/cinema/details/Head'
import MovieSeek from "../views/common/MovieSeek"
import Search from '../views/cinema/index/Search'


//底部导航栏的子路由（二级路由）
import My from "../views/my/My"
import Movie from "../views/movie/Movie"
import Cinema from "../views/cinema/index/Cinema"


//底部导航栏电影模块的子路由（三级路由）
import Hot from "../views/movie/children/Hot"
import About from "../views/movie/children/About"

export default [
    //一级路由，页面跳转
    {
        path:"/movieseek",
        component:MovieSeek,
        title:"电影模块上的搜索",
        exact:false
    },
    {
        path:"/details",
        component:Details,
        title:"正在热映电影详情",
        exact:false
    },
    {
        path:"/zdetails",
        component:Head,
        title:"影院详情页",
        exact:false
    },
    {
        path:"/cinemasearch",
        component:Search,
        title:"影院搜索",
        exact:false
    },
    {
        path:"/city",
        component:City,
        title:"城市信息",
        exact:false
    },
    {
        path:"/login",
        component:Login,
        title:"登录注册",
        exact:false
    },
    {
        path:"/nav",
        component:BootomNav,
        title:"底部导航栏",
        exact:false,
        children:[
            {
                path:"/nav/my",
                component:My,
                title:"我的",
                exact:false
            },
            {
                path:"/nav/cinema",
                component:Cinema,
                title:"影院",
                exact:false
            },
            {
                path:"/nav/movie",
                component:Movie,
                title:"电影",
                exact:false,
                children:[
                    {
                        path:"/nav/movie/hot",
                        component:Hot,
                        title:"正在热映",
                    },
                    {
                        path:"/nav/movie/about",
                        component:About,
                        title:"即将上映",
                    }
                ]
            },

        ]

    }


]
