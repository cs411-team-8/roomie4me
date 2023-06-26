let User = require('../models/userModel')

/**
 *
 * @param user1 {User}
 * @param user2 {User}
 * @param preferences
 * @returns {number}
 */
function calcMatch(user1, user2, preferences) {
  let ageScore = preferences.similarAge;
  let langScore = preferences.similarLanguages;
  let religionScore = preferences.similarReligion;
  let internationalScore = preferences.similarCountry;
  let degreeProgramScore = preferences.similarDegreeProgram;
  let drugsScore = preferences.similarDrugIntake;
  let sleepScheduleScore = preferences.similarSleepSchedule;
  return 100
} //todo: I need to come up with a fancy algorithm to generate a similarity match between 1-100 using this data

module.exports = {calcMatch}