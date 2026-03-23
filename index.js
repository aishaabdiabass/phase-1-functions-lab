function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  }

  if (distance > 2500) {
    return 'cannot travel that far';
  }

  if (distance > 2000) {
    return 25;
  }

  const chargeable = distance - 400;
  return chargeable * 0.02;
}

// expose functions for tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
}
