import { Component } from 'react'
import { connect } from 'react-redux'
import { Counter } from './features/counter/Counter'

import { decrement, increment } from './features/counter/counterSlice'

class App extends Component {
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  async clickHandle() {
    await this.props.add()
    await this.props.add()
    console.log(
      '🚀 ~ file: index.jsx ~ line 37 ~ Index ~ clickHandle ~ add',
      this.props.counter
    )
  }

  render() {
    return (
      <div className='index'>
        <div>
          <span>{this.props.counter.value}</span>
        </div>
        <div onClick={this.clickHandle.bind(this)}>
          <span>Hello, World</span>
        </div>
        <Counter />
      </div>
    )
  }
}

export default connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(increment())
    },
    dec() {
      dispatch(decrement())
    },
    asyncAdd() {
      dispatch(increment())
    },
  })
)(App)
