const data = `// This is a sample election file.
// It's just a text file in (Comma-Separated Value) format.
// The great thing about CSV is that it's super common and lets you
// copy & paste election results from Excel and Google Sheets!

// The first line is the header and MUST contain a column for each candidate.
// It may also include other columns such as VoterId, Email, IP Address, etc.
// Editing the header lets you edit the way candidate names as displayed  

voterId,Adam,Becky,Cindy,Dylan,Eliza

// A fun thing to try is editing this data to change the election results.
// By default, the election is a TIE between Dylan and Eliza.

// Edit the LAST number in the following row to change the election results
// If you leave it as 3, the election is a TIE
// If you set it below 3, Dylan wins!
// If you set it above 3, Eliza wins!

Swing Voter ==>,0,0,5,3,3

// The remaining rows are ballots for each of the other voters in the election.
,4,0,3,3,2
,0,0,0,3,1
,2,0,0,3,4
,1,5,0,3,5
`;

export default data;
