--statement="../solution/schema.sql" Seed schema
--statement="../solution/insert.sql" insert.sql should insert valid data
--statement
SELECT * FROM users;
--expect="expectations/expected_users.csv" valid data set

--statement="statements/add_data.sql" Insert valid data
--statement="../solution/search.sql" search.sql should search underage users
--expect="expectations/expected_search.csv" valid data set

--statement="../solution/unemployed.sql" unemployed.sql should return amount of unemployed
--expect="expectations/expected_unemployed.csv"
