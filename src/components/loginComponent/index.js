import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./Style";

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textLogin}>
            Wellcome to my Test of Taki Brasil.
          </Text>
          <Button
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Movies")}
            title="Start"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
