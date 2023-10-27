global class assignTeamstoGames {
   @InvocableMethod
   public static List<List<Game__c>> run(List<List<Game__c>> inputGames) {
       
      List<Team__c> allTeams = [SELECT Id,Abbreviation__c FROM Team__c LIMIT 100];
      
      Map<String, Id> abbreviationMap = new Map<String, Id>();
      
      for (Team__c team : allTeams) {
          abbreviationMap.put(team.Abbreviation__c,team.Id);
      }
       
       
       
       
      for (List<Game__c> gameList : inputGames) {
          for (Game__c game : gameList) {
              game.Away_Team__c = abbreviationMap.get(game.Away_Team__c);
              game.Home_Team__c = abbreviationMap.get(game.Home_Team__c);
          }
      } 
      
      
     
      return inputGames;
   }
}