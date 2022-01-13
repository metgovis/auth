var params = {
    $or: [
        {
            'picture': ''
        },
        {
            'picture': null
        }
    ]
};
var index = 0;
var maximum = db.tblUsers.find(params).count();
var percentage = 0;

db.tblUsers.find(params, {
    '_id': 1
}).forEach((user) => {
    db.tblUsers.update({
        '_id': user._id
    }, {
        $set: {
            'picture': 'https://www.bitid.co.za/assets/icons/icon-192x192.png'
        }
    });
    index++;
    var progress = parseFloat(((index / maximum) * 100).toFixed(0));
    if (progress != percentage) {
        percentage = progress;
        print(percentage + '%');
    };
});