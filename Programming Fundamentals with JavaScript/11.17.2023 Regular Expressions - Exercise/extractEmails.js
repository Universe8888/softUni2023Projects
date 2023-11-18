// function extractEmails(text) {
//     const emailRegex = /\b[A-Za-z0-9](?:[._-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*(?:\.[A-Za-z]{2,})+\b/g;
//     let match;
//     while ((match = emailRegex.exec(text)) !== null) {
//         console.log(match[0]);
//     }
// }
// const inputText = "Contact emails are: s.miller@mit.edu, j.hopking@york.ac.uk, invalid.email@, mike@.unknown.domain, valid.email@valid-domain.com.";
// extractEmails(inputText);

// //75 / 100




function extractEmails(text) {
    function isValidEmail(email) {
        const emailPattern = /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*@[A-Za-z0-9]+(-[A-Za-z0-9]+)*(\.[A-Za-z]{2,})+$/;
        return emailPattern.test(email);
    }

    const potentialEmails = text.split(' ').filter(word => word.includes('@'));

    potentialEmails.forEach(word => {
        let cleanedWord = word.replace(/[.,;!?]$/, '');
        if (isValidEmail(cleanedWord)) {
            console.log(cleanedWord);
        }
    });
}
const inputText = "Please contact us at: support@github.com, invalid.email@, mike@.unknown.domain.";
extractEmails(inputText);

// 100 / 100