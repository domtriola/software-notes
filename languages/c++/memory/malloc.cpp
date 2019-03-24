#include <stdio.h>  // printf, scanf, NULL
#include <stdlib.h> // malloc, free, rand

// Notes from http://www.cplusplus.com/reference/cstdlib/malloc/

int main() {
    // malloc allocates memory of a certain size and returns a pointer to the
    // beginning of the block
    int i,n;
    char * buffer;

    printf("How long does the string need to be?");
    scanf("%d", &n);

    buffer = (char*) malloc(n + 1);
    if (buffer == NULL) exit(1);

    printf("rand(): %d", rand());
    printf("rand(): %d", rand());
    printf("rand(): %d", rand());

    for (i = 0; i < n; i++) {
        buffer[i] = rand() % 26 + 'a';
    }
    buffer[i] = '\0';

    printf("Random string: %s\n", buffer);
    free(buffer);

    return 0;
}
