import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const WrapInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  description,
  required = false,
  isSubmitted,
  eyePass = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isValid = value.trim() !== "" && !error;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.label}>
        {label} {required && <Text style={styles.required}>*</Text>}
      </Text>

      <View
        style={[
          styles.inputContainer,
          isFocused
            ? styles.focusedBorder
            : error && isSubmitted
              ? styles.errorBorder
              : isSubmitted && isValid
                ? styles.successBorder
                : styles.defaultBorder,
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => {
            onChangeText(text);
            if (text.trim() !== "") {

              error = "";
            }
          }}
          placeholderTextColor="#A0A0A0"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={eyePass && !showPassword}
        />
        {eyePass && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginHorizontal: 10 }}>
            <Icon
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="#777"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
        {isSubmitted && error && <Icon name="exclamation-circle" size={20} color="red" />}
        {isSubmitted && isValid && <Icon name="check-circle" size={20} color="green" />}
      </View>
      {isSubmitted && error && <Text style={styles.errorText}>{error}</Text>}
      {description && (!isSubmitted || !error) && (
        <Text style={styles.description}>{description}</Text>
      )}
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  required: {
    color: "red",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 6,
    height: 45,
    marginTop: 4,
  },
  defaultBorder: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  focusedBorder: {
    borderWidth: 1,
    borderColor: "#007BFF",
  },
  successBorder: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "#E6F9E6",
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "#FFEAEA",
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
  description: {
    color: "#777",
    fontSize: 14,
    marginTop: 4,
  },
});

export default WrapInput;
