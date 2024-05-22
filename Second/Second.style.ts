import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    paddingHorizontal: 25,
    paddingVertical: 54,
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: '#ffffff', // Text color on top of the background image
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container2: {
    justifyContent: 'space-between', // Align items at the top of the container
    flexDirection: 'row',
    alignItems: 'center', // Center items horizontally
    //  backgroundColor: 'lightgray', // Optional: Add background color to visualize container size
    // Add any other styles for your container
  },

  imageRight: {},
  Text: {
    fontSize: 40, // Adjust font size as needed
    fontWeight: 'bold', // Adjust font weight as needed
    color: 'rgba(255, 255, 255, 1)', // Text color
    position: 'absolute',
    bottom: 16, // Adjust position from bottom as needed
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 160,

    alignSelf: 'center',
  },
  input: {
    height: 65,
    width: 346, // Adjust width as needed
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white', // Change the text color here\
    borderRadius: 10,
  },

  forgotPassword: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10, // Space between checkbox and forgot password link
  },
  inputContainer2: {
    flexDirection: 'row',
  },
  remembermetext: {
    color: 'white',
  },
  Forgotpasswordtext: {
    color: 'white',
  },
  checkboxIcon: {
    width: 30, // Adjust the width and height to make it square
    height: 30, // Adjust the width and height to make it square
    borderColor: 'white',
    borderRadius: 10, // Set border radius to 0 for a squared shape\
    marginRight: 20,
  },
  inputContainer4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginButton: {
    backgroundColor: 'rgba(0, 114, 54, 1)',
    width: '85%',
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
  },
  loginFingerprintContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dontyouHaveanaccountcontainer: {
    flexDirection: 'row',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtontext: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'bold',
    textAlign: 'center',
  },
  dontyouHaveanaccounttext: {
    color: 'white',
  },
  signUptext: {
    color: 'orange',
  },
});
export default styles;
