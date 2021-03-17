import React, { Component } from 'react';
import Result from './components/Result';
import ButtonCounter from './components/ButtonCounter';
import './counter.css';

class Counter extends Component {
      constructor(props){
          super(props); // dê co thể sử dụng tất cả cá props của class cha truyền xuống
            // tạo ra 1 state cho component nào đó
            this.state = {
                count :0
            }
            this.viewIncrement = this.viewIncrement.bind(this);
      }
  
      //xu ly su kien trong reactjs
      //dinh nghia ham xu ly su kien
          changeIncrementCounter = () =>{
              //cập nhật lại state ở đây
              // this.setState({count:this.state.count + 1});
              this.setState((state) =>{
                  return {...state,count: state.count + 1}
              });
          }
          changeDecrementCounter = () =>{
              this.setState((state) =>{
                  return {count: state.count - 1}
              });
          }
  viewIncrement(){
    this.changeIncrementCounter();
    this.changeIncrementCounter();
    this.changeIncrementCounter();
  }
      render() {
          return (
              <>
                  <div className="container">
                      <Result result= {this.state.count} />
                      <ButtonCounter
                          click={this.viewIncrement}
                      >+</ButtonCounter>
                      <ButtonCounter   click={this.changeIncrementCounter}>-</ButtonCounter>
                  </div>
              </>
          );
      }
  }
  
  export default Counter;