// For this task switch is the keyword
// In some cases, use the switch statement to look more clearly than the if..else statement.
// Your task is to complete function ```howManydays``` :
// function accept 1  parameters:```month```, means the month of year, different month has different days (refer to the following table),
// return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
//
// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

function howManydays(month){
  let days;
  switch (month){
     case 2: return days = 28
     case 4:
     case 6:
     case 9:
     case 11: return days = 30
  };
  return days = 31;
};
