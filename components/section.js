import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useState } from "react";
import SectionItem from "./section_item";

function Section({ titleBtn, vImage, title, nameEvent, date, local, describe, time, transport, person }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.sectionBox}>
        <View style={styles.content}>
          <SectionItem title="Tên Sự Kiện" value={nameEvent} />
          <SectionItem title="Địa điểm" value={local} />
          <SectionItem title="Ngày diễn ra" value={date} />
          <SectionItem title="Người dẫn dắt" value={person} />
          <SectionItem title="Thời gian" value={time} />
          <SectionItem title="Phương tiện di chuyển" value={transport} />
          {titleBtn && (
            <Button
              title={showDescription ? "Thu gọn" : "Chi tiết"}
              onPress={() => setShowDescription(!showDescription)}
            />
          )}
          {showDescription && <SectionItem title="Mô tả" value={describe} />}
          {vImage && <View>
            <SectionItem title="Hình ảnh" />
            <Image style={styles.image} source={vImage} />
          </View>
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionBox: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginTop: 10,
    resizeMode: "cover",
  },
});

export default Section;
