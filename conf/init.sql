create database mgag;
use mgag;

create table game(
    id int not null auto_increment,
    ip varchar(50),
    type int not null,
    primary key (id)
);