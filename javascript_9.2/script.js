let programming = {
    languages: ["JS", "PHP", "React"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "IronMan"
};
programming.languages.push('Go');
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

for (let i = 0; i < programming.languages.length; i++) {
    console.log(programming.languages[i]);
};

for (let language of programming.languages) {
    console.log(language);
};

for (let key in programming) {
    console.log(key);
};

for (let key in programming) {
    console.log(programming[key]);
}
