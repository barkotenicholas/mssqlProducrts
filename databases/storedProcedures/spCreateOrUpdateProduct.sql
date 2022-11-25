CREATE
OR ALTER PROCEDURE spCreateOrUpdateProduct (
    @id VARCHAR(200),
    @name VARCHAR(200),
    @description VARCHAR(200),
    @price INT,
    @imgurl VARCHAR(200),
    @discount INT
) AS BEGIN IF EXISTS (
    SELECT * FROM Products WHERE id = @id
) BEGIN
UPDATE Products
SET name = @name,
    description = @description, 
    price = @price,
    imageurl = @imgurl,
    discount = @discount
WHERE id = @id
END
ELSE BEGIN
INSERT INTO Products (
        id,
        name,
        description,
        price,
        imageurl,
        discount,
        isDeleted
    )
VALUES (
        @id,
        @name,
        @description,
        @price,
        @imgurl,
        @discount,
        0
    )
END
END