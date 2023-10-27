global class assignGamestoInnings{
   @InvocableMethod
   public static List<List<Inning__c>> run(List<List<Inning__c>> inputInnings) {
       
      List<Team__c> allTeams = [SELECT Id,Abbreviation__c FROM Team__c LIMIT 100];
      Game__c game = [SELECT Id,Game_Sports_Data_ID__c FROM Game__c WHERE Game_Sports_Data_ID__c = :integer.valueof(inputInnings[0][0].Game__c)];
      
      for (List<Inning__c> inningList : inputInnings) {
          for (Inning__c inning : inningList) {
              inning.Game__c = game.Id;
          }
     }
      return inputInnings;
   }
}