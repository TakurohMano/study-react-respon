import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import LogoImage from './resource/logo.png'

import EnhancedTable from './table';
import MyComposedChart from './myComposedChart';
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
            height: 650,
            margin: "0 auto",
            display: "flex"
          },
          left:{
            // background: "#0ff",
            marginTop: "1%",
            marginLeft: "1%",
            paddingTop: "3px",
            width: "180px",
            height: "auto",
            minWidth: "180px",
            borderRadius: "10px",
          },
          table_box: {
            background: "#fff",
            marginTop: "0%",
            marginLeft: "0%",
            width: "180px",
            height: 150,
            minWidth: "180px",
            borderRadius: "10px",
            position: "fixed",
            // position: '-webkit-sticky',
            // position: 'sticky',
            // top: '0',
          },
          logo_box: {
            marginTop: "400px",
            marginLeft: "1%",
            marginBottom: "10%",
            width: "100%",
            height: 50,
            position: "fixed",
          },
          right: {
            // background: "#3b5118",
            display: "block",
            marginLeft: "1%",
            marginTop: "1%",
            width: "100%",
            minWidth: "1080px",
            borderRadius: "10px",
          },
          title_box: {
            background: "#fff",
            marginTop: "0%",
            marginLeft: "0%",
            paddingTop: "3px",
            width: "99%",
            height: "120px",
            borderRadius: "10px",
          },
          room_number_box:{
            // background: "#f0f",
            background: "#FFa711",
            marginTop: "0%",
            marginLeft: "1%",
            width: "40%",
            height: "50px",
            borderRadius: "30px",
            fontSize: 40,
            color: "white",
            textAlign: "center",
          },
          room_icon:{
            // background: "#FFa711",
            marginTop: "0.5%",
            marginLeft: "1%",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundImage: {LogoImage},
            backgroundPosition: "center center",
            float: "left",

          },
          answer_box: {
            background: "#fff",
            marginTop: "0.5%",
            marginLeft: "0%",
            paddingTop: "1%",
            width: "99%",
            borderRadius: "10px",
          },
          answer_element: {
            marginTop: "2%",
            marginLeft: "1%",
            width: "99%",
            height: "50px",
            fontSize: 30,
            fontWeight: "bold",
            color: "#FFa711",
            borderBottom: "medium dotted",
            float: "left",
          },
          composed_chart: {

          },

        };
      }
    render() {
        const styles = this.styles();

      return (
              <Box style={styles.container}>
                <Box style={styles.left}>
                  <Box style={styles.table_box}></Box>
                  <Box style={styles.logo_box}>
                    <img src={LogoImage}></img>
                  </Box>
                </Box>

                <Box style={styles.right}>
                  <Box style={styles.title_box}>
                    <Box style={styles.room_number_box}>
                      123 456 789
                    </Box>
                    <Box style={styles.room_icon}>
                    <img src={LogoImage} style={styles.room_icon}></img>
                    </Box>
                    <Box style={{fontSize: 22,fontWeight: "bold", color:"#555555"}}>MICE セミナー</Box>
                    <Box style={{fontSize: 16, color:"#888888"}}>サンプル用アンケート</Box>
                  </Box>
                  <Box style={styles.answer_box}>
                    <Box style={styles.answer_element}>Q1 : 1111111111111111111111111111</Box>
                    <MyComposedChart></MyComposedChart>
                    <EnhancedTable></EnhancedTable>
                    <Box style={{clear:'both'}}></Box>
                  </Box>
                  <Box style={styles.answer_box}>
                    <Box style={styles.answer_element}>Q2 : 2222222222222222222222222222</Box>
                    <MyComposedChart></MyComposedChart>
                    <EnhancedTable></EnhancedTable>
                    <Box style={{clear:'both'}}></Box>
                  </Box>
                  <Box style={styles.answer_box}>
                    <Box style={styles.answer_element}>Q3 : 3333333333333333333333333333</Box>
                    <MyComposedChart></MyComposedChart>
                    <EnhancedTable></EnhancedTable>
                    <Box style={{clear:'both'}}></Box>
                  </Box>
                </Box>
              </Box>
          );
      }
}
