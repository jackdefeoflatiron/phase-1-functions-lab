function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
  }
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;

  }

  function  distanceTravelledInFeet(start,end) {
    if (start < 42){
    return (start - end) * 264
} else return (end -start) * 264
}

    function calculatesFarePrice(start, end) {
        let distance = distanceTravelledInFeet(start,end)
        if (distance <= 400){
            return distance * 0;
        } else if  (distance > 400 && distance <2000) {
            return 0.02 * ( distance - 400)
        } else if (distance > 2000 && distance < 2500) {
            return 25
        } else if (distance > 2500) {
            return 'cannot travel that far'
        }
    }
