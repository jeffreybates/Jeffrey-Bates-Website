// the jquery plugin
var menu1 = {
        id: "menu1", title: "Hello World",
        contents: [
            {name: "Item 1"},
            {name: "Item 2"},
            {name: "Item 3"}]
        });
    $("#menu1").optionsPopover(menu1);

//creating a new javascript object
  var p = new OptionsPopover("#menu1");
    p.addMenu(menu1);

    //To initialise, use the code below:
    $(document).on("popover.created", function () {
        $("#popoverContentWrapper").jScrollPane({
            horizontalGutter: 0,
            verticalGutter: 0,
            'showArrows': false
        });
    });

    $(document).on('popover.setContent popover.visible popover.resize', function (e) {
        $("#popoverContentWrapper").data('jsp').reinitialise();
    });