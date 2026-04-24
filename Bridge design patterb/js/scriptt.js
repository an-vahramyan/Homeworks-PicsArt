// 1. հաղորդագրություններ ուղարկելու իրականացում
class EmailSender {
  send(message) {
    console.log(`Email sent: ${message}`);
  }
}

class SmsSender {
  send(message) {
    console.log(`SMS sent: ${message}`);
  }
}

// 2. Աբստրակցիա
class Notification {
  constructor(sender) {
    this.sender = sender; // Bridge ուղարկման ձևի և ծանուցման միջև
  }

  notify(message) {
    this.sender.send(message);
  }
}

// 3. Refined Abstraction
class AlertNotification extends Notification {
  notify(message) {
    console.log("Urgent Notice!");
    this.sender.send(message);
  }
}

// կիրառում
const email = new EmailSender();
const sms = new SmsSender();

const regularNotification = new Notification(email);
const urgentNotification = new AlertNotification(sms);

regularNotification.notify("Welcome!");
urgentNotification.notify("The server is unavailable!");
