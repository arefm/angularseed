#!/bin/bash

echo -ne 'HTML\t'
find . -type f \( \
    -name '*.html' \) \
    -exec cat '{}' \; | grep -vxch '\s*'

echo -ne 'CSS\t'
find . -type f \( \
    -name '*.css' \) \
    -exec cat '{}' \; | grep -vxch '\s*'

echo -ne 'JavaScript\t'
find . -type f \( \
    -name '*.js' \) \
    -exec cat '{}' \; | grep -vxch '\s*'

echo -ne 'PHP\t'
find . -type f \( \
    -name '*.php' \) \
    -exec cat '{}' \; | grep -vxch '\s*'

echo -ne 'Python\t'
find . -type f \( \
    -name '*.py' \) \
    -exec cat '{}' \; | grep -vxch '\s*'

echo -ne 'C/C++\t'
find . -type f \( \
    -name '*.c' -or \
    -name '*.cpp' -or \
    -name '*.h' -or \
    -name '*.hpp' \) \
    -exec cat '{}' \; | grep -vxch '\s*'