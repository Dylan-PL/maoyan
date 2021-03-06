import React, {Component} from 'react'
// import '../../assets/style/movie/movieDetails.css'
import weeks from '../../views/common/tools' //导入周的方法
// import Swiper from '../../../node_modules/swiper/js/swiper'
// import '../../../node_modules/swiper/css/swiper.css'
// import Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.min.css'
export default class Week extends Component {
    render() {
        const weekArr = weeks.getWeek(13)
        const datetime = new Date().toLocaleDateString().replace(/\/+/g, "-") //转换2019-1-1方式
        const old_time = new Date(datetime.replace(/-/g, "/")); //
        return (
            <div>
                <div className="Movie-showDays">
                    <ul className="Movie-timeline">
                        {
                            weekArr.map((v, i) => (
                                <li key={i}
                                    data-day={(new Date(old_time.valueOf() + i * 24 * 60 * 60 * 1000)).toLocaleDateString().replace(/\/+/g, "-")}
                                    className="Movie-showDay-chosen">
                                    {v + this.weekDate(new Date((new Date(old_time.valueOf() + i * 24 * 60 * 60 * 1000))))}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }

    weeksTime(i) {
        const weekArr = weeks.getWeek(13)
        const datetime = new Date().toLocaleDateString().replace(/\/+/g, "-") //转换2019-1-1方式
        const old_time = new Date(datetime.replace(/-/g, "/")); //再换位2019/1/1格式  js不支持2019-1-1
        return (new Date(old_time.valueOf() + i * 24 * 60 * 60 * 1000)).toLocaleDateString().replace(/\/+/g, "-")
    }

    weekDate(date, i) { //这个方法实现遍历内容 列如：9月19号
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();
        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        return (mymonth + "月" + myweekday + "日");
    }

}
}
