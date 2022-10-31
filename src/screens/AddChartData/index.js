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
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default class AddChartData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: [],
      type: "",
      title: "",
      desc: "",
      err: "",
      barData: [],
      pieData: [{ value: 100, color: "#177AD5", text: "1" }],
      lineData: [
        { value: 0, dataPointText: "0" },
        { value: 20, dataPointText: "20" },
        { value: 15, dataPointText: "20" },
        { value: 10, dataPointText: "10" },
      ],
      options: [
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
    let { options, barData, lineData } = this.state;
    if (options.length > 1) {
      options.splice(index, 1);
      this.setState({ options });
      const chartType = this.props.route.params.type;

      if (chartType === "BarChart") {
        barData.splice(index, 2);
        this.setState({ barData });
      } else if (
        chartType === "LineChart1" ||
        chartType === "LineChart2" ||
        chartType === "LineChart3" ||
        chartType === "LineChart4"
      ) {
        lineData.splice(index, 2);
        this.setState({ lineData });
      }
    }
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

  setCahrtData = (axis, value, index, type) => {
    let { barData, pieData, lineData, title, desc } = this.state;
    const chartType = this.props.route.params.type;

    if (chartType === "BarChart") {
      // barData[index].value = value;
      if (axis === "x") {
        if (index === 0) {
          barData.splice(0, 1, { value: value });
          this.setState({ barData });
        } else {
          barData.splice(index + 1, 1, { value: value });
          this.setState({ barData });
        }
      } else {
        if (index === 0) {
          barData.splice(1, 1, { value: value, frontColor: "#177AD5" });
          this.setState({ barData });
        } else {
          barData.splice(index + 2, 1, {
            value: value,
            frontColor: "#177AD5",
          });
          this.setState({ barData });
        }
        this.setState({ barData });
      }
      this.setState({ barData });
    } else if (chartType === "PieChart") {
      if (axis === "x") {
        pieData[0] = { value: value * 10, color: "#177AD5", text: value };

        // pieData
      } else {
        pieData[1] = { value: value * 10, color: "#79D2DE", text: value };
      }
      this.setState({ pieData });
    } else if (
      chartType === "LineChart1" ||
      chartType === "LineChart2" ||
      chartType === "LineChart3" ||
      chartType === "LineChart4"
    ) {
      // { value: 0, dataPointText: "0" },
      // { value: 0, dataPointText: "0" },
      if (axis === "x") {
        if (index === 0) {
          lineData.splice(0, 1, {
            value: value,
            dataPointText: value.toString(),
          });
          this.setState({ lineData });
        } else {
          lineData.splice(index + 1, 1, {
            value: value,
            dataPointText: value.toString(),
          });
          this.setState({ lineData });
        }
      } else {
        if (index === 0) {
          lineData.splice(1, 1, {
            value: value,
            dataPointText: value.toString(),
          });
          this.setState({ lineData });
        } else {
          lineData.splice(index + 2, 1, {
            value: value,
            dataPointText: value.toString(),
          });
        }
      }
      this.setState({ lineData });
    }
  };

  SaveChart = async () => {
    const chartType = this.props.route.params.type;

    var getSavedChart = await AsyncStorage.getItem("SavedChart");
    if (getSavedChart !== null) {
      getSavedChart = JSON.parse(getSavedChart);
    }
    console.log("saved chart", getSavedChart);
    if (this.state.title === "") {
      this.setState({ err: "Enter title" });
    } else if (this.state.desc === "") {
      this.setState({ err: "Enter description" });
    } else {
      if (chartType === "BarChart") {
        if (getSavedChart !== null) {
          getSavedChart.BarChart = {
            data: this.state.barData,
            title: this.state.title,
            desc: this.state.desc,
          };
          await AsyncStorage.setItem(
            "SavedChart",
            JSON.stringify(getSavedChart)
          );
        } else {
          const obj = {
            BarChart: {
              data: this.state.barData,
              title: this.state.title,
              desc: this.state.desc,
            },
          };
          await AsyncStorage.setItem("SavedChart", JSON.stringify(obj));
        }
      } else if (chartType === "PieChart") {
        if (getSavedChart !== null) {
          getSavedChart.PieChart = {
            data: this.state.pieData,
            title: this.state.title,
            desc: this.state.desc,
          };
          await AsyncStorage.setItem(
            "SavedChart",
            JSON.stringify(getSavedChart)
          );
        } else {
          const obj = {
            PieChart: {
              data: this.state.barData,
              title: this.state.title,
              desc: this.state.desc,
            },
          };
          await AsyncStorage.setItem("SavedChart", JSON.stringify(obj));
        }
      } else if (chartType === "LineChart1") {
        if (getSavedChart !== null) {
          getSavedChart.LineChart1 = {
            data: this.state.barData,
            title: this.state.title,
            desc: this.state.desc,
          };
          await AsyncStorage.setItem(
            "SavedChart",
            JSON.stringify(getSavedChart)
          );
        } else {
          const obj = {
            LineChart1: {
              data: this.state.barData,
              title: this.state.title,
              desc: this.state.desc,
            },
          };
          await AsyncStorage.setItem("SavedChart", JSON.stringify(obj));
        }
      } else if (chartType === "LineChart2") {
        var combineLineData = this.state.lineData;

        var lineOneData = [];
        var lineTwoData = [];

        for (var i = 0; i < combineLineData.length; i++) {
          if (i % 2 == 0) {
            lineTwoData.push(combineLineData[i]);
          } else {
            lineOneData.push(combineLineData[i]);
          }
        }

        if (getSavedChart !== null) {
          getSavedChart.LineChart2 = {
            data: {
              line1: lineOneData,
              line2: lineTwoData,
            },
            title: this.state.title,
            desc: this.state.desc,
          };
          await AsyncStorage.setItem(
            "SavedChart",
            JSON.stringify(getSavedChart)
          );
        } else {
          const obj = {
            LineChart2: {
              data: this.state.barData,
              title: this.state.title,
              desc: this.state.desc,
            },
          };
          await AsyncStorage.setItem("SavedChart", JSON.stringify(obj));
        }
      } else if (chartType === "LineChart3") {
        if (getSavedChart !== null) {
          getSavedChart.LineChart3 = {
            data: this.state.barData,
            title: this.state.title,
            desc: this.state.desc,
          };
          await AsyncStorage.setItem(
            "SavedChart",
            JSON.stringify(getSavedChart)
          );
        } else {
          const obj = {
            LineChart3: {
              data: this.state.barData,
              title: this.state.title,
              desc: this.state.desc,
            },
          };
          await AsyncStorage.setItem("SavedChart", JSON.stringify(obj));
        }
      } else if (chartType === "LineChart4") {
        if (getSavedChart !== null) {
          getSavedChart.LineChart4 = {
            data: this.state.barData,
            title: this.state.title,
            desc: this.state.desc,
          };
          await AsyncStorage.setItem(
            "SavedChart",
            JSON.stringify(getSavedChart)
          );
        } else {
          const obj = {
            LineChart4: {
              data: this.state.barData,
              title: this.state.title,
              desc: this.state.desc,
            },
          };
          await AsyncStorage.setItem("SavedChart", JSON.stringify(obj));
        }
      }
      this.props.navigation.navigate("Home");
    }
  };

  render() {
    const lineData2 = [{ value: 0, dataPointText: "0" }];

    var combineLineData = this.state.lineData;
    var lineOneData = [];
    var lineTwoData = [];

    for (var i = 0; i < combineLineData.length; i++) {
      if (i % 2 == 0) {
        lineTwoData.push(combineLineData[i]);
      } else {
        lineOneData.push(combineLineData[i]);
      }
    }

    const { options, modalVisible, barData, pieData, lineData, title, desc } =
      this.state;
    const chartType = this.props.route.params.type;

    return (
      <View style={styles._container}>
        <View style={styles._header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={24} color={theme.white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles._save_btn}
            onPress={() => this.setModalVisible(true)}
          >
            <Text style={styles._btn_text}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._chart_view}>
          {chartType === "PieChart" && (
            <PieChart
              showText
              textColor="black"
              radius={100}
              textSize={20}
              showTextBackground
              textBackgroundRadius={15}
              data={pieData}
              isAnimated
            />
          )}
          {chartType === "BarChart" && (
            <BarChart
              barWidth={10}
              noOfSections={10}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
              width={280}
              // height={100}
              showLine={true}
              isAnimated
            />
          )}
          {chartType === "LineChart1" && (
            <LineChart
              areaChart
              curved
              data2={lineTwoData}
              data={lineOneData}
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
              data={lineOneData}
              data2={lineTwoData}
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
              data={lineOneData}
              data2={lineTwoData}
              height={180}
              // showVerticalLines
              spacing={44}
              initialSpacing={0}
              color1="skyblue"
              color2="orange"
              textColor1="green"
              dataPointsColor1="blue"
              dataPointsColor2="red"
              startFillColor1="skyblue"
              startFillColor2="orange"
              startOpacity={0.8}
              showVerticalLines={false}
              endOpacity={0.3}
              isAnimated
              showFractionalValues={true}
            />
          )}

          {chartType === "LineChart4" && (
            <LineChart
              initialSpacing={0}
              data={lineOneData}
              data2={lineTwoData}
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
          <Text style={styles._h1}>Introduced Data</Text>
          <View style={styles._tab}>
            <View style={styles._tab_item}>
              <Text style={styles._tab_text}>X-value</Text>
            </View>
            <View style={styles._tab_item}>
              <Text style={styles._tab_text}>Y-value</Text>
            </View>
            {chartType !== "PieChart" && (
              <TouchableOpacity onPress={() => this.addField()}>
                <Ionicons
                  name="md-add-circle-outline"
                  size={34}
                  color={theme.primary}
                />
              </TouchableOpacity>
            )}
          </View>
          {/* detail view */}
          <ScrollView>
            <View style={{ flex: 1 }}>
              {options.map((val, i) => {
                return (
                  <View style={[styles._tab, { marginVertical: 5 }]} key={i}>
                    <View
                      style={[styles._tab_item, { backgroundColor: "white" }]}
                    >
                      <TextInput
                        placeholder="X-value"
                        keyboardType="number-pad"
                        style={styles._text_input}
                        onChangeText={(e) =>
                          this.setCahrtData("x", e, i, "BarChart")
                        }
                      />
                    </View>
                    <View
                      style={[styles._tab_item, { backgroundColor: "white" }]}
                    >
                      <TextInput
                        placeholder="Y-value"
                        keyboardType="number-pad"
                        style={styles._text_input}
                        onChangeText={(e) =>
                          this.setCahrtData("y", e, i, "BarChart")
                        }
                      />
                    </View>
                    {chartType !== "PieChart" && (
                      <TouchableOpacity onPress={() => this.removeField(i)}>
                        <MaterialCommunityIcons
                          name="delete-circle-outline"
                          size={24}
                          color={theme.red}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Title"
                    style={styles._modal_fields}
                    onChangeText={(e) => this.setState({ title: e, err: "" })}
                    value={title}
                  />
                  <TextInput
                    placeholder="Description"
                    style={[styles._modal_fields, { textAlignVertical: "top" }]}
                    multiline
                    numberOfLines={15}
                    onChangeText={(e) => this.setState({ desc: e, err: "" })}
                    value={desc}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: theme.medium,
                    color: "red",
                    paddingVertical: 10,
                  }}
                >
                  {this.state.err}
                </Text>
                <View style={styles._btn_row}>
                  <TouchableOpacity
                    onPress={() => this.setState({ modalVisible: false })}
                    style={[styles._button, { backgroundColor: theme.red }]}
                  >
                    <Text style={[styles._btn_text]}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles._button}
                    onPress={() => this.SaveChart()}
                  >
                    <Text style={[styles._btn_text]}>Ok</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
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
});
