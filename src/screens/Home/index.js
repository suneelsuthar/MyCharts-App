import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../theme";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    this.props.navigation.addListener("focus", () => {
      // this.getReciptionData();
    });
  };

  render() {
    let { data } = this.state;
    return (
      <View style={styles._container}>
        <View style={styles._layer}>
          <Text style={styles._greeting}>Hello!</Text>
        </View>
        <View style={styles._btn_section}>
          <TouchableOpacity
            style={styles._button}
            onPress={() => this.props.navigation.navigate("Options")}
          >
            <Text style={styles._btn_text}>Start</Text>
            <MaterialCommunityIcons
              name="ray-start-arrow"
              size={24}
              color={theme.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles._button}
            onPress={() => this.props.navigation.navigate("SavedChart")}
          >
            <Text style={styles._btn_text}>Saved charts</Text>
            <MaterialCommunityIcons
              name="content-save-move-outline"
              size={24}
              color={theme.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 20,
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
});
