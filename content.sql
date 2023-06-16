select * from (select users_table.user_id, users_table.first_name, users_table.last_name, users_table.email, users_table.password, roles_table.role_name from users_table, roles_table, users_roles where users_table.user_id = users_roles.user_id and roles_table.role_id = users_roles.role_id) temp1 where email = 'masood@cms.com' and password = 'masood@123' and role_name = 'admin';


create view user_auth_view as select users_table.user_id, users_table.first_name, users_table.last_name, users_table.email, users_table.password, roles_table.role_name from users_table, roles_table, users_roles where users_table.user_id = users_roles.user_id and roles_table.role_id = users_roles.role_id;

select * from user_auth_view where email = 'masood@cms.com' and password = 'masood@123' and role_name = 'admin';


select tutorials_table.tutorial_id, tutorials_table.title, tutorials_table.visits, DATE(tutorials_table.publish_date), tutorials_table.contents, tutorials_table.author_id, tutorials_table.topic_id, users_table.first_name, users_table.last_name from tutorials_table, users_table where tutorials_table.author_id = users_table.user_id;

create view author_name_tutorial_view as select tutorials_table.tutorial_id, tutorials_table.title, tutorials_table.visits, date(tutorials_table.publish_date) publish_date, tutorials_table.contents, tutorials_table.author_id, tutorials_table.topic_id, users_table.first_name, users_table.last_name from tutorials_table, users_table where tutorials_table.author_id = users_table.user_id;



delimiter //
drop procedure if exists `signup` //
create procedure signup(
    user_id int,
    first_name varchar(45),
    last_name varchar(45),
    email varchar(45),
    password varchar(45),
    role_name varchar(45)
)
begin
	
    declare role_id int;

    if role_name = "admin" then
        set role_id = 1;
    end if;

    if role_name = "customer" then
        set role_id = 2;
    end if;
    
    insert into users_table values(user_id, first_name, last_name, email, password);
    insert into users_roles value(user_id, role_id);
	
end //
delimiter ;


delimiter //
drop procedure if exists `countinc` //
create procedure countinc(tut_id int)
begin
	
    declare count_t int;

    select visits into count_t from tutorials_table  where tutorial_id = tut_id;

    set count_t = count_t + 1;

    update tutorials_table set visits = count_t where tutorial_id = tut_id;


    
end //
delimiter ;