
let Guest_List :string[] = ['Bilawal Bhutto','Shabaz Shareef','imran Khan'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest :string = 'Bilawal Bhutto' ;
let new_Guest :string = 'Asif Ali Zardari ' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News ! We are find Big Table So we are inviting 3 more guests.')

// Array ma 3 Guests add kiyay hain.
Guest_List.unshift('Sir Daniyal Nagori') ;
Guest_List.splice(2 , 0 , 'Kamran Tessori');
Guest_List.push('Hafiz Naeem');

// yahan par mene 6 Guest k array ko print karwaya hai.
for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')

}

// Sorry Message to Guests for not inviting.
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

// yahan par mene Guest remove kiyay hain. 
while(Guest_List.length > 2 ){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

// Hamary bache huwy 2 invited Guests.
for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.  ' + Guest_List[i] + ',\n\nyou are still invited.\n\nThank you!\n\n')
}

// Mene sare Guests array se remove kar diye hain.  
Guest_List.splice(0, 2);
console.log(Guest_List);



