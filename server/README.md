npx sequelize-cli model:generate --name user --attributes name:string,userName:string,password:string

npx sequelize-cli model:generate --name jobs --attributes jobName:string,description:string,location:string,fullTime:boolean,information:text,jobdesk:text,spesification:text,userId:integer