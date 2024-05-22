import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // padding: 10,
    width: 50,
    textAlign: 'center',
  },
  timerText: {
    marginBottom: 50,
    color: 'black',
  },
});
