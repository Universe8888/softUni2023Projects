function findHashtags(input) {
    let hashtags = input.match(/#\w+/g);

    let validHashtags = hashtags.filter(tag => /^[#][a-zA-Z]+$/.test(tag));

    validHashtags.forEach(tag => console.log(tag.slice(1)));

}

findHashtags('Nowadays everyone uses # to tag a #special word in #socialMedia');