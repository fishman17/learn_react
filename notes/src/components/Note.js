import React, { Component } from 'react'
import _ from 'lodash'

class Note extends Component {
    state = {
        entity: this.props.entity,
        body: this.props.entity.body,
        open: false,
        destoryEntity: this.props.destoryEntity,
    }
    render() {
            return (
                <div className="item">
                    <div className="content">
                        <div className="header">
                        {this.header()}
                        </div>                    
                    </div>
                </div>  
            );
        }
    header(){
        return _.truncate(
            this.state.body,{
                length: 30
            })|| '新建笔记';
    } 
}
export default Note;