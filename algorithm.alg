ALGORITHM analyze_sentence
VAR
    char_count : INTEGER := 0;
    word_count : INTEGER := 1;
    vowel_count : INTEGER := 0;
    c : CHAR;
BEGIN
    WRITE("Enter a sentence ending with a period:");
    
    REPEAT
        READ(c);
        char_count := char_count + 1;

        // Check for vowels
        IF (c = 'a' OR c = 'e' OR c = 'i' OR c = 'o' OR c = 'u' OR
            c = 'A' OR c = 'E' OR c = 'I' OR c = 'O' OR c = 'U') THEN
            vowel_count := vowel_count + 1;
        END_IF

        // Check for spaces to count words
        IF (c = ' ') THEN
            word_count := word_count + 1;
        END_IF

    UNTIL (c = '.')

    // Output the results
    WRITE("Length of sentence: ", char_count);
    WRITE("Number of words: ", word_count);
    WRITE("Number of vowels: ", vowel_count);
END