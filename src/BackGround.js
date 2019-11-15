import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import LogoImage from './resource/logo.png'
import { ResponsiveContainer, ComposedChart, Line, Bar, Area, Scatter, XAxis,
  YAxis, ReferenceLine, ReferenceDot, Tooltip, Legend, CartesianGrid, Brush,
  LineChart } from 'recharts';
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
            // background: "#fff",
            marginTop: "1%",
            marginLeft: "1%",
            paddingTop: "3px",
            width: "18%",
            height: "auto",
            minWidth: "180px",
            borderRadius: "10px",
          },
          right: {
            // background: "#3b5118",
            // display: "block",
            marginLeft: "1%",
            marginTop: "1%",
            width: "100%",
            height: "auto",
            // padding: "2px 10px",
            borderRadius: "10px",
            // cursor: "pointer",
            // float: "left",
            // lineHeight: "20px"
          },
          table_box: {
            background: "#fff",
            marginTop: "1%",
            marginLeft: "1%",
            width: "98%",
            height: 150,
            borderRadius: "10px",
          },
          logo_box: {
            marginTop: "400px",
            marginLeft: "10%",
            marginBottom: "10%",
            width: "100%",
            height: 50,
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
            height: "700px",
            borderRadius: "10px",
          },
          answer_element: {
            marginTop: "0.5%",
            marginLeft: "1%",
            width: "99%",
            height: "50px",
            fontSize: 30,
            fontWeight: "bold",
            color: "#FFa711",
            borderBottom: "medium dotted",
          }

        };
      }
    render() {
        const styles = this.styles();
        const dataGraph = [
          {month: '1月', '売上': 800, '総売上': 1400},
          {month: '2月', '売上': 967, '総売上': 1506},
          {month: '3月', '売上': 1098, '総売上': 989},
          {month: '4月', '売上': 1200, '総売上': 1228},
          {month: '5月', '売上': 1108, '総売上': 1100},
          {month: '6月', '売上': 680, '総売上': 1700}
      ];
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
                    <Box style={styles.answer_element}>
                      Q1 : hogehoge
                    </Box>
                    <ComposedChart //グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
                      width={600}  //グラフ全体の幅を指定
                      height={280}  //グラフ全体の高さを指定
                      data={dataGraph} //ここにArray型のデータを指定
                      margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
                    >
                      <XAxis
                        dataKey="month"  //Array型のデータの、X軸に表示したい値のキーを指定
                      />
                      <YAxis />
                      <Tooltip /> //hoverした時に各パラメーターの詳細を見れるように設定
                      <Legend />  // 凡例を表示(図の【売上】【総売上】)
                      <CartesianGrid //グラフのグリッドを指定
                        stroke="#f5f5f5" //グリッド線の色を指定
                      />
                      <Area //面積を表すグラフ
                        type="monotone"  //グラフが曲線を描くように指定。default値は折れ線グラフ
                        dataKey="総売上" //Array型のデータの、Y軸に表示したい値のキーを指定
                        stroke="#00aced" ////グラフの線の色を指定
                        fillOpacity={1}  ////グラフの中身の薄さを指定
                        fill="rgba(0, 172, 237, 0.2)"  //グラフの色を指定
                      />
                      <Bar //棒グラフ
                        dataKey="売上"　//Array型のデータの、Y軸に表示したい値のキーを指定
                        barSize={20}  //棒の太さを指定
                        stroke="rgba(34, 80, 162, 0.2)" ////レーダーの線の色を指定 
                        fillOpacity={1}  //レーダーの中身の色の薄さを指定
                        fill="#2250A2" ////レーダーの中身の色を指定
                      />
                    </ComposedChart>
                  </Box>
                </Box>
              </Box>
          );
      }
}
