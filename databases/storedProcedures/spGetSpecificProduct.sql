CREATE PROCEDURE getGetSpecificProduct (@id VARCHAR(200))
    AS
        SET NOCOUNT OFF
        BEGIN
            SELECT *  FROM Products WHERE id = @id;
        END 

EXEC getGetSpecificProduct 'qwasd'