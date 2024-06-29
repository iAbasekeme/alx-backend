import { createClient, print } from "redis";

const client = createClient();

client.on("connect", function() {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.error("client not connected to the server: ", err);
});

const hashKey = "HolbertonSchools";

client.hset(hashKey, 'Portland', 50, print)
client.hset(hashKey, 'Seattle', 80, print)
client.hset(hashKey, 'New York', 20, print)
client.hset(hashKey, 'Bogota', 20, print)
client.hset(hashKey, 'cali', 40, print)
client.hset(hashKey, 'paris', 2, print)


client.hgetall(hashKey, (err, tru) => {
  if (err) {
    throw err;
  } else {
    console.log(tru);
  }
});
