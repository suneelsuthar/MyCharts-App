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

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type: "",
    };
  }

  selectChart = (e) => {
    this.setState({ type: e });
  };

  render() {
    const { type } = this.state;

    const charts = [
      {
        title: "Pie Chart",
        label: "PieChart",
      },
      {
        title: "BarChart",
        label: "BarChart",
      },
      {
        title: "Line Chart",
        label: "LineChart1",
      },
      {
        title: "Line+Prediction",
        label: "LineChart2",
      },
      {
        title: "Aninmated Line Chart",
        label: "LineChart3",
      },
      {
        title: "Scatter chart",
        label: "LineChart4",
      },
    ];
    return (
      <View style={styles._container}>
        <ScrollView>
          <View style={styles._row}>
            {charts.map((val, i) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    styles._chart_view,
                    { justifyContent: "center", alignItems: "center" },
                  ]}
                  onPress={() => this.selectChart(val.label)}
                >
                  <Text style={styles._title}>{val.title}</Text>
                  {type === val.label && (
                    <View style={styles._checked_view}>
                      <AntDesign
                        name="checkcircle"
                        size={24}
                        color={theme.primary}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        {type !== "" && (
          <TouchableOpacity
            style={styles._button}
            onPress={() =>
              this.props.navigation.navigate("AddChartData", { type })
            }
          >
            <Text style={styles._btn_text}>Next</Text>
            <EvilIcons name="arrow-right" size={24} color={theme.white} />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
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
    height: 160,
    backgroundColor: "white",
    elevation: 3,
    marginVertical: 10,
    width: 150,
    // backgroundColor:the
  },
  _checked_view: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 100,
  },
  _row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  _title: {
    fontFamily: theme.bold,
  },
});
