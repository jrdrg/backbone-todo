(function (data) {
    var _ = require('lodash');

    var items = [];

    items.push({
            id         : 1,
            date       : '2015-05-14',
            description: 'Reserve elevator'
        },
        {
            id         : 2,
            date       : '2015-06-13',
            description: 'Move to new apartment'
        });


    data.getAll = function () {
        return items;
    };

    data.getByIdx = function (idx) {
        return items[idx];
    };

    data.getById = function (id) {
        return _.findWhere(items, { id: id });
    };

    data.add = function (item) {
        items.push(item);
    };

    data.updateByIndex = function (index, item) {
        if (items.length > index) {
            _.assign(items[index], item);
        }
    };

    data.update = function (item) {
        var existing = data.getById(item.id);
        console.log(existing);
        if (existing) {
            _.assign(existing, item);
        }
    }

})(module.exports);