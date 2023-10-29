function sieve_Of_Eratosthenes(n) {
    const sieve = []
    const primes_set = []
    for (let i = 2; i <= n; ++i) {
        if (!sieve[i]) {
            primes_set.push(i)
            for (let j = i << 1; j <= n; j += i) {
                sieve[j] = true
            }
        }
    }
    return primes_set
}
console.log(sieve_Of_Eratosthenes(5))
console.log(sieve_Of_Eratosthenes(11))
console.log(sieve_Of_Eratosthenes(30))
