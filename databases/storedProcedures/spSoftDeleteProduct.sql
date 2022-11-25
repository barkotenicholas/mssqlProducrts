CREATE PROCEDURE spSoftDelete (@id VARCHAR(200))
    AS
    BEGIN
    UPDATE Products SET isDeleted = 1 WHERE id = @id;
    END
    