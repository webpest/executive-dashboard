export default {
  // Support type as Object and Array
  "/api/schools/1": {
    totalNoOfSchools: 5,
    noOfStudents: 310,
    noOfStaff: 110,
    noOfMaleStudents: 155,
    noOfFemaleStudents: 155,
    noOfMaleStaff: 75,
    noOfFemaleStaff: 35,
    boardingStudents: 0,
    dayStudents: 310,
    teachersPerSubject: {
      ACCT: 10,
      BS: 7,
      GEO: 2,
      ENG: 13,
      PHY: 4,
      BIO: 5,
      PHE: 1,
      MATHS: 6,
      SS: 8,
      GOVT: 8,
      CHEM: 2,
      COMM: 11
    }
  },
  "GET /api/schools": [
    {
      schoolCode: "safsms",
      schoolName: "Nobelhouse College",
      logoUrl:
        "https://s3-us-west-2.amazonaws.com/safsms.com/schools/safsms/images/school_logos/school_logo1.jpg",
      noOfStudents: 62,
      noOfStaff: 22
    },
    {
      schoolCode: "1",
      schoolName: "GOVERNMENT SCIENCE & TECHNICAL COLLEGE",
      logoUrl:
        "https://s3-us-west-2.amazonaws.com/safsms.com/schools/1/images/school_logos/school_logo1.jpg",
      noOfStudents: 0,
      noOfStaff: 102
    },
    {
      schoolCode: "2",
      schoolName: "FEDERAL GOVERNMENT COLLEGE, JOS",
      logoUrl:
        "https://s3-us-west-2.amazonaws.com/safsms.com/schools/2/images/school_logos/school_logo1.jpg",
      noOfStudents: 1615,
      noOfStaff: 301
    },
    {
      schoolCode: "3",
      schoolName: "Government Science Secondary School, Gombe",
      logoUrl:
        "https://s3-us-west-2.amazonaws.com/safsms.com/schools/3/images/school_logos/school_logo1.jpg",
      noOfStudents: 0,
      noOfStaff: 2
    },
    {
      schoolCode: "4",
      schoolName: "GUIDANCE STANDARD SCHOOL",
      logoUrl:
        "https://s3-us-west-2.amazonaws.com/safsms.com/schools/4/images/school_logos/school_logo1.jpg",
      noOfStudents: 254,
      noOfStaff: 20
    },
    {
      schoolCode: "5",
      schoolName: "FEDERAL GOVERNMENT COLLEGE, KEFFI",
      logoUrl:
        "https://s3-us-west-2.amazonaws.com/safsms.com/schools/5/images/school_logos/school_logo1.jpg",
      noOfStudents: 1856,
      noOfStaff: 325
    }
  ],
  "GET /api/dashboard": {
    totalNoOfSchools: 5,
    noOfStudents: 310,
    noOfStaff: 110,
    noOfMaleStudents: 155,
    noOfFemaleStudents: 155,
    noOfMaleStaff: 75,
    noOfFemaleStaff: 35,
    boardingStudents: 0,
    dayStudents: 310,
    teachersPerSubject: {
      ACCT: 10,
      BS: 7,
      GEO: 2,
      ENG: 13,
      PHY: 4,
      BIO: 5,
      PHE: 1,
      MATHS: 6,
      SS: 8,
      GOVT: 8,
      CHEM: 2,
      COMM: 11
    }
  }
};
