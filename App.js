
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Header from './components/header';
import Section from './components/section';
import WrapInput from './components/input_text';
import React, { useState } from 'react';



export default function App() {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [errorText, setErrorText] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateInput = () => {
    setIsSubmitted(true);
    let errorText = "";
    let errorPass = "";
    if (text.trim() === "") {
      errorText = "Vui lòng nhập nội dung!";
    }
    if (pass.trim() === "") {
      errorPass = "Vui lòng nhập mật khẩu!";
    }
    setErrorText(errorText);
    setErrorPass(errorPass);
  };

  return (
    <View style={styles.container}>
      <Header title="Home" hideIcon={true} hideTitle={true} hideMenuIcon={true} />
      <Header title="Home" hideIcon={true} hideTitle={true} />
      <Header title="Home" hideIcon={true} />
      <ScrollView style={styles.content}>
        <View style={{ padding: 20 }}>
          <WrapInput
            label="Title"
            placeholder="Place holder"
            value={text}
            onChangeText={(value) => {
              setText(value);
              if (isSubmitted) {
                setErrorText("");
              }
            }}
            error={errorText}
            description=""
            required
            isSubmitted={isSubmitted}
          />

          <WrapInput
            label="Password"
            placeholder="Enter your password"
            value={pass}
            onChangeText={(value) => {
              setPass(value);
              if (isSubmitted) {
                setErrorPass("");
              }
            }}
            error={errorPass}
            description=""
            required
            isSubmitted={isSubmitted}
            eyePass={true}
          />
          <Button title="Submit" onPress={validateInput} />

        </View>

        <Section
          style={{
            flex: 1,
          }}
          titleBtn="Chi tiết"
          title="Tết Dương Lịch"
          nameEvent="Bắn Pháo Hoa"
          date="22/2/2025"
          local="Đà Nẵng"
          time="19:00 - 23:30"
          describe="DIFF 2025 sẽ quy tụ 10 đội thi đến từ Việt Nam, Phần Lan, Anh, 
          Bồ Đào Nha, Ba Lan, Hàn Quốc, Ý, Canada và Trung Quốc, tranh tài qua 6 đêm pháo hoa bùng nổ sắc màu và âm nhạc. 
          Đặc biệt, công nghệ AR tích hợp trong ứng dụng Sun Paradise Land cho phép khán giả thưởng thức pháo hoa từ bất kỳ đâu."
        />
        <Section
          style={{
            flex: 1,
          }}
          titleBtn="Chi tiết"
          title="Giới thiệu về cầu Rồng"
          date="22/2/2025"
          local="Cầu Rồng - Đà Nẵng"
          person="Hồ Ngọc Nam"
          time="8:00"
          describe="Cầu Rồng là cây cầu thứ 6 và là cây cầu mới nhất bắc qua sông Hàn.[1] 
          Vì cây cầu có hình dáng giống một con rồng nên được gọi là Cầu Rồng. Cầu Rồng dài 666 m và rộng 
          37,5 m với 6 làn xe chạy. Cầu được khởi công xây dựng vào ngày 
          19/7/2009 và chính thức thông xe ngày 29 tháng 3 năm 2013, kinh phí xây cầu gần 1,5 nghìn tỷ đồng (US$88m)."
          vImage={require("./assets/cau_rong.jpg")}
        />
        <Section
          style={{
            flex: 1,
          }}
          vImage={require("./assets/vn_tl.png")}
          title="Chung kết SeaGame"
          nameEvent="Việt Nam & Thái Lan"
          date="30/6/2025"
          local="Sân Vận Động Mỹ Đình"
          time="17:30"
        />
        <Section
          style={{
            flex: 1,
          }}
          vImage={require("./assets/danang.jpg")}
          title="Du lịch Đà Nẵng"
          date="30/2/2025"
          local="Khách sạn Novotel"
          time="7:30"
          transport="Xe bus cao cấp"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});
