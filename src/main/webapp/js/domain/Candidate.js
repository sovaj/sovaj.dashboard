var remasy = {
    author: "Mickael Dubois",
    addEventListener: function (o, typeEvent, callback) {
        if (o.addEventListener) {
            o.addEventListener(typeEvent, callback, false);
        }
        else if (o.attachEvent) {
            o.attachEvent("on" + typeEvent, callback);
        }
    }
};

(function () {
    var f = function () {
        if (typeof remasy === "undefined") {
            alert("The namespace remasy was deleted.");
            return false;
        }
        else if (typeof remasy.author === "undefined" || remasy.author !== "Mickael Dubois") {
            alert("The namespace remasy was altered.");
            return false;
        }

        return true;
    };

    if (window.addEventListener) { // non-IE browser
        window.addEventListener("load", f, false);
    }
    else if (window.attachEvent) { // IE browser
        window.attachEvent("onload", f);
    }

    if (!f())
        return;

    // extends remasy

    remasy.domain = {
        author: "Mickael Dubois"
    };

})(); // run the anonymous function

(function () {
    var f = function () {
        if (typeof remasy === "undefined") {
            alert("The namespace remasy was deleted.");
            return false;
        }
        else if (typeof remasy.author === "undefined" || remasy.author !== "Mickael Dubois") {
            alert("The namespace remasy was altered.");
            return false;
        }
        else if (typeof remasy.domain === "undefined") {
            alert("The namespace remasy.content was deleted.");
            return false;
        }

        return true;
    };

    if (window.addEventListener) { // non-IE browser
        window.addEventListener("load", f, false);
    }
    else if (window.attachEvent) { // IE browser
        window.attachEvent("onload", f);
    }
    if (!f())
        return;


    // extends remasy.domain
    remasy.domain.Job = function (config) {
        this.id;
        this.title;
        this.clientId;
        this.hiringAccountId;
        this.shortDescription;
        this.fullDescription;
        this.technologie;
        this.position;
        this.creationDate;
        this.address;
        this.schedule = "FULL_TIME";
        this.contractType = "PERMANENT";
        this.status;
        this.lastOpenDate;
        this.published;
        this.publishedURL;
        if (config) {
            this.id = config.id;
            this.clientId = config.clientId;
            this.hiringAccountId = config.hiringAccountId;
            this.status = config.status;
            this.title = config.title;
            this.shortDescription = config.shortDescription;
            this.fullDescription = config.fullDescription;
            this.technologie = config.technologie;
            this.position = config.position;
            this.creationDate = config.creationDate;
            this.address = config.address;
            this.schedule = config.schedule;
            this.contractType = config.contractType;
            this.status = config.status;
            this.lastOpenDate = config.lastOpenDate;
            this.published = config.published;
            this.publishedURL = config.publishedURL;
        }
    };

    // extends remasy.domain
    remasy.domain.Client = function (config) {
        this.id;
        this.name;
        this.address;
        this.status;
        this.creationDate;
        this.clientManager;
        if (config) {
            this.id = config.id;
            this.status = config.status;
            this.name = config.name;
            this.address = config.address;
            this.creationDate = config.creationDate;
            this.clientManager = config.clientManager;
        }
    };

    // extends remasy.domain
    remasy.domain.HiringAccount = function (config) {
        this.id;
        this.name;
        this.address;
        this.status;
        this.creationDate;
        this.accountManager;
        if (config) {
            this.id = config.id;
            this.status = config.status;
            this.name = config.name;
            this.address = config.address;
            this.creationDate = config.creationDate;
            this.accountManager = config.accountManager;
        }
    };

    // extends remasy.domain
    remasy.domain.User = function (config) {
        if (config) {
            if (config.name) {
                this.name = config.name;
            }
            if (config.email) {
                this.email = config.email;
            }
            if (config.phoneNumber) {
                this.phoneNumber = config.phoneNumber;
            }
            if (config.username) {
                this.username = config.username;
            }
            if (config.role) {
                this.role = config.role;
            }
        }
    };

    remasy.domain.User.prototype.hasError = function () {
        this.validate();
        return this.$$error.name !== undefined
                || this.$$error.email !== undefined
                || this.$$error.phoneNumber !== undefined
                || this.$$error.role !== undefined;
    };

    remasy.domain.User.prototype.validate = function () {
        this.$$error = {};
        if (!this.name || !validateName(this.name)) {
            this.$$error.name = "Please choose a full name";
        }
        this.phoneNumber = cleanPhoneNumber(this.phoneNumber);
        if (!this.phoneNumber === "" || !validatePhoneNumber(this.phoneNumber)) {
            this.$$error.phoneNumber = "Please choose a valid phoneNumber";
        }
        if (!this.email || !validateEmail(this.email)) {
            this.$$error.email = "Please enter a valid email";
        }
        if (!this.role) {
            this.$$error.role = "Please enter a valid position";
        }
    };

    // extends remasy.domain
    remasy.domain.Candidate = function (config) {
        if (config) {
            if (config.id) {
                this.id = config.id;
            }
            if (config.status) {
                this.status = config.status;
            }
            if (config.name) {
                this.name = config.name;
            }
            if (config.referenceFrom) {
                this.referenceFrom = config.referenceFrom;
            }
            if (config.referenceBy) {
                this.referenceBy = referenceBy = new remasy.domain.UserMinimal(config.referenceBy);
            }
            if (config.curriculum) {
                this.curriculum = config.curriculum;
            }
            if (config.description) {
                this.description = config.description;
            }
//            this.curriculum = config.curriculum || "";
            if (config.actualPosition) {
                this.actualPosition = new remasy.domain.PositionMinimal(config.actualPosition);
            }
            if (config.actualSalary) {
                this.actualSalary = config.actualSalary;
            }
            if (config.requestedPosition) {
                this.requestedPosition = new remasy.domain.PositionMinimal(config.requestedPosition);
            }
            if (config.requestedSalary) {
                this.requestedSalary = config.requestedSalary;
            }
            if (config.experience) {
                this.experience = config.experience;
            }
            if (config.frenchLevel) {
                this.frenchLevel = config.frenchLevel;
            }
            if (config.englishLevel) {
                this.englishLevel = config.englishLevel;
            }
            if (config.email) {
                this.email = config.email;
            }
            if (config.phoneNumber) {
                this.phoneNumber = config.phoneNumber;
            }
            if (config.address) {
                this.address = config.address;
            }
            if (config.jobApplications) {
                this.jobApplications = config.jobApplications;
            }
            if (config.facebook) {
                this.facebook = config.facebook;
            }
            if (config.linkedin) {
                this.linkedin = config.linkedin;
            }
            if (config.monster) {
                this.monster = config.monster;
            }
            if (config.twitter) {
                this.twitter = config.twitter;
            }
            if (config.google) {
                this.google = config.google;
            }
            if (config.viadeo) {
                this.viadeo = config.viadeo;
            }
            if (config.tags) {
                this.tags = config.tags;
                this.$$tags = new Array();
                for (var i = 0; i < config.tags.length; i++) {
                    //config.businessHour[i].open = (config.businessHour[i].open === "true");
                    this.$$tags.push({id: config.tags[i], text: config.tags[i]});
                }
            }
            if (config.interviews) {
                this.interviews = new Array();
                for (var i = 0; i < config.interviews.length; i++) {
                    //config.businessHour[i].open = (config.businessHour[i].open === "true");
                    this.interviews.push(new remasy.domain.Interview(config.interviews[i]));
                }
            }

            if (config.feedbacks) {
                this.feedbacks = new Array();
                for (var i = 0; i < config.feedbacks.length; i++) {
                    this.feedbacks.push(config.feedbacks[i]);
                }
            }
            if (config.technologies) {
                this.technologies = config.technologies;
            } else {
                this.technologies = new Array();
            }
            if (config.employers) {
                this.employers = config.employers;
            } else {
                this.employers = new Array();
            }
            if (config.comments) {
                this.comments = config.comments;
            } else {
                this.comments = new Array();
            }
            if (config.mails) {
                this.mails = config.mails;
            } else {
                this.mails = new Array();
            }
            if (config.files) {
                this.files = config.files;
            } else {
                this.files = new Array();
            }
        }
    };

    remasy.domain.Candidate.prototype.hasError = function () {
        this.validate();
        return this.$$error.name !== undefined
                || this.$$error.phoneNumber !== undefined
                || this.$$error.email !== undefined
                || this.$$error.actualPosition !== undefined
                || this.$$error.referenceBy !== undefined
                || this.$$error.requestedPosition !== undefined;
    };

    remasy.domain.Candidate.prototype.validate = function () {
        this.$$error = {};
//        if (!this.name || !validateName(this.name)) {
//            this.$$error.name = "Please choose a full name";
//        }
//        this.phoneNumber = cleanPhoneNumber(this.phoneNumber);
//        var strongValidation = false;
//        if (strongValidation) {
//            if (!this.phoneNumber === "" || !validatePhoneNumber(this.phoneNumber)) {
//                this.$$error.phoneNumber = "Please choose a valid phoneNumber";
//            }
//            if (!this.email || !validateEmail(this.email)) {
//                this.$$error.email = "Please enter a valid email";
//            }
//        } else {
//            if (this.phoneNumber) {
//                if (this.phoneNumber !== "" && !validatePhoneNumber(this.phoneNumber)) {
//                    this.$$error.phoneNumber = "Please choose a valid phoneNumber";
//                }
//            }
//            if (this.email) {
//                if (this.email !== "" && !validateEmail(this.email)) {
//                    this.$$error.email = "Please enter a valid email";
//                }
//            }
//        }
//        if (this.actualPosition && this.actualPosition.hasError()) {
//            this.$$error.actualPosition = "Please enter a valid position";
//        }
//        if (this.requestedPosition && this.requestedPosition.hasError()) {
//            this.$$error.requestedPosition = "Please enter a valid position";
//        }
//        if (this.referenceBy && !this.referenceBy.id) {
//            this.$$error.referenceBy = "Please enter a valid referencer";
//        }
    };

    function cleanPhoneNumber(phoneNumber) {
        if (phoneNumber !== undefined) {
            phoneNumber = phoneNumber.replace(/[^0-9\.]+/g, '');
            return phoneNumber;
        } else {
            return undefined;
        }

    }

    function validatePhoneNumber(phoneNumber) {
        var phoneNumberPattern = /^\d{10}$/;
        if (phoneNumber !== undefined) {
            phoneNumber = phoneNumber.replace(/ /g, "")
                    .replace(/-/g, "")
                    .replace(/\./g, "");
            return phoneNumber.match(phoneNumberPattern);
        } else {
            return false;
        }

    }

    function validateName(name) {
        if (name !== undefined) {
            name
            return name.indexOf(" ") > -1;
        } else {
            return false;
        }

    }

    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    // extends remasy.domain
    remasy.domain.PositionMinimal = function (config) {
        this.id;
        this.title;
        this.shortDescription;
        if (config) {
            if (config.id) {
                this.id = config.id;
            }
            if (config.title) {
                this.title = config.title;
            }
            if (config.shortDescription) {
                this.shortDescription = config.shortDescription;
            }
        }
    };

    remasy.domain.PositionMinimal.prototype.hasError = function () {
        this.validate();
        return this.$$error.description !== undefined;
    };

    remasy.domain.PositionMinimal.prototype.validate = function () {
        this.$$error = {};
        if (!this.id) {
            this.$$error.description = "Please choose a position";
        }
    };

    // extends remasy.domain
    remasy.domain.Interview = function (config) {
        var date = new Date();
        date.setMilliseconds(0);
        date.setSeconds(0);
        this.time = date;
        this.date = date;
        this.report = "";
        this.$sendingInvite = false;
        if (config) {
            if (config.time) {
                this.time = new Date(config.time);
            }
            if (config.date) {
                this.date = new Date(config.date);
            }
            if (config.orderNo !== undefined) {
                this.orderNo = config.orderNo;
            }
            if (config.type) {
                this.type = config.type;
            }
            this.id = config.id;
            this.emailStatus = config.emailStatus;
            if (config.report) {
                this.report = config.report;
            }
            if (config.interviewer) {
                this.interviewer = new remasy.domain.UserMinimal(config.interviewer);
            }
        }
    };

    remasy.domain.Interview.prototype.hasError = function () {
        this.validate();
        return this.$$error.date !== undefined ||
                this.$$error.time !== undefined ||
                this.$$error.type !== undefined ||
                this.$$error.interviewer !== undefined;
    };

    remasy.domain.Interview.prototype.validate = function () {
        this.$$error = {};
        if (!this.date) {
            this.$$error.date = "Please choose a date";
        }
        if (!this.time) {
            this.$$error.time = "Please choose a time";
        }
        if (!this.type) {
            this.$$error.type = "Please choose a type";
        }
        if (!this.interviewer.id) {
            this.$$error.interviewer = "Please enter a valid interviewer";
        }
    };

    // extends remasy.domain
    remasy.domain.Contact = function (config) {
        this.time = name;
        this.date = email;
        if (config) {
            if (config.name) {
                this.name = config.name;
            }
            if (config.email) {
                this.email = config.email;
            }
        }
    };

    remasy.domain.Contact.prototype.hasError = function () {
        this.validate();
        return this.$$error.email !== undefined ||
                this.$$error.name !== undefined;
    };

    remasy.domain.Contact.prototype.validate = function () {
        this.$$error = {};
        if (!this.email) {
            this.$$error.email = "Please enter an email";
        }
        if (!this.name) {
            this.$$error.name = "Please enter a time";
        }
    };

    // extends remasy.domain
    remasy.domain.UserMinimal = function (config) {
        this.id;
        this.username;
        this.name;
        this.email;
        this.phoneNumber;
        if (config) {
            if (config.id) {
                this.id = config.id;
            }
            if (config.username) {
                this.username = config.username;
            }
            if (config.name) {
                this.name = config.name;
            }
            if (config.email) {
                this.email = config.email;
            }
            if (config.phoneNumber) {
                this.phoneNumber = config.phoneNumber;
            }
        }
    };

})(); // run the anonymous function