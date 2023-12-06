export default function cyberReindeer(road, time) {
    let moves = [road];
    let a = 0;
    let b = ".";
    let lastRoad = ''
  
    for (let i = 1; i < time; i++) {
         if (i === 5) {
          // Replace '|' with '*'
          road = road.split('|').join('*');
  
        }
      if( road.indexOf('S') +1 === road.indexOf("|")){
        moves.push(lastRoad)
      }else {
  
      // Find the position of 'S'
      const indexOfS = road.indexOf('S');
      
      if (indexOfS !== -1) {
        // Construct the new road with 'S' moved one step
        const newRoad = road.substring(0, indexOfS) + b + 'S' + road.substring(indexOfS + 2);
        
        if (newRoad !== road) {
          a++;
          b = road[a];
        }
        lastRoad = newRoad
        road = newRoad;
        moves.push(road);
      } else {
        // 'S' not found, add the current road again
        moves.push(road);
          }
      }
    }
  
    return moves;
  }