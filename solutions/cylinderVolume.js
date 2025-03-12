class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
    }
}

const cylinder = new Cylinder(5, 10);
console.log(`Volume of Cylinder: ${cylinder.getVolume()}`);
