let employeeHike: Map<string, number> = new Map();
function getHikePercentage(name: string, baseSalary: number, experience: number, rating: number):void{

    let hike: number = 0;
    
    if(rating >= 4.0){
        if(experience >= 5){
            hike = (baseSalary * 15.0) + 1500 + 5000;
        } else{
            hike = (baseSalary * 15.0) + 1500 + 0;
        }
    } else if(rating >= 3){
         if(experience >= 5){
            hike = (baseSalary * 10.0) + 1200 + 5000;
        } else{
            hike = (baseSalary * 10.0) + 1200 + 0;
        }
    } else{
         if(experience >= 5){
            hike = (baseSalary * 3.0) + 300 + 5000;
        } else{
            hike = (baseSalary * 3.0) + 300 + 0;
        }
    }

    let hikePercentage: number = hike / baseSalary;
    employeeHike.set(name, hikePercentage);
    //console.log(`Salary Hike for ${name} is: ${hike} rupees`);
    //console.log(`Salary Hike Percentage: ${hikePercentage.toFixed(2)}%`);
}

getHikePercentage("Alice Json", 75000.0, 5.1, 4.2);
getHikePercentage("Bob Smith", 68000.0, 3.2, 3.8);
getHikePercentage("Carol Davis", 82000.0, 7.1, 4.5);
getHikePercentage("David Brown", 90000.0, 10.2, 2.5);
getHikePercentage("Eva Green", 60000.0, 2.4, 3.5);

console.log(employeeHike);