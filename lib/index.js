exports.MakeId = function (length) {
    if (length === undefined) {
        length = 5;
    }

    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text.toLowerCase();
};
