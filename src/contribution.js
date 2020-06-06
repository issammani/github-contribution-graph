import {getPreviousDays} from './date.js';

/** Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
const generateRandomNumberBetween = (min, max) => 
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min); 

// contribution = {date, count}
// Generate n mock contributions from today
const generateMockContributions = function*(numberOfContributions, maxContributionCount, chunkCount){
    let today = new Date();
    for(let day of getPreviousDays(today, numberOfContributions)){
        let count = generateRandomNumberBetween(0, maxContributionCount);
        yield {
            day: day, 
            count: count, 
            chunkIndex : count ? (Math.floor(count/(maxContributionCount/chunkCount)) ? Math.floor(count/(maxContributionCount/chunkCount)) : 1) : 0 
        };
    }
};


export default generateMockContributions;
