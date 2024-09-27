module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'ink-insight',
        pageHeader: {
            title: 'Book-enthusiasts',
            strapline: 'start your book journey.'
        },
        sidebar: "ink insight gives you location of the places where the books are found.",
        locations: [{
            name: 'ikigai',
            address: 'banjara-hills',
            rating: 5,
            facilities: ['wifi','ambience','co-readers'],
            distance: '20km'
        }, {
            name: 'it ends with us',
            address: 'secunderabad',
            rating: 4,
            facilities: ['wifi','ambience',],
            distance: '15km'
        }, {
            name: 'Harry potter series',
            address: 'LB-Nagar',
            rating: 3,
            facilities: ['wifi','ambience'],
            distance: '14km'
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