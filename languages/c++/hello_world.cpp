#include <iostream>
// ^ Access standard library name iostream through header

// main is the main program that is run
int main() {
    // Chaining commands
    // (std::cout << "Hello World") << std::endl;
    // (std::cout << "Hello World") returns std:cout
    std::cout << "Hello World" << std::endl;

    // 0 == success, all other numbers == failure
    return 0;
}

// Compile: g++ hello_world.cpp -o <filename (defaults to a.out)>
// Run: ./<filename>
