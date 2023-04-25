exports.createQuestion = () => {
  const question = {
    message: 'Provide a longer description of the change (Create newline by using \"\\n\")\n Items are automatically prefixed with (*):\n ',
    name: 'body',
    type: 'input'
  };

  return question;
};
