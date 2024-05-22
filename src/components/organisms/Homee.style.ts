import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: 77, // Set your image width
    //height: '%', // Set your image height
    resizeMode: 'contain', // Adjust the image resize mode as needed
    marginRight: 10, // Optional: Add margin between image and text
  },
  container: {
    flexDirection: 'row', // To align image and text horizontally
    alignItems: 'center', // To center align vertically
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18, // Set your text size
    color: 'black', // Set your text color
    fontWeight: 'light',
  },
  image2: {
    width: 15,
    height: 17,
  },
  image4: {
    width: 50,
    height: 50,
  },
  line: {
    borderBottomColor: 'grey', // color of the line
    borderBottomWidth: 0.25, // thickness of the line
    marginVertical: 3, // spacing around the line
  },
});
export default styles;
