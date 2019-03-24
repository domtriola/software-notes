#include <iostream>
using namespace std;

// Notes from http://www.cplusplus.com/doc/tutorial/pointers/

// Void pointer example
void increment(void* loc, int psize) {
    if (psize == sizeof(char)) {
        char * pchar;
        pchar = (char*)loc;
        ++(*pchar);
    }
    if (psize == sizeof(int)) {
        int * pint;
        pint = (int*)loc;
        ++(*pint);
    }
}

// Function pointer example
int calculate(int a, int b, int (*func)(int, int)) {
    int result;
    result = (*func)(a, b);
    return result;
}

int add(int a, int b) {
    return a + b;
}
int multiply(int a, int b) {
    return a * b;
}

/*
 * Start Here
 *******************************/
int main() {
    int foo, bar;

    // Initialize foo as a pointer
    int * pointer;

    // Assign a value to a variable to store the value at some location in memory
    foo = 25;

    // Assign the location of 'a' to 'pointer'
    pointer = &foo;

    // Assign the value stored at 'a' to 'bar'
    bar = foo;

    cout << "foo: " << foo << '\n';          // 25
    cout << "pointer: " << pointer << '\n';  // 0x7ffeeda42ad8 (determined at runtime)
    cout << "bar: " << bar << '\n';          // 25

    *pointer = 8;

    // Foo's value changes, since the value the pointer points to changes and
    // the pointer points to foo's address
    cout << "foo: " << foo << '\n';          // 8
    cout << "bar: " << bar << '\n';          // 25

    // Actual addresses:
    cout << "foo: " << &foo << '\n';          // 0x7ffeeda42ad8
    cout << "pointer: " << pointer << '\n';   // 0x7ffeeda42ad8
    cout << "bar: " << &bar << '\n';          // 0x7ffeeda42ad4 <- different


    /*
     * Pointers and arrays
     ********************************/
    int nums [5];
    int * p;

    // Assign the pointer to the array to reference the first memory slot in the
    // array
    p = nums;
    *p = 1;

    // Increment the pointer to move to the next slot
    p++;
    *p = 2;

    // You can also get the address at a specific location
    p = &nums[2];
    *p = 3;

    // Or use math to get to the index you want
    p = nums + 3;
    *p = 4;

    p = nums;
    *(p+4) = 5;

    for (int i = 0; i < 5; i++) {
        cout << nums[i] << '\n';
        // 1, 2, 3, 4, 5
    }

    // The same behavior happens for string literals:
    const char * charPtr = "testing";
    cout << charPtr[2] << '\n';  // 's'
    cout << charPtr[7] << '\n';  // '\0'


    /*
     * Differnet kinds of pointers
     ********************************/
    // Different pointers take up a different amount of space:
    char * charPointer;    // 1 byte
    short * shortPointer;  // 2 bytes
    long * longPointer;    // 4 bytes

    char a = 'a';
    short b = 2;
    long c = 3;

    charPointer = &a;
    shortPointer = &b;
    longPointer = &c;

    cout << "charPointer: " << sizeof(charPointer) << '\n';   // ah����
    cout << "shortPointer: " << sizeof(shortPointer) << '\n'; // 0x7ffee2097a7c
    cout << "longPointer: " << sizeof(longPointer) << '\n';   // 0x7ffee2097a70

    // Pointers to pointers
    char ** pointerPtr;
    pointerPtr = &charPointer;
    cout << "pointerPtr: " << pointerPtr << '\n';   // 0x7ffee51f5a88

    // Void pointers can be used to point to any data-type, but the data cannot
    // be dereferenced from them without casting the pointer to a type
    // See increment function at top of file for usage of void pointer
    char x = 'x';
    int forty = 40;
    increment(&x, sizeof(x));
    increment(&forty, sizeof(forty));
    cout << "x++: " << x << '\n';
    cout << "forty++: " << forty << '\n';

    // Null pointers are pointers where the values don't point to any meaningful
    // memory address. (Non-null pointers do point to real locations in memory
    // even if there is no associated value at the location).
    int * m = 0;
    int * n = nullptr;
    if (m == n) {
        cout << "m == n" << '\n';
    }


    // Pointers to functions
    // Use these as a way to pass anonymous functions to another function
    cout << calculate(2, 3, add) << '\n';       // 5
    cout << calculate(2, 3, multiply) << '\n';  // 6

    return 0;
}
