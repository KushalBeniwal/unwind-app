import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  Pressable,
  Button,
  FlatList,
  TextInput,
  ImageBackground,
} from "react-native";

var DATA = [
  {
    id: "1",
    title: "Brush your teeth",
  },
  {
    id: "2",
    title: "Plan your day",
  },
  {
    id: "3",
    title: "Meditate and start your day with positive energy",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function MorningRoutine() {
  const [text, setText] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => <Item title={item.title} />;

  const [inputVisible, setInputVisible] = useState(false);

  return (
    <View
      style={[
        styles.circularShape,
        { marginVertical: 10, marginHorizontal: 5 },
      ]}
    >
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <ImageBackground 
            style={styles.modalView} 
            imageStyle={{ borderRadius: 20, opacity: 0.35 }} 
            source={{uri: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(25).png"}}
          >
          <View style={styles.innerView}>
            <Pressable
              style={{ height: 50 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <View>
                <Text style={styles.heading}>Morning Routine</Text>
              </View>
            </Pressable>
            <View>
              <View style={{ height: inputVisible ? 250 : 300 }}>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              </View>
              <View
                style={{ height: inputVisible ? 50 : 0 }}
                onRequestClose={() => {
                  setInputVisible(!inputVisible);
                }}
              >
                <Pressable
                  style={{ flex: 1 }}
                  onPress={() => setInputVisible(!inputVisible)}
                >
                  <TextInput
                    style={{ height: 40, backgroundColor: 'white', borderRadius: 5 }}
                    placeholder="What else to do after waking up?"
                    onChangeText={(text) => setText(text)}
                    defaultValue={text}
                  />
                </Pressable>
              </View>
              <View style={{ height: 40, borderRadius: 10 }}>
                <Button
                  title={inputVisible ? "add" : "add new"}
                  color={"#7aa998"}
                  onPress={() => {
                    if (inputVisible && text != "") {
                      DATA.push({ id: text, title: text });
                      setText("");
                    }
                    setInputVisible(!inputVisible);
                  }}
                />
              </View>
            </View>
          </View>
          </ImageBackground>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image
          style={styles.circularShape}
          onPress={() => setModalVisible(true)}
          source={{
            uri: "https://github.com/KushalBeniwal/images/raw/main/gratitide%20(17).png",
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circularShape: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  modalView: {
    // marginTop: 30,
    width: 350,
    height: 450,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: 'white',
  },
  innerView: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 30,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginVertical: 2,
  },
  title: {
    marginHorizontal: 10,
    fontSize: 20,
    textAlign: "justify",
  },
});
