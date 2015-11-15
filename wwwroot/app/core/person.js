var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.first + ' ' + this.last;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
})();
exports.Person = Person;
