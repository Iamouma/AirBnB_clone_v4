$(document).ready(init);

const HOST = '0.0.0.0';
const amenityObj = {};
const stateObj = {};
const cityObj = {};
let obj = {};

function init() {
    $('.amenities .popover input').change(function () { obj = amenityObj; checkedObjects.call(this, 1); });
    $('.state_input').change(function () { obj = stateObj; checkedObjects.call(this, 2); });
    $('.city_input').change(function () { obj = cityObj; checkedObjects.call(this, 3); });
    apiStatus();
    searchPlaces();
    showReviews();
}

