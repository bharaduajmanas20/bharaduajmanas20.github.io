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
    numb: 4,
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
]