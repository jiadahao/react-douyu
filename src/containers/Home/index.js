import React from 'react'
import './index.css'
import 'whatwg-fetch'


import RoomList from '../../components/RoomList/RoomList.jsx'
import Nav from '../../components/Nav'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            live: {},
            dir: []
        };
        this.getAllLive=this.getAllLive.bind(this);
        this.getData=this.getData.bind(this);
        this.getAllDir=this.getAllDir.bind(this);
        this.sortDir=this.sortDir.bind(this);
    }
    getAllLive(){
        fetch('/api/RoomApi/live')
        .then(resp=>resp.json())
        .then(data=>this.setState({live:data.data}))
    }
    getAllDir(){
        fetch('/api/RoomApi/game')
        .then(resp=>resp.json())
        .then(data=>this.sortDir(data.data))
    }
    sortDir(data){
        const dir=data;
        dir.sort(function(x,y){
        return x.cate_id-y.cate_id
        });
        this.setState({dir:dir})
    }
    componentWillMount(){
        this.getAllLive();
        this.getAllDir();
    }
    componentDidMount(){
    }
    getData(){
        console.log( this.state.dir)
    }
    render(){
        const dir_list=this.state.dir.slice(0,9); 
        const live=this.state.live
        return [                
            <div className="home-header" key="hom1">
                <Nav items={dir_list}/>
            </div>,
            <div className="home-contianer" key="hom2">
                <RoomList list={live} />
            </div>,
            // <div>
            //     <embed width="640" height="360"  allownetworking="all" allowscriptaccess="always" 
            //     src="https://staticlive.douyucdn.cn/common/share/play.swf?room_id=97376" 
            //     quality="high" bgcolor="#000" wmode="window" allowfullscreen="true" 
            //      type="application/x-shockwave-flash" />
            // </div>,
        ]
    }

}
export default Home