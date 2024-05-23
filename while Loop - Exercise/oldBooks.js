function oldBooks(input){

    let index = 0
    let searchedBook = input[index];
    index++
    let nextBook = input[index]
    index++;
    let isFound = false
    
    
    let bookCount = 0

    while (nextBook !== "No More Books"){
        
        
        if(searchedBook === nextBook){
            isFound = true
            break;
        }
        bookCount++;
        nextBook = input[index];
        index++
        }

if (isFound ){
    console.log(`You checked ${bookCount} books and found it.`)

}else {
    console.log("The book you search is not here!")
    console.log(`You checked ${bookCount} books.`)
}
    }
        
        

       
        
        
        
       
        
        

        

    




oldBooks(["Troy","Stronger","Life Style","Troy"])
oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])
oldBooks(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"])