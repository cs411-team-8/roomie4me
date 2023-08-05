import {User, UserModel} from '../models/userModel'

/**
 *
 * @param user1 {User}
 * @param user2 {User}
 * @param preferences user1's preferences about a specific trait. For each trait category,
 * user rate their preferences on a scale of 1-5 where:
 * 1= I WILL STRONGLY NOT prefer to be matched with someone with the same traits as me in this category
 * 2= I WILL NOT prefer be matched with someone with the same traits as me in this category
 * 3= I don't care
 * 4= I WILL prefer to be matched with someone with the same traits as me in this category
 * 5= I WIlL STRONGLY prefer to matched with someone with the same traits as me in this category
 *
 * edit: maybe instead the pick a weight 1-5. Higher weights count more in the weighted average.
 * and you can't pick someone "different" from you
 * then we add weights together
 * w1+w2+w3+w4+...+wn=total weight
 * wn/total weight=percent the nth weight counts from 0-1
 * @returns {number}
 */
function calcMatch(user1 : User, user2 : User, preferences : any) {
  // each category is worth up to 10 points

  /*
  // if age is with in 1 yr, its 10/10 pts
  // it scales between 0-10 from yr 1-5 where 5yr age difference is 0 pts
  // then we take the result and multiply by the weight
  let ageScore = getWeights(preferences.similarAge) * getSimilarity(getAge(user1.dob), getAge(user2.dob), 5);

  // formula is: (number of languages in command / number of total languages user1 speaks) * 10 * weight
  let langScore = getWeights(preferences.similarLanguages) * getSimilarity(user1.languages, user2.languages);

  // if same religion: 10 * preferences
  // else 10 * (1-preferences)
  let religionScore = getWeights(preferences.similarReligion) * getSimilarity(user1.religion, user2.religion);

  // if same international country/domestic city: 10 * pref
  // else 10*(1-prefs)
  let homelandScore = getWeights(preferences.similarCountry) * getSimilarity(user1.internationalStatus.country, user2.internationalStatus.country);

  // number of similar minors or majors / user1's total minors and majors
  // then we take result and mult by weight
  let degreeProgramScore = getWeights(preferences.similarDegreeProgram)
      * getSimilarity(user1.degreeProgram.majors.concat(user1.degreeProgram.minors), user2.degreeProgram.majors.concat(user2.degreeProgram.minors));

  let drugsScore = getWeights(preferences.similarDrugIntake) * getSimilarity(user1.drugs.other, user2.drugs.other);

  let sleepScheduleScore = getWeights(preferences.similarSleepSchedule); //todo: too complicated for now
  */
  return 100;
} //todo: I need to come up with a fancy algorithm to generate a similarity match between 1-100 using this data

/**
 * @param date {Date}
 */
function getAge(date : Date) {
  let birthdate = new Date(date);
  let cur = new Date();
  let diff = cur.getDate() - birthdate.getDate(); // This is the difference in milliseconds
  let age = diff / 31557600000; // Divide by 1000*60*60*24*365.25
  return age;
}

/**
 * @param value the value
 * @param compareTo the other value that we are comparing to
 * @param range an optional parameter only valid for number types to specify how far value and target can be
 * @returns {Number} from 0-1 were 0 means completely different and 1 means perfect match
 */
function getSimilarity(value : any, compareTo : any, range : number) {
  if (value instanceof Array) {
    // count matches
    let common = countCommonElements(value, compareTo);
    return common / value.length;
  } else if (value instanceof Boolean) {
    // return 0 or 1
    return value === compareTo ? 1 : 0;
  } else if (value instanceof Number) {
    // compare distance based on range if value==compareTo ret 1
    // if abs(value-compareTo) - range > 0 ret 0
    // else ret abs(value-compareTo) / range
    let numericValue = value as number;
    let comparedValue = compareTo as number;

    if (numericValue === compareTo) {
      return 1;
    } else if (Math.abs(numericValue - comparedValue) - range > 0) {
      return 0;
    } else {
      return Math.abs(numericValue - comparedValue) / range;
    }
  } else {
    throw "Unsupported type";
  }
}

function countCommonElements(array1 : Array<any>, array2 : Array<any>) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      count++;
    }
  }
  return count;
}

function getWeights(scale : Number) : Number {
  if (scale === 1) {
    return 0.0;
  } else if (scale === 2) {
    return 0.3;
  } else if (scale === 3) {
    return 0.5;
  } else if (scale === 4) {
    return 0.7;
  } else if (scale === 5) {
    return 1;
  } else {
    throw new Error('Invalid weight');
  }
}

module.exports = { calcMatch };
