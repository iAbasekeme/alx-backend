import { createClient, print } from "redis";
import { promisify } from 'util'

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

const asyncGet = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
  try {
    const stu = await asyncGet(schoolName);
    console.log(stu);
  } catch (err) {
    console.error(err);
  }
}

displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
