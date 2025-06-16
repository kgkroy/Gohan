class page{
    open(){
        cy.visit("https://www.youtube.com")
    }
   get getSearchbtn(){

        return cy.get('input[name="search_query"]')//.ytSearchboxComponentInput
   }
   get getTypetext(){
    
            return cy.get(".ytSearchboxComponentSearchButton > yt-icon>span>div")
       }
    
       get getValidatetext(){
        
                return cy.get("#channel-title > div.style-scope>div.ytd-channel-name>yt-formatted-string")
           }




}




export default new page