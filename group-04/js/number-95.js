function test(text) {
    return text
        .split(" ")
        .map((word) =>
            !(word.length % 2) ? word[word.length - 1] : word[Math.floor(word.length / 2)]
        )
        .join(", ");
}
text = "Number of even numbers and their sum"
console.log("Original string: " + text)
result = test(text)
console.log("Number of even numbers and their sum: " + result);
text = "JavaScript Math and Numbers- Exercises Practice Solution"
console.log("Original string: " + text)
result = test(text)
console.log("Number of even numbers and their sum: " + result);
