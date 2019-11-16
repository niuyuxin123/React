import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./AppHome";
import AppInspiration from './AppInspiration';
import AppMarket from './AppMarket';
import AppMy from './AppMy';
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/首页.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/首页1.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/灵感.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/灵感1.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="灵感"
            key="灵感"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
          <AppInspiration />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/商城.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(images/商城1.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="商城"
            key="商城"
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
          <AppMarket/>
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "images/我的.svg"
            }}
            selectedIcon={{
              uri:
                "images/我的1.svg"
            }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
          <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}