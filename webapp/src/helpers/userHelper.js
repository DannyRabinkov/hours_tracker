export function validateSignIn() {
  let phone = document.getElementById("user-phone").value;
  let pass = document.getElementById("user-pass").value;

  let phoneRegex = /^0(?:[234689]|5[0-689]|7[246789])(?![01])(\d{7})$/gm;

  let isPhoneValid = phoneRegex.test(phone);
  if (isPhoneValid) {
    //phone is valid
    //pass is present
    //send to node to validateUser(phone,pass)
  } else {
    return {
      success: false,
      error: "phone not valid",
    };
  }
}
