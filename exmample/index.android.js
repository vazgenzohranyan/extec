import React from 'react';
import { Text, TouchableOpacity, View,AppRegistry,Image,PanResponder,Animated } from 'react-native';

import Fishka_b from './src/components/fishka_b'
import Fishka_w from './src/components/fishka_w'

import data from './src/components/data';
import Dice_1 from './src/components/Dice/dice_1'
import dice_data from './src/components/dice_data'
import Dice_2 from './src/components/Dice/dice_2'
import dice_data1 from './src/components/dice_data1'



export default class exmample extends React.Component {
    state={
        zar:{zar_1:'',zar_2:''},
        boo:27,
        boo1:27,
        ok:false,
        dice:'d0',
        dice1:'d0'
    };

    constructor(){
        super();


    }
    render() {
        let {dragable}=this.state;
        let black_points = data[12].map((pos, index) =>  {

         return  <View style={{position:'absolute'}} key={index+'6648'} ><Fishka_b zar={this.state.zar} style={{top: pos.y, left: pos.x,width:23,height:23, position: 'absolute',}}  key={index}   _updateBoo={this._boo.bind(this)} tid={index} id={this.state.boo}   _okay={this._ok.bind(this)}/></View>
        });
        let white_points = data[0].map((pos, index) =>  {

            return  <View style={{position:'absolute'}} key={index+'6648'} ><Fishka_w zar={this.state.zar} style={{top: pos.y, left: pos.x,width:23,height:23, position: 'absolute',}}  key={index}   _updateBoo={this._boo1.bind(this)} tid={index} id={this.state.boo1}   _okay={this._ok1.bind(this)} /></View>
        });
        return (
            <Image

            style={{flex:1,height: null,  width: null}}
             source={require('./src/components/nardi.png')}
            resizeMode={Image.resizeMode.stretch}>
                <View style={{position:'absolute'}}>{black_points}</View>





                <View style={{position:'absolute'}}>{white_points}</View>
                <Dice_1 style={{position:'absolute',height:50,width:50}} _updateMe={this._qor.bind(this)} ok={this.state.ok} id={this.state.dice} />
                <Dice_2 style={{position:'absolute',height:50,width:50}} _updateMe={this._qor1.bind(this)} ok={!this.state.ok}  id={this.state.dice1}/>

            </Image>
        )
    }

    _qor(x,y){
        let qayl = {};
        if(x===y)
        {
            qayl.all=4*x;
            qayl.index=[x,2*x,3*x,4*x];
        }
        else
        {
            qayl.all=x+y;
            if(x<y)
            qayl.index=[x,y,x+y];
            else qayl.index=[y,x,x+y];
        }
        dice_data[0]=true;
        dice_data[1]=qayl;
        this.setState({
            dice:'d7',
        });
    }
    _qor1(x,y){
        let qayl = {};
        if(x===y)
        {
            qayl.all=4*x;
            qayl.index=[x,2*x,3*x,4*x];
        }
        else
        {
            qayl.all=x+y;
            if(x<y)
                qayl.index=[x,y,x+y];
            else qayl.index=[y,x,x+y];
        }
        dice_data1[0]=true;
        dice_data1[1]=qayl;
        this.setState({
            dice1:'d7',
        });
    }
    _boo(key){
        this.setState({
            boo: key,
        });
    }
    _boo1(key){
        this.setState({
            boo1: key,
        });
    }
    _ok(){
        this.setState({
           ok: !this.state.ok,
            dice:'d0',
        });

    }
    _ok1(){
        this.setState({
            ok: !this.state.ok,
            dice1:'d0',
        });

    }

}
AppRegistry.registerComponent('exmample', () => exmample);
