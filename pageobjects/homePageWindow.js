class homeWindow {

    get homeTitleText () {
        return $('.cu-home-page__header-title.cu-home-page__header-title_active');
    }
}

module.exports = new homeWindow();
