import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Container } from 
'semantic-ui-react'
import { fetchLocationByIp }
 from '../actions'

class Location extends Component {
  constructor (props) {
    super(props)
    this.getLocation =  this.getLocation.bind(this)
  }
  componentDidMount() {
    console.log(this.props );
    const { dispatch } = this.props   
    dispatch(fetchLocationByIp())    //通过props 中的dispatch 发送action， 触发reducer 更改状态
  }
  getLocation() {
    const locationByIp = this.props.locationByIp
    let location = ''
    const { status } = locationByIp
    if (status === 'init') {
      location = '正在加载...'
    } else if (status === 'start') {
      location = '定位中...'
    }
    return '查找中';
  }
  render() {
    const location = this.getLocation()

    return (
      <Container
      text style={{ marginTop: '1em' }}>
        <Header 
          as="h3"
          textAlign="center"
          dividing
          style={{'fontSize': '19px',
          fontWeight: '300'}}>
          <Icon name="point" disabled />
          {location}
        </Header>
      </Container>
    )
  }
}
const mapStateToProps = state => ({            //我要这个模块 locationByIp模块
  locationByIp: state.locationByIp
})
export default connect(mapStateToProps)(Location)
