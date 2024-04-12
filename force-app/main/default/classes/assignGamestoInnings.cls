global class assignGamestoInnings {
   @InvocableMethod
   public static List<List<Inning__c>> run(List<List<Inning__c>> inputInnings) {
       
      List<Team__c> allTeams = [SELECT Id, Abbreviation__c FROM Team__c LIMIT 100];
      
      if (inputInnings != null && inputInnings.size() > 0) {
         //System.debug(Integer.valueOf(inputInnings[0][0].Game__c));
         //Game__c game = [SELECT Id, Game_Sports_Data_ID__c FROM Game__c WHERE Game_Sports_Data_ID__c = :Integer.valueOf(inputInnings[0][0].Game__c)];
         //if (game != null) {
            for (List<Inning__c> inningList : inputInnings) {
               if(inningList != null && inningList.size() > 0 && inningList[0].Game__c != null) {
                  Game__c game = [SELECT Id, Game_Sports_Data_ID__c FROM Game__c WHERE Game_Sports_Data_ID__c = :Integer.valueOf(inningList[0].Game__c)];
                  for (Inning__c inning : inningList) {
                     inning.Game__c = game.Id;
                  }
               }
            }
         //}
      }
      return inputInnings;
   }
}