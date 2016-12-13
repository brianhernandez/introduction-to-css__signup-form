window.onload = function () {
  // Obtain the different inputs that will be validated
  // from the form and save them to variables
  var signupElement = document.getElementById('signup');
  var firstNameElement = document.getElementById('fname');
  var lastNameElement = document.getElementById('lname');
  var emailElement = document.getElementById('mail');
  var birthdateElement = document.getElementById('birthdate');
  var passwordElement = document.getElementById('password');
  var submitButton = document.getElementById('submitbtn');
  // When the submit button is clicked...
  submitButton.addEventListener('click', function(event) {
    // ...pass the different elements to their corresponding
    // validation functions
    checkName(firstNameElement);
    checkName(lastNameElement);
    checkEmail(emailElement);
    checkPassword(passwordElement);
    checkBirthday(birthdateElement);
  });
  // When the submit event is detected on the form...
  signupElement.addEventListener('submit', function(event) {
    // ...prevent its default operation to send the form
    // since this is not necessary
    event.preventDefault();
  });
  // The checkName function checks validity of the first and last
  // name fields
  function checkName(element) {
    // Capture the value on the element to a variable
    var input = element.value;
    // If the input value is shown to be empty...
    if (validator.isEmpty(input)) {
      // ...if the element is the firstNameElement
      if (element === firstNameElement) {
        // ...display a custom message for this empty first name field
        element.setCustomValidity("Sorry, your first name can't"+
        " be left empty.");
        // ...if the element is the lastNameElement
      } else if (element === lastNameElement) {
        // display a custom message for this empty last name field
        element.setCustomValidity("Sorry, your last name can't"+
        " be left empty.");
      }
    // ...else reset its validity to true
    } else {
      element.setCustomValidity("");
    }
    // If the input is less than 2 characters...
    if (input.length < 2) {
      // ...if the element is the firstNameElement
      if (element === firstNameElement) {
        // ...display a custom message for a very short first name
        element.setCustomValidity("Surely your first name is at least 2 " +
          "characters long, right?");
        // ...if the element is the lastNameElement
      } else if (element === lastNameElement) {
        // ...display a custom message for a very short last name
        element.setCustomValidity("Come on, your last name has to be at least" +
          " 2 characters long right?");
      }
      // ...else reset its validity to true
    } else {
      element.setCustomValidity("");
    }
  }
  // The CheckEmail function checks the validity of the email field
  function checkEmail(element) {
    // Capture the value on the element to a variable
    var input = element.value;
    // If the field is empty...
    if (validator.isEmpty(input)) {
      // ...display a custom message for an empty email field
      element.setCustomValidity("Please provide us with an email so we can" +
        " create your account.");
      // ...else if the value is not a valid email...
    } else if (!validator.isEmailAddress(input)) {
      // ...display a custom message for an invalid email field
      element.setCustomValidity("I'm sorry, that isn't a valid email address." +
        " An email should have at least an '@' symbol in the middle of it.");
      // ...else reset the validity to true
    } else {
      element.setCustomValidity("");
    }
  }
  // The checkPassword functions checks if a password field is empty
  // or is between 6 and 8 characters
  function checkPassword(element) {
    // Capture the value on the element to a variable
    var input = element.value;
    // If the password field is empty...
    if (validator.isEmpty(input)) {
      // ...display a custom message for an empty password field
      element.setCustomValidity("Please provide a password to create your " +
        "account.");
      // ...else if the input is not between 6 and 8 characters...
    } else if (input.length < 6 || input.length > 8) {
      // ...display a custom message for a password that is too long or short
      element.setCustomValidity("Your password must be 6 to 8 characters " +
        "long.");
      // ...else reset its validity
    } else {
      element.setCustomValidity("");
    }
  }
  // The checkBirthday function checks if the entered birthday is at least
  // thirteen years old or not
  function checkBirthday(element) {
    // Capture the value on the element to a variable
    var input = element.value;
    // Clean the input to a string that can be passed into a Date() object
    input = input.replace("-", ",");
    // Create the user's birthdate Date object
    var userBirthdate = new Date(input);
    // Create a date object for the current time
    var now = new Date();
    // Subtract 13 years from the current time and save it to the
    // thirteenYearsOld variable
    var thirteenYearsOld = new Date(now.setFullYear(now.getFullYear() - 13));
    // If the password field is empty...
    if (validator.isEmpty(input)) {
      // ...display a custom message for an empty birthday field...
      element.setCustomValidity("We must get your birthday to create your " +
        "account.");
      // ...else if the user's birthdate is not before 13 years ago...
    } else if (!validator.isBeforeDate(userBirthdate, thirteenYearsOld)) {
      // ...display a custom message for a birday younger than 13 years ago
      element.setCustomValidity("You must be at least 13 years old to create" +
        " an account with us.");
      // else reset the validity
    } else {
      element.setCustomValidity("");
    }
  }
};
