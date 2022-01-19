/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { daysInMonth } from '../units/month';
import { isNumber } from './type-checks';
import { getDate, getFullYear, getMonth } from './date-getters';
import { isLeapYear } from '../units/year';
import { createDate } from '../create/date-from-array';
/** @type {?} */
var defaultTimeUnit = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0
};
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
export function shiftDate(date, unit) {
    /** @type {?} */
    var _unit = Object.assign({}, defaultTimeUnit, unit);
    /** @type {?} */
    var year = date.getFullYear() + (_unit.year || 0);
    /** @type {?} */
    var month = date.getMonth() + (_unit.month || 0);
    /** @type {?} */
    var day = date.getDate() + (_unit.day || 0);
    if (_unit.month && !_unit.day) {
        day = Math.min(day, daysInMonth(year, month));
    }
    return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
export function setFullDate(date, unit) {
    return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
}
/**
 * @param {?} def
 * @param {?=} num
 * @return {?}
 */
function getNum(def, num) {
    return isNumber(num) ? num : def;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setFullYear(date, value, isUTC) {
    /** @type {?} */
    var _month = getMonth(date, isUTC);
    /** @type {?} */
    var _date = getDate(date, isUTC);
    /** @type {?} */
    var _year = getFullYear(date, isUTC);
    if (isLeapYear(_year) && _month === 1 && _date === 29) {
        /** @type {?} */
        var _daysInMonth = daysInMonth(value, _month);
        isUTC ? date.setUTCFullYear(value, _month, _daysInMonth) : date.setFullYear(value, _month, _daysInMonth);
    }
    isUTC ? date.setUTCFullYear(value) : date.setFullYear(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setMonth(date, value, isUTC) {
    /** @type {?} */
    var dayOfMonth = Math.min(getDate(date), daysInMonth(getFullYear(date), value));
    isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setDay(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setHours(date, value, isUTC) {
    isUTC ? date.setUTCHours(value) : date.setHours(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setMinutes(date, value, isUTC) {
    isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setSeconds(date, value, isUTC) {
    isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setMilliseconds(date, value, isUTC) {
    isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
export function setDate(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @return {?}
 */
export function setTime(date, value) {
    date.setTime(value);
    return date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZXR0ZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvZGF0ZS1zZXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFFakQsZUFBZSxHQUFhO0lBQ2hDLElBQUksRUFBRSxDQUFDO0lBQ1AsS0FBSyxFQUFFLENBQUM7SUFDUixHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxFQUFFLENBQUM7SUFDVCxPQUFPLEVBQUUsQ0FBQztDQUNYOzs7Ozs7QUFFRCxNQUFNLFVBQVUsU0FBUyxDQUFDLElBQVUsRUFBRSxJQUFjOztRQUM1QyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQzs7UUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDOztRQUM3QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7O1FBQzlDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMzQyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFL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O0FBQ2QsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBVSxFQUFFLEtBQWEsRUFBRSxLQUFlO0lBQ3hFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXJFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBVSxFQUFFLEtBQWEsRUFBRSxLQUFlO0lBQ2hFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUMsSUFBVSxFQUFFLEtBQWE7SUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGdldERhdGUsIGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4vZGF0ZS1nZXR0ZXJzJztcbmltcG9ydCB7IGlzTGVhcFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcbmltcG9ydCB7IGNyZWF0ZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcblxuY29uc3QgZGVmYXVsdFRpbWVVbml0OiBUaW1lVW5pdCA9IHtcbiAgeWVhcjogMCxcbiAgbW9udGg6IDAsXG4gIGRheTogMCxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmRzOiAwXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpZnREYXRlKGRhdGU6IERhdGUsIHVuaXQ6IFRpbWVVbml0KTogRGF0ZSB7XG4gIGNvbnN0IF91bml0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFRpbWVVbml0LCB1bml0KTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIChfdW5pdC55ZWFyIHx8IDApO1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIChfdW5pdC5tb250aCB8fCAwKTtcbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpICsgKF91bml0LmRheSB8fCAwKTtcbiAgaWYgKF91bml0Lm1vbnRoICYmICFfdW5pdC5kYXkpIHtcbiAgICBkYXkgPSBNYXRoLm1pbihkYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRGF0ZShcbiAgICB5ZWFyLFxuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICBkYXRlLmdldEhvdXJzKCkgKyAoX3VuaXQuaG91ciB8fCAwKSxcbiAgICBkYXRlLmdldE1pbnV0ZXMoKSArIChfdW5pdC5taW51dGUgfHwgMCksXG4gICAgZGF0ZS5nZXRTZWNvbmRzKCkgKyAoX3VuaXQuc2Vjb25kcyB8fCAwKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RnVsbERhdGUoZGF0ZTogRGF0ZSwgdW5pdDogVGltZVVuaXQpOiBEYXRlIHtcbiAgcmV0dXJuIGNyZWF0ZURhdGUoXG4gICAgZ2V0TnVtKGRhdGUuZ2V0RnVsbFllYXIoKSwgdW5pdC55ZWFyKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRNb250aCgpLCB1bml0Lm1vbnRoKSxcbiAgICBnZXROdW0oZGF0ZS5nZXREYXRlKCksIHVuaXQuZGF5KSxcbiAgICBnZXROdW0oZGF0ZS5nZXRIb3VycygpLCB1bml0LmhvdXIpLFxuICAgIGdldE51bShkYXRlLmdldE1pbnV0ZXMoKSwgdW5pdC5taW51dGUpLFxuICAgIGdldE51bShkYXRlLmdldFNlY29uZHMoKSwgdW5pdC5zZWNvbmRzKSxcbiAgICBnZXROdW0oZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdW5pdC5taWxsaXNlY29uZHMpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldE51bShkZWY6IG51bWJlciwgbnVtPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG51bSkgPyBudW0gOiBkZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGdWxsWWVhcihkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgX21vbnRoID0gZ2V0TW9udGgoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfZGF0ZSA9IGdldERhdGUoZGF0ZSwgaXNVVEMpO1xuICBjb25zdCBfeWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcbiAgaWYgKGlzTGVhcFllYXIoX3llYXIpICYmIF9tb250aCA9PT0gMSAmJiBfZGF0ZSA9PT0gMjkpIHtcbiAgICBjb25zdCBfZGF5c0luTW9udGggPSBkYXlzSW5Nb250aCh2YWx1ZSwgX21vbnRoKTtcbiAgICBpc1VUQyA/IGRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKSA6IGRhdGUuc2V0RnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKTtcbiAgfVxuXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSkgOiBkYXRlLnNldEZ1bGxZZWFyKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1vbnRoKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBjb25zdCBkYXlPZk1vbnRoID0gTWF0aC5taW4oZ2V0RGF0ZShkYXRlKSwgZGF5c0luTW9udGgoZ2V0RnVsbFllYXIoZGF0ZSksIHZhbHVlKSk7XG4gIGlzVVRDID8gZGF0ZS5zZXRVVENNb250aCh2YWx1ZSwgZGF5T2ZNb250aCkgOiBkYXRlLnNldE1vbnRoKHZhbHVlLCBkYXlPZk1vbnRoKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERheShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ0RhdGUodmFsdWUpIDogZGF0ZS5zZXREYXRlKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvdXJzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDSG91cnModmFsdWUpIDogZGF0ZS5zZXRIb3Vycyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNaW51dGVzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDTWludXRlcyh2YWx1ZSkgOiBkYXRlLnNldE1pbnV0ZXModmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ1NlY29uZHModmFsdWUpIDogZGF0ZS5zZXRTZWNvbmRzKHZhbHVlKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1pbGxpc2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSkgOiBkYXRlLnNldE1pbGxpc2Vjb25kcyh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xuICBpc1VUQyA/IGRhdGUuc2V0VVRDRGF0ZSh2YWx1ZSkgOiBkYXRlLnNldERhdGUodmFsdWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGltZShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyKTogRGF0ZSB7XG4gIGRhdGUuc2V0VGltZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGRhdGU7XG59XG4iXX0=