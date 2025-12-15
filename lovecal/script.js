const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const Boy = document.getElementById("Boy");
    const Girl = document.getElementById("Girl");

    // Normalize inputs
    const name1 = Boy.value.trim().toLowerCase().replace(/[^a-z]/g, "");
    const name2 = Girl.value.trim().toLowerCase().replace(/[^a-z]/g, "");

    // ---------- Helper Functions ----------

    const getUniqueLetters = (name) => new Set(name.split(''));

    const countSyllables = (name) => {
        const groups = name.match(/[aeiouy]+/g);
        return groups ? groups.length : 1;
    };

    const soundWeight = (name) => {
        let weight = 0;
        for (let char of name) {
            if ("aeiou".includes(char)) weight += 2;
            else if ("lmnry".includes(char)) weight += 1.5;
            else if ("ktpgd".includes(char)) weight += 0.5;
            else weight += 1;
        }
        return weight;
    };

    const warmCount = (name) =>
        name.split('').filter(c => "aelmn r".includes(c)).length;

    const intenseCount = (name) =>
        name.split('').filter(c => "ktxzq".includes(c)).length;

    // ---------- 1. Letter Affinity (0–30) ----------
    const set1 = getUniqueLetters(name1);
    const set2 = getUniqueLetters(name2);

    const commonLetters = [...set1].filter(l => set2.has(l)).length;
    const avgUnique = (set1.size + set2.size) / 2 || 1;

    const letterAffinity = Math.min(
        30,
        Math.round((commonLetters / avgUnique) * 30)
    );

    // ---------- 2. Phonetic Flow (0–25) ----------
    const weightDiff = Math.abs(soundWeight(name1) - soundWeight(name2));
    const phoneticFlow = Math.max(
        0,
        Math.round(25 - weightDiff)
    );

    // ---------- 3. Syllable Balance (0–15) ----------
    const syllableDiff = Math.abs(
        countSyllables(name1) - countSyllables(name2)
    );

    let syllableScore = 4;
    if (syllableDiff === 0) syllableScore = 15;
    else if (syllableDiff === 1) syllableScore = 12;
    else if (syllableDiff === 2) syllableScore = 8;

    // ---------- 4. Emotional Sound Match (0–20) ----------
    const warm1 = warmCount(name1);
    const warm2 = warmCount(name2);
    const intense1 = intenseCount(name1);
    const intense2 = intenseCount(name2);

    let emotionalScore = 12;
    if (warm1 > intense1 && warm2 > intense2) emotionalScore = 20;
    else if (
        (warm1 > intense1 && intense2 > warm2) ||
        (warm2 > intense2 && intense1 > warm1)
    ) emotionalScore = 16;

    // ---------- 5. Memorability Bonus (0–10) ----------
    let memoryScore = 0;
    if (name1[0] === name2[0]) memoryScore += 4;
    if (name1[name1.length - 1] === name2[name2.length - 1]) memoryScore += 3;
    if (Math.abs(name1.length - name2.length) <= 2) memoryScore += 3;

    // ---------- Final Score ----------
    let finalScore =
        letterAffinity +
        phoneticFlow +
        syllableScore +
        emotionalScore +
        memoryScore;

    finalScore = Math.min(100, Math.max(0, finalScore));

    document.querySelector('h2').textContent = `Result: ${finalScore}%`;

});
