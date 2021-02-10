export default class LoginPage {
    get inputEmail () {
        return $('#email-input');
    }

    get headerLogin () {
        return $(".cu-avatar.cu-simple-bar__bottom-avatar.ng-star-inserted.cu-avatar_online");
    };

    get inputPassword () {
        return $('#password-input');
    }

    get btnLogin () {
        return $('#login-submit');
    }

    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }

    open () {
        return browser.url('/');
    }
}

module.exports = new LoginPage();