import { Body } from '@nestjs/common';
const request = require('request');

export class SMS {
  static async send(message: string, contactNumber: string) {
    const url = `https://sms.montymobile.com/API/SendSMS?username=BluExBND&apiId=3oH8jd12&json=True&destination=${contactNumber}&source=Blue-Ex&text=${message}`;

    request(url, { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
    });
  }
}
