import React from "react";
import ReactDom from "react-dom";

export default class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hovered: false,
          count: 999,   // カウント数の状態を追加
          liked: false  // 押したかどうかの状態を追加
        }
      }

      styles = () => {
        return {
          container: {
            fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
            fontSize: 11
          },
          like: {
            display: "inline-block",
            background: "#3b5998",
            padding: "0px 5px",
            borderRadius: 2,
            color: "#ffffff",
            cursor: "pointer",
            float: "left",
            height: 20,
            lineHeight: "20px"
          },
          likeHover: {
            background: "#fafafa"
          },
          counterBefore: {
            display: "block",
            float: "left",
            width: 6,
            height: 6,
            background: "#fafafa",
            marginLeft: "-12px",
            borderRight: 10,
            transform: "rotate(45deg)",
            WebkitTransform: "rotate(45deg)",
            marginTop: 6,
            borderLeft: "1px solid #aaa",
            borderBottom: "1px solid #aaa"
          },
          counter: {
            display: "block",
            background: "#fafafa",
            boxSizing: "border-box",
            border: "1px solid #aaa",
            float: "left",
            padding: "0px 8px",
            borderRadius: 2,
            marginLeft: 8,
            height: 20,
            lineHeight: "20px"
          }
        };
      }
    
    onClick = () => {
        this.setState({
            count: this.state.count + (this.state.liked ? -1 : 1),
            liked: !this.state.liked
        });
    }
    onMouseEnter = () => {
        this.setState({hovered: true});
      }
    onMouseLeave= () => {
        this.setState({hovered: false});
      }
    render() {
        const styles = this.styles();
           const likeStyle = this.state.hovered ? {...styles.like, ...styles.likeHover} : styles.like;
    //    const likeStyle = {...styles.like, ...styles.likeHover};
    // const likeStyle = {...styles.like};
    return (
            <span style={styles.container}>
            <span
                style={likeStyle}
                onClick={this.onClick}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                > {this.state.liked ? "✔ " : ""}いいね！</span>
            <span style={styles.counter}>
            <span style={styles.counterBefore}>{""}</span>{this.state.count}
            </span>
          </span>
        );
    }
}
