global class assignStadiumsToGames {
   @InvocableMethod
   public static List<List<Game__c>> run(List<List<Game__c>> inputGames) {
       
      List<Stadium__c> allStadiums = [SELECT Id,Stadium_Sports_Data_ID__c FROM Stadium__c LIMIT 100];
      
      Map<String, Id> idMap = new Map<String, Id>();
      
      for (Stadium__c stadium : allStadiums) {
          idMap.put(String.valueOf(stadium.Stadium_Sports_Data_ID__c),stadium.Id);
      }
       
       
      for (List<Game__c> gameList : inputGames) {
          for (Game__c game : gameList) {
              game.Stadium__c = idMap.get(game.Stadium__c);
          }
      } 
      
     
      return inputGames;
   }
}