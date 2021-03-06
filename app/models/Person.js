System.register(['./Contact', 'angular2/common', './ModelBase'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Contact_1, common_1, ModelBase_1;
    var Person;
    return {
        setters:[
            function (Contact_1_1) {
                Contact_1 = Contact_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ModelBase_1_1) {
                ModelBase_1 = ModelBase_1_1;
            }],
        execute: function() {
            Person = (function (_super) {
                __extends(Person, _super);
                function Person() {
                    debugger;
                    _super.call(this);
                    this.FirstName = new common_1.Control('', common_1.Validators.required);
                    this.MiddleName = new common_1.Control('');
                    this.LastName = new common_1.Control('');
                    this.DOB = new common_1.Control('');
                    this.ContactDetails = new Contact_1.Contact;
                }
                return Person;
            }(ModelBase_1.ModelBase));
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=Person.js.map