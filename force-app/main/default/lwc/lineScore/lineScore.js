import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

import HOME_TOTAL_RUNS_FIELD from "@salesforce/schema/Game__c.Home_Team_Runs__c"
import AWAY_TOTAL_RUNS_FIELD from "@salesforce/schema/Game__c.Away_Team_Runs__c"
import HOME_TOTAL_HITS_FIELD from "@salesforce/schema/Game__c.Home_Team_Hits__c"
import AWAY_TOTAL_HITS_FIELD from "@salesforce/schema/Game__c.Away_Team_Hits__c"
import HOME_TOTAL_ERRORS_FIELD from "@salesforce/schema/Game__c.Home_Team_Errors__c"
import AWAY_TOTAL_ERRORS_FIELD from "@salesforce/schema/Game__c.Away_Team_Errors__c"
import HOME_TEAM_FIELD from "@salesforce/schema/Game__c.Home_Team__c"
import AWAY_TEAM_FIELD from "@salesforce/schema/Game__c.Away_Team__c"

const fields = [HOME_TOTAL_RUNS_FIELD, AWAY_TOTAL_RUNS_FIELD, HOME_TOTAL_HITS_FIELD, AWAY_TOTAL_HITS_FIELD, HOME_TOTAL_ERRORS_FIELD, AWAY_TOTAL_ERRORS_FIELD, HOME_TEAM_FIELD, AWAY_TEAM_FIELD];

export default class LineScore extends LightningElement {

    @api recordId;
    error;
    records;

    @wire(getRecord, { recordId: "$recordId", fields}) Game__c;

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Innings__r',
        fields: ['Inning__c.Inning_Number__c', 'Inning__c.Away_Team_Runs__c', 'Inning__c.Home_Team_Runs__c']
    })
    listInfo({ error, data }) {
        if (data) {
          this.records = data.records;
          this.error = undefined;
        } else if (error) {
          this.error = error;
          this.records = undefined;
        }
    }

    get homeTeam() {
        return getFieldValue(this.Game__c.data, HOME_TEAM_FIELD);
    }

    get awayTeam() {
        return getFieldValue(this.Game__c.data, AWAY_TEAM_FIELD);
    }

    get homeTotalRuns() {
        return getFieldValue(this.Game__c.data, HOME_TOTAL_RUNS_FIELD);
    }

    get awayTotalRuns() {
        return getFieldValue(this.Game__c.data, AWAY_TOTAL_RUNS_FIELD);
    }

    get homeTotalHits() {
        return getFieldValue(this.Game__c.data, HOME_TOTAL_HITS_FIELD);
    }

    get awayTotalHits() {
        return getFieldValue(this.Game__c.data, AWAY_TOTAL_HITS_FIELD);
    }

    get homeTotalErrors() {
        return getFieldValue(this.Game__c.data, HOME_TOTAL_ERRORS_FIELD);
    }

    get awayTotalErrors() {
        return getFieldValue(this.Game__c.data, AWAY_TOTAL_ERRORS_FIELD);
    }
}
