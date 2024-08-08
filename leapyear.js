function isLeapYear(year){
  if(year%400 ===0 || year%4===0 && year%100 !==0) {
    console.log("leap Year: " + year)
  }
  else{
    console.log("not a leap Year: " + year)
  }
}
isLeapYear(2005)