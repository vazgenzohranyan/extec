'use strict';
import React,{Component} from 'react';
import { Text, TouchableOpacity, View,AppRegistry,Image,PanResponder,Animated } from 'react-native';
import Fishka_y from './yellow_f'
import data from './data'
import data_2 from './data_2'
import dice_data from './dice_data'
import fishkay from './fishka_y'


let ki=0;
let fishka_y=[];

export default class Fishka_b extends Component {

    state = {

        dragging: false,
        initialTop: 50,
        initialLeft: 50,
        offsetTop: 0,
        offsetLeft: 0,
        dragable:false,
        inis:false,


    };
    panResponder = {};


    constructor(props) {
        super(props);

        this.state.dragable=this.props.onDragable;
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
            onPanResponderGrant: this.handlePanResponderGrant,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderRelease: this.handlePanResponderEnd,
            onPanResponderTerminate: this.handlePanResponderEnd,
        });

        this.state = {
            pan: new Animated.ValueXY({x:this.props.style.left,y:this.props.style.top}), // inits to zero
        };
        this.state.initialTop=this.props.style.top;
        this.state.initialLeft=this.props.style.left;
        for(let i=0;i<=23;i++)
        {
            for(let j=0;j<=14;j++)
            {
                if(data[i][j].x===this.state.initialLeft && data[i][j].y===this.state.initialTop)
                {
                    this.state.me=j;
                    this.state.i=i;
                    this.state.j=j;
                    data[i][j].fishka=1;
                }
            }
        }
    }




    render() {

        //this.pushYellow(this.props.zar);



        if(this.props.tid===this.props.id && this.state.inis ){
            return (
                <View style={{position:'absolute'}}>
                <View style={{position:'absolute'}}>{fishka_y}</View>
                    <View style={{position:'absolute'}}><Animated.Image source={require('./CS1-B.png')} style={[this.state.pan.getLayout(),{width:23,height:23, position: 'absolute',}]}{...this.panResponder.panHandlers}/></View>
                </View>

        )
        }
          else  {

            return (

            <Animated.Image source={require('./CS1-B.png')} style={[this.state.pan.getLayout(),{width:23,height:23, position: 'absolute',}]}{...this.panResponder.panHandlers} />
        )}
    }
    handleStartShouldSetPanResponder = () => {
       // console.log(15);
        //console.log(data[12]);
        if(dice_data[0]){

        if( this.state.j===14){return true;}
        if(data[this.state.i][this.state.j+1].fishka===0) return true;
        return false;}
    };


    handlePanResponderGrant = () => {
       // console.log(15);
        this.setState({dragging: true})

    };


    handlePanResponderMove = (e, gestureState) => {
        //console.log(25);
        /*this.setState({
            offsetTop: gestureState.dy,
            offsetLeft: gestureState.dx,
        })*/
    };

    handlePanResponderEnd = (e, gestureState) => {
       // console.log(35);
        //console.log(this.props.zar);
        this.pushYellow(dice_data[1]);
       // console.log(dice_data);
        if(this.props.tid===this.props.id &&  this.state.inis===true) { this.setState({
            inis: false
        });}
        else {
            this.setState({
                inis: true
            });
        }

        /*for(let i=0;i<=14;i++)
        {
            if(i===this.state.me) continue;
            if(data_2[i]===false) ki++;
        }
        if(ki===14){this.setState({
            inis: !this.state.inis
        });



               data_2[this.state.me]=! data_2[this.state.me];


        }
        ki=0;*/
        /*const {initialTop, initialLeft} = this.state;
        this.setState({
            dragging: false,
            initialTop: initialTop + gestureState.dy,
            initialLeft: initialLeft + gestureState.dx,
            offsetTop: 0,
            offsetLeft: 0,
        });
        this.kam[this.props.id-1]=true;
        console.log(this.kam);*/
        /*for(let i=0;i<=23;i++)
        {
            for(let j=0;j<=14;j++)
            {
                if(data[i][j].x===this.state.initialLeft && data[i][j].y===this.state.initialTop)
                {
                   data[i][j].fishka=0;
                }
            }
        }**/

    };
    _yellow (my,mx,id){

        //fishka_y=[];

        data[this.state.i][this.state.j].fishka=0;

        console.log(data[this.state.i]);
        for(let i=0;i<=23;i++)
        {
            for(let j=0;j<=14;j++)
            {
                if(data[i][j].x===mx && data[i][j].y===my)
                {
                    this.setState({
                        i:i,
                        j:j,
                    });

                    data[i][j].fishka=1;

                }
            }
        }
        this.setState({
            inis: !this.state.inis
        });
        Animated.spring(
            this.state.pan,         // Auto-multiplexed
            {toValue: {x: mx, y: my}} // Back to zero
        ).start();
        for(let i=0;i<=14;i++)
            data_2[i]=false;

        if(dice_data[1].index.length===4){
        dice_data[1].all-=id;
        for(let i=dice_data[1].index.length-1;i>=0;i--)
        {
            if(dice_data[1].index[i]>dice_data[1].all) dice_data[1].index[i]=-1;
        }
        if(dice_data[1].all===0) dice_data[0]=!dice_data[0];}
        else
            {
                dice_data[1].all-=id;
               if( dice_data[1].index[0]===id) dice_data[1].index[0]=-1;
                if( dice_data[1].index[1]===id) dice_data[1].index[1]=-1;
                dice_data[1].index[2]=-1;
                if(dice_data[1].all===0) dice_data[0]=!dice_data[0];
            }

       // console.log(id);

        //console.log(dice_data[1].all);
        //console.log(fishka_y);
        this.props._updateBoo(200);
        if(dice_data[1].all==0) {this.props._okay();dice_data[1]={};}

    }
    pushYellow(obj){

        fishka_y=[];

           let arr=obj.index;
           let app=[];
        for (let l = 0; l < arr.length; l++)
        {
            if (arr[l] !== -1)
            {
                app.push({index:arr[l],ok:true})
            }
            else  app.push({index:arr[l],ok:false})
        }
        //console.log(app);
        if(arr.length===4) {

            for(let i=0;i<app.length;i++)
            {
                if(app[i].ok)
                {
                    let m;
                    if (app[i].index + this.state.i > 23) m = app[i].index + this.state.i - 24;
                    else m = app[i].index + this.state.i;
                    if(data[m][0].fishka!==2)
                    {
                        for(let j=0;j<=14;j++)
                        {
                            if (j === 0 && data[m][j].fishka === 0) {
                                fishka_y.push(<View key={app[i].index} style={{position: 'absolute'}}><Fishka_y id={app[i].index}
                                                                                                          style={{
                                                                                                              top: data[m][j].y,
                                                                                                              left: data[m][j].x,
                                                                                                              width: 23,
                                                                                                              height: 23,
                                                                                                              position: 'absolute',
                                                                                                          }}
                                                                                                          _updateParent={this._yellow.bind(this)}/></View>);
                                m = 0;
                            }
                            else {
                                if (data[m][j].fishka === 1 && data[m][j + 1].fishka === 0) {
                                    fishka_y.push(<View key={app[i].index}
                                                        style={{position: 'absolute'}}><Fishka_y id={app[i].index} style={{
                                        top: data[m][j + 1].y,
                                        left: data[m][j + 1].x,
                                        width: 23,
                                        height: 23,
                                        position: 'absolute',
                                    }} _updateParent={this._yellow.bind(this)}/></View>)
                                }
                            }

                        }
                    }
                    else
                    {
                        for(let k=i;k<app.length;k++)
                        {
                            app[k].ok=false;
                        }
                    }

            } }}
            else
            {
                for(let i=0;i<app.length;i++)
                {
                    if(app[i].ok)
                    {
                        let m;
                        if (app[i].index + this.state.i > 23) m = app[i].index + this.state.i - 24;
                        else m = app[i].index + this.state.i;
                        if(data[m][0]!==2)
                        {
                            for(let j=0;j<=14;j++)
                            {
                                if (j === 0 && data[m][j].fishka === 0) {
                                    fishka_y.push(<View key={app[i].index} style={{position: 'absolute'}}><Fishka_y id={app[i].index}
                                                                                                                    style={{
                                                                                                                        top: data[m][j].y,
                                                                                                                        left: data[m][j].x,
                                                                                                                        width: 23,
                                                                                                                        height: 23,
                                                                                                                        position: 'absolute',
                                                                                                                    }}
                                                                                                                    _updateParent={this._yellow.bind(this)}/></View>);
                                    m = 0;
                                }
                                else {
                                    if (data[m][j].fishka === 1 && data[m][j + 1].fishka === 0) {
                                        fishka_y.push(<View key={app[i].index}
                                                            style={{position: 'absolute'}}><Fishka_y id={app[i].index} style={{
                                            top: data[m][j + 1].y,
                                            left: data[m][j + 1].x,
                                            width: 23,
                                            height: 23,
                                            position: 'absolute',
                                        }} _updateParent={this._yellow.bind(this)}/></View>)
                                    }
                                }

                            }
                        }
                        else
                        {
                            app[2].ok=false;
                        }

                    } }

            }








           /* for (let l = 0; l < arr.length; l++) {
                if (arr[l] !== -1) {
                    let m;
                    if (arr[l] + this.state.i > 23) m = arr[l] + this.state.i - 24;
                    else m = arr[l] + this.state.i;
                    if (m <= 23) {
                        for (let j = 0; j < 14; j++) {

                            if (j === 0 && data[m][j].fishka === 0) {
                                fishka_y.push(<View key={arr[l]} style={{position: 'absolute'}}><Fishka_y id={arr[l]}
                                                                                                          style={{
                                                                                                              top: data[m][j].y,
                                                                                                              left: data[m][j].x,
                                                                                                              width: 23,
                                                                                                              height: 23,
                                                                                                              position: 'absolute',
                                                                                                          }}
                                                                                                          _updateParent={this._yellow.bind(this)}/></View>);
                                m = 0;
                            }
                            else {
                                if (data[m][j].fishka === 1 && data[m][j + 1].fishka === 0) {
                                    fishka_y.push(<View key={arr[l]}
                                                        style={{position: 'absolute'}}><Fishka_y id={arr[l]} style={{
                                        top: data[m][j + 1].y,
                                        left: data[m][j + 1].x,
                                        width: 23,
                                        height: 23,
                                        position: 'absolute',
                                    }} _updateParent={this._yellow.bind(this)}/></View>)
                                }
                            }
                        }
                    }
                }

            }*/
           this.props._updateBoo(this.props.tid);


        }

}



