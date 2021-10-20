import * as React from "react";
import { MenuItem } from '@material-ui/core';

export const STYLE = {
  ICON: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const wordWasPreviouslyResolved = (word: any, index: any, previousWordArray: any[]) => {
    return previousWordArray && previousWordArray[index] && previousWordArray[index].word === word &&
        previousWordArray[index].hasOwnProperty('isResolved') ? previousWordArray[index].isResolved : false;
};

const wordStartsWithAtSymbol = (word = '') => {
    return word.includes('@') && word.startsWith('@');
};

const toWords = (word: any) => {
    return word.word;
};

export const UserSelectionUtils = {
    buildWordArray: (tweet = '', previousWordArray: any[] = []) => {
        let wordArray = tweet.split(' ');
        return wordArray.map((word, index) => {
            return {
                word: word,
                length: word.length,
                startsWithAtSymbol: wordStartsWithAtSymbol(word),
                isResolved: wordWasPreviouslyResolved(word, index, previousWordArray)
            };
        });
    },
    updateWordArrayWithSelection: (text = '', wordArray: any[] = []) => {
        return wordArray.map((word) => {
            if(word.startsWithAtSymbol && wordStartsWithAtSymbol(text) && !word.isResolved){
                return {
                    word: text,
                    length: text.length,
                    startsWithAtSymbol: true,
                    isResolved: true
                };
            }else{
                return word;
            }
        });
    },
    joinWords: (wordArray: any[] = []) => {
        let words = wordArray.map(toWords);
        return words.join(' ');
    },
    getUnresolvedUsername: (wordArray: any[] = []) => {
        let result = null;
        let unResolvedUserNames = wordArray.filter((word) => {
            return word.startsWithAtSymbol && !word.isResolved && word.length > 2 ? true: false;
        });
        if(unResolvedUserNames && unResolvedUserNames.length > 0){
            let firstUnresolved = unResolvedUserNames.shift();
            if(firstUnresolved && firstUnresolved.hasOwnProperty('word')){
                result = firstUnresolved.word;
            }
        }
        return result;
    },
    mapRawUsersToListSuggestions: (users: any[] = []) => {
        return users.map((user) => {
            return {
                text: `@${user.screen_name}`,
                value: (<MenuItem>{user.screen_name}</MenuItem>)
            };
        });
    }
}
