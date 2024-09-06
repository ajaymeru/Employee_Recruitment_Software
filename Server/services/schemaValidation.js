const { checkSchema } = require("express-validator")

const userValidationSchema = checkSchema({
    companyName: {
        optional: true,
        isString: {
            errorMessage: 'Company name must be a string',
        },
    },
    email: {
        isEmail: {
            errorMessage: 'Invalid email format',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'Email is required',
        },
    },
    number: {
        isLength: {
            options: { min: 10, max: 10 },
            errorMessage: 'Phone number must be 10 digits',
        },
        isNumeric: {
            errorMessage: 'Phone number must contain only numbers',
        },
        notEmpty: {
            errorMessage: 'Phone number is required',
        },
    },
    companytype: {
        optional: true,
        isString: {
            errorMessage: 'Company type must be a string',
        },
    },
    address: {
        optional: true,
        isString: {
            errorMessage: 'Address must be a string',
        },
    },
    firstname: {
        isLength: {
            options: { min: 2, max: 20 },
            errorMessage: 'First name must be between 2 and 20 characters',
        },
        isString: {
            errorMessage: 'First name must be a string',
        },
        optional: true,
    },
    lastname: {
        isLength: {
            options: { min: 2, max: 20 },
            errorMessage: 'Last name must be between 2 and 20 characters',
        },
        isString: {
            errorMessage: 'Last name must be a string',
        },
        optional: true,
    },
    password: {
        isLength: {
            options: { min: 8 },
            errorMessage: 'Password must be at least 8 characters',
        },
        notEmpty: {
            errorMessage: 'Password is required',
        },
    },
    role: {
        isIn: {
            options: [['EMPLOYER', 'EMPLOYEE']],
            errorMessage: 'Role must be either EMPLOYER or EMPLOYEE',
        },
        notEmpty: {
            errorMessage: 'Role is required',
        },
    },
    technologies: {
        optional: true,
        isString: {
            errorMessage: 'Technologies must be a string',
        },
    },
    experience: {
        optional: true,
        isString: {
            errorMessage: 'Experience must be a string',
        },
    },
    location: {
        optional: true,
        isString: {
            errorMessage: 'Location must be a string',
        },
    },
    graduate: {
        optional: true,
        isString: {
            errorMessage: 'Graduate must be a string',
        },
    },
    languages: {
        optional: true,
        isArray: {
            errorMessage: 'Languages must be an array',
        },
    },
    noticePeriod: {
        optional: true,
        isString: {
            errorMessage: 'Notice period must be a string',
        },
    },
    currentCompany: {
        optional: true,
        isString: {
            errorMessage: 'Current company must be a string',
        },
    },
    otp: {
        optional: true,
        isString: {
            errorMessage: 'OTP must be a string',
        },
    },
    otpExpires: {
        optional: true,
        isISO8601: {
            errorMessage: 'OTP expiration date must be a valid date',
        },
    },
    isVerified: {
        optional: true,
        isBoolean: {
            errorMessage: 'IsVerified must be a boolean',
        },
    },
});

module.exports = { userValidationSchema };
