import React, {Component} from 'react'
import { Button, Dialog, Input, Menu }
 from 'element-react'
export default class Header extends Component {
  render() {
    return (
      <header className="main-header visible">
        <div className="container">
          <a href="/" className="logo">
            <img src="//gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" className="logo-img"/>
          </a>
          <div className="nav-menu">
            <Menu mode="horizontal"
            defaultActive="1">
              <Menu.Item index="1">首页
              </Menu.Item>
              <Menu.Item index="2">专栏
              </Menu.Item>
              <Menu.Item index="3">收藏集
              </Menu.Item>
              <Menu.Item index="4">发现
              </Menu.Item>
              <Menu.Item index="5">标签
              </Menu.Item>
              <Menu.Item index="6">
                <Input
                  size="small"
                  icon="search"
                  placeholder="搜索掘金"
                  onIconClick={console.log('click')}
                  onChange={(value) => {}}
                />
              </Menu.Item>
              <Menu.Item index="7">
                <Button type="text" icon="edit"
                className="contribute">投稿</Button>
              </Menu.Item>
              <Menu.Item index="8">
                <Button type="text"
                className="login-btn">登录</Button>
                <Button type="text"
                >注册</Button>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </header>
    )
  }
}
