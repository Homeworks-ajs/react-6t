/**
 * Возвращает объект {@link Date} со смещением времени 
 * по часовому поясу.
 * @param {Number} timeZone 
 * @returns 
 */
const getDateWithOffset = (timeZone) => {
  const now = Date.now();
  const date = new Date(now);
  const offset = date.getTimezoneOffset();
  return new Date((now + offset * 60000) + timeZone * 3600000 );
}

/**
 * Декомпозиция объекта даты на объект с параметрами для вращения 
 * стрелок циферблата
 * @param {Date} dateObj 
 * @returns 
 */
const getDialArrowData = (dateObj) => {
  const DEG = 6;
  return {
    hh: dateObj.getHours() * 30,
    mm: dateObj.getMinutes() * DEG,
    ss: dateObj.getSeconds() * DEG
  }
}

export {getDateWithOffset, getDialArrowData};