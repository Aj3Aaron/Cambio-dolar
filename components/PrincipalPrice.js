import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import Copy from "./Copy";
import SelectDropdown from "react-native-select-dropdown";

const PrincipalPrice = (props) => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  const { imgUrl, tasa, tasaValue, cambioTime, cambioPercentage } = props;
  var value = tasaValue;

  const [numberBs, onChangeNumberBs] = useState(value);
  const [number$, onChangeNumber$] = useState("1");

  const round = () => {
    console.log("A");
    return;
    value.toFixed(2);
    onChangeNumber$(value);
  };

  return (
    <View style={styles.view}>
      <Image source={imgUrl} style={styles.img} />
      {/* <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      /> */}
      <Text style={styles.text}>
        Dolar {tasa} {tasaValue} Bs
      </Text>
      <Text style={styles.text2}>Cambio {cambioTime}</Text>
      <Text style={styles.text2}>{cambioPercentage}</Text>

      <View style={styles.viewColum}>
        <TextInput
          style={styles.inputBs}
          value={numberBs}
          keyboardType="numeric"
          onChangeText={(text) => {
            onChangeNumberBs(text);
            onChangeNumber$(
              text ? (Number(text) / value).toFixed(2).toString() : ""
            );
          }}
        />
        <View style={styles.viewDenomination}>
          <Text style={styles.textDenominationBs}>Bs</Text>
          <Copy value_to_copy={numberBs} />
        </View>
      </View>

      <View style={styles.viewColum}>
        <TextInput
          style={styles.input$}
          value={number$}
          keyboardType="numeric"
          onChangeText={(text) => {
            onChangeNumber$(text);
            onChangeNumberBs(
              text ? (Number(text) * value).toFixed(2).toString() : ""
            );
          }}
        />

        <View style={styles.viewDenomination}>
          <Text style={styles.textDenomination$}>$</Text>
          <Copy value_to_copy={number$} onPress={round} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 22,
  },

  text2: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
    fontStyle: "italic",
  },

  view: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: "center",
    // marginVertical: 0
  },

  img: {
    marginBottom: 5,
    width: 70,
    height: 70,
  },

  inputBs: {
    borderBottomWidth: 2,
    padding: 5,
    fontSize: 20,
    width: "86%",
    fontWeight: "bold",
    textAlign: "right",
    textAlignVertical: "bottom",
    paddingTop: 0,
    paddingBottom: 0,
  },

  input$: {
    borderBottomWidth: 2,
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    width: "86.5%",
    textAlign: "right",
    textAlignVertical: "bottom",
    paddingTop: 0,
    paddingBottom: 0,
  },

  viewColum: {
    // flex: 1
    flexDirection: "row",
  },

  textDenominationBs: {
    fontWeight: "bold",
    fontSize: 25,
    marginRight: 10,
  },

  textDenomination$: {
    fontWeight: "bold",
    fontSize: 25,
    marginRight: 10,
    marginLeft: 10,
  },

  viewDenomination: {
    marginTop: 10,
    marginRight: 5,
    flexDirection: "row",
  },
});

export default PrincipalPrice;
