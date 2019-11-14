import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import LogoImagae from './resource/logo.png'

document.body.style.backgroundColor = "#FFd711";
export default class BackGround extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
      }

      styles = () => {
        return {
          container: {
            fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
            fontSize: 11,
            width: "98%",
            height: "auto",
            margin: "0 auto",
            display: "flex"
          },
          left:{
            background: "#fff",
            marginTop: "1%",
            marginLeft: "1%",
            width: "18%",
            height: "auto",
            minWidth: "180px",
            borderRadius: "10px",
          },
          table_box: {
            background: "#3b5998",
            marginTop: "1%",
            marginLeft: "1%",
            width: "98%",
            height: 150,
            borderRadius: "10px",
          },
          logo_box: {
            marginTop: "500px",
            marginLeft: "10%",
            marginBottom: "10%",
            width: "100%",
            height: 50,
          },
          right: {
            // background: "#3b5118",
            // display: "block",
            marginLeft: "10px",
            marginTop: "10px",
            width: "100%",
            height: "auto",
            padding: "2px 10px",
            borderRadius: "10px",
            // cursor: "pointer",
            // float: "left",
            // lineHeight: "20px"
          },
          room_number_box:{

          },
          title_box: {
            background: "#fff",
            marginTop: "0.5%",
            marginLeft: "0.5%",
            width: "99%",
            height: "100px",
            borderRadius: "10px",
          },
          answer_box: {
            background: "#fff",
            marginTop: "0.5%",
            marginLeft: "0.5%",
            width: "99%",
            height: "600px",
            borderRadius: "10px",
          }

        };
      }
    render() {
        const styles = this.styles();
    return (
            <Box style={styles.container}>
              <Box style={styles.left}>
                <Box style={styles.table_box}></Box>
                <Box style={styles.logo_box}>
                  <img src={LogoImagae}></img>
                </Box>
              </Box>

              <Box style={styles.right}>
              <Box style={styles.title_box}></Box>
              <Box style={styles.answer_box}></Box>
              </Box>
            </Box>
        );
    }
}
