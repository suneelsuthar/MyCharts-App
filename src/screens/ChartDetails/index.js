import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import theme from "../../../theme";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default class ChartDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: [],
      type: "",
      options: [
        {
          x: "",
          y: "",
        },
        {
          x: "",
          y: "",
        },
        {
          x: "",
          y: "",
        },
      ],
    };
  }

  selectChart = (e) => {
    this.setState({ type: e });
  };

  removeField = (index) => {
    let { options } = this.state;
    options.splice(index, 1);
    this.setState({ options });
  };
  addField = (index) => {
    let { options } = this.state;
    options.push({
      x: "",
      y: "",
    });
    this.setState({ options });
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const barData = [
      { value: 250, label: "M" },
      { value: 500, label: "T", frontColor: "#177AD5" },
      { value: 745, label: "W", frontColor: "#177AD5" },
      { value: 320, label: "T" },
      { value: 600, label: "F", frontColor: "#177AD5" },
      { value: 256, label: "S" },
      { value: 300, label: "S" },
    ];
    const lineData = [
      { value: 0, dataPointText: "0" },
      { value: 10, dataPointText: "10" },
      { value: 8, dataPointText: "8" },
      { value: 58, dataPointText: "58" },
      { value: 56, dataPointText: "56" },
      { value: 78, dataPointText: "78" },
      { value: 74, dataPointText: "74" },
      { value: 98, dataPointText: "98" },
    ];

    const lineData2 = [
      { value: 0, dataPointText: "0" },
      { value: 20, dataPointText: "20" },
      { value: 18, dataPointText: "18" },
      { value: 40, dataPointText: "40" },
      { value: 36, dataPointText: "36" },
      { value: 60, dataPointText: "60" },
      { value: 54, dataPointText: "54" },
      { value: 85, dataPointText: "85" },
    ];
    const pieData = [
      { value: 54, color: "#177AD5", text: "54%" },
      { value: 40, color: "#79D2DE", text: "30%" },
    ];
    const { type, options, modalVisible } = this.state;
    const chartType = this.props.route.params.type;
    console.log(this.props.route.params.data);

    return (
      <View style={styles._container}>
        <View style={styles._chart_view}>
          {chartType === "PieChart" && (
            <PieChart
              showText
              textColor="black"
              radius={100}
              textSize={20}
              showTextBackground
              textBackgroundRadius={15}
              data={this.props.route.params.data.data}
              isAnimated
            />
          )}
          {chartType === "BarChart" && (
            <BarChart
              barWidth={10}
              noOfSections={5}
              barBorderRadius={4}
              frontColor="lightgray"
              data={this.props.route.params.data.data}
              yAxisThickness={0}
              xAxisThickness={0}
              width={180}
              // height={100}
              showLine={false}
              isAnimated
            />
          )}
          {chartType === "LineChart1" && (
            <LineChart
              areaChart
              curved
              data={this.props.route.params.data.data}
              height={180}
              showVerticalLines
              spacing={44}
              initialSpacing={0}
              color1="skyblue"
              color2="orange"
              textColor1="green"
              hideDataPoints
              dataPointsColor1="blue"
              dataPointsColor2="red"
              startFillColor1="skyblue"
              startFillColor2="orange"
              startOpacity={0.8}
              endOpacity={0.3}
            />
          )}
          {chartType === "LineChart2" && (
            <LineChart
              data={this.props.route.params.data.data.line1}
              data2={this.props.route.params.data.data.line2}
              height={180}
              showVerticalLines
              spacing={44}
              initialSpacing={0}
              color1="skyblue"
              color2="orange"
              textColor1="green"
              dataPointsHeight={6}
              dataPointsWidth={6}
              dataPointsColor1="blue"
              dataPointsColor2="red"
              textShiftY={-2}
              textShiftX={-5}
              textFontSize={13}
            />
          )}

          {chartType === "LineChart3" && (
            <LineChart
              areaChart
              curved
              data={this.props.route.params.data.data}
              height={180}
              showVerticalLines
              spacing={44}
              initialSpacing={0}
              color1="skyblue"
              color2="orange"
              textColor1="green"
              hideDataPoints
              dataPointsColor1="blue"
              dataPointsColor2="red"
              startFillColor1="skyblue"
              startFillColor2="orange"
              startOpacity={0.8}
              endOpacity={0.3}
              isAnimated
            />
          )}

          {chartType === "LineChart4" && (
            <LineChart
              initialSpacing={0}
              data={this.props.route.params.data.data}
              spacing={30}
              hideDataPoints
              thickness={3}
              hideRules
              hideYAxisText
              yAxisColor="#0BA5A4"
              showVerticalLines
              verticalLinesColor="rgba(14,164,164,0.5)"
              xAxisColor="#0BA5A4"
              color1="skyblue"
              color2="orange"
              height={150}
            />
          )}
        </View>
        <View style={styles._data_view}>
          <Text
            style={[
              styles._details_text,
              { fontFamily: theme.bold, marginVertical: 10 },
            ]}
          >
            here will be chart title
          </Text>
          <Text style={styles._details_text}>
            n publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. n publishing and
            graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without
            relying on meaningful content.
          </Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    // padding: 10,
    // padding:5
  },
  _org: {
    fontFamily: theme.medium,
    fontSize: 18,
  },
  _text: {
    fontFamily: theme.medium,
    color: theme.grey,
  },
  _receipt: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: theme.greyLight,
  },
  _button: {
    backgroundColor: theme.primary,
    height: 60,
    borderRadius: 100,
    elevation: 10,
    alignItems: "center",
    marginVertical: 3,
    width: 150,
    justifyContent: "center",
  },
  _greeting: {
    alignSelf: "center",
    fontFamily: theme.medium,
    color: "black",
    marginTop: 50,
    fontSize: 40,
  },
  _layer: {
    flex: 2,
  },
  _btn_section: {
    flex: 1,
  },
  _btn_text: {
    fontFamily: theme.medium,
    color: "white",
  },
  _chart_view: {
    // marginVertical: 10,
    justifyContent: "center",
    height: 260,
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
  },

  _h1: {
    fontFamily: theme.medium,
    fontSize: 20,
    alignSelf: "flex-start",
  },
  _data_view: {
    padding: 10,
  },
  _tab: {
    flexDirection: "row",
    height: 45,
    borderRadius: 5,
    alignItems: "center",
  },
  _tab_item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primary,
    margin: 4,
    borderRadius: 5,
    height: 40,
  },
  _tab_text: {
    color: "white",
    fontFamily: theme.medium,
  },
  _row: {
    flexDirection: "row",
  },
  _col: {
    flex: 1,
    borderWidth: 1,
    height: 200,
    margin: 5,
  },
  _text_input: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  _header: {
    height: 70,
    backgroundColor: theme.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    elevation: 5,
  },
  _save_btn: {
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: theme.white,
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  _modal_fields: {
    // backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 1,
    borderColor: theme.greyLight,
    padding: 10,
    marginTop: 20,
  },
  _btn_row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  _details_text: {
    fontFamily: theme.regular,
  },
});
