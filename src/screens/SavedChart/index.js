import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import theme from "../../../theme";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class SavedChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type: "",
      chartData: null,
    };
  }

  componentDidMount = async () => {
    var getSavedChartData = await AsyncStorage.getItem("SavedChart");
    if (getSavedChartData !== null) {
      getSavedChartData = JSON.parse(getSavedChartData);
      this.setState({ chartData: getSavedChartData });
    }
  };

  selectChart = (type, data) => {
    this.props.navigation.navigate("ChartDetails", { type, data });
  };

  render() {
    const barData = [
      {
        value: "58",
      },
      {
        frontColor: "#177AD5",
        value: "58",
      },
      {
        value: "58",
      },
      {
        frontColor: "#177AD5",
        value: "39",
      },
    ];
    const lineData = [
      { value: 0, dataPointText: "0" },
      { value: 10, dataPointText: "10" },
    ];

    const { type, chartData } = this.state;
    return (
      <View style={styles._container}>
        <ScrollView>
          {chartData?.PieChart && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                styles._chart_view,
                { justifyContent: "center", alignItems: "center" },
              ]}
              onPress={() => this.selectChart("PieChart", chartData.PieChart)}
            >
              <PieChart
                showText
                textColor="black"
                radius={100}
                textSize={20}
                showTextBackground
                textBackgroundRadius={15}
                data={chartData.PieChart.data}
                isAnimated
              />
            </TouchableOpacity>
          )}

          {chartData?.BarChart && (
            <TouchableOpacity
              style={styles._chart_view}
              onPress={() => this.selectChart("BarChart", chartData.BarChart)}
              activeOpacity={0.9}
            >
              <BarChart
                barWidth={10}
                noOfSections={10}
                barBorderRadius={4}
                frontColor="lightgray"
                data={chartData?.BarChart.data}
                yAxisThickness={0}
                xAxisThickness={0}
                width={180}
                // height={100}
                showLine={false}
                isAnimated
              />
            </TouchableOpacity>
          )}
          {chartData?.LineChart1 && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles._chart_view}
              onPress={() =>
                this.selectChart("LineChart1", chartData.LineChart1)
              }
            >
              <LineChart
                areaChart
                curved
                data={chartData.LineChart1.data}
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
            </TouchableOpacity>
          )}

          {chartData?.LineChart2 && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles._chart_view}
              onPress={() =>
                this.selectChart("LineChart2", chartData.lineData2)
              }
            >
              <LineChart
                data={chartData.lineData2.data.line1}
                data2={chartData.lineData2.data.line2}
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
            </TouchableOpacity>
          )}

          {chartData?.LineChart3 && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles._chart_view}
              onPress={() =>
                this.selectChart("LineChart3", chartData.LineChart3)
              }
            >
              <LineChart
                areaChart
                curved
                data={chartData.LineChart3.data}
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
            </TouchableOpacity>
          )}

          {chartData?.LineChart4 && (
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles._chart_view}
              onPress={() => this.selectChart("LineChart4", chartData.showLine)}
            >
              <LineChart
                initialSpacing={0}
                data={lineData.LineChart4.data}
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
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 10,
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
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 40,
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
    marginVertical: 10,
    justifyContent: "center",
    height: 260,
    backgroundColor: "white",
    elevation: 3,
    marginVertical: 10,
  },
  _checked_view: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 100,
  },
});
