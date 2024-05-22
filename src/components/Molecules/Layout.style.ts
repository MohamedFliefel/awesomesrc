import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    paddingVertical: 54,
    //paddingHorizontal: 24,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  mobilenumbertext: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'rgba(0, 114, 54, 1)',
    width: 275,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // position: 'absolute',
    // bottom: 0,
  },
  tittletext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(28, 36, 55, 1)',
  },
  subtittletext: {
    fontSize: 16,
    fontWeight: 'light',
    color: 'rgba(183, 183, 183, 1)',
    marginTop: 10,
  },
});
export default styles;
