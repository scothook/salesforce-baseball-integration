import { LightningElement, api } from 'lwc';

export default class LineScore extends LightningElement {

    @api homeTeam = 'Home Team'; // Set default home team name
    @api awayTeam = 'Away Team'; // Set default away team name
    @api innings = []; // Provide inning data in the format: [{ number: 1, home: 2, away: 1 }, ...]

    get homeScores() {
        return this.innings.map(inning => { return { number: inning.number, score: inning.home }; });
    }

    get awayScores() {
        return this.innings.map(inning => { return { number: inning.number, score: inning.away }; });
    }

    get homeTotalRuns() {
        return this.innings.reduce((total, inning) => total + inning.home, 0);
    }

    get awayTotalRuns() {
        return this.innings.reduce((total, inning) => total + inning.away, 0);
    }

    get homeTotalHits() {
        // Implement logic to calculate total hits for home team (if needed)
        return 0;
    }

    get awayTotalHits() {
        // Implement logic to calculate total hits for away team (if needed)
        return 0;
    }

    get homeTotalErrors() {
        // Implement logic to calculate total errors for home team (if needed)
        return 0;
    }

    get awayTotalErrors() {
        // Implement logic to calculate total errors for away team (if needed)
        return 0;
    }
}
