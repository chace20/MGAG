create database mgag;
use mgag;

create table game(
    id int not null auto_increment,
    type int not null,
    primary key (id)
);