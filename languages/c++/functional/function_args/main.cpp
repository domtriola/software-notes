#include <iostream>
#include <numeric>
#include <vector>

double product(const std::vector<int> &values)
{
  // Use std library when possible to benefit from different implementations
  // in different systems and c++ versions
  return std::accumulate(
    values.begin(),
    values.end(),
    1,
    std::multiplies<int>() // passing a function as arg to accumulate
  );
}

int main(int argc, char *argv[])
{
  std::cout << product({1, 2, 3}) << '\n';
}
