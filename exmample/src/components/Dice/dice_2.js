/**
 * Created by Vazgen on 14.08.2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,PanResponder,
    View,Image,Animated,Easing
} from 'react-native';
import dice_data1 from '../dice_data1'

let y=true;
let d0=require('./d0.png');
let d1=require('./d1.png');
let d2=require('./d2.png');
let d3=require('./d3.png');
let d4=require('./d4.png');
let d5=require('./d5.png');
let d6=require('./d6.png');
let x=0;
export default class Dice_1 extends Component {
    state={
       source_2:d0, source_1:d0,

    };
    panResponder={};
    constructor(props){
        super(props);
        //this.state.source_1=d1;
        //this.state.source_2=d2;
        this.state._animatedValue = new Animated.Value(0);
        this.state.spinValue=new Animated.Value(0);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
            onPanResponderGrant: this.handlePanResponderGrant,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderRelease: this.handlePanResponderEnd,
            onPanResponderTerminate: this.handlePanResponderEnd,
        });


    }

    render() {


        const squareAnimation = {

            transform: [
                {
                    rotate:
                        this.state._animatedValue.interpolate({
                        inputRange: [x, x+1],
                        outputRange: ['0deg', '720deg'],
                    }),
                }
            ],

        };
       console.log(this.state.iden);
       if(this.props.ok){
        return (
            <View>
              <Animated.Image source={this.props.id==='d0'?d0:this.state.source_1}  style={[{...this.props.style},squareAnimation,{top:270,left:200}]} {...this.panResponder.panHandlers}/>
                <Animated.Image source={this.props.id==='d0'?d0:this.state.source_2} style={[{...this.props.style},squareAnimation,{top:270,left:250}]}{...this.panResponder.panHandlers}/>
            </View>
         );}
         else {
             return null;

       }

    }

    handleStartShouldSetPanResponder = () => {
        if(!dice_data1[0])return true;


    };


    handlePanResponderGrant = () => {
         //console.log(15);
        this.setState({dragging: true})

    };


    handlePanResponderMove = (e, gestureState) => {
       // console.log(25);
        /*this.setState({
         offsetTop: gestureState.dy,
         offsetLeft: gestureState.dx,
         })*/
    };

    handlePanResponderEnd = (e, gestureState) => {
       // console.log(35);


        let a = 1 - 0.5 + Math.random() * (6 - 1 + 1)
        a = Math.round(a);
        let b = 1 - 0.5 + Math.random() * (6 - 1 + 1)
        b = Math.round(b);


        Animated.timing(this.state._animatedValue, {
            toValue: x+1,
            duration: 200,
            easing: Easing.linear,

        }).start();


        this.props._updateMe(a,b);

        switch(a)
        {
            case 1: this.setState({source_1:d1,});break;
            case 2: this.setState({source_1:d2,});break;
            case 3: this.setState({source_1:d3,});break;
            case 4: this.setState({source_1:d4,});break;
            case 5: this.setState({source_1:d5,});break;
            case 6: this.setState({source_1:d6,});break;


        }
        switch(b)
        {
            case 1: this.setState({source_2:require('./d1.png'),});break;
            case 2: this.setState({source_2:require('./d2.png'),});break;
            case 3: this.setState({source_2:require('./d3.png'),});break;
            case 4: this.setState({source_2:require('./d4.png'),});break;
            case 5: this.setState({source_2:require('./d5.png'),});break;
            case 6: this.setState({source_2:require('./d6.png'),});break;


        }



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
         x++;
    };
}




