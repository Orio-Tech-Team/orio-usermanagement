const otpGenerator = require('otp-generator')

export class OTP{
    static generate(){
        return otpGenerator.generate(4, {lowerCaseAlphabets:false , upperCaseAlphabets: false, specialChars: false });
    }
}