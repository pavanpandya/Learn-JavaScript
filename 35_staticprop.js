class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called.';
    }
    static {
        console.log('Class static initialization block called');
    }
}

console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."

// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

// What is "STATIC" keyword in JavaScript?
// In JavaScript, the static keyword is used to define methods and properties that belong to the class itself rather than to instances of the class. These static members are shared among all instances of the class and are typically used for functionality that does not pertain to individual objects but rather to the class as a whole.

// Key Points:

// Class-Level Methods and Properties: Static methods and properties are associated with the class itself and can be accessed directly using the class name, without creating an instance of the class. They are called on the class (e.g., ClassName.method()), not on object instances.

// Common Use Cases: Static methods are commonly used for utility functions, such as mathematical operations or helper methods, that don't require access to instance-specific data. Static properties can be used for constants or configuration that is common across all instances.

// Access Restrictions: Within static methods, you cannot directly access instance properties or methods. However, you can access other static properties and methods within the same class using the this keyword.

// Inheritance: Static methods and properties are inherited by subclasses, allowing them to be called on derived classes. This means a subclass can use a static method defined in its superclass without overriding it.

// Example: In the example below, MyClass has a static method greet and a static property type.
class MyClass {
    static type = 'Utility';

    static greet() {
        return 'Hello, world!';
    }
}

console.log(MyClass.greet()); // Outputs: "Hello, world!"
console.log(MyClass.type);    // Outputs: "Utility"

// -----------------------------------------------------------------------------------------------------

class Vehicle {
    static company = "Tesla";

    static describe() {
        return `This is a vehicle from ${this.company}.`;
    }
}

class Car extends Vehicle {
    static type = "Car";

    static describe() {
        return `${super.describe()} It is a ${this.type}.`;
    }
}

console.log(Vehicle.describe()); // Outputs: "This is a vehicle from Tesla."
console.log(Car.describe());     // Outputs: "This is a vehicle from Tesla. It is a Car."
console.log(Car.company);        // Outputs: "Tesla"
console.log(Car.type);           // Outputs: "Car"


// Explanation:
// Base Class (Vehicle): This class has a static property company and a static method describe. The describe method returns a string describing the company.
// Derived Class (Car): This class extends Vehicle, inheriting its static methods and properties. It defines its own static property type and overrides the describe method. The overridden describe method uses super.describe() to call the static method from the base class and adds additional information specific to Car.
// Accessing Static Members: The describe method and company property can be accessed directly on the Vehicle class and the Car subclass. The Car class inherits the company property from Vehicle and has its own static property type.

// But, if you try to create the instance of the class and access the static properties, you will get undefined and for methods, you get TypeError.
// Eg: TypeError: car.describe is not a function

const car = new Car();
console.log(car.company); 
// Outputs: undefined

console.log(car.type);
// Outputs: undefined

console.log(car.describe());
// Outputs: TypeError: car.describe is not a function