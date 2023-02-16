import { Body } from '@nestjs/common';
const request = require('request');

export class SMS {
  static async send(message: string, contactNumber: string) {
    // const url = `https://sms.montymobile.com/API/SendSMS?username=BluExBND&apiId=3oH8jd12&json=True&destination=${contactNumber}&source=Blue-Ex&text=${message}`;
    const url = `http://b2bsms.helium.com.pk/SMSPortal/Customer/ProcessSMS.aspx?userid=blueexc&pwd=blueexc1234&msg=${message}&mobileno=${contactNumber}`;

    request(url, { json: true }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
    });
  }
}
