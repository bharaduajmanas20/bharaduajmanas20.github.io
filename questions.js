let questions = [
    {
    numb: 1,
    question: "Given the following trigger implementation:trigger leadTrigger on Lead (before update){final ID BUSINESS_RECORDTYPEID = '012500000009Qad';for(Lead thisLead : Trigger.new){if(thisLead.Company != null && thisLead.RecordTypeId != BUSINESS_RECORDTYPEID){ thisLead.RecordTypeId = BUSINESS_RECORDTYPEID;}}}The developer receives deployment errors every time a deployment is attempted from Sandbox to Production.What should the developer do to ensure a successful deployment?",
    answer: "Ensure BUSINESS_RECORDTYPEID is pushed as part of the deployment components.",
    options: [
      "Ensure BUSINESS_RECORDTYPEID is retrieved using Schema.Describe calls.",
      "Ensure a record type with an ID of BUSINESS_RECORDTYPEID exists on Production prior to deployment.",
      "Ensure BUSINESS_RECORDTYPEID is pushed as part of the deployment components.",
      "Ensure a record type with an ID of BUSINESS_RECORDTYPEID exists on Production prior to deployment."
    ]
  },
    {
    numb: 2,
    question: "Which three statements are true regarding custom exceptions in Apex? (Choose three.)",
    answer: "A custom exception class name must end with Exception.",
    options: [
      "A custom exception class name must end with Exception.",
      "A custom exception class cannot contain member variables or methods.",
      "A custom exception class must extend the system Exception class.",
      "A custom exception class can implement one or many interfaces."
    ]
  },
  {
    numb: 3,
    question: "The sales management team at Universal Containers requires that the Lead Source field of the Lead record be populated when a Lead is converted. What should be used to ensure that a user populates the Lead Source field prior to converting a Lead?",
    answer: "Validation Rule",
    options: [
      "Process Builder",
      "workflow Rule",
      "Validation Rule",
      "Formula Field"
    ]
  },
    {
    numb: 4,
    question: "Which standard field is required when creating a new contact record?",
    answer: "LastName",
    options: [
      "A. FirstName",
      "Name",
      "LastName",
      "AccountId"
    ]
  },
    {
    numb: 5,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 6,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 7,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 8,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 9,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 10,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 11,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 12,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 13,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 14,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 15,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 16,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 17,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 18,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 19,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 20,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 21,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 22,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 23,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 24,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 25,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 26,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 27,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 28,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 29,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 30,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 31,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 32,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 33,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 34,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 35,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 36,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 36,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 37,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 38,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 39,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  }, 
  {
    numb: 40,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 41,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 42,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 43,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 44,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 45,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 46,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 47,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 48,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 49,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
  {
    numb: 50,
    question: "",
    answer: "",
    options: [
      "",
      "",
      "",
      ""
    ]
  },
]