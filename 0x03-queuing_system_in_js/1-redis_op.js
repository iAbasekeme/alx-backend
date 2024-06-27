import { createClient, print } from "redis";

const client = createClient();

client.on("connect", function () {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.error("Redis client not connected to the server: ", err);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, stu) => {
    if (err) {
      console.log(err);
    } else {
      console.log(stu);
    }
  });
}
displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
