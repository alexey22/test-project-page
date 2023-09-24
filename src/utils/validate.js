const validate = {};

validate.Email = (email) => {
  return !!email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

validate.PhoneNumber = (phone_number) => {
  return phone_number.match(
    /^(\+7|8)(\s?)([\-\(]?)((\d{3})([\-\)]?)(\s?)(\d{3})([\s\-]?)(\d{2})([\s\-]?)(\d{2})|(\d{4})([\-\)]?)(\s?)(\d{2})([\s\-]?)(\d{2})([\s\-]?)(\d{2}))/
  );
};

export default validate;
