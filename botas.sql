CREATE TABLE Usuario 
(  
    Id int PRIMARY KEY,       
    Nombre text not null,        
    Correo text not null, 
    password text not null             
);

insert into Usuario (Id, Nombre, Correo, password) values
(9898988,'javier catalan','jajaja123@yahoo.cl','jajajaja');
