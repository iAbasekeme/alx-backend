import { createQueue } from "kue";
const queue = createQueue();

const yJob = {
  phoneNumber: "07042232834",
  message: "A test message for a job creator",
};
const job = queue.create("push_notification_code", yJob).save((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Notification job created: ${job.id}`);
  }
});
job.on("complete", () => {
  console.log("Notification job completed");
});

job.on("failed", () => {
  console.log("Notification job failed");
});
