'use strict';
import React,{Component} from 'react';
import { Text, TouchableOpacity, View,AppRegistry,Image,PanResponder } from 'react-native';



export default class Fishka_y extends Component {
    state = {
        initialTop: 50,
        initialLeft: 50,
    };
    panResponder = {};
    constructor(props) {
        super(props);


        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
            onPanResponderGrant: this.handlePanResponderGrant,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderRelease: this.handlePanResponderEnd,
            onPanResponderTerminate: this.handlePanResponderEnd,
        });


        this.state.initialTop=this.props.style.top;
        this.state.initialLeft=this.props.style.left;
    }
    render() {

        return (
            <Image source={require('./CS2-W.png')} style={{...this.props.style}} {...this.panResponder.panHandlers} />

        )
    }

    handleStartShouldSetPanResponder = () => {
        return true;
    };

    handlePanResponderGrant = () => {
        //console.log(15);
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
        //console.log(478);
        /*this.setState({
            inis: !this.state.inis
        });
        const {initialTop, initialLeft} = this.state;
        this.setState({
            dragging: false,
            initialTop: initialTop + gestureState.dy,
            initialLeft: initialLeft + gestureState.dx,
            offsetTop: 0,
            offsetLeft: 0,
        });
        this.kam[this.props.id-1]=true;
        console.log(this.kam);
        for(let i=0;i<=23;i++)
        {
            for(let j=0;j<=14;j++)
            {
                if(data[i][j].x===this.state.initialLeft && data[i][j].y===this.state.initialTop)
                {
                    data[i][j].fishka=0;
                }
            }
        }*/
        this.props._updateParent(this.state.initialTop,this.state.initialLeft,this.props.id);
    };
}

/**
 * Created by Vazgen on 13.08.2017.
 */
