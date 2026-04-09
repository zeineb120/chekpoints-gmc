PROCEDURE dot_product(v1, v2 : ARRAY_OF FLOAT, VAR ps : FLOAT)
VAR
    i : INTEGER;
BEGIN
    ps := 0;
    FOR i FROM 0 TO v1.length - 1 DO
        ps := ps + (v1[i] * v2[i]);
    END_FOR
END

ALGORITHM Orthogonal_Check
VAR
    v1, v2 : ARRAY_OF FLOAT[10];
    ps : FLOAT;
    i, n : INTEGER;
BEGIN
    Write("Enter the number of pairs:");
    Read(n);

    FOR i FROM 1 TO n DO
        // Assume logic here to fill v1 and v2 for each pair
        dot_product(v1, v2, ps);
        
        IF (ps = 0) THEN
            Write("Vectors are orthogonal");
        ELSE
            Write("Vectors are not orthogonal");
        END_IF
    END_FOR
END