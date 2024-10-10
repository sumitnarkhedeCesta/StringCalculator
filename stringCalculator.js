function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[\n,]+/; 

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].substring(2)); 
        numbers = parts.slice(1).join("\n"); 
    }

    const numArray = numbers.split(delimiter).map(Number);
    
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = {
    add : add
}