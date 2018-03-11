import * as React from 'react';
import router from 'umi/router'
export default class extends React.Component {
  constructor(props){
    super(props);
    if(window.location.pathname.indexOf('/home') < 0){
        router.replace('/home')
        return;
    }
  }
  render () {
    return (
      <div>123</div>
    )
  }
}
