// Code your solution in this file!

const returnFirstTwoDrivers = (array) => [...array.slice(0,2)];

const returnLastTwoDrivers = (array) => [...array.slice(2,4)];

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const fareDoubler = (fare) => fare * 2;
const fareTripler = (fare) => fare * 3;
const fareQuadrupler = (fare) => fare * 4;
const fareQuintupler = (fare) => fare * 5;

const createFareMultiplier = (fare) => {
    if (fare == 2) {
        return fareDoubler;
    } else if (fare == 3) {
        return fareTripler;
    } else if (fare == 4) {
        return fareQuadrupler;
    } else if (fare == 5) {
        return fareQuintupler;
    } else {
        return undefined}
}

const selectDifferentDrivers = (array, x) => {
    if (x == selectingDrivers[0]) {
        return returnFirstTwoDrivers
    } else if (x == selectingDrivers[1]) {
        return returnLastTwoDrivers;
    }
}