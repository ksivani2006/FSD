var StudentInfo;
(function (StudentInfo) {
    function display() {
        console.log("Welcome to TypeScript Namespace");
    }
    StudentInfo.display = display;
})(StudentInfo || (StudentInfo = {}));
StudentInfo.display();
export {};
