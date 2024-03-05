

let Guest_List :string[] = ['Bilawal Bhutto','Shabaz Shareef','imran Khan'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

}

let absent_Guest :string = 'Bilawal Bhutto' ;

let new_Guest :string = 'Asif Ali Zardari ' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)
