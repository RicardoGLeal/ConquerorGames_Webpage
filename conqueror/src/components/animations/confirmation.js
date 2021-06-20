
import React, { Component } from 'react'
import animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';
import imageName from '../animations/checkmark.gif';
import { Link } from 'react-router-dom'
import "../../css/contact.css"


class confirmation extends Component {
    animatedValue = new animated.Value(0)

    animate = () => {
        
        this.animatedValue.setValue(0)
        animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.elastic(1)
            }
        ).start();
    }


    render() {
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-120, 0],
        })
        // var imageName = require('../animations/checkmark.gif');
        return (
            <div className="App">
                {/* <div style={styles.button} onClick={this.animate}>Animate</div> */}
                <img src={imageName} alt="loading..."/>

                    {this.animate()}

                <animated.div
                    style={
                        Object.assign(
                            {},
                            styles.box,
                            { opacity: this.animatedValue, marginLeft })}>
                    <p>Thanks for your submission!</p>
                </animated.div>
                <div className="createAccount">
                        <Link to={"/"}>
                            <button>Home</button>
                        </Link>
                </div>
            </div>
        )
    }
}
const styles = {
    // input: {
    //   width: 200,
    //   outline: 'none',
    //   fontSize: 20,
    //   padding: 10,
    //   border: 'none',
    //   backgroundColor: '#ddd',
    //   marginTop: 10,
    // },
    // button: {
    //   width: 180,
    //   height: 50,
    //   border: 'none',
    //   borderRadius: 4,
    //   fontSize: 20,
    //   cursor: 'pointer',
    //   transition: '.25s all',
    // },
    // buttonEnabled: {
    //   backgroundColor: '#ffc107',
    //   width: 220,
    // }
  }
export default confirmation

