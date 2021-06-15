import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // console.log(data)
     Alert.alert(data.firstName+ data.lastName)
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.scrollView}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ height:100,backgroundColor: 'white', marginTop: 10 }}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="firstName"
            />
          )}
          name="firstName"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.firstName && <Text>This firstName is required.</Text>}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ height:100,backgroundColor: 'white', marginTop: 10 }}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="lastName"
            />
          )}
          name="lastName"
          defaultValue=""
          rules={{ required: true }}
        />
        {errors.lastName && <Text>This lastName is required.</Text>}

        <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      style={{height:100, backgroundColor: 'white', marginTop: 10 }}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="a1"
                  />
              )}
              rules={{ required: true }}
              name="a1"
              defaultValue=""
          />
          {errors.a1 && <Text>This a1 is required.</Text>}

          <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      style={{ height:100,backgroundColor: 'white', marginTop: 10 }}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="a2"
                  />
              )}
              rules={{ required: true }}
              name="a2"
              defaultValue=""
          />
          {errors.a2 && <Text>This a2 is required.</Text>}

          <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      style={{height:100, backgroundColor: 'white', marginTop: 10 }}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="a3"
                  />
              )}
              rules={{ required: true }}
              name="a3"
              defaultValue=""
          />
          {errors.a3 && <Text>This a3 is required.</Text>}

          <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      style={{height:100, backgroundColor: 'white', marginTop: 10 }}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="a4"
                  />
              )}
              rules={{ required: true }}
              name="a4"
              defaultValue=""
          />
          {errors.a4 && <Text>This a4 is required.</Text>}

          <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      style={{height:100, backgroundColor: 'white', marginTop: 10 }}
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                      placeholder="a5"
                  />
              )}
              rules={{ required: true }}
              name="a5"
              defaultValue=""
          />
          {errors.a5 && <Text>This a5 is required.</Text>}

          <View style={{width:'100%', height:200, backgroundColor:'red', marginTop: 10}}>
              <Text>NOTE</Text>
          </View>

        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={handleSubmit(onSubmit)}>
          <Text>Submit</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
      flex: 1, backgroundColor: 'grey'
  },
  scrollView: {
     flex: 1
  },
  buttonSubmit: {
      justifyContent: 'center', alignItems: 'center',
      backgroundColor: 'green', marginTop: 10, height: 45
  }
});

export default App;
