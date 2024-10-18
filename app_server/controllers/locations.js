module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'ink-insight',
        pageHeader: {
            title: 'Book-enthusiasts',
            strapline: 'start your book journey.'
        },
        sidebar: "ink insight gives you location of the places where the books are found.",
        locations: [{
            name: 'Change Agent',
            address: 'Farzi cafe',
            rating: 5,
            facilities: ['wifi','ambience','food'],
        }, {
            name: 'Never lie',
            address: 'Roastery house Cafe',
            rating: 4,
            facilities: ['food','ambience']
        }, {
            name: 'Happy Place',
            address: 'Maxibrew cafe',
            rating: 4,
            facilities: ['wifi','ambience']
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};