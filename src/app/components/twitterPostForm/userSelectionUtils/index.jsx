import React from "react";
import MenuItem from 'material-ui/MenuItem';

export const STYLE = {
  ICON: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const wordWasPreviouslyResolved = (word, index, previousWordArray) => {
    return previousWordArray && previousWordArray[index] && previousWordArray[index].word === word &&
        previousWordArray[index].hasOwnProperty('isResolved') ? previousWordArray[index].isResolved : false;
};

const wordStartsWithAtSymbol = (word = '') => {
    return word.includes('@') && word.startsWith('@');
};

const toWords = (word) => {
    return word.word;
};

export const UserSelectionUtils = {
    buildWordArray: (tweet = '', previousWordArray = []) => {
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
    updateWordArrayWithSelection: (text = '', wordArray = []) => {
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
    joinWords: (wordArray = []) => {
        let words = wordArray.map(toWords);
        return words.join(' ');
    },
    getUnresolvedUsername: (wordArray = []) => {
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
    mapRawUsersToListSuggestions: (users = []) => {
        return users.map((user) => {
            return {
                text: `@${user.screen_name}`,
                value: (<MenuItem primaryText={`@${user.screen_name}`} secondaryText={user.name} leftIcon={<img src={user.profile_image_url_https} style={STYLE.ICON}/>}/>)
            };
        });
    }
}