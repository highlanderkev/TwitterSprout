import React from "react";
import MenuItem from 'material-ui/MenuItem';

export const STYLE = {
//   paper: {
//     display: 'inline-block',
//     float: 'left',
//     margin: '16px 32px 16px 0',
//   },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

export const UserSelectionUtils = {
    parseTweetForUserNames: (tweet, previousTweetArray) => {
        if(tweet && tweet.length > 0){
            let tweetArray = tweet.split(' ');
            return tweetArray.map((word, index) => {
                return {
                    word: word,
                    length: word.length,
                    hasAtSymbol: word.includes('@') ? true : false,
                    isResolved: previousTweetArray && 
                        previousTweetArray[index] && 
                        previousTweetArray[index].word === word &&
                        previousTweetArray[index].hasOwnProperty('isResolved') ? previousTweetArray[index].isResolved : false
                };
            });
        }
    },
    getFirstUnResolvedUserName(tweetArray){
        let unResolvedUserNames = tweetArray.filter((elem) => {
            return elem.hasAtSymbol && !elem.isResolved && elem.length > 2 ? true: false;
        });
        return unResolvedUserNames && unResolvedUserNames.length > 0 ? unResolvedUserNames[0].word : null;
    },
    mapRawUsersToListSuggestions: (users) => {
        return users.map((user) => {
            return {
                text: user.screen_name,
                value: (<MenuItem primaryText={`@${user.screen_name}`} secondaryText={user.name} leftIcon={<img src={user.profile_image_url_https} style={STYLE.rightIcon}/>}/>)
            };
        });
    }
}