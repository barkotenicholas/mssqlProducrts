CREATE OR ALTER PROCEDURE spGetAllProducts
    AS
        SET NOCOUNT ON
        BEGIN
        SELECT * FROM Products WHERE isDeleted  = 0;
        END
    