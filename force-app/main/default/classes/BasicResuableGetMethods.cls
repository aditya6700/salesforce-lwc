public class BasicResuableGetMethods {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountByName(String accountName, String accountIndustry){
        try {
            System.debug(accountName + ' --- ' + accountIndustry);

            String nameLike = '';
            String industryLike = '';
            String likeString = '';

            if (accountName != null && !String.isBlank(accountName)) {
                nameLike = 'NAME LIKE \'%' + String.escapeSingleQuotes(accountName) + '%\'';
            }
            if (accountIndustry != null && !String.isBlank(accountIndustry)) {
                industryLike = 'Industry LIKE \'%' + String.escapeSingleQuotes(accountIndustry) + '%\'';
            }

            if (!String.isBlank(accountIndustry) && !String.isBlank(accountName)) {
                System.debug('both not null or empty');
                likeString = nameLike + ' AND ' + industryLike;
            } else if (!String.isBlank(accountIndustry)) {
                System.debug('industry not null or empty');
                likeString = industryLike;
            } else if (!String.isBlank(accountName)) {
                System.debug('account not null or empty');
                likeString = nameLike;
            }

            System.debug('Final likeString: ' + likeString);

            String queryString = 'SELECT Id, Name, Industry, AccountNumber '; 
            queryString += ' FROM Account ';
            if (!String.isBlank(likeString)) {
                queryString += ' WHERE ' + likeString;
            }
            queryString += ' WITH SECURITY_ENFORCED ';
            queryString += ' LIMIT 25';
			
            system.debug('query : ' + queryString);
            return Database.query(queryString);
              
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}