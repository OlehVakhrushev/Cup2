class DDownUserMenu {

    get headerLogin () {
        return $$("//div[@class='cu-user-settings-menu-v2__body-column-title-name']")[1];
    }
}

module.exports = new DDownUserMenu();
