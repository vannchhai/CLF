function HomeViewModel(app, dataModel) {
    var self = this;
    //var model = [
    //    {
    //        OrderId: 0,
    //        OrderDate: new Date(),
    //        FloorCd: 'F001',
    //        SectionCd: 'S001',
    //        TableCd: 'T001',
    //        Pax: 1,
    //        UserId: 'U011',
    //        Closed: 1
    //    }
    //];
    //app.ajaxHelper("/api/OutletCURD/", "POST", false, model).done(function (data) {
    //    data;
    //});
    return self;
}

app.addViewModel({
    name: "Home",
    factory: HomeViewModel
});
