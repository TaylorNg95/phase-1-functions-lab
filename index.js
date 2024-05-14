function distanceFromHqInBlocks(userLocation){
    if(userLocation < 42){
        return 42 - userLocation;
    } else return userLocation - 42;
}

function distanceFromHqInFeet(userLocation){
    const blocks = distanceFromHqInBlocks(userLocation);
    return blocks * 264;
}

function distanceTravelledInFeet(start, end){
    if(start < end){
        return (end - start) * 264;
    } else return (start - end) * 264;
}

function calculatesFarePrice(start, end){
    const distanceTraveled = distanceTravelledInFeet(start, end);
    if(distanceTraveled <= 400){
        return 0;
    } else if(distanceTraveled > 400 && distanceTraveled <= 2000){
        return (distanceTraveled - 400) * 0.02;
    } else if (distanceTraveled > 2000 && distanceTraveled <= 2500){
        return 25;
    } else return 'cannot travel that far';
}