const nodemailer = require('nodemailer');

module.exports = class Email {
  constructor(user, url) {
    this.from = user;
    this.url = url;
  }

  async newTransporter() {
    const testAccount = await nodemailer.createTestAccount();

    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  async send(text, subject) {
    await (await this.newTransporter()).sendMail({
      from: this.from,
      to: this.url,
      subject,
      text,
    });
  }
};
