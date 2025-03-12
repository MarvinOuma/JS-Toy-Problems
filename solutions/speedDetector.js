function speedDetector() {
    const speed = parseInt(prompt("Enter car speed:"));
    
    if (speed < 70) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}
speedDetector();
