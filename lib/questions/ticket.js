exports.createQuestion = () => {
    const question = {
      validate: (input) => {
        if (!input) {
          return 'Please provide a valid Jira Ticket'
        }
        return true
      },
      message: 'Provide the Jira ticket number:\n',
      name: 'ticket',
      type: 'input',
    };
  
    return question;
  };
  