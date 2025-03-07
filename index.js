const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(x) {
    return function (y) {
        return x * y;
    }
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers, z) {
    if (z === returnFirstTwoDrivers) {
        return drivers.slice(0,2);
    } else if (z === returnLastTwoDrivers) {
        return drivers.slice(2)
    }
}