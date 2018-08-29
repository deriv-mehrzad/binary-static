import { isArrayLike } from 'mobx';

export const getDisplayText = (list, value) => {
    const findInArray = (arr_list) => (arr_list.find(item => item.value === value) || {}).text;
    let text = '';
    if (isArrayLike(list)) {
        text = findInArray(list);
    } else {
        Object.keys(list).some(key => {
            text = findInArray(list[key]);
            return text;
        });
    }
    return text;
};

export const getItemFromValue = (list, value) => {
    const findInArray = (arr_list) => arr_list.findIndex(item => item.value === value);
    let item = {};
    if (isArrayLike(list)) {
        item = { number: findInArray(list), length: list.length };
    } else {
        Object.keys(list).some(key => {
            item = { number: findInArray(list[key]), length: list[key].length };
            return item;
        });
    }
    return item;
};

export const getValueFromIndex = (list, index) => {
    const findInArray = (arr_list) => arr_list[index];
    let result;
    if (isArrayLike(list)) {
        result = findInArray(list);
    } else {
        Object.keys(list).some(key => {
            result = findInArray(list[key]);
            return result.value;
        });
    }
    return result.value;
};

export const getPrevIndex = (index, length) => {
    const prev_index = (index - 1) < 0 ? (length - 1) : index - 1;
    return prev_index;
};

export const getNextIndex = (index, length) => {
    const next_index = (index + 1) === length ? 0 : index + 1;
    return next_index;
};

export const updateItemClass = (element, value) => {
    const list = element.nextSibling.nextSibling.children[0].children || [];
    Array.from(list).map(item => item.classList.remove('highlighted'));
    Array.from(list).find(item => item.getAttribute('value') === value).classList.add('highlighted');
};
