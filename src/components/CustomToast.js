import { Toast } from "native-base";
/**
 *
 * @param {Object} ToastOptions
 * @param {String} ToastOptions.text
 * @param {Number} ToastOptions.duration
 * @param {String} ToastOptions.buttonText
 * @param {Object} ToastOptions.buttonStyle
 * @param {TextStyle} ToastOptions.buttonTextStyle
 * @param {('danger' | 'warning' | 'success')} ToastOptions.type
 * @param {('bottom' | 'top' | 'center')} ToastOptions.position ['bottom', 'top', 'center']
 * @param {Function} ToastOptions.onClose
 * @param {Object} ToastOptions.textStyle
 */
function CustomToast({
  text,
  buttonText,
  duration,
  buttonStyle,
  buttonTextStyle,
  type,
  position,
  onClose,
  textStyle
}) {
  Toast.show({
    text,
    buttonText,
    duration,
    buttonStyle,
    buttonTextStyle,
    type,
    position,
    onClose,
    textStyle,
    style: {
      marginBottom: 60,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 5
    }
  });
}

export default CustomToast
