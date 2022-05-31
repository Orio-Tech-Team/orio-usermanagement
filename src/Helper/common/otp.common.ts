const otpGenerator = require('otp-generator')

export class OTP{
    static generate(){
        return otpGenerator.generate(6, {lowerCaseAlphabets:false , upperCaseAlphabets: false, specialChars: false });
    }
}