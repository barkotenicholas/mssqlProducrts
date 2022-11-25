CREATE PROCEDURE spCreateOrUpdateProduct (  

    @operationp VARCHAR(200),
    @id VARCHAR(200),
    @name VARCHAR(200),
    @description VARCHAR(200),
    @price INT,
    @imgurl VARCHAR(200),
    @discount INT
    )
    AS
        BEGIN
            IF @operationp = 'insert'
                BEGIN
                    INSERT INTO Products (id,name,description,price,imageurl,discount,isDeleted) VALUES (@id,@name,@description,@price,@imgurl,@discount,0)
                END
            ELSE IF @operationp = 'update'
                BEGIN
                    UPDATE Products SET name = @name ,description = @description , price = @price , imageurl = @imgurl , discount = @discount WHERE id = @id
                END 
        END        
