import { View, Text } from "react-native";

function SectionItem({ title, value }) {
  if (!value) return null;
  return (
    <View
      style={{
        paddingBottom: 7,
      }}
    >
      <Text
        style={{
          fontSize: 10,
          color: "#736f6f",
          marginTop: 10
        }}
      >
        {title}
      </Text>
      <Text>{value}</Text>
    </View>
  );
}
export default SectionItem;