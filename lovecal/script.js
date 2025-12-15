const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const Boy = document.getElementById("Boy");
    const Girl = document.getElementById("Girl");

    // Step 1: Clean the inputs (remove spaces, make lowercase)
    // This ensures "John" and "john" give the same result
    const name1 = Boy.value.trim().toLowerCase();
    const name2 = Girl.value.trim().toLowerCase();

    // Combine them into one string to loop through easily
    const combinedNames = name1 + name2;

    // Step 2: The "Think Harder" Algorithm
    // We create a hash based on the unique character codes
    let totalScore = 0;

    for (let i = 0; i < combinedNames.length; i++) {
        // charCodeAt() gives the unique number for each letter (e.g., 'a' is 97)
        totalScore += combinedNames.charCodeAt(i);
    }

    // Optional: Add a "Magic Number" or multiply to mix it up further
    // totalScore = totalScore * 3; 

    // Step 3: Get the percentage (0 - 100)
    const result = totalScore % 101; 

    document.querySelector('h2').textContent = `Result: ${result}%`;
    
    // FIX: The function is .reset(), not .rest()

});

